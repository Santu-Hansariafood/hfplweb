import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { ArrowUpRight, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, COMMODITIES, SERVICES, NEWS, STATS, CATEGORIES, CLIENTS } from "../lib/constants";
import { Reveal, RevealStagger, RevealItem } from "../components/Reveal";
import { CountUp } from "../components/CountUp";

const HERO_IMG = "https://images.unsplash.com/photo-1593455071238-92dd081a39b1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGZpZWxkJTIwaGFydmVzdCUyMHN1bnNldHxlbnwwfHx8fDE3ODI3OTYyNzV8MA&ixlib=rb-4.1.0&q=85";
const TEAM_IMG = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwwfHx8fDE3ODI3OTYyODV8MA&ixlib=rb-4.1.0&q=85";

const Home = () => {
  return (
    <div data-testid="home-page" className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end pt-28 pb-40 lg:pb-44 overflow-hidden grain-overlay bg-[#1A1A1A]">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="Wheat field at golden hour"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/60 to-[#1A1A1A]/35" />
        </div>

        <div className="relative z-10 px-6 md:px-12 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8 animate-fade-up">
              <div className="h-px w-16 bg-[#C48D3F]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F]">Est. 2003 · Kolkata, India</span>
            </div>
            <h1 className="font-serif-display text-[#FDFBF7] text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.92] tracking-tighter animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Bridging<br />
              <span className="italic font-light text-[#C48D3F]">harvests,</span><br />
              building trust.
            </h1>
          </div>
          <div className="lg:col-span-4 space-y-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-[#FDFBF7]/85 text-base lg:text-lg leading-relaxed max-w-md">
              A physical commodity trading house specialising in cereals, oil seeds and feed supplements — moving cargo where it&rsquo;s needed, when it&rsquo;s needed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link data-testid="hero-cta-primary" to="/commodities" className="group relative inline-flex items-center gap-2 px-6 py-3.5 bg-[#C48D3F] text-[#FDFBF7] text-sm tracking-wide overflow-hidden">
                <span className="absolute inset-0 bg-[#A67430] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-custom" />
                <span className="relative flex items-center gap-2">Explore commodities <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
              <Link data-testid="hero-cta-secondary" to="/contact" className="group relative inline-flex items-center gap-2 px-6 py-3.5 border border-[#FDFBF7]/40 text-[#FDFBF7] text-sm tracking-wide overflow-hidden">
                <span className="absolute inset-0 bg-[#FDFBF7] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-custom" />
                <span className="relative group-hover:text-[#1A1A1A] transition-colors duration-500">Request a quote</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#FDFBF7]/95 backdrop-blur-sm border-t border-[#E5E0D8]">
          <div className="px-6 md:px-12 lg:px-24 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-[#E5E0D8]">
            {STATS.map((s, i) => (
              <m.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="md:px-8 first:md:pl-0 last:md:pr-0"
              >
                <CountUp value={s.value} className="font-serif-display text-3xl md:text-4xl text-[#1A1A1A] leading-none block" />
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#4A4A4A] mt-2">{s.label}</div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <section className="bg-[#2C4C3B] py-4 overflow-hidden pause-on-hover">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {COMMODITIES.map((c) => (
                <span key={c.slug + i} className="flex items-center gap-6 px-10 text-[#FDFBF7]/80 text-sm tracking-[0.2em] uppercase hover:text-[#C48D3F] transition-colors">
                  {c.name}
                  <span className="text-[#C48D3F]">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#C48D3F]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F]">Who we are</span>
            </div>
            <h2 className="font-serif-display text-4xl lg:text-5xl text-[#1A1A1A] leading-tight tracking-tight">
              A trading house that<br />understands the <em className="italic font-light text-[#C48D3F]">field</em>,<br />the <em className="italic font-light text-[#C48D3F]">freight</em> and the <em className="italic font-light text-[#C48D3F]">finish</em>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-[#E5E0D8] space-y-6 text-[#4A4A4A] leading-relaxed">
            <p>
              Hansaria Foods works at the intersection of agriculture, logistics and markets. We trade physical agricultural commodities — maize, wheat, broken rice, millet, soya bean D.O.C., mustard D.O.C. and DDGS — connecting Indian origins with feed millers, distilleries and processors across South and South-East Asia.
            </p>
            <p>
              Our professionals have worked as commercial principals, contract arbitrators, and production managers. That depth — of operating the trade, not just observing it — is what our clients buy when they buy from us.
            </p>
            <Link to="/about" data-testid="home-about-link" className="inline-flex items-center gap-2 text-sm text-[#1A1A1A] border-b border-[#C48D3F] pb-1 hover:gap-3 transition-all">
              More about Hansaria <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Commodities — Bento */}
      <section className="bg-[#F2F0EA] px-6 md:px-12 lg:px-24 py-24 lg:py-32 grain-overlay relative overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#C48D3F]/8 blur-3xl pointer-events-none animate-blob" />
        <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#2C4C3B]/10 blur-3xl pointer-events-none animate-blob" style={{ animationDelay: "4s" }} />

        <Reveal className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#C48D3F]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F]">What we trade</span>
            </div>
            <h2 className="font-serif-display text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight leading-tight">
              Commodities we <em className="italic font-light text-[#C48D3F]">specialise</em> in
            </h2>
          </div>
          <Link to="/commodities" data-testid="home-view-all-commodities" className="inline-flex items-center gap-2 text-sm border-b border-[#1A1A1A] pb-1 hover:border-[#C48D3F] hover:text-[#C48D3F] hover:gap-3 transition-all">
            View all commodities <ArrowUpRight size={14} />
          </Link>
        </Reveal>

        <RevealStagger className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {COMMODITIES.map((c, i) => (
            <RevealItem key={c.slug}>
              <Link to="/commodities" data-testid={`commodity-card-${c.slug}`} className="group block relative h-full">
                {/* Floating number badge with rotating dashed ring */}
                <div className="absolute -top-2 -left-2 z-20 w-14 h-14 pointer-events-none">
                  <svg className="absolute inset-0 spin-slower opacity-70" viewBox="0 0 60 60">
                    <circle cx="30" cy="30" r="28" fill="none" stroke="#C48D3F" strokeWidth="0.8" strokeDasharray="2 3" />
                  </svg>
                  <div className="absolute inset-2 bg-[#FDFBF7] rounded-full flex items-center justify-center border border-[#E5E0D8]">
                    <span className="font-serif-display text-lg text-[#C48D3F]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>

                {/* Corner accent dot */}
                <span className="absolute -top-2 -right-2 z-20 w-3 h-3 rounded-full bg-[#C48D3F] animate-float shadow-lg" />

                {/* Card body */}
                <div className="bg-[#FDFBF7] border border-[#E5E0D8] group-hover:border-[#C48D3F] transition-all duration-500 h-full flex flex-col overflow-hidden relative">
                  {/* Gold accent line that draws across the top */}
                  <span className="absolute top-0 left-0 h-[3px] bg-[#C48D3F] w-0 group-hover:w-full transition-all duration-700 ease-custom z-10" />

                  {/* Image */}
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-1400 ease-custom group-hover:scale-125"
                    />
                    {/* Bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 via-transparent to-transparent" />
                    {/* Category tag */}
                    <div className="absolute top-4 right-4 bg-[#FDFBF7] px-3 py-1.5 border border-[#E5E0D8]">
                      <span className="text-[9px] tracking-[0.3em] uppercase text-[#C48D3F]">{c.category}</span>
                    </div>
                    {/* Rotating ornamental circle */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-dashed border-[#FDFBF7]/40 spin-slower pointer-events-none" />
                    {/* Bottom name overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-serif-display text-2xl lg:text-3xl text-[#FDFBF7] leading-tight">
                        {c.name}
                      </h3>
                    </div>
                  </div>

                  {/* Text row */}
                  <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                    <p className="text-sm text-[#4A4A4A] leading-relaxed">{c.blurb}</p>

                    {/* CTA row with sliding underline */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#E5E0D8]">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#4A4A4A] group-hover:text-[#C48D3F] transition-colors duration-500">
                        Explore
                      </span>
                      <span className="w-10 h-10 border border-[#E5E0D8] flex items-center justify-center group-hover:bg-[#C48D3F] group-hover:border-[#C48D3F] transition-all duration-500">
                        <ArrowUpRight
                          size={16}
                          className="text-[#C48D3F] group-hover:text-[#FDFBF7] transition-colors duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Services */}
      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#C48D3F]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F]">Services</span>
            </div>
            <h2 className="font-serif-display text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight leading-tight">
              Why counterparties<br />keep returning.
            </h2>
          </div>
        </Reveal>
        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <RevealItem key={s.title}>
              <div data-testid={`service-card-${i}`} className="group border border-[#E5E0D8] bg-[#FDFBF7] flex flex-col hover-lift h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-900 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F] mb-3">0{i + 1}</div>
                  <h3 className="font-serif-display text-2xl text-[#1A1A1A] mb-4 group-hover:text-[#C48D3F] transition-colors">{s.title}</h3>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-sm text-[#1A1A1A] group-hover:text-[#C48D3F] transition-colors">
                    Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Categories */}
      <section className="bg-[#2C4C3B] text-[#FDFBF7] px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#C48D3F]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F]">Categories</span>
            </div>
            <h2 className="font-serif-display text-4xl lg:text-5xl tracking-tight leading-tight">
              A book built<br />on <em className="italic text-[#C48D3F]">breadth</em>.
            </h2>
            <p className="mt-6 text-[#FDFBF7]/70 leading-relaxed max-w-sm">
              Four product families. A dozen origin clusters. One disciplined trading desk.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#FDFBF7]/15">
            {CATEGORIES.map((cat, i) => (
              <div key={cat.name} data-testid={`category-${i}`} className="bg-[#2C4C3B] p-8 lg:p-10">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F]">0{i + 1}</div>
                <h3 className="font-serif-display text-3xl mt-4 mb-5">{cat.name}</h3>
                <ul className="space-y-2 text-sm text-[#FDFBF7]/75">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#C48D3F]" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#C48D3F]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F]">Latest News</span>
            </div>
            <h2 className="font-serif-display text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight leading-tight">
              From the trading desk.
            </h2>
          </div>
        </Reveal>
        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {NEWS.map((n, i) => (
            <RevealItem key={i}>
              <article data-testid={`news-card-${i}`} className="border border-[#E5E0D8] p-8 hover:border-[#C48D3F] transition-all duration-500 group cursor-pointer bg-[#FDFBF7] hover-lift h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F]">{n.tag}</span>
                  <span className="text-xs text-[#4A4A4A]">{n.date}</span>
                </div>
                <h3 className="font-serif-display text-2xl text-[#1A1A1A] leading-snug mb-4 group-hover:text-[#C48D3F] transition-colors">{n.title}</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed mb-6">{n.excerpt}</p>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#1A1A1A] group-hover:text-[#C48D3F] transition-colors">
                  Read brief <ArrowRight size={12} className="transition-transform group-hover:translate-x-2" />
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Clients preview */}
      <section className="bg-[#F2F0EA] px-6 md:px-12 lg:px-24 py-20 lg:py-24 border-y border-[#E5E0D8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F] mb-3">Trusted by</div>
            <p className="font-serif-display text-2xl text-[#1A1A1A] leading-snug">
              India&rsquo;s most demanding processors and feed manufacturers.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
            {CLIENTS.slice(0, 8).map((c) => (
              <div key={c} className="text-sm text-[#4A4A4A] tracking-wider">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 md:px-12 lg:px-24 py-24 lg:py-32 grain-overlay bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={TEAM_IMG} alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-[#1A1A1A]/70" />
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-serif-display text-4xl lg:text-6xl text-[#FDFBF7] tracking-tight leading-tight">
              Have a cargo to move,<br />or a position to <em className="italic text-[#C48D3F]">cover</em>?
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-5">
            <a href={`tel:${COMPANY.phoneRaw}`} data-testid="cta-phone" className="flex items-center justify-between border border-[#FDFBF7]/30 px-6 py-5 text-[#FDFBF7] hover:bg-[#C48D3F] hover:border-[#C48D3F] transition-all group">
              <span className="flex items-center gap-4"><Phone size={18} className="text-[#C48D3F] group-hover:text-[#FDFBF7]" /> {COMPANY.phone}</span>
              <ArrowUpRight size={18} />
            </a>
            <a href={`mailto:${COMPANY.email}`} data-testid="cta-email" className="flex items-center justify-between border border-[#FDFBF7]/30 px-6 py-5 text-[#FDFBF7] hover:bg-[#C48D3F] hover:border-[#C48D3F] transition-all group">
              <span className="flex items-center gap-4"><Mail size={18} className="text-[#C48D3F] group-hover:text-[#FDFBF7]" /> {COMPANY.email}</span>
              <ArrowUpRight size={18} />
            </a>
            <Link to="/contact" data-testid="cta-contact" className="flex items-center justify-between border border-[#FDFBF7]/30 px-6 py-5 text-[#FDFBF7] hover:bg-[#C48D3F] hover:border-[#C48D3F] transition-all group">
              <span className="flex items-center gap-4"><MapPin size={18} className="text-[#C48D3F] group-hover:text-[#FDFBF7]" /> Visit us in Kolkata</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
