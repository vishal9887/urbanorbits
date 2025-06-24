import React, { useEffect, useState } from "react";

const FAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/faqs`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch FAQs");
        return res.json();
      })
      .then((data) => {
        setFaqs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  if (loading) return <p>Loading FAQs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div key={faq._id} className="mb-4 border rounded-lg overflow-hidden shadow-md bg-white">
          <div
            className="flex justify-between items-center cursor-pointer px-6 py-4 bg-gray-100 hover:bg-gray-200"
            onClick={() => toggleFAQ(index)}
          >
            <div className="w-full text-lg font-medium">{faq.question}</div>
            <div className="text-2xl">{activeIndex === index ? "▲" : "▼"}</div>
          </div>

          {activeIndex === index && (
            <div className="flex px-6 py-4 border-t">
              {/* Left column - Question */}
              <div className="w-1/2 font-semibold text-gray-800 pr-4 border-r">{faq.question}</div>
              {/* Right column - Answer */}
              <div className="w-1/2 text-gray-700 pl-4 whitespace-pre-line">{faq.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
