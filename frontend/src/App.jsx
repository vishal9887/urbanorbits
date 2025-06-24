import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Help';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import Help from './pages/Help';
import UserGuide from './pages/UserGuide';
import FAQs from './pages/FAQs';
import ContactForm from './pages/ContactForm'; 
import ServiceExplorer from "./pages/ServiceExplorer";


import '@fontsource/poppins';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* Help Center Routes */}
        <Route path="/help" element={<Help />} />
        <Route path="/help/user-guide" element={<UserGuide />} />
        <Route path="/help/faqs" element={<FAQs />} />
        <Route path="/help/contact" element={<ContactForm />} />
         <Route path="/explore-services" element={<ServiceExplorer />} />
      </Routes>

      {/* Conditionally render Footer */}
      {location.pathname !== '/' && <Footer />}
    </>
  );
}

export default App;
