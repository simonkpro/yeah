import './globals.css'
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";
import { Inter } from 'next/font/google';
import localFont from 'next/font/local'; // 1. Import localFont

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter', // Optional: Create a variable for the body font
});

// 2. Configure your local font for the logo
const logoFont = localFont({
  src: '../../public/fonts/KMRWaldenburg-SemiExtendedMedium.woff2',
  display: 'swap',
  variable: '--font-logo' // This creates the CSS variable
});

export const metadata = {
  title: 'TechReport',
  description: 'Your source for tech news, privacy, and security.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 3. Add the logo font variable to the <html> tag
    <html lang="en" className={`${inter.variable} ${logoFont.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}