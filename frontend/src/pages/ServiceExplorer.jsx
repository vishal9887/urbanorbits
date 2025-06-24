import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  LayoutDashboard,
  Zap,
  Globe2,
} from "lucide-react";

const icons = [Sparkles, ShieldCheck, LayoutDashboard, Zap, Globe2];

// ✅ Hardcoded valid slugs (you can update this list manually)
const validSlugs = [
  "branding-identity",
  "website-creation",
  "email-funnel",
  "digital-marketing",
  "ecommerce-setup",
  "ai-integrations",
];


const ServiceExplorer = () => {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug");
  const [service, setService] = useState(null);
  const [common, setCommon] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // ✅ Frontend-only slug validation
      if (!slug || !validSlugs.includes(slug)) {
        setNotFound(true);
        return;
      }

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/services/${slug}`
        );
        if (!res.data || Object.keys(res.data).length === 0) {
          setNotFound(true);
        } else {
          setService(res.data);
        }

        const commonRes = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/common`
        );
        setCommon(commonRes.data);
      } catch (err) {
        setNotFound(true);
      }
    };

    fetchData();
  }, [slug]);

  if (notFound) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6 bg-gray-100 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-7xl font-extrabold text-red-500 drop-shadow-lg">
          404
        </h1>
        <p className="text-xl font-semibold mt-4">Service Not Found</p>
        <p className="text-sm text-gray-500 mt-2">
          Please try a different service or return home.
        </p>
      </motion.div>
    );
  }

  if (!service) {
    return (
      <p className="text-center mt-10 animate-pulse text-gray-500">
        Loading service...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 px-6 py-12">
      <motion.div
        className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-lg border border-gray-300"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
          {service.title}
        </h1>

        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
          {service.description}
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          What's Included:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.inclusions.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                className="p-5 bg-gray-50 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4">
                  <Icon className="w-6 h-6 text-purple-500" />
                  <span className="text-lg text-gray-800">{item}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {common && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
              Our Process
            </h3>
            <ol className="list-decimal ml-6 text-gray-700 space-y-2">
              {common.process.map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
              Why Choose Us
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              {common.whyChooseUs.map((reason, idx) => (
                <li key={idx} className="leading-relaxed">
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ServiceExplorer;
