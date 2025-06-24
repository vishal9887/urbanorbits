const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { Service, Common } = require("./models/Content"); // ✅ Correct path for your structure


dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const services = [
  {
    title: "Branding & Identity Systems",
    slug: "branding-identity",
    description:
      "We help you build a brand that’s not just seen but remembered. From logo creation to full identity systems, we craft visuals and guidelines that bring consistency, meaning, and recognition to your brand.",
    inclusions: [
      "Logo design & usage system",
      "Color palettes & typography",
      "Brand voice & messaging",
      "Brand guidelines document",
    ],
  },
  {
    title: "Website Creation & Management",
    slug: "website-creation",
    description:
      "We design and develop websites that don’t just look good—but perform. With responsive design and a user-first approach, we make sure your site converts and scales as you grow.",
    inclusions: [
      "UI/UX design",
      "Custom development (no-code or code-based)",
      "Hosting & domain setup",
      "Website maintenance & updates",
    ],
  },
  {
    title: "Email Funnel & Automation",
    slug: "email-funnel",
    description:
      "We help you stay connected with your audience through automated email journeys that nurture leads, increase sales, and build loyalty.",
    inclusions: [
      "Email funnel planning",
      "Copywriting & design",
      "Automation workflows (welcome, abandoned cart, post-purchase, etc.)",
      "Integration with your CRM or store",
    ],
  },
  {
    title: "Digital Marketing Strategy",
    slug: "digital-marketing",
    description:
      "We plan your digital presence end-to-end—from content to campaigns—so you can focus on running your business while we drive growth.",
    inclusions: [
      "Channel & content strategy",
      "Social media plans",
      "Paid ad strategy (Meta/Google)",
      "Performance tracking",
    ],
  },
  {
    title: "E-commerce Setup & Growth",
    slug: "ecommerce-setup",
    description:
      "We make it easy to launch and grow your online store. From product uploads to optimization, we build and refine your shop for sales.",
    inclusions: [
      "Platform setup (Shopify, WooCommerce, etc.)",
      "Product listing & design",
      "Payment & shipping integration",
      "Growth strategy & CRO",
    ],
  },
  {
    title: "AI-Based Integrations",
    slug: "ai-integrations",
    description:
      "We bring the power of AI to your business, automating routine tasks and unlocking smarter workflows to help you work faster and better.",
    inclusions: [
      "Chatbot & virtual assistant setup",
      "AI-based email replies & CRM updates",
      "Data analysis automation",
      "Custom AI tools for business needs",
    ],
  },
];

const commonContent = {
  process: [
    "Understand Your Vision",
    "Plan With Clarity",
    "Design & Build",
    "Test & Refine",
    "Launch & Support",
  ],
  whyChooseUs: [
    "Smart systems, not just services – We don’t sell solutions, we build ecosystems.",
    "Clear communication – No jargon. No fluff. Just honest updates and reliable delivery.",
    "Tailored for growth – Everything we build is designed to scale with you.",
  ],
};

async function seedDB() {
  try {
    await Service.deleteMany();
    await Service.insertMany(services);

    await Common.deleteMany();
    await Common.create(commonContent);

    console.log("✅ Database seeded with services and common content.");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
}

seedDB();
