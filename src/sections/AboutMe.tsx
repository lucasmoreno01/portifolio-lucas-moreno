import { AboutSection, TechCategory } from "../components/AboutComponents";

export default function AboutMe() {
  const mobileTools = ["Flutter", "Dart", "React Native", "Swift", "Kotlin"];
  const frontTools = ["React", "Next.js", "TypeScript", "Tailwind CSS", ];
  const backTools = ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "Firebase", "Spring Boot"];
  const otherTools = ["Git", "Docker", "AWS"];

  return (
    <section className="min-h-screen flex flex-col items-start justify-start px-6 md:px-[10%] py-20">
      <div className="flex flex-col gap-6 md:gap-8 md:items-stretch w-full">
        <div className=" md:flex-shrink-0 w-full">
          <AboutSection title="Sobre mim">
            <p className="text-lg text-left">
             Sou Lucas Moreno, engenheiro de software, criativo e grande admirador da tecnologia. Sempre busco desenvolver soluções eficientes e escaláveis utilizando da criatividade para buscar métodos fora da caixa e resultados únicos. 
            </p>
          </AboutSection>
        </div>

        {/* Tecnologias - resto da largura */}
        <div className="md:flex-1">
          <AboutSection title="Tecnologias">
            <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-center md:justify-start">
              <TechCategory title="Mobile" tools={mobileTools} />
              <TechCategory title="Front-end" tools={frontTools} />
              <TechCategory title="Back-end" tools={backTools} />
              <TechCategory title="Outros" tools={otherTools} />
            </div>
          </AboutSection>
        </div>
      </div>
    </section>
  );
}
