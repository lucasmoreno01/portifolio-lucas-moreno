import type { FormEvent } from "react";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const contactItems = [
  {
    title: "Email",
    description: "lmorenooitabem@gmail.com",
    href: "mailto:lmorenooitabem@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "LinkedIn",
    description: "linkedin.com/in/lucas-moreno01",
    href: "https://www.linkedin.com/in/lucas-moreno01",
    icon: FaLinkedin,
  },
  {
    title: "WhatsApp",
    description: "+55 71 98832-6781",
    href: "https://wa.me/71988326781",
    icon: FaWhatsapp,
  },
];

export default function Contacts() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const subject = `Contato via portfólio: ${name}`;
    const body = `Nome: ${name}\nEmail: ${email}\nMensagem:\n${message}`;

    window.location.href = `mailto:lmorenooitabem@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="min-h-screen flex flex-col items-start justify-start px-6 md:px-[10%] py-10">
      <div className="max-w-3xl mb-10">
        <h2 className="text-3xl font-bold">Entre em contato</h2>
        <p className="text-lg text-left text-white/50 mt-3">
          Deseja desenvolver um projeto, fechar uma parceria? vamos conversar,
          entre em contato!
        </p>
      </div>

      <div className="w-full grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div className="rounded-[32px] border border-border bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="text-2xl font-semibold mb-6">Envie uma mensagem</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="flex flex-col gap-2 text-sm text-white/80">
              Nome
              <input
                name="name"
                type="text"
                placeholder="Seu nome"
                className="rounded-3xl border border-border bg-transparent px-4 py-3 text-white outline-none transition focus:border-primary"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-white/80">
              Email
              <input
                name="email"
                type="email"
                placeholder="seu@email.com"
                className="rounded-3xl border border-border bg-transparent px-4 py-3 text-white outline-none transition focus:border-primary"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-white/80">
              Mensagem
              <textarea
                name="message"
                rows={6}
                placeholder="Escreva sua mensagem aqui..."
                className="rounded-3xl border border-border bg-transparent px-4 py-3 text-white outline-none transition focus:border-primary resize-none"
                required
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
            >
              Enviar mensagem
            </button>
          </form>
        </div>

        <div className="grid gap-5">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[32px] border border-border bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-surface/20 text-primary transition group-hover:bg-primary/10">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase text-white/50">
                      {item.title}
                    </p>
                    <p className="mt-2 font-medium text-white/90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
