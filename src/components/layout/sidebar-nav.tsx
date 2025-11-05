'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Book, BookOpen, Coffee, Flame, ClipboardList, PenSquare, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const navItems = [
  { href: '/', label: 'Daily Log', icon: Home },
  { href: '/foundations', label: 'Foundations', icon: BookOpen },
  { href: '/brew-methods', label: 'Brew Methods', icon: Flame },
  { href: '/tasting-log', label: 'Tasting Log', icon: ClipboardList },
  { href: '/skills', label: 'Skills Practice', icon: Book },
  { href: '/reflections', label: 'Reflections', icon: PenSquare },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader className="border-b border-border/50">
        <div className="flex items-center gap-3 p-2">
          <Coffee className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <h2 className="font-headline text-lg font-semibold tracking-tight">Brew Journal Pro</h2>
            <p className="text-xs text-muted-foreground">Your Coffee Companion</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref legacyBehavior>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <a>
                    <item.icon className="h-4 w-4" />
                    <span className="font-headline">{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}
