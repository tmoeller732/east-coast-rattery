import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-500">East Coast Rattery</h3>
            <p className="text-muted-foreground mb-4">
              Quality African Soft Fur Rats for pet owners and feeder breeders.
              Based in Bayville, New Jersey.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Address:</strong><br />
              Bayville, NJ 08721
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-500">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-green-400 transition-colors">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-green-400 transition-colors">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="hover:text-green-400 transition-colors">
                <Link to="/live-pickup">Live Pickup (NJ)</Link>
              </li>
              <li className="hover:text-green-400 transition-colors">
                <Link to="/shipping">Shipping Info</Link>
              </li>
              <li className="hover:text-green-400 transition-colors">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="hover:text-green-400 transition-colors">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-500">Legal & Policies</h3>
            <ul className="space-y-2">
              <li className="hover:text-green-400 transition-colors">
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li className="hover:text-green-400 transition-colors">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li className="hover:text-green-400 transition-colors">
                <Link to="/animal-disclaimer">Live Animal Disclaimer</Link>
              </li>
              <li className="hover:text-green-400 transition-colors">
                <Link to="/shipping-policy">Shipping Policy</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-500">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates, feeding tips, and special offers.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-background-100 border-green-500/40 focus:border-green-500"
              />
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Subscribe
              </Button>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-foreground">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-green-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-green-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} East Coast Rattery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;