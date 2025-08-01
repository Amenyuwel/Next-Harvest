"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Sidebar from "@/components/Sidebar";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();

  // Memoize dashboard page check to avoid recalculation
  const isDashboardPage = useMemo(() => {
    return (
      pathname?.startsWith("/pages/dashboard") ||
      pathname?.startsWith("/pages/records") ||
      pathname?.startsWith("/pages/reports") ||
      pathname?.startsWith("/pages/train") ||
      pathname?.startsWith("/pages/profile") ||
      pathname?.startsWith("/pages/settings")
    );
  }, [pathname]);

  if (isDashboardPage) {
    return (
      <main className="h-screen w-full bg-white p-6">
        <div className="flex h-full w-full gap-6 overflow-hidden rounded-3xl bg-[var(--color-background-gray)] p-6 shadow-2xl">
          {/* Sidebar for dashboard pages */}
          <Sidebar />

          {/* Page Content */}
          <div className="flex-1 overflow-auto rounded-3xl bg-white p-8">
            {children}
          </div>
        </div>
      </main>
    );
  }

  // For non-dashboard pages (like login), render children directly
  return <>{children}</>;
}
