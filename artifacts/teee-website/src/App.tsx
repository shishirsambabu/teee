import { Switch, Route, useLocation } from "wouter";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { AnimatePresence, motion } from "framer-motion";

// Pages
import HomePage from "./pages/HomePage";
import TheMethodPage from "./pages/TheMethodPage";
import PlatformPage from "./pages/PlatformPage";
import HowWeWorkPage from "./pages/HowWeWorkPage";
import AboutPage from "./pages/AboutPage";
import InsightsPage from "./pages/InsightsPage";
import ArticlePage from "./pages/ArticlePage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import NotFound from "./pages/not-found";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [location] = useLocation();

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <Switch location={location} key={location}>
            <Route path="/">
              {() => <PageTransition><HomePage /></PageTransition>}
            </Route>
            <Route path="/the-method">
              {() => <PageTransition><TheMethodPage /></PageTransition>}
            </Route>
            <Route path="/platform">
              {() => <PageTransition><PlatformPage /></PageTransition>}
            </Route>
            <Route path="/how-we-work">
              {() => <PageTransition><HowWeWorkPage /></PageTransition>}
            </Route>
            <Route path="/about">
              {() => <PageTransition><AboutPage /></PageTransition>}
            </Route>
            <Route path="/insights">
              {() => <PageTransition><InsightsPage /></PageTransition>}
            </Route>
            <Route path="/insights/:slug">
              {() => <PageTransition><ArticlePage /></PageTransition>}
            </Route>
            <Route path="/contact">
              {() => <PageTransition><ContactPage /></PageTransition>}
            </Route>
            <Route path="/privacy-policy">
              {() => <PageTransition><PrivacyPolicyPage /></PageTransition>}
            </Route>
            <Route path="/terms">
              {() => <PageTransition><TermsPage /></PageTransition>}
            </Route>
            <Route>
              {() => <PageTransition><NotFound /></PageTransition>}
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
