import { AiOutlineDownload } from "react-icons/ai";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import lucasImg from "../assets/lucas.jpeg";
import cvFile from "../assets/curriculo_lucas_moreno_dev.pdf";
import { ImageCard } from "../components/ImageCard";

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = 'curriculo_lucas_moreno_dev.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-[10%] gap-10">
      <div className="order-2 md:order-1 max-w-xl text-center md:text-left">
        <h1 className="text-[4rem] font-bold leading-tight">Lucas Moreno</h1>
        <p className="text-[2rem] font-semibold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Engenheiro de Software
        </p> 

        <p className="text-base text-[1.25rem] text-text-muted mt-6">
          Desenvolvendo soluções de forma criativa!
        </p>
        <div className="flex items-center gap-3 mt-4 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/lucas-moreno01"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center border border-border rounded-lg hover:bg-surface transition"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="mailto:lmorenooitabem@gmail.com"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center border border-border rounded-lg hover:bg-surface transition"
          >
            <FaEnvelope size={18} />
          </a>

          <a
            href="https://wa.me/71988326781"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center border border-border rounded-lg hover:bg-surface transition"
          >
            <FaWhatsapp size={18} />
          </a>

          <button
            onClick={handleDownloadCV}
            className="px-4 h-10 border border-border rounded-lg hover:bg-surface transition text-sm font-medium flex items-center gap-2"
          >
            <span>Imprimir CV</span>
            <AiOutlineDownload size={18} />
          </button>
        </div>
      </div>

      <div className="order-1 md:order-2 w-[50%] h-auto md:w-80 md:h-80">
        <ImageCard src={lucasImg} />
      </div>
    </section>
  );
}
