import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { Header } from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'Brew Journal Pro',
  description: 'Your daily coffee brewing journal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        <SidebarProvider>
            <Sidebar collapsible="icon" className="border-r border-border/50">
              <SidebarNav />
            </Sidebar>
            <SidebarInset>
              <Header />
              <main className="p-4 sm:p-6 lg:p-8">
                {children}
              </main>
            </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
