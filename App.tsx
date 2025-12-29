import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Expertise } from './pages/Expertise';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Store } from './pages/Store';
import { IMathuratLanding } from './pages/iMathuratLanding';
import { IManzilLanding } from './pages/iManzilLanding';
import { TawafLanding } from './pages/TawafLanding';
import { RuqyahLanding } from './pages/RuqyahLanding';
import { Apps } from './pages/Apps';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-slate-200">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/store" element={<Store />} />
            <Route path="/imathuratpro" element={<IMathuratLanding />} />
            <Route path="/imanzilpro" element={<IManzilLanding />} />
            <Route path="/tawafcounter" element={<TawafLanding />} />
            <Route path="/ruqyah360" element={<RuqyahLanding />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;