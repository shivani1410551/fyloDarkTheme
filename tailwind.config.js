/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "375px",
      xs: "430px",
      md: "630px",
    },
    extend: {
      colors: {
        DarkBlue1: "hsl(217, 28%, 15%)", // (intro and email sign up background)
        DarkBlue2: "hsl(218, 28%, 13%)", //(main background)
        DarkBlue3: "hsl(216, 53%, 9%)", //(footer background)
        DarkBlue4: "hsl(219, 30%, 18%)", //(testimonials background)
        Cyan: "hsl(176, 68%, 64%)", //(inside call-to-action gradient)
        Blue: "hsl(198, 60%, 50%)", //(inside call-to-action gradient)
        LightRed: "hsl(0, 100%, 63%)", //(error)

        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        primary: "Raleway", // ### Headings, Call-to-actions, Header Navigation
        secondary: "Open sans",
      },
    },
  },
  plugins: [],
};
