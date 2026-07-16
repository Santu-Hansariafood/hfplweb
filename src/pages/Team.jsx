import { PageHeader, Breadcrumb } from "../components/PageHeader";
import { TEAM } from "../lib/constants";
import { Link, Mail, Sparkles, Quote } from "lucide-react";
import { m } from "framer-motion";
import { Reveal } from "../components/Reveal";

const EXPERTISE = {
  "Gopal Agarwal": ["Risk", "Origination", "Strategy"],
  "Sunita Agarwalla": ["Market Intelligence", "Contracts", "Arbitration"],
  "Prince Surana": ["Commodities", "Contracts", "Market Analysis"],
  "Uttam Das": ["Accounting", "Warehousing", "Payments"],
};

const FeaturedCard = ({ member }) => (
  <m.article
    data-testid={`team-featured-${member.name.toLowerCase().replace(/\s+/g, "-")}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    className="lg:col-span-8 group relative overflow-hidden bg-[#FDFBF7] border border-[#E5E0D8]"
  >
    <div className="grid grid-cols-1 md:grid-cols-5 h-full">
      <div className="md:col-span-3 relative overflow-hidden aspect-[4/5] md:aspect-auto md:min-h-[520px]">
        <img
          src={member.photo}
          alt={member.name}
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-1400 ease-custom group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
        <div className="absolute top-6 left-6 flex items-center gap-2 bg-[#FDFBF7]/95 backdrop-blur-sm px-3 py-1.5">
          <Sparkles size={12} className="text-[#C48D3F]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#1A1A1A]">
            Managing Director
          </span>
        </div>
        <div className="absolute bottom-6 right-6 w-24 h-24 rounded-full border border-dashed border-[#FDFBF7]/40 spin-slower pointer-events-none" />
      </div>

      <div className="md:col-span-2 p-8 lg:p-10 flex flex-col justify-between bg-[#2C4C3B] text-[#FDFBF7] relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#C48D3F]/15 blur-2xl pointer-events-none" />
        <div className="relative">
          <Quote size={32} className="text-[#C48D3F] mb-6" />
          <h3 className="font-serif-display text-4xl lg:text-5xl leading-[0.95] mb-6">
            {member.name}
          </h3>
          <p className="text-[#FDFBF7]/85 leading-relaxed text-base">
            {member.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {EXPERTISE[member.name]?.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 border border-[#FDFBF7]/25 text-[#FDFBF7]/85"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-between pt-8 mt-8 border-t border-[#FDFBF7]/15">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F]">
            Since 2003
          </span>
          <div className="flex gap-2">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 border border-[#FDFBF7]/25 hover:bg-[#C48D3F] hover:border-[#C48D3F] hover:-translate-y-1 transition-all duration-300"
            >
              <Link size={13} />
            </a>
            <a
              href={`mailto:${member.email}`}
              aria-label="Email"
              className="p-2 border border-[#FDFBF7]/25 hover:bg-[#C48D3F] hover:border-[#C48D3F] hover:-translate-y-1 transition-all duration-300"
            >
              <Mail size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </m.article>
);

const StatCard = ({ n, label, delay = 0 }) => (
  <m.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay }}
    className="bg-[#FDFBF7] border border-[#E5E0D8] p-8 lg:p-10 relative overflow-hidden group hover:border-[#C48D3F] transition-colors duration-500"
  >
    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#C48D3F]/10 group-hover:scale-125 transition-transform duration-700" />
    <div className="relative">
      <div className="font-serif-display text-5xl lg:text-6xl text-[#C48D3F] leading-none">
        {n}
      </div>
      <div className="text-[10px] tracking-[0.3em] uppercase text-[#4A4A4A] mt-4">
        {label}
      </div>
    </div>
  </m.div>
);

const MemberCard = ({ member, index }) => (
  <m.article
    data-testid={`team-card-${member.name.toLowerCase().replace(/\s+/g, "-")}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="group relative bg-[#FDFBF7] border border-[#E5E0D8] overflow-hidden hover:border-[#C48D3F] transition-all duration-500"
  >
    <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#C48D3F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-custom z-10" />
    <div className="relative aspect-[4/5] overflow-hidden">
      <img
        src={member.photo}
        alt={member.name}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1200 ease-custom group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent" />

      <div className="absolute top-4 left-4 w-11 h-11 bg-[#FDFBF7] flex items-center justify-center border border-[#E5E0D8]">
        <span className="font-serif-display text-lg text-[#C48D3F]">
          0{index + 2}
        </span>
      </div>

      <span className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#C48D3F] animate-float shadow-lg" />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-serif-display text-2xl lg:text-3xl text-[#FDFBF7] leading-tight">
          {member.name}
        </h3>
        <div className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F] mt-1">
          {member.role}
        </div>
      </div>
    </div>{" "}
    <div className="p-6 lg:p-7 flex flex-col gap-5">
      <p className="text-sm text-[#4A4A4A] leading-relaxed">{member.bio}</p>

      <div className="flex flex-wrap gap-2">
        {EXPERTISE[member.name]?.map((tag) => (
          <span
            key={tag}
            className="text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 border border-[#E5E0D8] text-[#4A4A4A] group-hover:border-[#C48D3F] group-hover:text-[#C48D3F] transition-colors duration-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-[#E5E0D8]">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#4A4A4A]">
          Get in touch
        </span>
        <div className="flex gap-2 text-[#4A4A4A]">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 border border-[#E5E0D8] hover:text-[#C48D3F] hover:border-[#C48D3F] hover:-translate-y-1 transition-all duration-300"
          >
            <Link size={13} />
          </a>
          <a
            href={`mailto:${member.email}`}
            aria-label="Email"
            className="p-2 border border-[#E5E0D8] hover:text-[#C48D3F] hover:border-[#C48D3F] hover:-translate-y-1 transition-all duration-300"
          >
            <Mail size={13} />
          </a>
        </div>
      </div>
    </div>
  </m.article>
);

const Team = () => {
  const md = TEAM.find((t) => t.level === 0);
  const reports = TEAM.filter((t) => t.level === 1);

  return (
    <div data-testid="team-page">
      <Breadcrumb current="Team" />
      <PageHeader
        eyebrow="Leadership"
        title="The people behind the desk."
        subtitle="Principals, arbitrators and operators — our team's experience is the firm's real asset."
      />

      <section className="px-6 md:px-12 lg:px-24 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {md && <FeaturedCard member={md} />}

          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-8">
            <StatCard n="4" label="Core leadership" delay={0.2} />
            <StatCard n="60+" label="Years combined" delay={0.35} />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-24 lg:pb-32">
        <Reveal className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#C48D3F]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F]">
                The desk
              </span>
            </div>
            <h2 className="font-serif-display text-3xl lg:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
              Specialists you&rsquo;ll
              <br />
              actually speak to.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {reports.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-[#2C4C3B] text-[#FDFBF7] px-6 md:px-12 lg:px-24 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#C48D3F]/10 blur-3xl animate-blob pointer-events-none" />
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#FDFBF7]/5 blur-3xl animate-blob pointer-events-none"
          style={{ animationDelay: "3s" }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-5">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F] mb-6">
              Join us
            </div>
            <h2 className="font-serif-display text-4xl lg:text-5xl tracking-tight leading-tight">
              Trade with conviction.
              <br />
              <em className="italic text-[#C48D3F]">Build</em> a career.
            </h2>
          </Reveal>
          <Reveal
            delay={0.15}
            className="lg:col-span-7 space-y-6 text-[#FDFBF7]/85 leading-relaxed"
          >
            <p>
              We hire principals, not order-takers. If you have run a mill,
              settled a dispute, or chartered a vessel — we have a desk for you.
            </p>
            <a
              href="mailto:info@hansariafood.com"
              data-testid="team-careers-cta"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C48D3F] text-[#FDFBF7] text-sm tracking-wide relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-[#FDFBF7] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-custom" />
              <span className="relative group-hover:text-[#1A1A1A] transition-colors duration-500">
                Send your resume
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Team;
