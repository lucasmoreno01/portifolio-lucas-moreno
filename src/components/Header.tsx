export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-8 flex items-center justify-between h-16">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Lucas Moreno
        </h1>
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-white/80 hover:text-white transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-white/80 hover:text-white transition-colors"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-white/80 hover:text-white transition-colors"
          >
            Sobre Mim
          </button>
          <button
            onClick={() => scrollToSection("contacts")}
            className="text-white/80 hover:text-white transition-colors"
          >
            Contato
          </button>
        </nav>
      </div>
    </header>
  );
}
