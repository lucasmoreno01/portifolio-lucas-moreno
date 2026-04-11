import React from "react";

interface AboutSectionProps {
  title: string;
  children: React.ReactNode;
}

export function AboutSection({ title, children }: AboutSectionProps) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-white/5 p-6 backdrop-blur-xl transition">
      
      <h2 className="text-2xl md:text-3xl font-semibold">
        {title}
      </h2>

      <div className="text-text-muted leading-relaxed">
        {children}
      </div>

    </div>
  );
}

interface TechCategoryProps {
  title: string;
  tools: string[];
}

export function TechCategory({ title, tools }: TechCategoryProps) {
  return (
    <div className="rounded-2xl border-[2px] border-border p-[12px] flex-1">
      <p className="text-xl font-bold mb-[12px]">{title}</p>
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
  );
}
