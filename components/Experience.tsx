"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
    {
        company: "Nagarro",
        role: "Senior DevOps Consultant",
        period: "May 2021 – Present",
        focus: "AI Platform · Kubernetes at Scale · Istio Ambient Mesh · DevSecOps",
        bullets: {
            "AI Platform & Autonomous Agent Engineering": [
                "Architected comprehensive local LLM orchestration pipelines using Ollama, NemoClaw, and OpenClaw, advancing organization-wide autonomous AI capabilities while preserving strict data sovereignty.",
                "Engineered advanced AI agent workflows leveraging MCP and Claude API, with secure model lifecycle management via Hugging Face.",
                "Built a secure, air-gapped enterprise AI platform on Ollama + RAG, reducing internal documentation search time by 50%+ while meeting enterprise data-compliance requirements.",
                'Developed "kagent", a proprietary autonomous AI agent for incident triage and log analysis, reducing MTTR for critical P1 incidents by 35%.',
            ],
            "Kubernetes Platform, Networking & Observability": [
                "Spearheaded migration of 50+ microservices to Kubernetes across Production and Staging, operating clusters of 100+ worker nodes with 99.99% uptime and zero-downtime cutovers.",
                "Led enterprise-wide rollout of Istio Ambient Mesh from the ground up; optimized iptables routing and eliminated redundant Nginx hops, cutting service-to-service latency by 25%.",
                "Conducted comparative architecture analysis of Calico, Cilium, and Flannel CNIs to design optimized, secure cluster networking aligned with workload and security requirements.",
                "Implemented Node Problem Detector across large-scale clusters for proactive health monitoring and automated remediation of node-level kernel and hardware faults.",
                "Standardized performance-testing pipelines validating infrastructure resilience under peak loads of 10,000+ RPS.",
            ],
            "Distributed Storage, DR & DevSecOps": [
                "Engineered a highly available distributed storage architecture using MicroCeph on Rocky Linux 9, fully integrated with Velero to guarantee robust Kubernetes backup and disaster recovery.",
                "Enforced production stability via custom Kubernetes Admission Controllers (preventing zero-replica deployments) and integrated Trivy into Jenkins for 100% automated pre-deployment vulnerability scanning.",
                "Managed secure, scalable IoT containerized infrastructure for the Siemens engagement using Terraform and CloudFormation for repeatable IaC deployments.",
                "Operated multi-cloud infrastructure across AWS (EC2, EKS, ECR, RDS) and GCP (GKE, Cloud Armor, Cloud Logging, IAM), applying Terraform modules for consistent cross-cloud provisioning and security hardening.",
            ],
        },
    },
    {
        company: "OpsTree Solutions",
        role: "DevOps Engineer (Onsite: Paytm Bank)",
        period: "Jan 2020 – Apr 2021",
        focus: "Kubernetes Scaling · CI/CD Automation · High Availability",
        bullets: {
            "Kubernetes & Infrastructure": [
                "Engineered dynamic Kubernetes auto-scaling (HPA/VPA), reducing monthly cloud infrastructure cost by 30% while seamlessly handling 3x traffic spikes during critical financial transaction windows.",
                "Automated Jenkins CI/CD pipelines for dynamic Kafka topic provisioning and zero-downtime rolling secret updates, accelerating release velocity by 40%.",
                "Architected fault-tolerant performance-testing environments and configured HAProxy load balancing to validate system resilience prior to major production releases.",
            ],
        },
    },
    {
        company: "HCL Technologies",
        role: "Site Reliability Engineer (SRE)",
        period: "Nov 2017 – Jan 2020",
        focus: "Platform Engineering · High Availability · Immutable Infrastructure",
        bullets: {
            "SRE & Platform Engineering": [
                "Provisioned and operated high-availability on-premises Kubernetes and IBM Cloud Private (ICP) clusters supporting mission-critical enterprise workloads at 99.9% SLA.",
                "Designed Golden AMI CI/CD pipelines using Terraform and Packer, enforcing immutable-infrastructure practices and eliminating deployment drift.",
                "Automated VM provisioning and complex DB2 silent installations, reducing manual infrastructure setup time by over 60%.",
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
