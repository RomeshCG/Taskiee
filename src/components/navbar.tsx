
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import ThemeToggle from "./theme-toggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary/90 glow flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-xl md:text-2xl font-poppins bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              taskiee
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/features">Features</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/pricing">Pricing</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/dashboard">Dashboard</Link>
            </Button>
            <div className="ml-2">
              <ThemeToggle />
            </div>
            <div className="pl-2 border-l border-border">
              <Button variant="outline" asChild>
                <Link to="/login">Log in</Link>
              </Button>
            </div>
            <Button className="glow" asChild>
              <Link to="/signup">Sign up</Link>
            </Button>
          </nav>

          <div className="flex items-center md:hidden space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Button variant="ghost" asChild className="justify-start">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <Link to="/features" onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                Dashboard
              </Link>
            </Button>
            <div className="flex space-x-3 pt-2">
              <Button variant="outline" asChild className="flex-1">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  Log in
                </Link>
              </Button>
              <Button className="flex-1 glow" asChild>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
