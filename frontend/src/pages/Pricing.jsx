import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '$49/mo',
    features: ['Basic Website', '1 Landing Page', 'Email Support'],
  },
  {
    name: 'Growth',
    price: '$99/mo',
    features: ['5 Pages Website', 'Blog Integration', 'Priority Support'],
  },
  {
    name: 'Enterprise',
    price: '$199/mo',
    features: ['Custom Website', 'App Integration', '24/7 Support'],
  },
];

const Pricing = () => {
  return (
    <motion.section
      id="pricing"
      className="py-20 px-4 bg-[#0A192F] text-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Pricing Plans
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="p-6 border border-[#64ffda] rounded-xl bg-[#112240] hover:bg-[#64ffda] hover:text-[#0A192F] transition duration-300 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-4 space-y-2 text-sm font-medium">
              {plan.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="mt-4 bg-white text-[#0A192F] px-5 py-2 rounded-full font-semibold hover:bg-[#64ffda] hover:text-[#0A192F] transition-all"
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Pricing;
