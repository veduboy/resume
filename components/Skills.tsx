"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import clsx from "clsx";

/* ─────────────────────────────────────────────
   Orchestration – animated mesh / k8s nodes
───────────────────────────────────────────── */
function OrchestrationBg() {
    const nodes = [
        { x: 50, y: 30 }, { x: 20, y: 70 }, { x: 80, y: 70 },
        { x: 35, y: 55 }, { x: 65, y: 55 }, { x: 50, y: 80 },
    ];
    const edges = [
        [0, 1], [0, 2], [0, 3], [0, 4],
        [1, 3], [2, 4], [3, 5], [4, 5],
    ];
    const [tick, setTick] = useState(0);
    useAnimationFrame((t) => setTick(t));

    return (
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            {edges.map(([a, b], i) => {
                const pulse = Math.sin(tick / 600 + i) * 0.5 + 0.5;
                return (
                    <line
                        key={i}
                        x1={nodes[a].x} y1={nodes[a].y}
                        x2={nodes[b].x} y2={nodes[b].y}
                        stroke="#3b82f6"
                        strokeWidth="0.8"
                        strokeOpacity={0.3 + pulse * 0.5}
                        strokeDasharray="2 2"
                        strokeDashoffset={-tick / 60}
                    />
                );
            })}
            {nodes.map((n, i) => {
                const pulse = Math.sin(tick / 500 + i * 1.2) * 0.5 + 0.5;
                return (
                    <g key={i}>
                        <circle cx={n.x} cy={n.y} r={2.5 + pulse * 1} fill="#3b82f6" fillOpacity={0.15} />
                        <circle cx={n.x} cy={n.y} r={1.5} fill="#60a5fa" fillOpacity={0.6 + pulse * 0.4} />
                    </g>
                );
            })}
        </svg>
    );
}

/* ─────────────────────────────────────────────
   Cloud – floating clouds + data packets
───────────────────────────────────────────── */
function CloudBg() {
    const [tick, setTick] = useState(0);
    useAnimationFrame((t) => setTick(t));

    const clouds = [
        { cx: 25, cy: 30, r: 10, speed: 0.3 },
        { cx: 70, cy: 22, r: 7,  speed: 0.2 },
        { cx: 55, cy: 55, r: 9,  speed: 0.25 },
    ];
    const packets = [0, 1, 2, 3];

    return (
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            {clouds.map((c, i) => {
                const dy = Math.sin(tick / 800 * c.speed + i) * 3;
                return (
                    <g key={i} transform={`translate(0,${dy})`} opacity="0.5">
                        <circle cx={c.cx} cy={c.cy} r={c.r} fill="#f97316" />
                        <circle cx={c.cx - c.r * 0.5} cy={c.cy + 2} r={c.r * 0.75} fill="#f97316" />
                        <circle cx={c.cx + c.r * 0.5} cy={c.cy + 2} r={c.r * 0.75} fill="#f97316" />
                        <rect x={c.cx - c.r} y={c.cy + 2} width={c.r * 2} height={c.r * 0.8} fill="#f97316" rx="2" />
                    </g>
                );
            })}
            {packets.map((p) => {
                const progress = ((tick / 1200 + p * 0.25) % 1);
                const x = 10 + progress * 80;
                const y = 70 + Math.sin(progress * Math.PI * 2) * 8;
                return (
                    <rect key={p} x={x} y={y} width="3" height="2" rx="0.5"
                        fill="#fb923c" fillOpacity={0.8 - progress * 0.3} />
                );
            })}
        </svg>
    );
}

/* ─────────────────────────────────────────────
   CI/CD – pipeline stages flowing left→right
───────────────────────────────────────────── */
function CICDBg() {
    const [tick, setTick] = useState(0);
    useAnimationFrame((t) => setTick(t));

    const stages = [15, 35, 55, 75, 92];
    const y = 50;

    return (
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            {/* pipe */}
            <line x1="10" y1={y} x2="95" y2={y} stroke="#22c55e" strokeWidth="1" strokeOpacity="0.3" />
            {/* moving packet */}
            {[0, 0.33, 0.66].map((offset, i) => {
                const progress = ((tick / 1500 + offset) % 1);
                const px = 10 + progress * 85;
                return (
                    <circle key={i} cx={px} cy={y} r="2" fill="#4ade80"
                        fillOpacity={0.9 - Math.abs(progress - 0.5) * 0.8} />
                );
            })}
            {/* stage nodes */}
            {stages.map((sx, i) => {
                const pulse = Math.sin(tick / 500 + i * 0.8) * 0.5 + 0.5;
                return (
                    <g key={i}>
                        <rect x={sx - 5} y={y - 7} width="10" height="14" rx="2"
                            fill="#166534" stroke="#22c55e" strokeWidth="0.8"
                            strokeOpacity={0.4 + pulse * 0.5} />
                        <circle cx={sx} cy={y} r="2" fill="#4ade80" fillOpacity={0.5 + pulse * 0.5} />
                    </g>
                );
            })}
            {/* branch lines */}
            <line x1="35" y1={y - 7} x2="35" y2="25" stroke="#22c55e" strokeWidth="0.6" strokeOpacity="0.25" strokeDasharray="2 2" />
            <line x1="55" y1={y - 7} x2="55" y2="75" stroke="#22c55e" strokeWidth="0.6" strokeOpacity="0.25" strokeDasharray="2 2" />
        </svg>
    );
}

/* ─────────────────────────────────────────────
   Observability – live waveform / signal
───────────────────────────────────────────── */
function ObservabilityBg() {
    const [tick, setTick] = useState(0);
    useAnimationFrame((t) => setTick(t));

    const points = Array.from({ length: 40 }, (_, i) => {
        const x = (i / 39) * 100;
        const y = 50
            + Math.sin((i / 39) * Math.PI * 4 + tick / 400) * 12
            + Math.sin((i / 39) * Math.PI * 7 + tick / 250) * 5;
        return `${x},${y}`;
    }).join(" ");

    const points2 = Array.from({ length: 40 }, (_, i) => {
        const x = (i / 39) * 100;
        const y = 65
            + Math.sin((i / 39) * Math.PI * 3 + tick / 600 + 1) * 8;
        return `${x},${y}`;
    }).join(" ");

    return (
        <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <polyline points={points} fill="none" stroke="#a855f7" strokeWidth="1.2" strokeOpacity="0.7" />
            <polyline points={points2} fill="none" stroke="#c084fc" strokeWidth="0.8" strokeOpacity="0.4" />
            {/* alert threshold line */}
            <line x1="0" y1="30" x2="100" y2="30" stroke="#f43f5e" strokeWidth="0.6" strokeOpacity="0.3" strokeDasharray="3 2" />
        </svg>
    );
}

/* ─────────────────────────────────────────────
   Languages – floating code particles
───────────────────────────────────────────── */
function LanguagesBg() {
    const [tick, setTick] = useState(0);
    useAnimationFrame((t) => setTick(t));

    const snippets = ["if", "def", "[]", "#!/", "fn", "{}", "=>", "&&", "||", "for"];
    return (
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            {snippets.map((s, i) => {
                const x = ((i * 17 + 5) % 90) + 5;
                const baseY = ((i * 13 + 10) % 80) + 10;
                const y = baseY + Math.sin(tick / 700 + i * 1.5) * 5;
                const opacity = 0.3 + Math.sin(tick / 500 + i) * 0.2;
                return (
                    <text key={i} x={x} y={y} fontSize="6" fill="#eab308"
                        fillOpacity={opacity} fontFamily="monospace">{s}</text>
                );
            })}
        </svg>
    );
}

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const skills = [
    {
        category: "Orchestration",
        icon: "⎈",
        items: ["Kubernetes", "Helm", "Istio", "Docker", "Vagrant", "KVM"],
        color: "border-blue-500/30 text-blue-400",
        tagColor: "bg-blue-950/60 border-blue-700/40 text-blue-300",
        Bg: OrchestrationBg,
    },
    {
        category: "Cloud",
        icon: "☁",
        items: ["AWS (IoT Core, SiteWise)", "Azure", "GCP", "IBM Cloud", "Pivotal CF"],
        color: "border-orange-500/30 text-orange-400",
        tagColor: "bg-orange-950/60 border-orange-700/40 text-orange-300",
        Bg: CloudBg,
    },
    {
        category: "CI/CD",
        icon: "⚙",
        items: ["Jenkins", "GitLab CI/CD", "Ansible", "SaltStack"],
        color: "border-green-500/30 text-green-400",
        tagColor: "bg-green-950/60 border-green-700/40 text-green-300",
        Bg: CICDBg,
    },
    {
        category: "Observability",
        icon: "◉",
        items: ["ELK Stack", "Prometheus", "Grafana", "Datadog", "New Relic"],
        color: "border-purple-500/30 text-purple-400",
        tagColor: "bg-purple-950/60 border-purple-700/40 text-purple-300",
        Bg: ObservabilityBg,
    },
    {
        category: "Languages",
        icon: "</>",
        items: ["Python", "Bash/Shell", "Groovy", "Core Java"],
        color: "border-yellow-500/30 text-yellow-400",
        tagColor: "bg-yellow-950/60 border-yellow-700/40 text-yellow-300",
        Bg: LanguagesBg,
    },
];

/* ─────────────────────────────────────────────
   Card
───────────────────────────────────────────── */
function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
    const [hovered, setHovered] = useState(false);
    const { Bg } = skill;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={clsx(
                "relative overflow-hidden rounded-2xl border bg-slate-900/60 backdrop-blur-sm p-6 transition-all duration-300 cursor-default",
                skill.color,
                hovered && "scale-[1.02] shadow-lg shadow-black/40"
            )}
        >
            {/* animated background — always mounted, opacity toggled */}
            <div className={clsx("transition-opacity duration-500", hovered ? "opacity-100" : "opacity-40")}>
                <Bg />
            </div>

            {/* content */}
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-mono select-none">{skill.icon}</span>
                    <h3 className="text-lg font-bold tracking-wide">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                        <motion.span
                            key={item}
                            whileHover={{ scale: 1.08 }}
                            className={clsx(
                                "px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200",
                                skill.tagColor
                            )}
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   Section
───────────────────────────────────────────── */
export default function Skills() {
    return (
        <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-100"
            >
                Technical <span className="text-emerald-400">Arsenal</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <SkillCard key={skill.category} skill={skill} index={index} />
                ))}
            </div>
        </section>
    );
}
