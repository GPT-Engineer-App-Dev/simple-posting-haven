import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Button } from "@/components/ui/button";
import { PenTool } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-foreground">My Blog</Link>
          <div className="flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              </ul>
            </nav>
            <Link to="/create">
              <Button variant="outline" size="sm">
                <PenTool className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;