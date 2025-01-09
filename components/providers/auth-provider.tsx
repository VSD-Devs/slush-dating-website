"use client";

import { SessionProvider } from "next-auth/react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Temporarily return children directly to allow site to build
  return <>{children}</>;
  // TODO: Re-enable auth once we set up providers
  // return <SessionProvider>{children}</SessionProvider>;
}