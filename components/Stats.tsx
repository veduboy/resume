"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        const steps = 60;
        let step = 0;
        const timer = setInterval(() => {
            step++;
            setCount(Math.round((step / steps) * value));
            if (step >= steps) clearInterval(timer);
        }, 1400 / steps);
        return () => clearInterval(timer);
    }, [inView, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{count}{suffix}
        </span>
    );
}

const stats = [
    { value: 8,   suffix: "+",   label: "Years Experience",     sub: "Since 2017" },
    { value: 50,  suffix: "+",   label: "Microservices Migrated", sub: "100+ worker nodes" },
    { value: 35,  suffix: "%",   label: "MTTR Reduction",        sub: "P1 incidents via kagent" },
    { value: 99,  suffix: ".99%", label: "Uptime Achieved",      sub: "Production clusters" },
];

export default function Stats() {
    return (
        <section className="py-6 border-y border-slate-800/60 bg-slate-900/30 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800/40 rounded-2xl overflow-hidden">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-[#020817] px-8 py-8 text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold font-mono text-emerald-400 mb-1">
                                <Counter value={s.value} suffix={s.suffix} />
                            </div>
                            <div className="text-slate-200 font-semibold text-sm mb-0.5">{s.label}</div>
                            <div className="text-slate-600 text-xs font-mono">{s.sub}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
