import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiUser, FiMail, FiMessageCircle, FiLoader } from "react-icons/fi";
import { MdSubject } from "react-icons/md";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general_queries",
  });
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.dismiss();

    try {
      const response = await fetch("https://urban-u3jp.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Form submitted & email sent!");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
          category: "general_queries",
        });
      } else {
        toast.error("Failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      toast.error("Network error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-10 transition-colors">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-8 rounded-2xl shadow-2xl space-y-6 transition-colors"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <button
              type="button"
              onClick={() => setDark(!dark)}
              className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full"
            >
              {dark ? "🌞 Light" : "🌙 Dark"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full pl-10 p-3 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full pl-10 p-3 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="relative">
            <MdSubject className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <FiMessageCircle className="absolute left-3 top-3 text-gray-400" />
            <textarea
              name="message"
              placeholder="Your message..."
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            />
          </div>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="general_queries">General Queries</option>
            <option value="package_service_queries">Package/Service Queries</option>
            <option value="internship_queries">Internship Queries</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 ${
              loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold rounded-lg shadow-md transition`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <FiLoader className="animate-spin" />
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
