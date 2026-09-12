import React, { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { useAuth, UserRole, PRESET_USERS } from '../context/AuthContext';
import { Sparkles, UserRound, Building2, BriefcaseBusiness, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export function LoginPage() {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [email, setEmail] = useState(PRESET_USERS.student.email);
  const [password, setPassword] = useState('••••••••');
  const [activeTab, setActiveTab] = useState<'quick' | 'manual'>('quick');

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setEmail(PRESET_USERS[role].email);
  };

  const handleQuickLogin = (role: UserRole) => {
    login(role);
    setLocation(`/app/${role}/dashboard`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    login(email, password);
    setLocation(`/app/${selectedRole}/dashboard`);
  };

  return (
    <div className="min-h-[100dvh] bg-[#f7f4ec] text-[#153f43] flex flex-col justify-between p-6 md:p-12">
      {/* Header logo */}
      <div className="flex items-center justify-between mx-auto w-full max-w-5xl">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-[#153f43] text-[#f8c27b]">
            <Sparkles size={18} />
          </span>
          <span className="display text-xl font-extrabold">
            skill<span className="text-[#e98250]">bridge</span>
          </span>
        </Link>
        <Link href="/" className="text-xs font-semibold text-[#6e8580] hover:text-[#16877b]">
          ← Back to home
        </Link>
      </div>

      {/* Main Container */}
      <div className="mx-auto my-auto w-full max-w-4xl py-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#bcd9cc] bg-[#d9eee7] px-3.5 py-1.5 text-xs font-bold text-[#176a61]">
            <ShieldCheck size={14} /> Role-Based Portal Authentication
          </div>
          <h1 className="display mt-4 text-4xl font-extrabold tracking-tight md:text-5xl text-[#153f43]">
            Welcome to SkillBridge
          </h1>
          <p className="mt-3 text-sm leading-6 text-[#6e8580]">
            Sign in with your dedicated role account to access your personalized competency workspace.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-2xl bg-[#e8e4da] p-1 text-xs font-bold">
            <button
              onClick={() => setActiveTab('quick')}
              className={`rounded-xl px-5 py-2.5 transition-all ${
                activeTab === 'quick' ? 'bg-[#153f43] text-[#f7f4ec] shadow-sm' : 'text-[#6e8580] hover:text-[#153f43]'
              }`}
            >
              Demo Quick Sign-In (1-Click)
            </button>
            <button
              onClick={() => setActiveTab('manual')}
              className={`rounded-xl px-5 py-2.5 transition-all ${
                activeTab === 'manual' ? 'bg-[#153f43] text-[#f7f4ec] shadow-sm' : 'text-[#6e8580] hover:text-[#153f43]'
              }`}
            >
              Manual Credentials
            </button>
          </div>
        </div>

        {activeTab === 'quick' ? (
          /* Preset Roles Cards */
          <div className="grid gap-6 md:grid-cols-3">
            {/* Student Card */}
            <div
              onClick={() => handleQuickLogin('student')}
              className="group cursor-pointer rounded-3xl border border-[#dce5dc] bg-[#fbfaf5] p-7 transition-all hover:-translate-y-1 hover:border-[#16877b] hover:shadow-lg"
            >
              <div className="flex justify-between items-center">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#d9eee7] text-[#16877b]">
                  <UserRound size={22} />
                </div>
                <span className="mono text-[10px] font-bold uppercase tracking-wider text-[#16877b] bg-[#e7f0e8] px-2.5 py-1 rounded-full">
                  Student
                </span>
              </div>
              <h2 className="display mt-6 text-xl font-bold">Student Workspace</h2>
              <p className="mt-2 text-xs text-[#6e8580] leading-5">
                Profile setup, skill gap analysis, learning roadmap, & matched opportunities.
              </p>
              <div className="mt-6 pt-4 border-t border-[#eeeae0] flex items-center justify-between">
                <span className="mono text-[11px] text-[#6e8580]">student@skillbridge.edu</span>
                <span className="inline-flex items-center text-xs font-bold text-[#16877b] group-hover:translate-x-1 transition-transform">
                  Enter <ArrowRight size={14} className="ml-1" />
                </span>
              </div>
            </div>

            {/* University Admin Card */}
            <div
              onClick={() => handleQuickLogin('university')}
              className="group cursor-pointer rounded-3xl border border-[#dce5dc] bg-[#fbfaf5] p-7 transition-all hover:-translate-y-1 hover:border-[#aa7b18] hover:shadow-lg"
            >
              <div className="flex justify-between items-center">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#f8edc9] text-[#aa7b18]">
                  <Building2 size={22} />
                </div>
                <span className="mono text-[10px] font-bold uppercase tracking-wider text-[#aa7b18] bg-[#f8edc9] px-2.5 py-1 rounded-full">
                  University
                </span>
              </div>
              <h2 className="display mt-6 text-xl font-bold">University Intelligence</h2>
              <p className="mt-2 text-xs text-[#6e8580] leading-5">
                Campus placement readiness, department gaps, supply vs demand reports.
              </p>
              <div className="mt-6 pt-4 border-t border-[#eeeae0] flex items-center justify-between">
                <span className="mono text-[11px] text-[#6e8580]">admin@campus.edu</span>
                <span className="inline-flex items-center text-xs font-bold text-[#aa7b18] group-hover:translate-x-1 transition-transform">
                  Enter <ArrowRight size={14} className="ml-1" />
                </span>
              </div>
            </div>

            {/* Recruiter Card */}
            <div
              onClick={() => handleQuickLogin('recruiter')}
              className="group cursor-pointer rounded-3xl border border-[#dce5dc] bg-[#fbfaf5] p-7 transition-all hover:-translate-y-1 hover:border-[#c85e2b] hover:shadow-lg"
            >
              <div className="flex justify-between items-center">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#fce0ce] text-[#c85e2b]">
                  <BriefcaseBusiness size={22} />
                </div>
                <span className="mono text-[10px] font-bold uppercase tracking-wider text-[#c85e2b] bg-[#fce0ce] px-2.5 py-1 rounded-full">
                  Recruiter
                </span>
              </div>
              <h2 className="display mt-6 text-xl font-bold">Recruiter Workspace</h2>
              <p className="mt-2 text-xs text-[#6e8580] leading-5">
                Competency job creation, ranked candidate pools, & evidence-backed shortlisting.
              </p>
              <div className="mt-6 pt-4 border-t border-[#eeeae0] flex items-center justify-between">
                <span className="mono text-[11px] text-[#6e8580]">recruiter@techcorp.com</span>
                <span className="inline-flex items-center text-xs font-bold text-[#c85e2b] group-hover:translate-x-1 transition-transform">
                  Enter <ArrowRight size={14} className="ml-1" />
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Manual Sign In Form */
          <div className="mx-auto max-w-md rounded-3xl border border-[#dce5dc] bg-[#fbfaf5] p-8 shadow-sm">
            {/* Persona selector tabs */}
            <div className="mb-6 flex rounded-xl bg-[#efebe1] p-1 text-xs font-bold">
              {(['student', 'university', 'recruiter'] as UserRole[]).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => handleRoleSelect(r)}
                  className={`flex-1 rounded-lg py-2 capitalize transition-all ${
                    selectedRole === r ? 'bg-[#153f43] text-[#f7f4ec]' : 'text-[#6e8580] hover:text-[#153f43]'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#153f43]">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="mt-2 w-full rounded-xl border border-[#dce5dc] bg-[#ffffff] px-4 py-3 text-sm outline-none focus:border-[#16877b]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#153f43]">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="mt-2 w-full rounded-xl border border-[#dce5dc] bg-[#ffffff] px-4 py-3 text-sm outline-none focus:border-[#16877b]"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#153f43] px-4 py-3.5 text-sm font-bold text-[#f7f4ec] transition-transform hover:-translate-y-0.5"
              >
                Sign In to {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)} Portal <ArrowRight size={16} />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-[#6e8580] py-4">
        SkillBridge Competency Intelligence Platform · Protected by Role-Based Access Control
      </div>
    </div>
  );
}
