module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-primary": "var(--app-primary)",
        "border-solid": "var(--border-solid)",
        "color-transparent": "var(--color-transparent)",
        "coolgray-700": "var(--coolgray-700)",
        coolgraywhite: "var(--coolgraywhite)",
        outlinethemedarkbaseem: "var(--outlinethemedarkbaseem)",
        "surfacethemedarksurface-1": "var(--surfacethemedarksurface-1)",
        "text-gray": "var(--text-gray)",
        "text-themedark-dangeronbase": "var(--text-themedark-dangeronbase)",
        "text-themedark-highem": "var(--text-themedark-highem)",
        "text-themedark-lowem": "var(--text-themedark-lowem)",
        "text-themedark-medem": "var(--text-themedark-medem)",
        white: "var(--white)",
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
      fontFamily: {
        caption: "var(--caption-font-family)",
        "web-font-primary-heading-6-bold":
          "var(--web-font-primary-heading-6-bold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        'responsive-8xl': 'clamp(2rem, 8vw, 6rem)',
        'responsive-6xl': 'clamp(1.5rem, 6vw, 4rem)',
        'responsive-4xl': 'clamp(1.25rem, 4vw, 2.5rem)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    container: { 
      center: true, 
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      }, 
      screens: { 
        "2xl": "1400px" 
      } 
    },
  },
  plugins: [],
  darkMode: ["class"],
};