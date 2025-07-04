import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-24 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-foreground font-logo text-lg mb-6 md:mb-0 tracking-tight">
            <Link href="/">SONAR✳</Link>
          </div>
          <div className="flex space-x-8 text-muted-foreground text-sm">
            <Link href="/about" className="transition-colors">About</Link>
            <Link href="/contact" className="transition-colors">Contact</Link>
            <Link href="/terms-privacy" className="transition-colors">Terms & Privacy</Link>
          </div>
        </div>
        <div className="text-center text-muted-foreground/70 text-sm mt-8 pt-8 border-t border-border/30">
          © 2025 SONAR. All rights reserved.
        </div>
      </div>
    </footer>
  );
};