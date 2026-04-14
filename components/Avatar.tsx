export default function Avatar() {
    return (
        <div className="relative w-40 h-40 mx-auto">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl" />
            <div className="relative w-full h-full rounded-full border-2 border-emerald-500/40 overflow-hidden bg-slate-800 flex items-center justify-center">
                {/* Cartoon SVG avatar — replace the <svg> block with <img src="/avatar.jpg" ... /> when you have a real photo */}
                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    {/* Background */}
                    <circle cx="100" cy="100" r="100" fill="#0f172a" />

                    {/* Body / shirt */}
                    <ellipse cx="100" cy="175" rx="52" ry="38" fill="#10b981" />
                    {/* Collar */}
                    <polygon points="88,145 100,162 112,145" fill="#f1f5f9" />

                    {/* Neck */}
                    <rect x="91" y="128" width="18" height="18" rx="4" fill="#fcd9a0" />

                    {/* Head */}
                    <ellipse cx="100" cy="105" rx="38" ry="42" fill="#fcd9a0" />

                    {/* Hair */}
                    <ellipse cx="100" cy="68" rx="38" ry="18" fill="#1e293b" />
                    <rect x="62" y="68" width="76" height="14" fill="#1e293b" />
                    {/* Side hair */}
                    <ellipse cx="65" cy="90" rx="8" ry="14" fill="#1e293b" />
                    <ellipse cx="135" cy="90" rx="8" ry="14" fill="#1e293b" />

                    {/* Ears */}
                    <ellipse cx="63" cy="108" rx="7" ry="9" fill="#fcd9a0" />
                    <ellipse cx="137" cy="108" rx="7" ry="9" fill="#fcd9a0" />

                    {/* Eyes */}
                    <ellipse cx="86" cy="105" rx="7" ry="8" fill="white" />
                    <ellipse cx="114" cy="105" rx="7" ry="8" fill="white" />
                    <circle cx="87" cy="106" r="4" fill="#1e293b" />
                    <circle cx="115" cy="106" r="4" fill="#1e293b" />
                    {/* Eye shine */}
                    <circle cx="89" cy="104" r="1.5" fill="white" />
                    <circle cx="117" cy="104" r="1.5" fill="white" />

                    {/* Eyebrows */}
                    <path d="M79 96 Q86 91 93 95" stroke="#1e293b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <path d="M107 95 Q114 91 121 96" stroke="#1e293b" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                    {/* Nose */}
                    <path d="M97 113 Q100 119 103 113" stroke="#e8b87a" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                    {/* Smile */}
                    <path d="M88 124 Q100 134 112 124" stroke="#c97b4b" strokeWidth="2" fill="none" strokeLinecap="round" />

                    {/* Laptop hint (DevOps vibe) */}
                    <rect x="68" y="178" width="64" height="8" rx="2" fill="#334155" />
                    <rect x="72" y="170" width="56" height="10" rx="2" fill="#1e293b" />
                    <text x="100" y="178" textAnchor="middle" fontSize="6" fill="#10b981" fontFamily="monospace">&gt;_ k8s</text>
                </svg>
            </div>
        </div>
    );
}
