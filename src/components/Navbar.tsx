"use client";

import { useState, useEffect } from "react";
import { Home, Users, Briefcase, FileText, Phone, X } from "lucide-react";
import { NavBar as TubelightNavBar } from "@/components/ui/tubelight-navbar";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { name: "Inicio", url: "#", icon: Home },
        { name: "Servicios", url: "#servicios", icon: Briefcase },
        { name: "Nosotros", url: "#nosotros", icon: Users },
        { name: "Artículos", url: "#articulos", icon: FileText },
        { name: "Contacto", url: "#contacto", icon: Phone },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Fixed Logo - Top Left - Visible only on scroll */}
            <div
                className={cn(
                    "fixed top-6 left-6 z-50 w-20 md:w-24 pointer-events-none transition-opacity duration-300",
                    isScrolled ? "opacity-100" : "opacity-0"
                )}
            >
                <img
                    src="https://imgur.com/sbqOVQH.png"
                    alt="Nominis Logo"
                    className="w-full h-auto object-contain brightness-0 pointer-events-auto"
                />
            </div>

            {/* Mobile Hamburger Button - Top Right - Visible only on scroll on mobile */}
            <div
                className={cn(
                    "fixed top-6 right-6 z-50 md:hidden transition-opacity duration-300 cursor-pointer",
                    isScrolled ? "opacity-100" : "opacity-0"
                )}
                onClick={() => setIsOpen(true)}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
                    alt="Menu"
                    className="w-8 h-8 object-contain invert"
                />
            </div>

            {/* Tubelight Navbar - Desktop Only */}
            <div className="hidden md:block">
                <TubelightNavBar items={navItems} />
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        <button
                            className="absolute top-6 right-6 text-foreground p-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <div className="flex flex-col items-center gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.url}
                                    className="text-2xl font-semibold text-foreground/80 hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
