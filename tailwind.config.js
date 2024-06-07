/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      sora: ["Sora", "sans-serif"]
    },
    extend: {
      fontSize: {
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        26: "26px",
        30: "30px",
        34: "34px"
      },
      boxShadow: {
        "md": "6px 6px 16px 0 rgba(0, 0, 0, 0.25), -4px -4px 12px 0 rgba(255, 255, 255, 0.3);"
      },
    },
  },
  plugins: [],
};
