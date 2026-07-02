import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY, NAV_LINKS, COMMODITIES } from "../lib/constants";

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="bg-[#1A1A1A] text-[#FDFBF7]">
      <div className="px-6 md:px-12 lg:px-24 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#FDFBF7] rounded-sm flex items-center justify-center shrink-0 p-1.5">
                <img
                  src={COMPANY.logo}
                  alt="Hansaria Food"
                  decoding="async"
                  className="w-full h-full object-contain"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
              <div className="leading-tight">
                <div className="font-serif-display text-2xl sm:text-3xl text-[#FDFBF7]">Hansaria Food</div>
                <div className="text-[10px] tracking-[0.3em] text-[#C48D3F] uppercase mt-1">{COMPANY.slogan}</div>
              </div>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-[#FDFBF7]/70 max-w-md">
              Two decades of moving grain across borders. We bridge growers, processors and end-users with disciplined execution and honest market intelligence.
            </p>
            <div className="mt-10 space-y-3 text-sm text-[#FDFBF7]/80">
              <a data-testid="footer-phone" href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-3 hover:text-[#C48D3F] transition-colors">
                <Phone size={14} className="text-[#C48D3F]" /> {COMPANY.phone}
              </a>
              <a data-testid="footer-email" href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 hover:text-[#C48D3F] transition-colors">
                <Mail size={14} className="text-[#C48D3F]" /> {COMPANY.email}
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-[#C48D3F]" /> {COMPANY.address}
              </div>
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-2">
            <div className="text-[10px] tracking-[0.3em] text-[#C48D3F] uppercase mb-5">Navigate</div>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[#FDFBF7]/80 hover:text-[#C48D3F] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] tracking-[0.3em] text-[#C48D3F] uppercase mb-5">Commodities</div>
            <ul className="space-y-3 text-sm">
              {COMMODITIES.map((c) => (
                <li key={c.slug}>
                  <Link to="/commodities" className="text-[#FDFBF7]/80 hover:text-[#C48D3F] transition-colors">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] tracking-[0.3em] text-[#C48D3F] uppercase mb-5">Legal</div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/privacy-policy" data-testid="footer-privacy" className="text-[#FDFBF7]/80 hover:text-[#C48D3F] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" data-testid="footer-disclaimer" className="text-[#FDFBF7]/80 hover:text-[#C48D3F] transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" data-testid="footer-terms" className="text-[#FDFBF7]/80 hover:text-[#C48D3F] transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
            <Link to="/contact" data-testid="footer-cta" className="mt-8 inline-flex items-center gap-2 text-sm border-b border-[#C48D3F] text-[#C48D3F] pb-1 hover:gap-3 transition-all">
              Start a conversation <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#FDFBF7]/10 flex flex-col md:flex-row justify-between text-xs text-[#FDFBF7]/50">
          <div>© {new Date().getFullYear()} Hansaria Foods. All rights reserved.</div>
          <div className="mt-3 md:mt-0">Crafted for the commodity trade.</div>
        </div>
      </div>
    </footer>
  );
};
