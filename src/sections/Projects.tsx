import boraNegocios from "../assets/bora_negocios.jpg";
import corretei from "../assets/corretei.png";
import dreMetrics from "../assets/dre_metrics.png";
import meycare from "../assets/meycare.jpg";
import turing from "../assets/turing.jpeg";
import zucaEntregas from "../assets/zuca.png";
import { ProjectCard } from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Bora Negócios",
      description:
        "Projeto financeiro, onde é possível fazer solicitaçoes de empréstimo, simular parcelas, e acompanhar o status da solicitação.  ",
      image: boraNegocios,
      tools: ["Flutter", "Next JS", "PostgreSQL", "Firebase"],
    },
    {
      id: 2,
      title: "Turing",
      description:
        "Projeto que envolveu o uso de IA e mapeaamento para fazer o gerêncimento de plantações.  ",
      image: turing,
      tools: ["Flutter", "Dart", "Firebase"],
    },
    {
      id: 3,
      title: "Zuca Entregas",
      description:
        "Projeto de logística, onde é possível solicitar entregas entre filiais de uma empresa, e acompanhar o status da entrega.  ",
      image: zucaEntregas,
      tools: ["Flutter", "Dart", "Firebase"],
    },
    {
      id: 4,
      title: "Corretei",
      description:
        "Projeto consite em um sistema que conecta corretores de imóveis a pessoas que desejam vender ou alugar seus imóveis.",
      image: corretei,
      tools: ["Flutter", "PostgreSQL", "Firebase"],
    },
    {
      id: 5,
      title: "DRE Metrics",
      description:
        "Aplicativo de gestão financeira para pequenas e médias empresas.  ",
      image: dreMetrics,
      tools: ["Flutter", "Dart", "Firebase"],
    },
    {
      id: 6,
      title: "Meycare",
      description:
        "Aplicativo de vendas de produtos capilares, onde é possível ganahr pontos a cada compra, e trocar por descontos e produtos grátis.  ",
      image: meycare,
      tools: ["Flutter", "Dart", "Firebase"],
    },
    // {
    //   id: 3,
    //   title: "Sistema de Ancompanhamento - TITAN",
    //   description:
    //     "Projeto financeiro, onde é possível fazer solicitaçoes de empréstimo, simular parcelas, e acompanhar o status da solicitação.  ",
    //   image: boraNegocios,
    //   tools: ["Flutter", "Next JS", "PostgreSQL", "Firebase"],
    // },
  ];

  return (
    <section className="min-h-screen flex flex-col px-6 md:px-[10%] gap-10 py-20 ">
      <h2 className="text-3xl font-bold">Meus Projetos</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tools={project.tools}
            // Add link pro projeto
          />
        ))}
      </div>
    </section>
  );
}
