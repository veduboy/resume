import { Mail, Globe, Linkedin, Github } from "lucide-react";

const socials = [
    { icon: Mail,     href: "mailto:vedansh.job@gmail.com",   label: "Email" },
    { icon: Globe,    href: "https://www.iamvedansh.com",      label: "Website", external: true },
    { icon: Linkedin, href: "#",                               label: "LinkedIn" },
    { icon: Github,   href: "#",                               label: "GitHub" },
];

export default function Footer() {
    return (
        <footer className="border-t border-slate-800/60 bg-slate-950/60 py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Brand */}
                <div>
                    <span className="font-mono font-bold text-emerald-400 text-lg">VP<span className="text-slate-600">.dev</span></span>
                    <p className="text-slate-600 text-xs mt-1 font-mono">Senior DevOps Engineer · Remote</p>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-5">
                    {socials.map(({ icon: Icon, href, label, external }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="text-slate-500 hover:text-emerald-400 transition-colors"
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-slate-600 text-xs font-mono">
                    © {new Date().getFullYear()} Vedansh Pachori. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
