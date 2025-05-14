import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, ImageIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import LoginDialog from "./LoginDialog";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const { getItemCount } = useCart();

  const cartItemCount = getItemCount();
  const unreadMessages = user?.unreadMessages || 0;

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

      <div className="container mx-auto flex justify-between items-center relative">
        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground transition-colors duration-200 hover:text-green-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-transform duration-300 ease-in-out" style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center flex-1">
          {/* Left navigation */}
          <nav className="flex items-center space-x-0.5 flex-1 justify-end mr-4">
            <Button
              variant="ghost"
              className={`hover:text-green-500 hover:bg-green-500/10 ${location.pathname === '/' ? 'bg-green-500/15 text-green-500 font-medium' : ''}`}
              asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button
              variant="ghost"
              className={`hover:text-green-500 hover:bg-green-500/10 ${location.pathname === '/shop' ? 'bg-green-500/15 text-green-500 font-medium' : ''}`}
              asChild>
              <Link to="/shop">Shop</Link>
            </Button>
            <Button
              variant="ghost"
              className={`hover:text-green-500 hover:bg-green-500/10 ${location.pathname === '/shipping' ? 'bg-green-500/15 text-green-500 font-medium' : ''}`}
              asChild>
              <Link to="/shipping">Shipping</Link>
            </Button>
          </nav>
          
          {/* Logo (center) */}
          <Link to="/" className="flex items-center mx-4">
            <img
              src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/13791/9158981f-c3a2-4028-8f3b-4b1a1b8f8f5b.png"
              alt="East Coast Rattery Logo"
              className="h-12 w-auto transition-all duration-300 hover:scale-105 hover:brightness-110 hover:rotate-1 hover:drop-shadow-md" />
          </Link>
          
          {/* Right navigation */}
          <div className="flex items-center justify-between flex-1">
            <nav className="flex items-center space-x-0.5 ml-4">
              <Button
                variant="ghost"
                className={`hover:text-green-500 hover:bg-green-500/10 ${location.pathname === '/faq' ? 'bg-green-500/15 text-green-500 font-medium' : ''}`}
                asChild>
                <Link to="/faq">FAQ</Link>
              </Button>
              <Button
                variant="ghost"
                className={`hover:text-green-500 hover:bg-green-500/10 ${location.pathname === '/contact' ? 'bg-green-500/15 text-green-500 font-medium' : ''}`}
                asChild>
                <Link to="/contact">Contact</Link>
              </Button>
              <Button
                variant="ghost"
                className={`hover:text-green-500 hover:bg-green-500/10 ${location.pathname === '/live-pickup' ? 'bg-green-500/15 text-green-500 font-medium' : ''}`}
                asChild>
                <Link to="/live-pickup">Live Pickup (NJ)</Link>
              </Button>
              <Button
                variant="ghost"
                className={`hover:text-green-500 hover:bg-green-500/10 ${location.pathname === '/runware-images' ? 'bg-green-500/15 text-green-500 font-medium' : ''}`}
                asChild>
                <Link to="/runware-images">Runware Images</Link>
              </Button>
            </nav>
          </div>
          
          {/* Account and Cart icons */}
          <div className="flex items-center space-x-2 ml-4">
            <Button
              variant="outline"
              size="icon"
              className="hover:text-green-500 hover:border-green-500 relative"
              onClick={() => isAuthenticated ? navigate('/account') : setLoginDialogOpen(true)}>

              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
              {isAuthenticated && unreadMessages > 0 &&
              <Badge
                variant="secondary"
                className="absolute -top-2 -right-2 bg-green-500 text-white border-0 h-5 w-5 flex items-center justify-center p-0 text-xs font-bold">

                  {unreadMessages}
                </Badge>
              }
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:text-green-500 hover:border-green-500 relative"
              onClick={() => navigate('/cart')}>

              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              {cartItemCount > 0 &&
              <Badge
                variant="secondary"
                className="absolute -top-2 -right-2 bg-green-500 text-white border-0 h-5 w-5 flex items-center justify-center p-0 text-xs font-bold">

                  {cartItemCount}
                </Badge>
              }
            </Button>
            <LoginDialog isOpen={loginDialogOpen} setIsOpen={setLoginDialogOpen} />
          </div>
        </div>

        {/* Logo for mobile */}
        <div className="flex-1 flex justify-center md:hidden">
          <Link to="/" className="flex items-center">
            <img
              src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/13791/9158981f-c3a2-4028-8f3b-4b1a1b8f8f5b.png"
              alt="East Coast Rattery Logo"
              className="h-12 w-auto transition-all duration-300 hover:scale-105 hover:brightness-110 hover:rotate-1 hover:drop-shadow-md" />
          </Link>
        </div>

        {/* Account and Cart icons for mobile */}
        <div className="flex items-center md:hidden space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="hover:text-green-500 hover:border-green-500 relative"
            onClick={() => isAuthenticated ? navigate('/account') : setLoginDialogOpen(true)}>

            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
            {isAuthenticated && unreadMessages > 0 &&
            <Badge
              variant="secondary"
              className="absolute -top-2 -right-2 bg-green-500 text-white border-0 h-5 w-5 flex items-center justify-center p-0 text-xs font-bold">

                {unreadMessages}
              </Badge>
            }
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:text-green-500 hover:border-green-500 relative"
            onClick={() => navigate('/cart')}>

            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
            {cartItemCount > 0 &&
            <Badge
              variant="secondary"
              className="absolute -top-2 -right-2 bg-green-500 text-white border-0 h-5 w-5 flex items-center justify-center p-0 text-xs font-bold">

                {cartItemCount}
              </Badge>
            }
          </Button>
        </div>

        {/* Mobile menu */}
        <div
          className={`absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg z-50 md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          style={{ position: 'absolute', width: '100%' }}>
            <div className="container mx-auto py-4 px-4 flex flex-col space-y-2">
              <Button
              variant="ghost"
              className={`justify-start hover:text-green-500 hover:bg-green-500/10 w-full ${location.pathname === '/' ? 'bg-green-500/15 text-green-500 font-medium' : ''}`}
              asChild>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              </Button>
              <Button
              variant="ghost"
              className={`justify-start hover:text-green-500 hover:bg-green-500/10 w-full ${location.pathname === '/shop' ? 'bg-green-500/15 text-green-500 font-medium' : ''}`}
              asChild>
                <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
              </Button>
              <Button
              variant="ghost"
              className={`justify-start hover:text-green-500 hover:bg-green-500/10 w-full ${location.pathname === '/live-pickup' ? 'bg-green-500/15 text-green-500 font-medium' : ''}`}
              asChild>
                <Link to="/live-pickup" onClick={() => setIsMobileMenuOpen(false)}>Live Pickup (NJ)</Link>
              </Button>
              <Button
              variant="ghost"
              className={`justify-start hover:text-green-500 hover:bg-green-500/10 w-full ${location.pathname === '/shipping' ? 'bg-green-500/15 text-green-500 font-medium' : ''}`}
              asChild>
                <Link to="/shipping" onClick={() => setIsMobileMenuOpen(false)}>Shipping</Link>
              </Button>
              <Button
              variant="ghost"
              className={`justify-start hover:text-green-500 hover:bg-green-500/10 w-full ${location.pathname === '/faq' ? 'bg-green-500/15 text-green-500 font-medium' : ''}`}
              asChild>
                <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              </Button>
              <Button
              variant="ghost"
              className={`justify-start hover:text-green-500 hover:bg-green-500/10 w-full ${location.pathname === '/contact' ? 'bg-green-500/15 text-green-500 font-medium' : ''}`}
              asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              </Button>
              <Button
              variant="ghost"
              className={`justify-start hover:text-green-500 hover:bg-green-500/10 w-full ${location.pathname === '/runware-images' ? 'bg-green-500/15 text-green-500 font-medium' : ''}`}
              asChild>
                <Link to="/runware-images" onClick={() => setIsMobileMenuOpen(false)}>Runware Images</Link>
              </Button>
            </div>
          </div>
      </div>
    </header>);

};

export default Navbar;