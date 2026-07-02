import { LegalPage } from "../components/LegalPage";

const sections = [
  {
    heading: "General information",
    body: [
      "The information published on www.hansariafood.com is provided by Hansaria Foods for general informational purposes only. While we make every effort to keep the content accurate and current, we make no representations or warranties of any kind — express or implied — about the completeness, accuracy, reliability, or availability of the information contained on the site.",
    ],
  },
  {
    heading: "Not an offer to trade",
    body: [
      "Nothing on this website constitutes an offer, solicitation, or recommendation to buy or sell any commodity, contract, or derivative. Prices, specifications, and availability referenced anywhere on this site are indicative and are subject to change without notice.",
      "All binding trades are executed only through written confirmations issued by Hansaria Foods and countersigned by the counterparty.",
    ],
  },
  {
    heading: "Market intelligence",
    body: [
      "Any market briefs, price commentary, or forecasts shared on this website or through our mailing list are the personal views of our analysts based on publicly available data. They are not investment advice.",
      "You should independently verify any information and consult your own advisors before taking commercial decisions. Hansaria Foods will not be liable for any losses arising from reliance on the content published here.",
    ],
  },
  {
    heading: "External links",
    body: "This website may contain links to third-party sites. We are not responsible for the content, privacy practices, or availability of any linked site. Inclusion of a link does not imply endorsement.",
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the maximum extent permitted by law, Hansaria Foods, its directors, employees and agents disclaim all liability for any direct, indirect, incidental, consequential or special damages arising out of the use of, or inability to use, this website or any information contained herein.",
    ],
  },
  {
    heading: "Governing law",
    body: "This disclaimer is governed by the laws of India. Any dispute arising in connection with this website shall be subject to the exclusive jurisdiction of the courts at Kolkata.",
  },
  {
    heading: "Contact",
    body: "If you believe any information on this site is inaccurate or misleading, please write to info@hansariafood.com and we will review it promptly.",
  },
];

const Disclaimer = () => (
  <LegalPage
    testId="disclaimer-page"
    eyebrow="Disclaimer"
    title="What this website is — and isn't."
    subtitle="Important notes on the informational nature of this website, market intelligence, and the limits of our liability."
    lastUpdated="01 December 2025"
    sections={sections}
  />
);

export default Disclaimer;
