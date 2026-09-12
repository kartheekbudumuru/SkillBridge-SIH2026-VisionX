import { pgTable, text, timestamp, integer, jsonb } from "drizzle-orm/pg-core";
import { z } from "zod";

export const usersTable = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  name: text("name").notNull(),
  role: text("role", { enum: ["student", "university", "recruiter"] }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const studentProfilesTable = pgTable("student_profiles", {
  id: text("id").primaryKey(),
  userId: text("user_id").references(() => usersTable.id),
  branch: text("branch"),
  year: text("year"),
  cgpa: text("cgpa"),
  readinessScore: integer("readiness_score").default(0),
  skills: jsonb("skills").default([]),
  projects: jsonb("projects").default([]),
});

export const opportunitiesTable = pgTable("opportunities", {
  id: text("id").primaryKey(),
  recruiterId: text("recruiter_id").references(() => usersTable.id),
  title: text("title").notNull(),
  company: text("company").notNull(),
  location: text("location").notNull(),
  type: text("type").notNull(),
  skills: jsonb("skills").default([]),
  deadline: text("deadline"),
  description: text("description"),
});

export const applicationsTable = pgTable("applications", {
  id: text("id").primaryKey(),
  studentId: text("student_id").references(() => usersTable.id),
  opportunityId: text("opportunity_id").references(() => opportunitiesTable.id),
  stage: text("stage").notNull(),
  appliedAt: text("applied_at"),
});

export const departmentsTable = pgTable("departments", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  studentsCount: integer("students_count").default(0),
  readiness: integer("readiness").default(0),
  gap: integer("gap").default(0),
});

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  passwordHash: z.string(),
  name: z.string(),
  role: z.enum(["student", "university", "recruiter"]),
  createdAt: z.date().optional(),
});

export type User = typeof usersTable.$inferSelect;
export type InsertUser = typeof usersTable.$inferInsert;
