"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Shield, GitBranch, Activity, Code2 } from "lucide-react";

const services = [
    {
        icon: Server,
        title: "Kubernetes Architecture",
        description:
            "Production-ready cluster design, multi-environment onboarding, and live migration planning. Helm charts, Istio mesh, admission policies, and RBAC — architected for scale, documented for your team.",
        tags: ["K8s", "Helm", "Istio", "Docker"],
        accent: "from-blue-500/20 to-blue-600/5 border-blue-500/25 hover:border-blue-400/50",
        iconColor: "text-blue-400",
    },
    {
        icon: Cloud,
        title: "Multi-Cloud Infrastructure",
        description:
            "AWS, Azure, and GCP infrastructure built with Terraform. Cost optimisation audits, resource cleanup automation, and cloud-native architecture reviews that actually save money.",
        tags: ["AWS", "Azure", "GCP", "Terraform"],
        accent: "from-orange-500/20 to-orange-600/5 border-orange-500/25 hover:border-orange-400/50",
        iconColor: "text-orange-400",
    },
    {
        icon: Shield,
        title: "DevSecOps Implementation",
        description:
            "Security baked into CI/CD, not bolted on. Trivy image scanning, custom admission controllers, RBAC governance, base image hardening, and Git hook enforcement — all automated.",
        tags: ["Trivy", "RBAC", "Admission Controllers", "OPA"],
        accent: "from-rose-500/20 to-rose-600/5 border-rose-500/25 hover:border-rose-400/50",
        iconColor: "text-rose-400",
    },
    {
        icon: GitBranch,
        title: "CI/CD Pipeline Engineering",
        description:
            "Jenkins and GitLab pipelines built for zero-downtime deployments. Automated testing gates, Ansible-driven provisioning, and rollback strategies that work at 3 AM.",
        tags: ["Jenkins", "GitLab CI", "Ansible", "GitOps"],
        accent: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/25 hover:border-emerald-400/50",
        iconColor: "text-emerald-400",
    },
    {
        icon: Activity,
        title: "Observability & SRE",
        description:
            "Team-scoped Prometheus + Grafana dashboards, ELK pipelines, and Datadog/New Relic integration. SLO design and alert tuning so your team sees signal, not noise.",
        tags: ["Prometheus", "Grafana", "ELK", "Datadog"],
        accent: "from-purple-500/20 to-purple-600/5 border-purple-500/25 hover:border-purple-400/50",
        iconColor: "text-purple-400",
    },
    {
        icon: Code2,
        title: "Infrastructure as Code",
        description:
            "Terraform modules and Ansible playbooks built for handoff. Your team inherits clean, documented, maintainable infrastructure — not a black box only one person understands.",
        tags: ["Terraform", "Ansible", "SaltStack", "Python"],
        accent: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/25 hover:border-cyan-400/50",
        iconColor: "text-cyan-400",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <p className="text-emerald-400 font-mono text-sm font-semibold mb-3 tracking-widest uppercase">
                    What I Deliver
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                    Contract <span className="text-emerald-400">Services</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Scoped engagements or long-term embedded contracts. I integrate into your team,
                    deliver production-grade infrastructure, and leave documentation your engineers
                    can actually maintain.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((svc, i) => {
                    const Icon = svc.icon;
                    return (
                        <motion.div
                            key={svc.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            whileHover={{ y: -4 }}
                            className={`bg-gradient-to-br ${svc.accent} border rounded-2xl p-6 transition-all duration-300 cursor-default`}
                        >
                            <div className={`w-10 h-10 rounded-xl bg-slate-900/80 flex items-center justify-center mb-4 ${svc.iconColor}`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-slate-100 font-bold text-base mb-2">{svc.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">{svc.description}</p>
                            <div className="flex flex-wrap gap-1.5">
                                {svc.tags.map((t) => (
                                    <span key={t} className="text-xs font-mono text-slate-500 bg-slate-900/60 px-2 py-0.5 rounded-md border border-slate-700/50">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
