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
                sans: ["quatro-slab", ...defaultTheme.fontFamily.serif],
                header: ["marydale", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "qrmory-purple-100": "#F0D0F7",
                "qrmory-purple-200": "#DEA4F0",
                "qrmory-purple-300": "#B66FD2",
                "qrmory-purple-400": "#8444A6",
                "qrmory-purple-500": "#49176B",
                "qrmory-purple-600": "#39105C",
                "qrmory-purple-700": "#2A0B4D",
                "qrmory-purple-800": "#1E073E",
                "qrmory-purple-900": "#150433",
            },
            backgroundImage: {
                hero: "url('/img/header-bg.webp')",
            },
            backgroundSize: {
                hero: "cover",
            },
            backgroundPosition: {
                hero: "center",
            },
            spacing: {
                4.5: "18px",
            },
            height: {
                hero: "650px",
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
