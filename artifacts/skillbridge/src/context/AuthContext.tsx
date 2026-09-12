import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'student' | 'university' | 'recruiter';

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  title?: string;
}

export const PRESET_USERS: Record<UserRole, UserSession> = {
  student: {
    id: 'user-student-1',
    name: 'Alex Rivera',
    email: 'student@skillbridge.edu',
    role: 'student',
    title: 'Computer Science · Senior',
  },
  university: {
    id: 'user-uni-1',
    name: 'Dr. Aris Vance',
    email: 'admin@campus.edu',
    role: 'university',
    title: 'Director of Placement & Skills',
  },
  recruiter: {
    id: 'user-recruiter-1',
    name: 'Elena Rostova',
    email: 'recruiter@techcorp.com',
    role: 'recruiter',
    title: 'Lead Talent Acquisition @ Tata Digital',
  },
};

interface AuthContextType {
  user: UserSession | null;
  login: (roleOrEmail: UserRole | string, password?: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'skillbridge_auth_user';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    // Default to student preset for initial load if needed, or null
    return PRESET_USERS.student;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const login = (roleOrEmail: UserRole | string, _password?: string): boolean => {
    if (roleOrEmail === 'student' || roleOrEmail.includes('student')) {
      setUser(PRESET_USERS.student);
      return true;
    }
    if (roleOrEmail === 'university' || roleOrEmail.includes('admin') || roleOrEmail.includes('campus')) {
      setUser(PRESET_USERS.university);
      return true;
    }
    if (roleOrEmail === 'recruiter' || roleOrEmail.includes('recruiter') || roleOrEmail.includes('techcorp')) {
      setUser(PRESET_USERS.recruiter);
      return true;
    }
    // Default fallback to student if unknown
    setUser({
      id: `user-${Date.now()}`,
      name: roleOrEmail.split('@')[0] || 'Demo User',
      email: roleOrEmail,
      role: 'student',
      title: 'Member',
    });
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
