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
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#3581bb",
                secondary: "#46a7ca",
            },
            backgroundImage: {
                "primary-gradient": "linear-gradient(135deg, #3581bb 0%, #46a7ca 100%)",
            },
            fontFamily: {
                heading: ["var(--font-sora)", "sans-serif"],
                body: ["var(--font-sora)", "sans-serif"],
            }
        },
    },
    plugins: [],
};
export default config;
