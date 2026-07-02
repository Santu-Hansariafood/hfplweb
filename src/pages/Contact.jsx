import { PageHeader, Breadcrumb } from "../components/PageHeader";
import { useState } from "react";
import { COMPANY } from "../lib/constants";
import { Phone, Mail, MapPin, ArrowRight, Clock, Send, User, Building2, MessageCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { m } from "framer-motion";
import { Reveal } from "../components/Reveal";

const ENQUIRY_TYPES = [
  { id: "buy", label: "I want to buy" },
  { id: "sell", label: "I want to sell" },
  { id: "partner", label: "Partnership / broking" },
  { id: "career", label: "Careers" },
];

const Field = ({ label, testId, value, onChange, type = "text", icon: Icon, required, placeholder }) => {
  const [focused, setFocused] = useState(false);
  const filled = value && value.length > 0;
  const active = focused || filled;
  return (
    <label className="block relative group">
      <span
        className={`absolute left-11 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          active
            ? "top-1.5 text-[9px] tracking-[0.3em] uppercase text-[#C48D3F]"
            : "top-1/2 -translate-y-1/2 text-sm text-[#4A4A4A]"
        }`}
      >
        {label}{required && <span className="text-[#C48D3F]"> *</span>}
      </span>
      {Icon && (
        <Icon
          size={16}
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
            active ? "text-[#C48D3F]" : "text-[#4A4A4A]"
          }`}
        />
      )}
      <input
        data-testid={testId}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={active ? placeholder : ""}
        className="w-full bg-transparent border border-[#E5E0D8] pl-11 pr-4 pt-6 pb-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C48D3F] transition-colors placeholder-[#4A4A4A]/60"
      />
      <span className="absolute bottom-0 left-0 h-[2px] bg-[#C48D3F] w-0 group-focus-within:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
    </label>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", commodity: "", message: "", type: "buy" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and a brief message.");
      return;
    }
    const typeLabel = ENQUIRY_TYPES.find((t) => t.id === form.type)?.label || form.type;
    const subject = encodeURIComponent(
      `[${typeLabel}] Enquiry from ${form.name}${form.company ? ` (${form.company})` : ""}${form.commodity ? ` — ${form.commodity}` : ""}`
    );
    const body = encodeURIComponent(
      `Enquiry type: ${typeLabel}\nName: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nCommodity of interest: ${form.commodity}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  };

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div data-testid="contact-page">
      <Breadcrumb current="Contact Us" />
      <PageHeader
        eyebrow="Get in touch"
        title="Let's talk grain."
        subtitle="Whether it's a single rake or a long-term offtake — start the conversation. Our desk responds within one business day."
      />

      <section className="px-6 md:px-12 lg:px-24 pb-24 lg:pb-32 relative">
        {/* Decorative background blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C48D3F]/8 blur-3xl pointer-events-none animate-blob -z-0" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Contact info panel */}
          <Reveal className="lg:col-span-4 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#C48D3F]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F]">Reach us</span>
              </div>
              <h2 className="font-serif-display text-3xl lg:text-4xl text-[#1A1A1A] leading-tight">
                Direct lines to the <em className="italic text-[#C48D3F]">desk.</em>
              </h2>
            </div>

            <div className="space-y-px bg-[#E5E0D8]">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                data-testid="contact-phone"
                className="bg-[#FDFBF7] p-6 flex items-start gap-4 hover:bg-[#F2F0EA] hover:pl-8 transition-all duration-500 group block relative overflow-hidden"
              >
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#C48D3F] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                <span className="w-11 h-11 border border-[#E5E0D8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C48D3F] group-hover:border-[#C48D3F] transition-all duration-500">
                  <Phone size={16} className="text-[#C48D3F] group-hover:text-[#FDFBF7] transition-colors duration-500" />
                </span>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#4A4A4A] mb-1">Phone</div>
                  <div className="font-serif-display text-xl text-[#1A1A1A]">{COMPANY.phone}</div>
                </div>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                data-testid="contact-email"
                className="bg-[#FDFBF7] p-6 flex items-start gap-4 hover:bg-[#F2F0EA] hover:pl-8 transition-all duration-500 group block relative overflow-hidden"
              >
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#C48D3F] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                <span className="w-11 h-11 border border-[#E5E0D8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C48D3F] group-hover:border-[#C48D3F] transition-all duration-500">
                  <Mail size={16} className="text-[#C48D3F] group-hover:text-[#FDFBF7] transition-colors duration-500" />
                </span>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#4A4A4A] mb-1">Email</div>
                  <div className="font-serif-display text-xl text-[#1A1A1A]">{COMPANY.email}</div>
                </div>
              </a>
              <div className="bg-[#FDFBF7] p-6 flex items-start gap-4">
                <span className="w-11 h-11 border border-[#E5E0D8] flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#C48D3F]" />
                </span>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#4A4A4A] mb-1">Office</div>
                  <div className="font-serif-display text-xl text-[#1A1A1A]">{COMPANY.address}</div>
                </div>
              </div>
            </div>

            <div className="border border-[#E5E0D8] p-6 bg-[#FDFBF7] relative overflow-hidden group">
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#C48D3F]/10 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative">
                <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#C48D3F] mb-3">
                  <Clock size={12} /> Trading hours
                </div>
                <div className="text-sm text-[#4A4A4A] space-y-1">
                  <div className="flex justify-between"><span>Mon – Fri</span><span className="text-[#1A1A1A]">09:30 – 18:30 IST</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="text-[#1A1A1A]">09:30 – 14:00 IST</span></div>
                  <div className="flex justify-between opacity-60"><span>Sunday</span><span>Closed</span></div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Premium form */}
          <div className="lg:col-span-8">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#FDFBF7] border border-[#E5E0D8] p-8 lg:p-12 shadow-[0_30px_60px_-30px_rgba(26,26,26,0.15)]"
            >
              {/* Corner ornaments */}
              <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#C48D3F]" />
              <span className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#C48D3F]" />
              <span className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#C48D3F]" />
              <span className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C48D3F]" />

              <div className="flex items-start justify-between mb-10">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F] mb-3 flex items-center gap-2">
                    <Sparkles size={12} /> Enquiry form
                  </div>
                  <h3 className="font-serif-display text-3xl lg:text-4xl text-[#1A1A1A] leading-tight">
                    Tell us what you need.
                  </h3>
                </div>
                <div className="hidden md:block text-right">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#4A4A4A]">Response time</div>
                  <div className="font-serif-display text-2xl text-[#C48D3F] mt-1">&lt; 24h</div>
                </div>
              </div>

              {/* Enquiry type radio pills */}
              <div className="mb-8">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#4A4A4A] mb-3">Enquiry type</div>
                <div className="flex flex-wrap gap-2">
                  {ENQUIRY_TYPES.map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      data-testid={`enquiry-type-${t.id}`}
                      onClick={() => setForm({ ...form, type: t.id })}
                      className={`text-xs px-4 py-2 border transition-all duration-300 ${
                        form.type === t.id
                          ? "bg-[#1A1A1A] text-[#FDFBF7] border-[#1A1A1A]"
                          : "border-[#E5E0D8] text-[#4A4A4A] hover:border-[#C48D3F] hover:text-[#C48D3F]"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <form data-testid="contact-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Name" testId="form-name" value={form.name} onChange={handle("name")} icon={User} required placeholder="Your full name" />
                <Field label="Company" testId="form-company" value={form.company} onChange={handle("company")} icon={Building2} placeholder="Company / firm" />
                <Field label="Email" testId="form-email" type="email" value={form.email} onChange={handle("email")} icon={Mail} required placeholder="you@company.com" />
                <Field label="Phone" testId="form-phone" type="tel" value={form.phone} onChange={handle("phone")} icon={Phone} placeholder="+91 ..." />
                <div className="md:col-span-2">
                  <Field label="Commodity of interest" testId="form-commodity" value={form.commodity} onChange={handle("commodity")} icon={Sparkles} placeholder="Maize, Soya Bean D.O.C., Broken Rice…" />
                </div>

                {/* Message textarea */}
                <div className="md:col-span-2 relative group">
                  <div className="absolute left-4 top-4 text-[#4A4A4A] group-focus-within:text-[#C48D3F] transition-colors">
                    <MessageCircle size={16} />
                  </div>
                  <div className="absolute left-11 top-3 text-[9px] tracking-[0.3em] uppercase text-[#C48D3F]">
                    Message <span>*</span>
                  </div>
                  <textarea
                    data-testid="form-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handle("message")}
                    placeholder="Volume, specification, timeline, destination…"
                    className="w-full bg-transparent border border-[#E5E0D8] pl-11 pr-4 pt-10 pb-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C48D3F] transition-colors resize-none placeholder-[#4A4A4A]/60"
                  />
                  <span className="absolute bottom-0 left-0 h-[2px] bg-[#C48D3F] w-0 group-focus-within:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>

                <div className="md:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-2">
                  <p className="text-xs text-[#4A4A4A] max-w-sm">
                    By sending this enquiry you agree to our Privacy Policy. We reply within one business day.
                  </p>
                  <button
                    data-testid="form-submit"
                    type="submit"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-[#FDFBF7] text-sm tracking-wide overflow-hidden self-start"
                  >
                    <span className="absolute inset-0 bg-[#C48D3F] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    <span className="relative flex items-center gap-3">
                      Send enquiry
                      <span className="w-6 h-6 rounded-full bg-[#FDFBF7]/15 flex items-center justify-center group-hover:bg-[#FDFBF7]/25 transition-colors">
                        <Send size={12} className="transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0" />
                        <ArrowRight size={12} className="absolute -translate-x-4 translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                      </span>
                    </span>
                  </button>
                </div>
              </form>
            </m.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
