# 🌉 SkillBridge — Competency Intelligence Platform

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.38-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)](https://orm.drizzle.team/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

> **SkillBridge** is a unified academia–industry talent intelligence platform that bridges the gap between student competencies, university skill development, and industry placement requirements through a common competency layer.

---

## 🎯 Solution Architecture & Core Flow

SkillBridge moves away from black-box resume keyword matching by establishing an **explainable competency intelligence engine**:

```
Student Skill Profiling
       │
       ▼
AI-Powered Skill Analysis & Extraction
       │
       ▼
Competency Mapping & Standardization
       │
       ▼
Skill-Gap Analysis (Current vs Target Role)
       │
       ▼
Personalized Learning Roadmap (Learn ➔ Build ➔ Assess)
       │
       ▼
Intelligent Opportunity Matching (Explainable Fit %)
       │
       ▼
Industry Talent Discovery & University Intelligence
```

---

## ✨ Core Features Across 3 Workspaces

### 1. 🎓 Student Workspace
- **Competency Profiling**: Captures skills, verified project outcomes, certifications, and experience into a living profile.
- **Skill Gap Radar**: Compares student profiles against industry target roles (e.g. *Product Analyst*, *Data Scientist*, *Frontend Engineer*) highlighting `Ready now` vs `Priority gap` skills.
- **Personalized Learning Plan**: Sequenced learning sprints organized by **Learn $\rightarrow$ Build $\rightarrow$ Assess** stages with time estimates and skill impact.
- **Transparent Opportunity Matching**: Surfacing internships & jobs with explainable match percentages and missing skill badges.
- **Application Desk**: Interactive pipeline tracker for active applications (`Applied` $\rightarrow$ `Screening` $\rightarrow$ `Interview` $\rightarrow$ `Offer`).

### 2. 🏛️ University Intelligence
- **Campus Placement Readiness**: Real-time aggregate readiness score across department cohorts before placement season begins.
- **Department Interventions**: Highlights critical department gaps (e.g. *Electronics & Communication*, *Information Technology*) needing intervention.
- **Aggregate Skill Inventory**: Interactive skill distribution bar charts and readiness band pie charts (`Ready for role`, `Building signal`, `Needs support`).
- **Intervention Planner**: Recommends curriculum updates and targeted training sprints based on industry demand signals.

### 3. 💼 Recruiter Workspace
- **Competency Job Creation**: Post internships and jobs defined by required capability signals rather than vague job descriptions.
- **Ranked Candidate Pool**: Candidate recommendation engine ranking applicants by evidence-backed fit percentages.
- **Explainable Candidate Match Breakdown**: Detailed scoring breakdown across:
  - 📊 **Skill Alignment %**
  - 🛠️ **Proof of Work %** (Project outcomes)
  - 🎓 **Education & CGPA %**
  - 💼 **Experience %**
- **Shortlisting & Outreach**: One-click candidate shortlisting and conversation drafting.

---

## 🔐 Role-Based Access Control (RBAC)

SkillBridge includes a multi-tenant authentication engine accessible via `/login`:

- 🎓 **Student Account**: `student@skillbridge.edu`
- 🏛️ **University Admin Account**: `admin@campus.edu`
- 💼 **Recruiter Account**: `recruiter@techcorp.com`

*Route guards automatically restrict access to authorized workspaces and display a styled `403 Access Restricted` screen when unauthorized access is attempted.*

---

## 📂 Project Structure

```
SkillBridge-SIH2026-VisionX/
├── public/                 # Static public assets & favicons
├── server/                 # Express API server & Drizzle database models
│   ├── db/                 # Drizzle PostgreSQL schema
│   └── src/                # Express API routes
├── src/                    # Frontend React Application
│   ├── components/         # Reusable UI components & Design System tokens
│   ├── context/            # AuthContext & Session management
│   ├── data/               # Structured demo datasets
│   ├── pages/              # LoginPage & AccessDenied guards
│   ├── services/           # Competency scoring & role gap logic
│   ├── App.tsx             # Main router & layout shells
│   ├── main.tsx            # Application entrypoint
│   └── index.css           # Styling system & Tailwind directives
├── index.html              # Main HTML entrypoint
├── netlify.toml            # Netlify deployment configuration
├── package.json            # Dependencies & build scripts
├── README.md               # Repository documentation
├── tsconfig.json           # TypeScript configuration
├── vercel.json             # Vercel deployment configuration
└── vite.config.ts          # Vite bundler configuration
```

---

## 🚀 Quickstart Guide

### Prerequisites
- Node.js `v18.0.0` or higher
- `pnpm` or `npm` package manager

### Installation & Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/kartheekbudumuru/SkillBridge-SIH2026-VisionX.git

# 2. Change directory
cd SkillBridge-SIH2026-VisionX

# 3. Install dependencies
pnpm install

# 4. Start local dev server
pnpm run dev
```

Open `http://localhost:5173/` in your browser.

---

## 🌐 One-Click Deployment

### Deploying on Vercel
This repository is configured out-of-the-box for Vercel:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: `Vite`

### Deploying on Netlify
`netlify.toml` is included in the root directory for instant Netlify deployments:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **SPA Redirects**: Handled automatically.

---

## 📜 License
Distributed under the MIT License. Built for Smart India Hackathon (SIH 2026).
