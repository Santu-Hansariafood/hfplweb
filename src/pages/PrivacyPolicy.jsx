import { LegalPage } from "../components/LegalPage";

const sections = [
  {
    heading: "Overview",
    body: [
      "Hansaria Foods (\u201Cwe\u201D, \u201Cour\u201D, \u201Cus\u201D) is committed to protecting the privacy of every counterparty, visitor and applicant who interacts with our website or trading desk. This policy explains what information we collect, how we use it, and the choices you have.",
      "By using www.hansariafood.com you consent to the practices described here. If you do not agree, please stop using the site.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "Contact information you provide voluntarily through enquiry forms or email — such as your name, company, phone number, email address and commodity requirement.",
      "Technical information collected automatically — IP address, browser type, pages viewed, referring URLs, and approximate location. This is standard log data used to secure and improve the site.",
      "Commercial correspondence — contract copies, KYC documents and quality inspection records that we exchange with you as part of the trading relationship.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "To respond to enquiries, prepare quotations, and execute trades and shipments.",
      "To comply with statutory obligations such as GST filings, FEMA reporting, and anti-money-laundering checks.",
      "To send you occasional market briefs and updates — you can unsubscribe at any time by replying \u201Cunsubscribe\u201D to the mail.",
      "To improve website performance, diagnose issues and defend against fraud.",
    ],
  },
  {
    heading: "Sharing your information",
    body: [
      "We do not sell your personal data. We share information only with (a) service providers under confidentiality (logistics partners, surveyors, banks, legal counsel), (b) regulators when required by law, and (c) our internal desk on a need-to-know basis.",
    ],
  },
  {
    heading: "Data retention & security",
    body: [
      "We retain enquiry and contract data for the duration of our commercial relationship and for as long thereafter as required by applicable Indian law (typically up to eight years for tax purposes).",
      "We follow reasonable technical and organisational safeguards — encrypted email channels for KYC, restricted access controls, and periodic backups. No system is 100% secure; you share data at your own risk.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You may request access to, correction of, or deletion of the personal data we hold about you by writing to info@hansariafood.com. We will respond within 30 days.",
      "You may also opt out of marketing communications and withdraw consent at any time, without affecting past processing.",
    ],
  },
  {
    heading: "Cookies",
    body: "Our website uses only essential cookies to remember your preferences and analytics cookies to understand traffic patterns. You can disable cookies in your browser settings; some features may not work as intended if you do.",
  },
  {
    heading: "Changes to this policy",
    body: "We may update this Privacy Policy from time to time. The \u201CLast updated\u201D date at the top reflects the most recent revision. Material changes will be highlighted on this page for at least 30 days.",
  },
  {
    heading: "Contact",
    body: "For any privacy-related question, write to us at info@hansariafood.com or call +91-83369-24060.",
  },
];

const PrivacyPolicy = () => (
  <LegalPage
    testId="privacy-page"
    eyebrow="Privacy Policy"
    title="Your data, handled with care."
    subtitle="A plain-language explanation of how Hansaria Foods collects, uses and protects the personal information of counterparties, visitors and applicants."
    lastUpdated="01 December 2025"
    sections={sections}
  />
);

export default PrivacyPolicy;
