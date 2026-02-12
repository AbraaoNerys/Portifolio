export type Project = {
  title: string;
  summary: string;
  tech: string[];
  hrefRepo: string;
  hrefLive?: string;
  image: string; 
};

export const projects: Project[] = [
  {
    title: "SGE - Sistema de Gerenciamento Empresarial",
    summary: "Gestão de estoque, alertas e multiusuário. Foco em fluxo rápido e organização.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    hrefRepo: "https://github.com/AbraaoNerys",
    image: "/projects/sge.png",
  },
  {
    title: "EducaIA (Hackathon)",
    summary: "Plataforma educacional com foco em experiência do usuário e entregas rápidas.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    hrefRepo: "https://github.com/AbraaoNerys/Hackaton",
    image: "/projects/educaia.png",
  },
  {
    title: "Automação/Rotinas (Contábil)",
    summary: "Automação de processos e geração de relatórios para ganho de produtividade.",
    tech: ["Python", "Excel", "Dados"],
    hrefRepo: "https://github.com/AbraaoNerys",
    image: "",
  },
];
