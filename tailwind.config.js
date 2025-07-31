/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
      },
      animation: {
        typing: "typing 3s steps(22) forwards",
        blink: "blink 1s step-end 3s infinite",
        typingWithBlink:
          "typing 3s steps(22) forwards, blink 1s step-end 3s infinite",
      },
    },
  },
  plugins: [],
};
