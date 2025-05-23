"use client"
import { Toaster } from "@/components/ui/toaster";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

// export const metadata: Metadata = {
//   title: "Your Site Name",
//   description: "Your site description",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster />
          <Sonner />
        </QueryClientProvider>
      </body>
    </html>
  );
}