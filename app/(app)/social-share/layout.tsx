"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function SocialShareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/");
  };


  return (
    <div className="flex flex-col min-h-screen bg-primary-content text-white">
      {/* Header */}
      <header className="w-full bg-base-200">
        <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-1">
            <Link href="/" onClick={handleLogoClick}>
              <div className="btn btn-ghost normal-case text-2xl font-bold tracking-tight cursor-pointer">
                Priyam's AI Powered SaaS
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
