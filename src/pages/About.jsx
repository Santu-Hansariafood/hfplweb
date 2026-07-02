import { PageHeader, Breadcrumb } from "../components/PageHeader";
import { STATS } from "../lib/constants";
import { Link } from "react-router-dom";
import { Reveal, RevealStagger, RevealItem } from "../components/Reveal";
import { CountUp } from "../components/CountUp";

const TEAM_IMG = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwwfHx8fDE3ODI3OTYyODV8MA&ixlib=rb-4.1.0&q=85";
const SILO = "https://images.unsplash.com/photo-1684607961356-1d99dc31aee2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwzfHxncmFpbiUyMHNpbG9zJTIwYWdyaWN1bHR1cmV8ZW58MHx8fHwxNzgyNzk2Mjc2fDA&ixlib=rb-4.1.0&q=85";

const About = () => {
  return (
    <div data-testid="about-page">
      <Breadcrumb current="About" />
      <PageHeader
        eyebrow="About Us"
        title="A trading house with roots in the field."
        subtitle="Two decades of moving physical commodities across the subcontinent and beyond. We build relationships before we build positions."
      />

      <section className="px-6 md:px-12 lg:px-24 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-6 overflow-hidden">
            <Reveal>
              <img
                src={TEAM_IMG}
                alt="Team"
                loading="lazy"
                decoding="async"
                className="w-full h-[560px] object-cover hover:scale-105 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-6 space-y-6 text-[#4A4A4A] leading-relaxed">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F]">Our story</div>
            <h2 className="font-serif-display text-3xl lg:text-4xl text-[#1A1A1A] leading-tight">
              Built by people who have run mills, settled contracts and chartered vessels.
            </h2>
            <p>
              Hansaria Foods was founded with one belief: in physical commodities, information without execution is noise. We started as a regional desk in Kolkata trading maize and broken rice, and grew — relationship by relationship — into a national footprint with international counterparties.
            </p>
            <p>
              Today we deal in cereals, oil seed extractions, and feed supplements including maize DDGS and rice DDGS. Our team monitors developments in the world environment, changes in world trade rules and quality standards — and translates them into decisions our clients can act on.
            </p>
            <p>
              Our professionals have extensive experience as commercial principals, contract arbitrators, and production and processing managers. This in-depth knowledge and a vast network provide a strong support to our customer relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#2C4C3B] text-[#FDFBF7] px-6 md:px-12 lg:px-24 py-20 lg:py-24">
        <RevealStagger className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#FDFBF7]/15">
          {STATS.map((s, i) => (
            <RevealItem key={s.label} className="px-2 md:px-8 py-6 md:py-2 first:md:pl-0 last:md:pr-0">
              <div data-testid={`about-stat-${i}`}>
                <CountUp value={s.value} className="font-serif-display text-5xl text-[#C48D3F] leading-none block" />
                <div className="text-[11px] tracking-[0.25em] uppercase text-[#FDFBF7]/80 mt-3">{s.label}</div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F] mb-6">Why Hansaria</div>
            <h2 className="font-serif-display text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight leading-tight">
              Truly international<br /><em className="italic text-[#C48D3F]">experience.</em>
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E0D8]">
            {[
              { t: "Specialised desk", d: "Dedicated traders for cereals, oil seeds and feed supplements — not generalists." },
              { t: "Largest network", d: "From mandi to mill, from origin port to destination warehouse — a tested logistics web." },
              { t: "Quality first", d: "Pre-shipment sampling, third-party inspection, and conformance to international standards." },
              { t: "Honest intelligence", d: "We share what the market is telling us — including when it tells us not to trade." },
            ].map((b, i) => (
              <div key={b.t} data-testid={`about-why-${i}`} className="bg-[#FDFBF7] p-8 lg:p-10">
                <div className="font-serif-display text-2xl text-[#1A1A1A] mb-3">{b.t}</div>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 md:px-12 lg:px-24 py-24 lg:py-32 grain-overlay bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={SILO} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-[#1A1A1A]/70" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F] mb-6">Our promise</div>
          <p className="font-serif-display text-3xl lg:text-5xl text-[#FDFBF7] italic font-light leading-tight">
            &ldquo;We do not chase every trade. We chase the right ones — and we settle every contract we sign.&rdquo;
          </p>
          <Link to="/contact" data-testid="about-cta" className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 bg-[#C48D3F] text-[#FDFBF7] text-sm tracking-wide hover:bg-[#A67430] transition-colors">
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
