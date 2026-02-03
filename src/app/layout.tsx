import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Google Fonts
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Nominis - Agencia Estratégica",
    description: "Agencia de relaciones públicas, comunicación digital y BTL.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={cn(inter.variable, outfit.variable, "font-body antialiased bg-gradient-to-br from-[#3581bb] to-[#46a7ca] min-h-screen text-white relative overflow-x-hidden")}>
                {children}
            </body>
        </html>
    );
}
