// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#0f0f0f',
//         secondary: '#1f1f1f',
//       }
//     },
//   },
//   plugins: [],
// };
// tailwind.config.js


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        sidebarBg: "#1E293B",
        sidebarItem: "#28354A",
        mainBg: "#1E2A3A",
        cardBg: "#283547",
        pillBg: "#28354A",
        pillHover: "#3C4A66",
        textLight: "#E2E8F0",
        textMuted: "#94A3B8",
        borderColor: "#334155",
      },
    },
  },
  plugins: [],
};


