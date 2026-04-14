"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = ["Services", "Skills", "Experience", "Contact"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#020817]/80 backdrop-blur-xl border-b border-slate-800/60 py-3"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="font-mono font-bold text-lg text-emerald-400 tracking-wider">
                    VP<span className="text-slate-600">.dev</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                    {links.map((l) => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase()}`}
                            className="hover:text-emerald-400 transition-colors duration-200"
                        >
                            {l}
                        </a>
                    ))}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Available for contracts
                    </div>
                    <a
                        href="mailto:vedansh.job@gmail.com"
                        className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm px-5 py-2 rounded-xl transition-all hover:scale-105 shadow-lg shadow-emerald-500/20"
                    >
                        Hire Me
                    </a>
                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-slate-400 hover:text-slate-100 ml-1"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen
                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-[#020817]/95 backdrop-blur-xl border-t border-slate-800/60 px-6 py-4 flex flex-col gap-4"
                >
                    {links.map((l) => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase()}`}
                            className="text-slate-300 hover:text-emerald-400 transition-colors text-sm font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            {l}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
