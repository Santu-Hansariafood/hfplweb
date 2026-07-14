import { Breadcrumb, PageHeader } from "../components/PageHeader";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ExternalLink,
  Globe2,
  LayoutTemplate,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "../components/Reveal";

const PROJECTS = [
  {
    id: "01",
    title: "Hansaria Food",
    type: "Business Website",
    summary:
      "Responsive layout, modern sections and a clean conversion-focused presentation.",
    href: "https://bid.hansariafood.in",
  },
  {
    id: "02",
    title: "Rate & Sauda Management",
    type: "Business Webapplication",
    summary:
      "Fast-loading structure designed for clear messaging, trust and strong first impressions.",
    href: "https://hansariafood.in",
  },
  {
    id: "03",
    title: "Hansaria Food",
    type: "Business Website",
    summary:
      "Structured user flows, polished interface blocks and scalable frontend composition.",
    href: "https://hansariafood.com",
  },
  {
    id: "04",
    title: "Creadent Dental Clinic",
    type: "Portfolio Build",
    summary:
      "Minimal visual system with premium motion, clarity and strong mobile responsiveness.",
    href: "https://creadentsmiles.com",
  },
  {
    id: "05",
    title: "Kanak Retail",
    type: "Custom Frontend",
    summary:
      "Purpose-built presentation layer ready for your final live deployment link.",
    href: "https://kanakretail.com",
  },
];

const CAPABILITIES = [
  {
    title: "Modern UI Systems",
    description:
      "Layouts are designed to feel premium, clean and easy to navigate across devices.",
    icon: LayoutTemplate,
  },
  {
    title: "Performance Focused",
    description:
      "Sections are structured for smooth browsing, better readability and lighter frontend delivery.",
    icon: Workflow,
  },
  {
    title: "Deployment Ready",
    description:
      "Every project block is prepared for production URLs, updates and future content changes.",
    icon: Globe2,
  },
  {
    title: "Reliable Quality",
    description:
      "Attention is given to consistency, spacing, interaction clarity and finishing details.",
    icon: ShieldCheck,
  },
];

const HIGHLIGHTS = [
  "05 showcase slots ready for live URLs",
  "Responsive and clean portfolio presentation",
  "Styled to match the rest of the website",
];

const ProjectCard = ({ project }) => {
  const hasLink = Boolean(project.href);

  return (
    <RevealItem>
      <article
        data-testid={`it-project-${project.id}`}
        className="group relative h-full overflow-hidden border border-[#E5E0D8] bg-[#FDFBF7] p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#C48D3F]"
      >
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[#C48D3F] scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />

        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#C48D3F]">
              {project.type}
            </div>
            <h3 className="font-serif-display text-3xl text-[#1A1A1A] leading-tight">
              {project.title}
            </h3>
          </div>

          <div className="flex h-14 w-14 items-center justify-center border border-[#E5E0D8] text-[#C48D3F] transition-all duration-500 group-hover:border-[#C48D3F] group-hover:bg-[#C48D3F] group-hover:text-[#FDFBF7]">
            <span className="font-serif-display text-xl">{project.id}</span>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-[#4A4A4A]">
          {project.summary}
        </p>

        <div className="mt-8 rounded-none border border-dashed border-[#E5E0D8] bg-[#F7F4EE] px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#6B6257]">
          Live link will be added here
        </div>

        <a
          href={hasLink ? project.href : "#"}
          target={hasLink ? "_blank" : undefined}
          rel={hasLink ? "noreferrer" : undefined}
          onClick={(event) => {
            if (!hasLink) event.preventDefault();
          }}
          className={`mt-8 inline-flex items-center gap-2 border-b pb-1 text-sm transition-all duration-500 ${
            hasLink
              ? "border-[#1A1A1A] text-[#1A1A1A] hover:gap-4 hover:border-[#C48D3F] hover:text-[#C48D3F]"
              : "cursor-default border-[#BFB7AC] text-[#8B8277]"
          }`}
        >
          {hasLink ? "Open live project" : "Add live link later"}
          <ExternalLink size={14} />
        </a>
      </article>
    </RevealItem>
  );
};

const ITServices = () => {
  return (
    <div data-testid="it-services-page">
      <Breadcrumb current="IT Services" />
      <PageHeader
        eyebrow="IT Services"
        title="Digital work presented with clarity and confidence."
        subtitle="A polished showcase page for frontend and website projects, prepared for five live deployments that can be linked in later."
      />

      <section className="px-6 md:px-12 lg:px-24 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="relative overflow-hidden border border-[#E5E0D8] bg-[#1A1A1A] p-8 sm:p-10 lg:p-12 text-[#FDFBF7]">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C48D3F]/20 blur-3xl" />
              <div className="absolute -bottom-20 left-0 h-48 w-48 rounded-full bg-[#FDFBF7]/10 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-px w-12 bg-[#C48D3F]" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C48D3F]">
                    Showcase Overview
                  </span>
                </div>

                <h2 className="font-serif-display text-4xl lg:text-5xl leading-tight tracking-tight">
                  Built to present your
                  <br />
                  <em className="italic font-light text-[#C48D3F]">
                    live projects
                  </em>{" "}
                  beautifully.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#FDFBF7]/80">
                  This section is structured as a premium project gallery for IT
                  services, web builds and frontend delivery. The design is
                  already in place, and each project slot is ready for its final
                  live URL whenever you share it.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-px bg-[#FDFBF7]/15 sm:grid-cols-3">
                  {HIGHLIGHTS.map((item, index) => (
                    <div
                      key={item}
                      className="bg-[#FDFBF7]/5 px-5 py-6 backdrop-blur-sm"
                      data-testid={`it-highlight-${index}`}
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center border border-[#C48D3F]/40 text-[#C48D3F]">
                        <Sparkles size={16} />
                      </div>
                      <p className="text-sm leading-relaxed text-[#FDFBF7]/85">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="h-full border border-[#E5E0D8] bg-[#F7F4EE] p-8 sm:p-10">
              <div className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#C48D3F]">
                Ready For Update
              </div>

              <div className="space-y-6">
                {PROJECTS.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-start gap-4 border-b border-[#E5E0D8] pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-[#E5E0D8] bg-[#FDFBF7] font-serif-display text-lg text-[#C48D3F]">
                      {project.id}
                    </div>
                    <div>
                      <div className="font-serif-display text-xl text-[#1A1A1A]">
                        {project.title}
                      </div>
                      <div className="mt-1 text-sm text-[#4A4A4A]">
                        {project.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-[#E5E0D8] pt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-b border-[#1A1A1A] pb-1 text-sm text-[#1A1A1A] transition-all duration-500 hover:gap-4 hover:border-[#C48D3F] hover:text-[#C48D3F]"
                >
                  Discuss your next project <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F2F0EA] px-6 md:px-12 lg:px-24 py-24 lg:py-32 grain-overlay">
        <Reveal className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-12 bg-[#C48D3F]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C48D3F]">
                Live Projects
              </span>
            </div>
            <h2 className="font-serif-display text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight leading-tight">
              Five project slots,
              <br />
              one consistent <em className="italic text-[#C48D3F]">look.</em>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-[#4A4A4A]">
            The cards below are intentionally prepared for future live URLs. As
            soon as the links are available, they can be inserted directly into
            the project list without redesigning the page.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </RevealStagger>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#C48D3F] mb-6">
              Service Strength
            </div>
            <h2 className="font-serif-display text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight leading-tight">
              Designed to feel
              <br />
              sharp, premium and <em className="italic text-[#C48D3F]">ready.</em>
            </h2>
          </Reveal>

          <RevealStagger className="lg:col-span-8 grid grid-cols-1 gap-px bg-[#E5E0D8] md:grid-cols-2">
            {CAPABILITIES.map((item, index) => {
              const Icon = item.icon;

              return (
                <RevealItem key={item.title}>
                  <div
                    data-testid={`it-capability-${index}`}
                    className="bg-[#FDFBF7] p-8 lg:p-10"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center border border-[#E5E0D8] text-[#C48D3F]">
                      <Icon size={20} />
                    </div>
                    <div className="font-serif-display text-2xl text-[#1A1A1A] mb-3">
                      {item.title}
                    </div>
                    <p className="text-sm leading-relaxed text-[#4A4A4A]">
                      {item.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#2C4C3B] px-6 md:px-12 lg:px-24 py-24 lg:py-32 text-[#FDFBF7]">
        <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-[#C48D3F]/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[#FDFBF7]/10 blur-3xl" />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center border border-[#FDFBF7]/20 text-[#C48D3F]">
            <Sparkles size={24} />
          </div>
          <div className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#C48D3F]">
            Next Step
          </div>
          <h2 className="font-serif-display text-4xl lg:text-5xl leading-tight tracking-tight">
            Add the five live URLs later,
            <br />
            the page design is already <em className="italic">done.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#FDFBF7]/80">
            This page now gives you a dedicated IT services presentation with a
            professional project section. Once your live links are ready, they
            can be updated in minutes.
          </p>
          <Link
            to="/contact"
            data-testid="it-services-cta"
            className="mt-10 inline-flex items-center gap-2 bg-[#C48D3F] px-7 py-3.5 text-sm tracking-wide text-[#FDFBF7] transition-colors hover:bg-[#A67430]"
          >
            Start a project discussion
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
};

export default ITServices;
