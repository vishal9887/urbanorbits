import { useEffect, useState } from "react";
// import { getUserGuide } from "../utils/api";

const UserGuide = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">User Guide</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
        <p>
          Urban Orbit is your digital partner for branding, web development, and automation.
          Explore our services through the navigation menu and contact us for personalized support.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Choosing the Right Service</h2>
        <p>
          Whether you need branding, website development, or marketing automation, we
          provide tailored solutions to help your business grow efficiently.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Our Process</h2>
        <p>
          After contacting us, expect a smooth journey from discovery to execution and delivery.
          We collaborate closely to ensure your vision is realized.
        </p>
      </section>
    </div>
  );
};

export default UserGuide;
