import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY, NAV_LINKS, COMMODITIES } from "../lib/constants";

// Custom social media icons as SVG components
const FacebookIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="bg-[#1A1A1A] text-[#FDFBF7]">
      <div className="px-6 md:px-12 lg:px-24 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
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
                <div className="font-serif-display text-2xl sm:text-3xl text-[#FDFBF7]">
                  Hansaria Food
                </div>
                <div className="text-[10px] tracking-[0.3em] text-[#C48D3F] uppercase mt-1">
                  {COMPANY.slogan}
                </div>
              </div>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-[#FDFBF7]/70 max-w-md">
              Two decades of moving grain across borders. We bridge growers,
              processors and end-users with disciplined execution and honest
              market intelligence.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FDFBF7]/70 hover:text-[#C48D3F] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FDFBF7]/70 hover:text-[#C48D3F] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FDFBF7]/70 hover:text-[#C48D3F] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={COMPANY.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FDFBF7]/70 hover:text-[#C48D3F] transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon size={20} />
              </a>
            </div>
            <div className="mt-10 space-y-3 text-sm text-[#FDFBF7]/80">
              <a
                data-testid="footer-phone"
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-3 hover:text-[#C48D3F] transition-colors"
              >
                <Phone size={14} className="text-[#C48D3F]" /> {COMPANY.phone}
              </a>
              <a
                data-testid="footer-email"
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 hover:text-[#C48D3F] transition-colors"
              >
                <Mail size={14} className="text-[#C48D3F]" /> {COMPANY.email}
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-[#C48D3F]" />{" "}
                {COMPANY.address}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] tracking-[0.3em] text-[#C48D3F] uppercase mb-5">
              Navigate
            </div>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[#FDFBF7]/80 hover:text-[#C48D3F] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] tracking-[0.3em] text-[#C48D3F] uppercase mb-5">
              Commodities
            </div>
            <ul className="space-y-3 text-sm">
              {COMMODITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/commodities"
                    className="text-[#FDFBF7]/80 hover:text-[#C48D3F] transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] tracking-[0.3em] text-[#C48D3F] uppercase mb-5">
              Legal
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  data-testid="footer-privacy"
                  className="text-[#FDFBF7]/80 hover:text-[#C48D3F] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  data-testid="footer-disclaimer"
                  className="text-[#FDFBF7]/80 hover:text-[#C48D3F] transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  data-testid="footer-terms"
                  className="text-[#FDFBF7]/80 hover:text-[#C48D3F] transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
            <Link
              to="/contact"
              data-testid="footer-cta"
              className="mt-8 inline-flex items-center gap-2 text-sm border-b border-[#C48D3F] text-[#C48D3F] pb-1 hover:gap-3 transition-all"
            >
              Start a conversation <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#FDFBF7]/10 flex flex-col md:flex-row justify-between text-xs text-[#FDFBF7]/50">
          <div>
            © {new Date().getFullYear()} Hansaria Foods. All rights reserved.
          </div>
          <div className="mt-3 md:mt-0">Crafted for the commodity trade.</div>
        </div>
      </div>
    </footer>
  );
};
