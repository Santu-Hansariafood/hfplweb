import { LegalPage } from "../components/LegalPage";

const sections = [
  {
    heading: "Acceptance of terms",
    body: [
      "By accessing or using www.hansariafood.com (the \u201CSite\u201D) you agree to be bound by these Terms of Use and by all applicable laws and regulations. If you do not agree with any part of the terms, please do not use the Site.",
    ],
  },
  {
    heading: "Use of the site",
    body: [
      "You may use the Site only for lawful business purposes connected to enquiring about, sourcing or trading agricultural commodities with Hansaria Foods.",
      "You agree not to (a) reverse engineer or scrape any part of the Site, (b) attempt to gain unauthorised access to any account or system, or (c) upload or transmit any malicious code, spam or misleading information through our forms.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "All content on this Site — including text, graphics, logos, images, market analysis, and downloadable documents — is the property of Hansaria Foods or its licensors and is protected by Indian and international copyright and trademark laws.",
      "You may view and download material for personal, non-commercial reference only. Any reproduction, redistribution, or commercial use requires our prior written consent.",
    ],
  },
  {
    heading: "Trading terms",
    body: [
      "Any physical trade or brokerage transaction with Hansaria Foods is governed by a separate written contract or purchase order which will prevail over these Terms in case of conflict.",
      "Standard contract terms cover pricing, delivery, payment, quality specification, force majeure and dispute resolution.",
    ],
  },
  {
    heading: "Accuracy of information",
    body: "We take reasonable care to publish accurate information but do not warrant that content on the Site is error-free or complete. Please refer to the Disclaimer for further detail.",
  },
  {
    heading: "Third-party services",
    body: "The Site may embed content or link to services operated by third parties (for example, mail providers or analytics). Their terms and privacy policies apply to your use of those services, and we are not responsible for their content or availability.",
  },
  {
    heading: "Termination",
    body: "We reserve the right, in our sole discretion, to restrict or terminate access to the Site for any user who breaches these Terms, without notice or liability.",
  },
  {
    heading: "Changes to these terms",
    body: "We may modify these Terms from time to time. Continued use of the Site after any modification constitutes acceptance of the revised Terms. The \u201CLast updated\u201D date at the top of this page reflects the most recent revision.",
  },
  {
    heading: "Governing law",
    body: "These Terms are governed by the laws of India. Any dispute arising out of your use of the Site shall be subject to the exclusive jurisdiction of the courts at Kolkata.",
  },
  {
    heading: "Contact",
    body: "For questions about these Terms, write to info@hansariafood.com.",
  },
];

const TermsOfUse = () => (
  <LegalPage
    testId="terms-page"
    eyebrow="Terms of Use"
    title="How you can use this website."
    subtitle="The rules that govern your access to hansariafood.com — plain, business-friendly, and reviewed by our counsel."
    lastUpdated="01 December 2025"
    sections={sections}
  />
);

export default TermsOfUse;
