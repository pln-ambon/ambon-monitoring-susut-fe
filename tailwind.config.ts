import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sidenav: {
          DEFAULT: "hsl(var(--sidenav))",
          item: {
            DEFAULT: "hsl(var(--sidenav-item))",
            foreground: "hsl(var(--sidenav-item-foreground))",
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        table: {
          header: {
            DEFAULT: "hsl(var(--table-header))",
            foreground: "hsl(var(--table-header-foreground))",
          },
          row: {
            DEFAULT: "hsl(var(--table-row))",
            foreground: "hsl(var(--table-row-foreground))",
          },
        },
        badge: {
          info: {
            DEFAULT: "hsl(var(--badge-info-background))",
            foreground: "hsl(var(--badge-info-foreground))",
          },
          success: {
            DEFAULT: "hsl(var(--badge-success-background))",
            foreground: "hsl(var(--badge-success-foreground))",
          },
          warning: {
            DEFAULT: "hsl(var(--badge-warning-background))",
            foreground: "hsl(var(--badge-warning-foreground))",
          },
          danger: {
            DEFAULT: "hsl(var(--badge-danger-background))",
            foreground: "hsl(var(--badge-danger-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--badge-muted-background))",
            foreground: "hsl(var(--badge-muted-foreground))",
          },
        },
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
    },
  },
  plugins: [],
};
export default config;
