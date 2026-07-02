import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Toaster } from "sonner";
import { Layout } from "./components/Layout";
import { Helmet } from "react-helmet-async";
import { COMPANY } from "./lib/constants";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Commodities = lazy(() => import("./pages/Commodities"));
const Services = lazy(() => import("./pages/Services"));
const Clients = lazy(() => import("./pages/Clients"));
const Team = lazy(() => import("./pages/Team"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://hansariafood.com";

function Seo({ title, description, path }) {
  const canonical = new URL(path || "/", SITE_URL).toString();
  const ogImage = new URL(COMPANY.logo || "/logo.png", SITE_URL).toString();
  const fullTitle = title ? `${title} | ${COMPANY.name}` : COMPANY.name;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description ? <meta name="description" content={description} /> : null}
      <link rel="canonical" href={canonical} />
      <meta property="og:site_name" content={COMPANY.name} />
      <meta property="og:title" content={fullTitle} />
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description ? <meta name="twitter:description" content={description} /> : null}
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <>
                  <Seo
                    title="Home"
                    description="Hansaria Food is a physical commodity trading house specialising in cereals, oil seeds and feed supplements across India and South/South-East Asia."
                    path="/"
                  />
                  <Home />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Seo
                    title="About"
                    description="Learn about Hansaria Food: a disciplined trading desk built on decades of commodity, logistics and market experience."
                    path="/about"
                  />
                  <About />
                </>
              }
            />
            <Route
              path="/commodities"
              element={
                <>
                  <Seo
                    title="Commodities"
                    description="Explore our core traded commodities including maize, wheat, broken rice, millet, soya bean D.O.C. and mustard D.O.C."
                    path="/commodities"
                  />
                  <Commodities />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <Seo
                    title="Services"
                    description="Our services cover international presence, market intelligence analysis and principal-grade execution."
                    path="/services"
                  />
                  <Services />
                </>
              }
            />
            <Route
              path="/clients"
              element={
                <>
                  <Seo
                    title="Clients"
                    description="Clients we support across trading, feed, distilleries and processing with reliable delivery and quality conformance."
                    path="/clients"
                  />
                  <Clients />
                </>
              }
            />
            <Route
              path="/team"
              element={
                <>
                  <Seo
                    title="Team"
                    description="Meet the Hansaria Food team driving commodity trading, risk management and logistics execution."
                    path="/team"
                  />
                  <Team />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Seo
                    title="Contact"
                    description="Get in touch with Hansaria Food for commodity enquiries, quotes and partnerships."
                    path="/contact"
                  />
                  <Contact />
                </>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <>
                  <Seo title="Privacy Policy" description="Read the Hansaria Food privacy policy." path="/privacy-policy" />
                  <PrivacyPolicy />
                </>
              }
            />
            <Route
              path="/disclaimer"
              element={
                <>
                  <Seo title="Disclaimer" description="Read the Hansaria Food disclaimer." path="/disclaimer" />
                  <Disclaimer />
                </>
              }
            />
            <Route
              path="/terms-of-use"
              element={
                <>
                  <Seo title="Terms of Use" description="Read the Hansaria Food terms of use." path="/terms-of-use" />
                  <TermsOfUse />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Seo
                    title="Home"
                    description="Hansaria Food is a physical commodity trading house specialising in cereals, oil seeds and feed supplements across India and South/South-East Asia."
                    path="/"
                  />
                  <Home />
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;
