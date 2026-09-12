import React from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '../context/AuthContext';
import { ShieldAlert, ArrowRight } from 'lucide-react';

export function AccessDenied({ requiredRole }: { requiredRole: string }) {
  const [, setLocation] = useLocation();
  const { user } = useAuth();

  const handleReturn = () => {
    if (!user) {
      setLocation('/login');
    } else {
      setLocation(`/app/${user.role}/dashboard`);
    }
  };

  return (
    <div className="grid min-h-[75vh] place-items-center bg-[#f7f4ec] p-6 text-center">
      <div className="max-w-md rounded-3xl border border-[#e8e4da] bg-[#fbfaf5] p-8 shadow-sm">
        <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#fce0ce] text-[#c85e2b]">
          <ShieldAlert size={32} />
        </div>
        <p className="mono mt-5 text-xs font-bold uppercase tracking-[.2em] text-[#e98250]">
          403 · Access Restricted
        </p>
        <h1 className="display mt-3 text-3xl font-extrabold text-[#153f43]">
          Role Authorization Required
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#6e8580]">
          Your account (<b className="text-[#153f43]">{user?.email ?? 'Guest'}</b>) is registered as a{' '}
          <span className="capitalize font-bold text-[#16877b]">{user?.role ?? 'unauthenticated user'}</span>. This workspace requires{' '}
          <span className="capitalize font-bold text-[#c85e2b]">{requiredRole}</span> administrative permissions.
        </p>

        <div className="mt-8 space-y-3">
          <button
            onClick={handleReturn}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#153f43] px-5 py-3 text-sm font-bold text-[#f7f4ec] transition-transform hover:-translate-y-0.5"
          >
            Return to {user ? `${user.role} workspace` : 'login'} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
