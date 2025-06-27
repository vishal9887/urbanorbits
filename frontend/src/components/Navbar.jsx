import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, Loader2 } from "lucide-react";
import RotatingText from "react-rotating-text";
import axios from "axios";
import logo from '../assets/logo.png';


const suggestions = [
  "Branding & Identity Systems",
  "Website Creation & Management",
  "Email & Funnel Automation",
  "Digital Marketing Strategy",
  "E-commerce Setup & Growth",
  "AI-Based Integrations",
];

const serviceSlugMap = {
  "Branding & Identity Systems": "branding-identity",
  "Website Creation & Management": "website-creation",
  "Email & Funnel Automation": "email-funnel",
  "Digital Marketing Strategy": "digital-marketing",
  "E-commerce Setup & Growth": "ecommerce-setup",
  "AI-Based Integrations": "ai-integrations",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [results, setResults] = useState(null);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    if (value.length >= 4) {
      const matches = suggestions.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredSuggestions(matches);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleFocus = () => setIsEditing(true);

  const handleBlur = () => {
    if (searchText === "") {
      setIsEditing(false);
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const slug = serviceSlugMap[suggestion];
    if (slug) {
      navigate(`/explore-services?slug=${slug}`);
    } else {
      navigate(`/explore-services?slug=invalid-slug`);
    }
    setSearchText("");
    setFilteredSuggestions([]);
    setIsEditing(false);
    setResults(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchText.trim()) {
      const slug = serviceSlugMap[searchText.trim()];
      if (slug) {
        navigate(`/explore-services?slug=${slug}`);
      } else {
        navigate(`/explore-services?slug=invalid-slug`);
      }
      setIsEditing(false);
      setResults(null);
      setSearchText("");
      setFilteredSuggestions([]);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchText.trim()) {
        setResults(null);
        return;
      }
      setIsLoading(true);
      try {
        const res = await axios.get(`/api/search?q=${encodeURIComponent(searchText)}`);
        setResults(res.data);
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(fetchResults, 400);
    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <nav className="w-full px-8 py-4 bg-[#f1efec] text-black sticky top-0 z-30 shadow-lg">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto w-full">
        <div className="flex items-center gap-6">
          <img src={logo} alt="Urban Orbits Logo" className="w-[70px] h-[70px]" />
          <span className="text-xl sm:text-2xl font-bold mr-80">Urban Orbits</span>
        </div>

        <ul className="flex gap-10 items-center text-sm flex-grow justify-start">
          <li>
            <Link to="/" className={`transition-colors ${isActive("/") ? "text-blue-400 font-semibold" : "hover:text-blue-400"}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`transition-colors ${isActive("/about") ? "text-blue-400 font-semibold" : "hover:text-blue-400"}`}>
              About
            </Link>
          </li>

          <li className="flex-1 max-w-[25vw] bg-[#f1efec] relative">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                value={searchText}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                placeholder=""
                className="w-full pl-10 pr-10 py-4 rounded-full border border-gray-300 bg-[#f1efec] text-sm text-gray-700 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
              />

              {isLoading && (
                <Loader2 className="animate-spin h-5 w-5 text-gray-500 absolute right-4 top-1/2 transform -translate-y-1/2" />
              )}

              {!isEditing && !filteredSuggestions.length && !isLoading && (
                <div className="absolute inset-y-0 left-10 flex items-center text-sm text-gray-700 pointer-events-none">
                  <span className="relative">
                    Search for
                    <span className="text-black font-medium"> “
                      <span
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="inline-block"
                      >
                        {!isHovering ? (
                          <RotatingText
                            items={suggestions}
                            typingInterval={80}
                            deletingInterval={50}
                            pause={1500}
                          />
                        ) : (
                          <span>{suggestions[0]}</span>
                        )}
                      </span>
                    ”</span>
                  </span>
                </div>
              )}

              {filteredSuggestions.length > 0 && (
                <ul className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-lg p-2 z-50 text-sm">
                  {filteredSuggestions.map((item, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleSuggestionClick(item)}
                      className="cursor-pointer hover:bg-gray-100 p-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {(isLoading && searchText.trim()) ? (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-lg p-4 z-50 text-sm text-center">
                  <Loader2 className="animate-spin h-5 w-5 mx-auto mb-2" />
                  <p>Loading results...</p>
                </div>
              ) : (
                results && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-lg p-4 z-50 text-sm max-h-60 overflow-auto">
                    {Object.entries(results).map(([key, items]) =>
                      items.length > 0 ? (
                        <div key={key} className="mb-2">
                          <h4 className="font-semibold capitalize text-gray-700 mb-1">{key}</h4>
                          <ul className="list-disc list-inside text-gray-800">
                            {items.map((item, idx) => (
                              <li key={idx}>
                                {item.title || item.question || item.name || "Untitled"}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null
                    )}
                  </div>
                )
              )}
            </div>
          </li>

          <li>
            <Link to="/contact" className={`transition-colors ${isActive("/contact") ? "text-blue-400 font-semibold" : "hover:text-blue-400"}`}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blog" className={`transition-colors ${isActive("/blog") ? "text-blue-400 font-semibold" : "hover:text-blue-400"}`}>
              Blog
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          {isOpen ? (
            <X onClick={() => setIsOpen(false)} className="cursor-pointer" aria-label="Close menu" />
          ) : (
            <Menu onClick={() => setIsOpen(true)} className="cursor-pointer" aria-label="Open menu" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-700 px-6 py-4 rounded-lg shadow-lg">
          <ul className="flex flex-col gap-4 text-sm text-white">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-400">About</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Contact</Link></li>
            <li><Link to="/blog" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Blog</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
