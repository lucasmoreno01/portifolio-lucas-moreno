import boraNegocios from "../assets/bora_negocios.jpg";
import turing from "../assets/turing.jpeg";
import zucaEntregas from "../assets/zuca.png";
import corretei from "../assets/corretei.png";
import dreMetrics from "../assets/dre_metrics.png";
import meycare from "../assets/dre_metrics.png";
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
        "Projeto financeiro, onde é possível fazer solicitaçoes de empréstimo, simular parcelas, e acompanhar o status da solicitação.  ",
      image: turing,
      tools: ["Flutter", "Next JS", "PostgreSQL", "Firebase"],
    },
    {
      id: 3,
      title: "Zuca Entregas",
      description:
        "Projeto financeiro, onde é possível fazer solicitaçoes de empréstimo, simular parcelas, e acompanhar o status da solicitação.  ",
      image: zucaEntregas,
      tools: ["Flutter", "Next JS", "PostgreSQL", "Firebase"],
    },
    {
      id: 3,
      title: "Corretei",
      description:
        "Projeto financeiro, onde é possível fazer solicitaçoes de empréstimo, simular parcelas, e acompanhar o status da solicitação.  ",
      image: corretei,
      tools: ["Flutter", "Next JS", "PostgreSQL", "Firebase"],
    },
    {
      id: 4,
      title: "DRE Metrics",
      description:
        "Projeto financeiro, onde é possível fazer solicitaçoes de empréstimo, simular parcelas, e acompanhar o status da solicitação.  ",
      image: dreMetrics,
      tools: ["Flutter", "Next JS", "PostgreSQL", "Firebase"],
    },
    {
      id: 5,
      title: "Meycare",
      description:
        "Projeto financeiro, onde é possível fazer solicitaçoes de empréstimo, simular parcelas, e acompanhar o status da solicitação.  ",
      image: meycare,
      tools: ["Flutter", "Next JS", "PostgreSQL", "Firebase"],
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
    <section className="min-h-screen flex flex-col px-6 md:px-[10%] gap-10 py-20">
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
