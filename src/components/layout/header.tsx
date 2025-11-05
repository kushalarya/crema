'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6 lg:hidden">
      <SidebarTrigger />
      <h1 className="font-headline text-xl font-bold">Brew Journal Pro</h1>
    </header>
  );
}
