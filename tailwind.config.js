/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                opaque: 'rgba(255,255,255,0.4)',
            },
        },
    },
    plugins: [],
};
