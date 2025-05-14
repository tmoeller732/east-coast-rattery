import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full py-4 px-4 md:px-8 transition-all duration-300 ${
      isScrolled ?
      "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-md" :
      "bg-background"}`
      }>

      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
          </svg>
        </button>

        {/* Logo (centered on desktop) */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Link to="/" className="flex items-center">
            <img 
              src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/13791/9158981f-c3a2-4028-8f3b-4b1a1b8f8f5b.png" 
              alt="East Coast Rattery Logo" 
              className="h-12 w-auto transition-transform duration-300 hover:scale-105" 
            />
            <span className="ml-2 text-2xl font-bold text-green-500 transition-all duration-300 hover:text-green-400 hidden sm:inline">
              East Coast Rattery
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" className="hover:text-green-500 hover:bg-green-500/10" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" className="hover:text-green-500 hover:bg-green-500/10" asChild>
            <Link to="/shop">Shop</Link>
          </Button>
          <Button variant="ghost" className="hover:text-green-500 hover:bg-green-500/10" asChild>
            <Link to="/live-pickup">Live Pickup (NJ)</Link>
          </Button>
          <Button variant="ghost" className="hover:text-green-500 hover:bg-green-500/10" asChild>
            <Link to="/shipping">Shipping</Link>
          </Button>
          <Button variant="ghost" className="hover:text-green-500 hover:bg-green-500/10" asChild>
            <Link to="/faq">FAQ</Link>
          </Button>
          <Button variant="ghost" className="hover:text-green-500 hover:bg-green-500/10" asChild>
            <Link to="/contact">Contact</Link>
          </Button>
          <Button variant="outline" size="icon" className="ml-4 hover:text-green-500 hover:border-green-500">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </nav>

        {/* Cart icon for mobile */}
        <Button variant="outline" size="icon" className="md:hidden hover:text-green-500 hover:border-green-500">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Cart</span>
        </Button>

        {/* Mobile menu */}
        {isMobileMenuOpen &&
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border z-50 md:hidden">
            <div className="container mx-auto py-4 px-4 flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start hover:text-green-500 hover:bg-green-500/10 w-full" asChild>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              </Button>
              <Button variant="ghost" className="justify-start hover:text-green-500 hover:bg-green-500/10 w-full" asChild>
                <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
              </Button>
              <Button variant="ghost" className="justify-start hover:text-green-500 hover:bg-green-500/10 w-full" asChild>
                <Link to="/live-pickup" onClick={() => setIsMobileMenuOpen(false)}>Live Pickup (NJ)</Link>
              </Button>
              <Button variant="ghost" className="justify-start hover:text-green-500 hover:bg-green-500/10 w-full" asChild>
                <Link to="/shipping" onClick={() => setIsMobileMenuOpen(false)}>Shipping</Link>
              </Button>
              <Button variant="ghost" className="justify-start hover:text-green-500 hover:bg-green-500/10 w-full" asChild>
                <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              </Button>
              <Button variant="ghost" className="justify-start hover:text-green-500 hover:bg-green-500/10 w-full" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              </Button>
            </div>
          </div>
        }
      </div>
    </header>);

};

export default Navbar;