import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { COMPANY, NAV_LINKS } from "../lib/constants";

const prefetchRoute = (path) => {
  switch (path) {
    case "/about":
      import("../pages/About");
      break;
    case "/commodities":
      import("../pages/Commodities");
      break;
    case "/services":
      import("../pages/Services");
      break;
    case "/clients":
      import("../pages/Clients");
      break;
    case "/team":
      import("../pages/Team");
      break;
    case "/contact":
      import("../pages/Contact");
      break;
    case "/it-services":
      import("../pages/ITServices");
      break;
    default:
      break;
  }
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E5E0D8]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`hidden lg:block transition-all ${scrolled ? "max-h-0 opacity-0 overflow-hidden" : "max-h-10 opacity-100"}`}
      >
        <div className="px-6 md:px-12 lg:px-24 py-2 flex items-center justify-between text-xs text-[#4A4A4A] border-b border-[#E5E0D8]">
          <span>Agricultural Commodity Specialists since 2003</span>
          <div className="flex items-center gap-6">
            <a
              data-testid="navbar-phone"
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-2 hover:text-[#C48D3F] transition-colors"
            >
              <Phone size={12} /> {COMPANY.phone}
            </a>
            <a
              data-testid="navbar-email"
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-2 hover:text-[#C48D3F] transition-colors"
            >
              <Mail size={12} /> {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      <nav className="px-6 md:px-12 lg:px-24 py-5 flex items-center justify-between">
        <Link
          to="/"
          data-testid="navbar-logo"
          className="flex items-center gap-2 shrink-0"
        >
          <img
            src={COMPANY.logo}
            alt="Hansaria Food — Farm 2 Factory"
            decoding="async"
            className="h-9 sm:h-10 md:h-12 w-auto object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `px-4 py-2 text-sm tracking-wide transition-colors relative ${
                  isActive
                    ? "text-[#C48D3F]"
                    : "text-[#1A1A1A] hover:text-[#C48D3F]"
                }`
              }
              onMouseEnter={() => prefetchRoute(link.to)}
              onFocus={() => prefetchRoute(link.to)}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C48D3F] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          data-testid="navbar-cta"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1A1A] text-[#FDFBF7] text-sm tracking-wide relative overflow-hidden group"
          onMouseEnter={() => prefetchRoute("/contact")}
          onFocus={() => prefetchRoute("/contact")}
        >
          <span className="absolute inset-0 bg-[#C48D3F] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-custom" />
          <span className="relative">Request Quote</span>
        </Link>

        <button
          data-testid="navbar-menu-toggle"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-[#1A1A1A] p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-[#FDFBF7] border-t border-[#E5E0D8] px-6 py-6"
        >
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `py-3 border-b border-[#E5E0D8] text-base ${isActive ? "text-[#C48D3F]" : "text-[#1A1A1A]"}`
                }
                onClick={() => setOpen(false)}
                onMouseEnter={() => prefetchRoute(link.to)}
                onFocus={() => prefetchRoute(link.to)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              data-testid="mobile-cta"
              className="mt-6 inline-flex justify-center items-center px-5 py-3 bg-[#1A1A1A] text-[#FDFBF7] text-sm tracking-wide"
              onClick={() => setOpen(false)}
              onMouseEnter={() => prefetchRoute("/contact")}
              onFocus={() => prefetchRoute("/contact")}
            >
              Request Quote
            </Link>
            <div className="mt-6 space-y-2 text-sm text-[#4A4A4A]">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-2"
              >
                <Phone size={14} /> {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2"
              >
                <Mail size={14} /> {COMPANY.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
