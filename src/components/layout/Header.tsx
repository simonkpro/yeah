'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

// 1. Make onSearch optional
interface HeaderProps {
  onSearch?: (query: string) => void;
}

// 2. Accept onSearch as a prop again
export const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // 3. The search handler now calls the onSearch function from the parent page
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const isActive = (path: string) => pathname === path;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="backdrop-blur-md bg-background/80 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        {/* The centering fix is kept */}
        <div className="flex items-center justify-between relative">
          
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl text-foreground tracking-tight font-logo">SONAR✳</h1>
            </Link>
          </div>

          <nav className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="nav-pill flex items-center px-2 py-1 space-x-1">
              <Link href="/" className={`nav-pill-item ${isActive('/') ? 'active' : ''}`}>Home</Link>
              <Link href="/tech" className={`nav-pill-item ${isActive('/tech') ? 'active' : ''}`}>Crypto</Link>
              <Link href="/privacy" className={`nav-pill-item ${isActive('/privacy') ? 'active' : ''}`}>Privacy</Link>
              <Link href="/security" className={`nav-pill-item ${isActive('/security') ? 'active' : ''}`}>Security</Link>
              <Link href="/ai" className={`nav-pill-item ${isActive('/ai') ? 'active' : ''}`}>AI</Link>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            {/* The onSubmit now calls the updated handleSearch */}
            <form onSubmit={handleSearch} className="hidden sm:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 text-sm"
                />
              </div>
            </form>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-muted-foreground"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pt-6 pb-2 border-t border-border mt-4">
            <nav className="flex flex-col space-y-1 mb-6">
              <Link href="/" onClick={handleLinkClick} className={`nav-pill-item text-left ${isActive('/') ? 'active' : ''}`}>Home</Link>
              <Link href="/tech" onClick={handleLinkClick} className={`nav-pill-item text-left ${isActive('/tech') ? 'active' : ''}`}>Crypto</Link>
              <Link href="/privacy" onClick={handleLinkClick} className={`nav-pill-item text-left ${isActive('/privacy') ? 'active' : ''}`}>Privacy</Link>
              <Link href="/security" onClick={handleLinkClick} className={`nav-pill-item text-left ${isActive('/security') ? 'active' : ''}`}>Security</Link>
              <Link href="/ai" onClick={handleLinkClick} className={`nav-pill-item text-left ${isActive('/ai') ? 'active' : ''}`}>AI</Link>
            </nav>
            <div className="space-y-4">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full cosmic-glass"
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};