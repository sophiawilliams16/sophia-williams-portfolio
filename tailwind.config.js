/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                "med-gray": "#5d4d4579",
                "light-gray": "#e7e3df",
                "dark-gray": "#5b504b",
            },
        },
    },
    plugins: [],
};

