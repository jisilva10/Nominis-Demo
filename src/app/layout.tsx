import type { Metadata } from "next";
import { Sora } from "next/font/google"; // Using Google Fonts
import "./globals.css";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
    title: "Nominis - Agencia Estratégica",
    description: "Agencia de relaciones públicas, comunicación digital y BTL.",
};

const Scene3D = dynamic(() => import("@/components/3d/Scene3D"), { ssr: false });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={cn(sora.variable, "font-body antialiased bg-transparent text-slate-800 relative w-full max-w-[100vw] overflow-x-hidden")}>
                <Scene3D />
                <div className="relative z-10">
                    {children}
                </div>
            </body>
        </html>
    );
}
