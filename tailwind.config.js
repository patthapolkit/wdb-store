import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FBFFE7",
          100: "#F6FCC3",
          300: "#E5F96E",
          400: "#DFF547",
          700: "#C1CD00",
          base: "#DEF81C",
        },
        secondary: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          300: "#E1E1E1",
          500: "#9F9F9F",
          700: "#626262",
          base: "#222222",
        },
        success: "#13CE66",
        info: "#3366FF",
        Warning: "#FFB020",
        danger: "#FF000D",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "32px": "2rem",
        "40px": "40px",
      },
      backgroundImage: {
        imageblock2:
          "url('https://s3-alpha-sig.figma.com/img/d5fe/7eb0/680055de67c3d9c6a271ba03847a3cb9?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QoAoFPFXTGXqVstIsmBMC1Sq3~qsDWeK3I-z3NwP12WOlKPS1Lwe7KRuHjvCBR-cCyxGKAz4wT~tr3KbIMlOZvxVxhTwJspMskLIvd3T24u6GCoZdC4bMjvqCK9AvKo6DoAIgNS1fETMpXgo0ICafS1TR~hg0S2t~hSaZFFlqxpAlo3D6zOREfaMLdPq1GHk1Vj6dsp2QZTpDtwta35OnVf0tc2oj6WuPLBV81ZOYB6IYs3Gig6MczVVDGFoFJz9sxv6iDbh6J4xmTM7lDg9RK8WzVjY91CoOGJRgUDi-fITZ3-OmqgJqx9ymptp5Ki-HNTjerkv5KwkvZBV~zvsFg__')",
        imageblock3:
          "url('https://s3-alpha-sig.figma.com/img/1f4b/d42b/1a0763187b13c1a39bff2d14eb960993?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gEKex1PxYViM7KPPxulfJklZIC7Mqmdn8aQ6mBZNzy7AKrkbgGkbR94W7S7yNlny2yt6SDI4beAzXimPDrZzokvYQtk0kbzz6BLH-bqbUs4sYJ5VEv6GDG8sfGDrFxAVqIKnUgh-gIlDNpTG4NmW8IQGBdtYwd0uoxL5pOeUo8lbUZ593oHFhTEYDaeCSKLFv8WSaAU~sMlkM1clnUVXVQtOB3mxMYObWcHZsanK~6pK~Ar5Nimju5y5n~4xgj-9tqyQqqU6EHoNDKB4SqbPSAIkFlXG-s1BtVx-UMVtsTZPWOyxsUu34J7eU6IWo-RLEL6ZG86---8-EiXLmX70Jw__')",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    theme: false,
    base: false,
    darkTheme: "light",
  },
};
