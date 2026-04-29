import { FaWhatsapp, FaInstagram, FaYoutube, FaEnvelope, FaGlobe } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

// ============================================================
//  CONFIGURACIÓN 
// ============================================================
const CONFIG = {
  nombre: "Nex",
  eslogan: "Servicios Aéreos Profesionales",
  // Para usar tu logo: poné el archivo en /public y escribí "/logo-nex-2.png"
  avatar: "/logo-nex-2.png",
  links: {
    email: "nex.servicios.ar@gmail.com",
    whatsapp: "+5493492690948", 
    instagram: "nexaereo_",
    tiktok: "nexaereo_",
    youtube: "@Nexaereo",
    web: "https://www.nexairdata.com.ar/"
  },
};
// ============================================================

const links = [ 
  {
    label: "Website",
    href: `https://www.nexairdata.com.ar/`,
    icon: FaGlobe,
    color: "text-yellow-500",
    bg: "bg-yellow-950/60 hover:bg-yellow-900/60",
    border: "border-yellow-700/50 hover:border-yellow-500",
    glow: "hover:shadow-yellow-900/40",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${CONFIG.links.whatsapp.replace(/\D/g, "")}`,
    icon: FaWhatsapp,
    color: "text-green-400",
    bg: "bg-green-950/60 hover:bg-green-900/60",
    border: "border-green-700/50 hover:border-green-500",
    glow: "hover:shadow-green-900/40",
  },
  {
    label: "Correo Electrónico",
    href: `mailto:${CONFIG.links.email}`,
    icon: FaEnvelope,
    color: "text-sky-400",
    bg: "bg-sky-950/60 hover:bg-sky-900/60",
    border: "border-sky-700/50 hover:border-sky-500",
    glow: "hover:shadow-sky-900/40",
  },
  
  {
    label: "Instagram",
    href: `https://instagram.com/${CONFIG.links.instagram}`,
    icon: FaInstagram,
    color: "text-pink-400",
    bg: "bg-pink-950/60 hover:bg-pink-900/60",
    border: "border-pink-700/50 hover:border-pink-500",
    glow: "hover:shadow-pink-900/40",
  },
  {
    label: "TikTok",
    href: `https://tiktok.com/@${CONFIG.links.tiktok}`,
    icon: FaTiktok,
    color: "text-cyan-300",
    bg: "bg-cyan-950/60 hover:bg-cyan-900/60",
    border: "border-cyan-700/50 hover:border-cyan-500",
    glow: "hover:shadow-cyan-900/40",
  },
  {
    label: "YouTube",
    href: `https://youtube.com/${CONFIG.links.youtube}`,
    icon: FaYoutube,
    color: "text-red-500",
    bg: "bg-red-950/60 hover:bg-red-900/60",
    border: "border-red-700/50 hover:border-red-500",
    glow: "hover:shadow-red-900/40",
  },
  
];

function LinkButton({ label, href, icon: Icon, color, bg, border, glow }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className={`
        flex items-center gap-4 px-6 py-4 rounded-2xl border
        transition-all duration-300 ease-out cursor-pointer select-none
        shadow-lg ${glow} hover:shadow-xl hover:-translate-y-0.5
        ${bg} ${border}
      `}
    >
      <Icon className={`text-2xl flex-shrink-0 ${color}`} />
      <span className="flex-1 text-center text-base font-semibold text-white tracking-wide">
        {label}
      </span>
    </a>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-black flex items-center justify-center px-4 sm:py-12">
      <div className="w-full max-w-md flex flex-col items-center gap-8">

        {/* Logo / Avatar */}
        <div className="flex flex-col items-center gap-1 m-2 md:m-0">
          {CONFIG.avatar ? (
            // Logo: se muestra ancho, sin círculo. mix-blend-screen fusiona el
            // fondo negro del logo con el fondo oscuro de la página.
            <img
              src={CONFIG.avatar}
              alt={CONFIG.nombre}
              className="w-80 sm:w-96 mix-blend-screen drop-shadow-lg"
            />
          ) : (
            // Fallback: círculo con inicial cuando no hay logo
            <>
              <div className="w-24 h-24 rounded-full border-2 border-sky-500 shadow-lg shadow-sky-900/50 bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-sky-400 select-none">
                  {CONFIG.nombre.charAt(0)}
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-white tracking-widest uppercase">
                {CONFIG.nombre}
              </h1>
            </>
          )}
          <div className="w-full max-w-xs">
            <svg width="100%" viewBox="0 0 340 76" xmlns="http://www.w3.org/2000/svg">
              <style>{`
                @keyframes pulse-ring { 0% { r:4; opacity:.85; } 100% { r:11; opacity:0; } }
                @keyframes dash-move  { to { stroke-dashoffset:-24; } }
                @keyframes fade-in    { from { opacity:0; transform:translateY(5px); } to { opacity:1; transform:translateY(0); } }
                @keyframes blink-dot  { 0%,100% { opacity:1; } 50% { opacity:.3; } }
                .sl-dash  { stroke-dasharray:4 4; animation:dash-move 2.2s linear infinite; }
                .sl-pulse { fill:none; animation:pulse-ring 1.8s ease-out infinite; }
                .sl-grp   { animation:fade-in .9s ease-out both; }
                .sl-blink { animation:blink-dot 1.4s ease-in-out infinite; }
              `}</style>

              <line x1="14" y1="38" x2="58" y2="38" stroke="#334155" strokeWidth="0.6" className="sl-dash"/>
              <line x1="14" y1="38" x2="42" y2="22" stroke="#334155" strokeWidth="0.5" opacity="0.7"/>
              <line x1="14" y1="38" x2="42" y2="54" stroke="#334155" strokeWidth="0.5" opacity="0.7"/>
              <line x1="326" y1="38" x2="282" y2="38" stroke="#334155" strokeWidth="0.6" className="sl-dash"/>
              <line x1="326" y1="38" x2="298" y2="22" stroke="#334155" strokeWidth="0.5" opacity="0.7"/>
              <line x1="326" y1="38" x2="298" y2="54" stroke="#334155" strokeWidth="0.5" opacity="0.7"/>

              <circle cx="14"  cy="38" r="2.5" fill="#38bdf8"/>
              <circle cx="14"  cy="38" r="4" className="sl-pulse" stroke="#38bdf8" strokeWidth="1"/>
              <circle cx="326" cy="38" r="2.5" fill="#38bdf8"/>
              <circle cx="326" cy="38" r="4" className="sl-pulse" stroke="#38bdf8" strokeWidth="1" style={{animationDelay:"0.9s"}}/>

              <path d="M68 8 L76 8 L76 16"      fill="none" stroke="#334155" strokeWidth="0.8" opacity="0.9"/>
              <path d="M272 8 L264 8 L264 16"   fill="none" stroke="#334155" strokeWidth="0.8" opacity="0.9"/>
              <path d="M68 68 L76 68 L76 60"    fill="none" stroke="#334155" strokeWidth="0.8" opacity="0.9"/>
              <path d="M272 68 L264 68 L264 60" fill="none" stroke="#334155" strokeWidth="0.8" opacity="0.9"/>

              <g className="sl-grp">
                <circle cx="92" cy="18" r="2.2" fill="#38bdf8" className="sl-blink"/>
                <text x="99" y="22"
                  fontFamily="monospace" fontSize="8" letterSpacing="2.5"
                  fill="#38bdf8" opacity="0.90">SYS · ONLINE</text>

                <text x="170" y="38"
                  textAnchor="middle" fontFamily="system-ui, sans-serif"
                  fontSize="16" fontWeight="500" letterSpacing="3"
                  fill="#f1f5f9">SERVICIOS AÉREOS</text>

                <text x="170" y="54"
                  textAnchor="middle" fontFamily="system-ui, sans-serif"
                  fontSize="16" fontWeight="500" letterSpacing="3"
                  fill="#cbd5e1">PROFESIONALES</text>
              </g>

              <line x1="110" y1="64" x2="230" y2="64" stroke="#334155" strokeWidth="0.5" opacity="0.5"/>
            </svg>
          </div>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-2.5">
          {links.map((link) => (
            <LinkButton key={link.label} {...link} />
          ))}
        </div>

        {/* Footer */}
        <p className="text-slate-600 text-xs mt-2">
          © {new Date().getFullYear()} {CONFIG.nombre}
        </p>
      </div>
    </main>
  );
}
