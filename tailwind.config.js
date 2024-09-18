const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        logo: "#191E3B",
        gray: {
          25: "#FAFAFA",
          50: "#F2F2F2",
          100: "#EBEBEB",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#A1A1A1",
          500: "#878787",
          600: "#999",
          650: "#7A7A7A",
          700: "#374151",
          800: "#3C3C3C",
        },
        green: {
          100: "#DCFCE7",
          600: "#16A34A",
        },
        success: "#7DDAA4",
        indigo: { 500: "#6366F1" },
        zinc: { 600: "#52525B" },
        "accent-purple": "#4C42D7",
        tokens: {
          secondary: "#6B7280",
          tertiary: "#9CA3AF",
        },
        "input-field": "#EAEEF2",
        "input-label": "#8E9CB2",
        "input-placeholder": "rgba(24, 41, 82, 0.4)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      fontSize: {
        caption: "12px",
        body: "14px",
        xl: "16px",
        heading: "18px",
        "heading-2": "20px",
        "heading-3": "22px",
        "heading-4": "24px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      padding: {
        8.5: "34px",
        10.5: "42px",
        11.5: "46px",
        13: "52px",
        17: "68px",
        18: "72px",
        19: "76px",
        22: "88px",
        23: "92px",
      },
      margin: {
        8.5: "34px",
        10.5: "42px",
        11.5: "46px",
        13: "52px",
        17: "68px",
        18: "72px",
        19: "76px",
        22: "88px",
        23: "92px",
      },
      width: {
        8.5: "34px",
        10.5: "42px",
        11.5: "46px",
        13: "52px",
        17: "68px",
        18: "72px",
        19: "76px",
        22: "88px",
        23: "92px",
      },
      height: {
        8.5: "34px",
        10.5: "42px",
        11.5: "46px",
        13: "52px",
        17: "68px",
        18: "72px",
        19: "76px",
        22: "88px",
        23: "92px",
      },
      boxShadow: {
        sm: "0px 1px 1px 0px rgba(0, 0, 0, 0.25)",
        card: "2px -2px 6px 0px rgba(0, 0, 0, 0.05), -2px 2px 6px 0px rgba(0, 0, 0, 0.05)",
      },
      gap: {
        4.5: "18px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
