import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "custom-purple": "#573CFF",
      "custom-green": "#4BD8A4",
      "custom-blue": "#0094FF",
      "custom-gray": "#F7F7F7",
    },
  },
  plugins: [],
});
