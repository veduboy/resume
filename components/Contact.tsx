"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Clock, Zap, ShieldCheck, Linkedin } from "lucide-react";

const trust = [
    { icon: Zap,          label: "Immediate availability",  sub: "Can start this week" },
    { icon: Clock,        label: "Timezone flexible",       sub: "CET · EST · GST overlap" },
    { icon: Globe,        label: "Fully remote",            sub: "US · UK · EU · UAE" },
    { icon: ShieldCheck,  label: "Production-proven",       sub: "8+ years, 3 companies" },
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl overflow-hidden border border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm p-10 md:p-16 text-center"
                >
                    {/* Glow */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-4 py-2 rounded-full mb-7">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Open to new engagements
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4 leading-tight">
                            Need Reliable<br />
                            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                Infrastructure?
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                            Whether you need a Kubernetes migration, a security audit of your
                            CI/CD pipeline, or someone to own your cloud infrastructure
                            end-to-end — I&apos;ll scope it clearly and deliver on time. No surprises.
                        </p>

                        {/* CTA buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <a
                                href="mailto:vedansh.job@gmail.com"
                                className="group flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl shadow-emerald-500/25 text-base"
                            >
                                <Mail className="w-5 h-5" />
                                vedansh.job@gmail.com
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vedanshpachori/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-[#0077b5] hover:bg-[#0091d6] text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-900/30 text-base"
                            >
                                <Linkedin className="w-5 h-5" />
                                LinkedIn
                            </a>
                            <a
                                href="https://veduboy.github.io/resume/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 border border-slate-600 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 font-semibold px-8 py-4 rounded-xl transition-all text-base"
                            >
                                <Globe className="w-5 h-5" />
                                Portfolio
                            </a>
                        </div>

                        {/* Trust signals */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
                            {trust.map((t) => {
                                const Icon = t.icon;
                                return (
                                    <div key={t.label} className="flex flex-col items-center gap-1.5">
                                        <Icon className="w-5 h-5 text-emerald-400/70" />
                                        <span className="text-slate-300 text-sm font-medium">{t.label}</span>
                                        <span className="text-slate-600 text-xs font-mono">{t.sub}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
