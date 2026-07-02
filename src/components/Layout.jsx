import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";

export const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      <Navbar />
      <main data-testid="page-main">
        <Suspense
          fallback={
            <div className="px-6 md:px-12 lg:px-24 py-16">
              <div className="h-6 w-56 bg-[#E5E0D8] animate-pulse" />
              <div className="mt-6 space-y-3">
                <div className="h-4 w-full max-w-2xl bg-[#E5E0D8] animate-pulse" />
                <div className="h-4 w-full max-w-xl bg-[#E5E0D8] animate-pulse" />
                <div className="h-4 w-full max-w-lg bg-[#E5E0D8] animate-pulse" />
              </div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};
