interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tools: string[];
}

export function ProjectCard({
  title,
  description,
  image,
  tools,
}: ProjectCardProps) {
  return (
    <div className="border-[2px] border-border rounded-2xl overflow-hidden flex flex-col hover:scale-[1.05] transition">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col justify-between flex-1 p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-2 py-1 border border-border rounded-full text-xs font-medium text-text-muted hover:bg-surface transition"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
