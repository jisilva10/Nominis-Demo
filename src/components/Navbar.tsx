"use client";

import { Home, Users, Briefcase, FileText, Phone } from "lucide-react";
import { NavBar as TubelightNavBar } from "@/components/ui/tubelight-navbar";

export const Navbar = () => {
    const navItems = [
        { name: "Inicio", url: "#", icon: Home },
        { name: "Servicios", url: "#servicios", icon: Briefcase },
        { name: "Nosotros", url: "#nosotros", icon: Users },
        { name: "Artículos", url: "#articulos", icon: FileText },
        { name: "Contacto", url: "#contacto", icon: Phone },
    ];

    return (
        <>
            {/* Fixed Logo - Top Left, No Container/Background */}
            <div className="fixed top-6 left-6 z-50 w-20 md:w-24 pointer-events-none">
                <img
                    src="https://imgur.com/sbqOVQH.png"
                    alt="Nominis Logo"
                    className="w-full h-auto object-contain brightness-0 pointer-events-auto"
                />
            </div>

            {/* Tubelight Navbar */}
            <TubelightNavBar items={navItems} />
        </>
    );
};
