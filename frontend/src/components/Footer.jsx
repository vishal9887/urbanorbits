import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-black text-white px-4 sm:px-6 py-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">
        {/* Branding */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Urban Orbits</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Innovating your digital presence with smart solutions and seamless experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="/services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Connect With Us</h3>
          <p className="text-sm">Email: <a href="mailto:contact@urbanorbits.in" className="hover:text-blue-400 transition">contact@urbanorbits.in</a></p>
          <div className="flex justify-center sm:justify-start gap-5 mt-4 flex-wrap">
            <a href="#" aria-label="Facebook"><Facebook className="hover:text-blue-400 transition" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="hover:text-blue-400 transition" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="hover:text-blue-400 transition" /></a>
            <a href="mailto:contact@urbanorbits.in" aria-label="Mail"><Mail className="hover:text-blue-400 transition" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 pt-4 border-t border-gray-700 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Urban Orbits. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;