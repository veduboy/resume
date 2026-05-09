"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import Avatar from "./Avatar";

/* ─── Terminal ─────────────────────────────────── */
type TermLine = { kind: "cmd" | "out" | "ok"; text: string };

const SEQUENCE: TermLine[] = [
    { kind: "cmd", text: "aws eks update-kubeconfig --name prod-eu-west" },
    { kind: "ok",  text: "✓  Context: arn:aws:eks:eu-west-1:prod-cluster" },
    { kind: "cmd", text: "kubectl rollout status deploy/api -n production" },
    { kind: "out", text: '   Waiting... "api" 0 of 3 replicas ready' },
    { kind: "ok",  text: "✓  Deployment successfully rolled out" },
    { kind: "cmd", text: "trivy image api:v3.1.0 --severity CRITICAL,HIGH" },
    { kind: "ok",  text: "✓  Total: 0 (CRITICAL: 0, HIGH: 0) — clean" },
    { kind: "cmd", text: "terraform apply -auto-approve" },
    { kind: "ok",  text: "✓  Apply complete! 12 added, 3 changed, 0 destroyed" },
];

function delay(ms: number) {
    return new Promise<void>((r) => setTimeout(r, ms));
}

type DisplayLine = TermLine & { display: string; done: boolean };

function Terminal() {
    const [lines, setLines] = useState<DisplayLine[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let alive = true;

        async function run() {
            setLines([]);
            await delay(600);

            for (const line of SEQUENCE) {
                if (!alive) return;

                if (line.kind === "cmd") {
                    const partial: DisplayLine = { ...line, display: "", done: false };
                    setLines((prev) => [...prev, partial]);
                    for (let i = 0; i <= line.text.length; i++) {
                        if (!alive) return;
                        await delay(38);
                        setLines((prev) => {
                            const next = [...prev];
                            next[next.length - 1] = { ...next[next.length - 1], display: line.text.slice(0, i) };
                            return next;
                        });
                    }
                    setLines((prev) => {
                        const next = [...prev];
                        next[next.length - 1].done = true;
                        return next;
                    });
                    await delay(280);
                } else {
                    await delay(180);
                    setLines((prev) => [...prev, { ...line, display: line.text, done: true }]);
                    await delay(350);
                }

                /* scroll inside the terminal only — never the page */
                if (scrollRef.current) {
                    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
                }
            }

            await delay(3500);
            if (alive) run();
        }

        run();
        return () => { alive = false; };
    }, []);

    return (
        <div className="rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-black/50 bg-[#0d1117] font-mono text-sm">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/60 border-b border-slate-700/50">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-slate-500 text-xs">vedansh@cloud — zsh</span>
            </div>

            {/* Body — scroll contained here */}
            <div ref={scrollRef} className="p-5 h-72 overflow-y-auto scrollbar-hide">
                {lines.map((line, i) => (
                    <div key={i} className="mb-1 leading-relaxed">
                        {line.kind === "cmd" && (
                            <span>
                                <span className="text-emerald-400">❯ </span>
                                <span className="text-slate-200">{line.display}</span>
                                {!line.done && (
                                    <span className="inline-block w-2 h-4 bg-emerald-400 ml-0.5 animate-pulse align-middle" />
                                )}
                            </span>
                        )}
                        {line.kind === "ok" && (
                            <span className="text-emerald-400/90 pl-4">{line.display}</span>
                        )}
                        {line.kind === "out" && (
                            <span className="text-slate-500 pl-4">{line.display}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ─── Rotating role titles ──────────────────────── */
const ROLES = ["DevOps Engineer", "Cloud Architect", "K8s Specialist", "Platform Engineer", "DevSecOps Lead"];

/* ─── Hero ──────────────────────────────────────── */
export default function Hero() {
    const [roleIdx, setRoleIdx] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setRoleIdx((i) => (i + 1) % ROLES.length);
        }, 2800);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 hero-glow">
            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* ── Left ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Available badge */}
                        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/25 px-4 py-2 rounded-full mb-7">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Open to contracts · EU · US · UAE
                        </div>

                        {/* Avatar */}
                        <div className="mb-6">
                            <Avatar />
                        </div>

                        {/* Name */}
                        <p className="text-slate-500 font-mono text-base mb-1 tracking-widest uppercase">
                            Vedansh Pachori
                        </p>

                        {/* Role */}
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2 text-slate-100">
                            Senior
                        </h1>
                        <div className="h-16 md:h-20 flex items-center mb-6">
                            <AnimatePresence mode="wait">
                                <motion.h1
                                    key={ROLES[roleIdx]}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -16 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
                                >
                                    {ROLES[roleIdx]}
                                </motion.h1>
                            </AnimatePresence>
                        </div>

                        {/* Bio */}
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                            8+ years engineering production-grade infrastructure for enterprise teams.
                            From zero-to-production Kubernetes clusters to multi-cloud cost optimisation
                            and security hardening — I deliver systems that scale without surprises.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 mb-10">
                            <a
                                href="#contact"
                                className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-emerald-500/25"
                            >
                                Let&apos;s Talk
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                            <a
                                href="/Vedansh-Pachori-Resume.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 font-semibold px-7 py-3.5 rounded-xl transition-all"
                            >
                                <Download className="w-4 h-4" />
                                Download CV
                            </a>
                        </div>

                        {/* Timezone bar */}
                        <div className="flex flex-wrap gap-5 text-sm text-slate-500 font-mono">
                            <span>🌍 CET / GMT</span>
                            <span>🇺🇸 EST / PST</span>
                            <span>🇦🇪 GST (UAE)</span>
                            <span className="text-emerald-600">📡 Remote-first</span>
                        </div>
                    </motion.div>

                    {/* ── Right: Terminal ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="hidden lg:block"
                    >
                        <Terminal />

                        {/* Floating tech badges */}
                        <div className="mt-6 flex flex-wrap gap-2 justify-center">
                            {["Kubernetes", "Istio Ambient", "Terraform", "AWS", "GCP", "Prometheus", "Trivy", "Ollama"].map((t) => (
                                <span key={t} className="text-xs font-mono text-slate-500 bg-slate-800/60 border border-slate-700/50 px-3 py-1 rounded-full">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <ChevronDown className="w-6 h-6 text-slate-600 animate-bounce" />
            </div>
        </section>
    );
}
