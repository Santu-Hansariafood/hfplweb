import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      <Navbar />
      <main data-testid="page-main">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};
