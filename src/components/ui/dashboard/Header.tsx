import ThemeToggle from '@/theme/theme-toggle';
import React from 'react';

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl text-zinc-800 dark:text-zinc-50 font-semibold flex gap-x-2">
        <p className="text-zinc-500 dark:text-zinc-300 font-medium ">
          Welcome,
        </p>
        Muchtar
      </h1>

      <ThemeToggle />
    </div>
  );
}
