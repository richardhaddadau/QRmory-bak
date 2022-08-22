const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "hot-pink-100": "#FDD8D3",
                "hot-pink-200": "#FBABA9",
                "hot-pink-300": "#F47C84",
                "hot-pink-400": "#E95A72",
                "hot-pink-500": "#DB2857",
                "hot-pink-600": "#BC1D56",
                "hot-pink-700": "#9D1452",
                "hot-pink-800": "#7F0C4B",
                "hot-pink-900": "#690747",
            },
            height: {
                "main-card": "584px",
            },
            maxHeight: {
                "selector-window": "512px",
            },
            maxWidth: {
                "main-card": "1200px",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
