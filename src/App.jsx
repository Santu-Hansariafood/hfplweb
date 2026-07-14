import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, useEffect, Suspense } from "react";
import { Toaster } from "sonner";
import { Layout } from "./components/Layout";
import { Helmet } from "react-helmet-async";
import { COMPANY } from "./lib/constants";
import { Loading } from "./components/Loading";
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
const ITServices = lazy(() => import("./pages/ITServices"));

const prefetchOnIdle = () => {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(
      () => {
        import("./pages/About");
        import("./pages/Commodities");
        import("./pages/Services");
        import("./pages/ITServices");
      },
      { timeout: 3000 },
    );
  } else {
    setTimeout(() => {
      import("./pages/About");
      import("./pages/Commodities");
      import("./pages/Services");
      import("./pages/Clients");
      import("./pages/Team");
      import("./pages/Contact");
      import("./pages/PrivacyPolicy");
      import("./pages/Disclaimer");
      import("./pages/TermsOfUse");
      import("./pages/ITServices");
    }, 2000);
  }
};

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
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description ? (
        <meta name="twitter:description" content={description} />
      ) : null}
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

function App() {
  useEffect(() => {
    prefetchOnIdle();
  }, []);

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
                <Suspense fallback={<Loading />}>
                  <>
                    <Seo
                      title="About"
                      description="Learn about Hansaria Food: a disciplined trading desk built on decades of commodity, logistics and market experience."
                      path="/about"
                    />
                    <About />
                  </>
                </Suspense>
              }
            />
            <Route
              path="/commodities"
              element={
                <Suspense fallback={<Loading />}>
                  <>
                    <Seo
                      title="Commodities"
                      description="Explore our core traded commodities including maize, wheat, broken rice, millet, soya bean D.O.C. and mustard D.O.C."
                      path="/commodities"
                    />
                    <Commodities />
                  </>
                </Suspense>
              }
            />
            <Route
              path="/services"
              element={
                <Suspense fallback={<Loading />}>
                  <>
                    <Seo
                      title="Services"
                      description="Our services cover international presence, market intelligence analysis and principal-grade execution."
                      path="/services"
                    />
                    <Services />
                  </>
                </Suspense>
              }
            />
            <Route
              path="/clients"
              element={
                <Suspense fallback={<Loading />}>
                  <>
                    <Seo
                      title="Clients"
                      description="Clients we support across trading, feed, distilleries and processing with reliable delivery and quality conformance."
                      path="/clients"
                    />
                    <Clients />
                  </>
                </Suspense>
              }
            />
            <Route
              path="/team"
              element={
                <Suspense fallback={<Loading />}>
                  <>
                    <Seo
                      title="Team"
                      description="Meet the Hansaria Food team driving commodity trading, risk management and logistics execution."
                      path="/team"
                    />
                    <Team />
                  </>
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<Loading />}>
                  <>
                    <Seo
                      title="Contact"
                      description="Get in touch with Hansaria Food for commodity enquiries, quotes and partnerships."
                      path="/contact"
                    />
                    <Contact />
                  </>
                </Suspense>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <Suspense fallback={<Loading />}>
                  <>
                    <Seo
                      title="Privacy Policy"
                      description="Read the Hansaria Food privacy policy."
                      path="/privacy-policy"
                    />
                    <PrivacyPolicy />
                  </>
                </Suspense>
              }
            />
            <Route
              path="/disclaimer"
              element={
                <Suspense fallback={<Loading />}>
                  <>
                    <Seo
                      title="Disclaimer"
                      description="Read the Hansaria Food disclaimer."
                      path="/disclaimer"
                    />
                    <Disclaimer />
                  </>
                </Suspense>
              }
            />
            <Route
              path="/terms-of-use"
              element={
                <Suspense fallback={<Loading />}>
                  <>
                    <Seo
                      title="Terms of Use"
                      description="Read the Hansaria Food terms of use."
                      path="/terms-of-use"
                    />
                    <TermsOfUse />
                  </>
                </Suspense>
              }
            />
            <Route
              path="/it-services"
              element={
                <Suspense fallback={<Loading />}>
                  <>
                    <Seo
                      title="IT Services"
                      description="Explore the IT services offered by Hansaria Food."
                      path="/it-services"
                    />
                    <ITServices />
                  </>
                </Suspense>
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
