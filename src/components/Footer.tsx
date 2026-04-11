import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-[10%] py-10 text-white">
      
      <div className="flex flex-col items-center text-center gap-6">

        {/* Texto principal */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          Obrigado por visitar meu portfólio 👋
        </h2>

        <p className="text-text-muted max-w-xl">
          Sou um engenheiro de software apaixonado por criar soluções modernas,
          eficientes e com foco na experiência do usuário.
        </p>

        {/* Ícones */}
        <div className="flex gap-3 mt-2">
          <a
            href="https://www.linkedin.com/in/lucas-moreno01"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-border rounded-lg hover:bg-white/10 transition"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="mailto:lmorenooitabem@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-border rounded-lg hover:bg-white/10 transition"
          >
            <FaEnvelope size={18} />
          </a>

          <a
            href="https://wa.me/71988326781"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-border rounded-lg hover:bg-white/10 transition"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>

        {/* Linha separadora */}
        <div className="w-full h-px bg-border mt-6" />

        {/* Copyright */}
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Lucas Moreno — Desenvolvido com React + Tailwind
        </p>

      </div>
    </footer>
  );
}