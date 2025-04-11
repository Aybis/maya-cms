import React from 'react';
import Navbar from './Navbar';

export default function LayoutCMS({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative bg-zinc-100 dark:bg-zinc-950 box-content flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Navbar />

      {/* Chat Screen */}
      <main className="relative w-full h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 py-6 pl-28 pr-6">
        {children}
      </main>
    </div>
  );
}
