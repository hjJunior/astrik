/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "white",
      primary: {
        pure: "#181625",
        dark: "#464551",
        medium: "#8B8A92",
        light: "#E8E8E9",
      },
      secondary: {
        pure: "#E92D58",
        dark: "#EB4269",
        medium: "#F06C8A",
        light: "#FDEAEE",
      },
      department: {
        success: {
          dark: "#F968D1",
          pure: "#F842C5",
          medium: "#FB8EDC",
          light: "#FDEAEE",
        },
        marketing: {
          dark: "#F6605D",
          pure: "#F33835",
          medium: "#F88785",
          light: "#FEEBEB",
        },
        sales: {
          dark: "#FF7B43",
          pure: "#FF6D2E",
          medium: "#FFA781",
          light: "#FFF0EA",
        },
        operations: {
          dark: "#F4CF46",
          pure: "#F3CA31",
          medium: "#F8DF83",
          light: "#FDF4D6",
        },
        data: {
          dark: "#B0ED63",
          pure: "#8FE521",
          medium: "#C7F290",
          light: "#E8FAD3",
        },
        finance: {
          dark: "#00D555",
          pure: "#00D555",
          medium: "#66E699",
          light: "#CCF7DD",
        },
        product: {
          dark: "#72ECEC",
          pure: "#4EE8E8",
          medium: "#95F1F1",
          light: "#DCFAFA",
        },
        engineering: {
          dark: "#3DB9FF",
          pure: "#0DA8FF",
          medium: "#86D3FF",
          light: "#DBF2FF",
        },
        design: {
          dark: "#690BC1",
          pure: "#A959F5",
          medium: "#CB9BF9",
          light: "#F2E6FE",
        },
      },
      neutral: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
    },
    boxShadow: {
      1: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
      2: "0px 8px 24px 0px rgba(0, 0, 0, 0.16)",
      3: "0px 16px 32px 0px rgba(0, 0, 0, 0.16)",
      4: "0px 16px 48px 0px rgba(0, 0, 0, 0.24)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(169, 89, 245, 0.8) 36.32%, #A959F5 100%)",
      },
    },
  },
  plugins: [],
};
