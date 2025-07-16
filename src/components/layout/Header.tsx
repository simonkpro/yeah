'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navigationData } from "@/data/categories"; // Import your new category data
import React from "react";

// You might need to adjust this interface based on your setup
interface HeaderProps {
  onSearch?: (query: string) => void;
}

export const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="backdrop-blur-md bg-background/80 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center">
        {/* Logo */}
        <div className="mr-8">
          <Link href="/">
            <h1 className="text-xl font-logo text-foreground tracking-tight">SONAR✳</h1>
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="flex-1">
            <NavigationMenu className="hidden md:block">
                <NavigationMenuList>
                    {navigationData.map((category) => (
                        <NavigationMenuItem key={category.slug}>
                            <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {category.subCategories.map((sub) => (
                                        <ListItem key={sub.slug} href={`/${category.slug}/${sub.slug}`} title={sub.name}>
                                            {sub.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}
                     {/* You can add non-dropdown links here too */}
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>

        {/* Search and Mobile Menu Actions */}
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="hidden sm:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-48 md:w-64 cosmic-glass text-sm"
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
      
      {/* Mobile Menu Logic Would Go Here */}
    </header>
  );
};

// A helper component for styling the dropdown items
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"