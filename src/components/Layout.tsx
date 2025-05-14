import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background dark" data-id="fahwlw749" data-path="src/components/Layout.tsx">
      <Navbar />
      <main className="flex-grow" data-id="66034v2fr" data-path="src/components/Layout.tsx">
        <Outlet />
      </main>
      <Footer />
    </div>);

};

export default Layout;