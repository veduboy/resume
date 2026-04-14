"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
    {
        company: "Nagarro",
        role: "Senior DevOps Engineer",
        period: "2021 – Present",
        focus: "Infrastructure Automation · DevSecOps · Observability",
        bullets: {
            "Infrastructure & Cloud Automation": [
                "Architected and led end-to-end Kubernetes migration for Production and Test2 — eliminating manual provisioning and reducing deployment lead time significantly.",
                "Automated K8s Master/Node setup via Ansible playbooks, enabling repeatable, auditable cluster bootstrapping with zero manual intervention.",
                "Designed multi-stage environment strategy evaluating ConfigServer vs ConfigMap trade-offs, standardising configuration management across 4+ environments.",
                "Implemented network-level stage-to-production call blocking, preventing accidental cross-environment data leakage — a critical compliance requirement.",
            ],
            "Security & DevSecOps": [
                "Engineered custom Kubernetes Admission Controller that prevents zero-replica deployments in production — eliminating an entire class of outages.",
                "Integrated Trivy container scanning into Jenkins pipelines, catching critical CVEs before images reach any cluster.",
                "Designed and rolled out team-scoped RBAC onboarding framework, enabling self-service access control without cluster-admin involvement.",
                "Hardened base images and enforced pre-commit standards via Husky hooks — shifting security left into the developer workflow.",
            ],
            "Monitoring & Observability": [
                "Built team-scoped Prometheus + Grafana dashboards for error rates, uptime, resource utilisation, and CPU throttling — enabling self-service debugging.",
                "Deployed centralised monitoring and alerting stack, reducing mean-time-to-detect (MTTD) for production incidents.",
                "Eliminated redundant Nginx service-to-service routing calls, cutting inter-service latency and reducing unnecessary network hops.",
            ],
        },
    },
    {
        company: "OpsTree Solutions",
        role: "DevOps Engineer",
        period: "Jan 2020 – Apr 2021",
        focus: "Kubernetes Scaling · High Availability · Automation",
        bullets: {
            "Kubernetes & Infrastructure": [
                "Implemented horizontal pod autoscaling and fine-tuned HAProxy load balancing for traffic spikes exceeding 10x baseline load.",
                "Built Jenkins-driven automation for Kafka topic provisioning and consumer group lifecycle — reducing ops toil from hours to minutes.",
                "Designed and executed quarterly Disaster Recovery drills, validating RPO/RTO targets across multi-region infrastructure.",
            ],
        },
    },
    {
        company: "HCL Technologies",
        role: "SRE Engineer",
        period: "Nov 2017 – Jan 2020",
        focus: "Platform Engineering · Incident Response · Cloud Migration",
        bullets: {
            "SRE & Cloud": [
                "Bootstrapped production Kubernetes clusters from bare metal on IBM Cloud Private — full lifecycle from cluster initialisation to workload onboarding.",
                "Built Python-based automation framework for microservices deployment and health monitoring, reducing manual deployment effort by ~70%.",
                "Established incident response runbooks and on-call processes, measurably reducing Mean Time To Recovery (MTTR) across production services.",
            ],
        },
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <p className="text-emerald-400 font-mono text-sm font-semibold mb-3 tracking-widest uppercase">
                    Track Record
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                    Professional <span className="text-emerald-400">Journey</span>
                </h2>
            </motion.div>

            <div className="relative border-l-2 border-emerald-500/20 ml-4 md:ml-10 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        className="relative pl-8 md:pl-12"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#020817]" />

                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-all">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                                <span className="text-sm font-mono text-emerald-400 flex items-center gap-2 mt-1 md:mt-0">
                                    <Calendar className="w-4 h-4" /> {exp.period}
                                </span>
                            </div>
                            <h4 className="text-lg text-slate-300 font-medium mb-1 flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-slate-500" /> {exp.company}
                            </h4>
                            <p className="text-slate-500 text-sm font-mono mb-5">{exp.focus}</p>

                            {Object.entries(exp.bullets).map(([category, items]) => (
                                <div key={category} className="mb-5 last:mb-0">
                                    <p className="text-emerald-400/80 text-sm font-semibold mb-2.5 tracking-wide">
                                        {category}
                                    </p>
                                    <ul className="space-y-2">
                                        {(items as string[]).map((item: string, i: number) => (
                                            <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-2.5">
                                                <span className="text-emerald-500 mt-0.5 shrink-0">▸</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
