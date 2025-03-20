/** @type {import {'tailwindcss'}.config} */
modlue.exports = {
    content: ["./*.{html,js"],
    theme: {
        screens: {
            sm: "340px",
            md: "540px",
            lg: "768x",
            xl: "1180px",	
        },
        extend: {},
        container: {
            center: true,
            padding: {
                default: "12px",
                md: "32px",
            }
        }
    },
    plugins: [],
    content: [
        "./src/**/*.{html,js}",
        "./*.{html,js}",
      ],
      darkMode: 'class',
      theme: {
        extend: {},
      },
      plugins: [],
}