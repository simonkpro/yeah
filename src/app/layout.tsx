import './globals.css'
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers"; // <-- 1. Import the new Providers component
import { Inter } from 'next/font/google'; // Recommended for base font

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'TechReport', // Updated title
  description: 'Your source for tech news, privacy, and security.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>

        <Toaster />
      </body>
    </html>
  )
}