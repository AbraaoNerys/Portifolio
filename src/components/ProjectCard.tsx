import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const imgSrc = project.image?.trim(); 

  return (
    <article
      className="
        group relative w-full min-h-[480px]
        rounded-2xl border border-blue-500/20
        bg-slate-900/70 backdrop-blur
        shadow-lg overflow-hidden
        transition
        hover:shadow-xl hover:-translate-y-1 hover:border-blue-400/30
      "
    >
      <div className="relative h-60 overflow-hidden">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={project.title}
            fill
            className="
              object-cover
              scale-[1.02]
              transition duration-500
              group-hover:scale-[1.08]
            "
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          // fallback visual (opcional, mas fica bonito e evita espaço “vazio”)
          <div className="absolute inset-0 bg-slate-950/60" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />

        <div
          className="
            pointer-events-none absolute -left-1/2 top-0 h-full w-1/2
            rotate-12 bg-white/10 blur-2xl
            opacity-0 transition duration-700
            group-hover:opacity-100 group-hover:translate-x-[220%]
          "
        />

        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-2 text-xs text-blue-200 border border-blue-500/20 bg-slate-950/50 px-3 py-1 rounded-full">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Projeto
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col min-h-[220px]">
        <h3 className="text-white font-semibold text-lg leading-snug line-clamp-2">
          {project.title}
        </h3>

        <p className="mt-2 text-gray-300 text-sm leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 6).map((t) => (
            <span
              key={t}
              className="
                text-xs text-white/90
                border border-blue-500/20
                bg-slate-950/40
                px-2.5 py-1 rounded-md
                transition
                group-hover:border-blue-400/30
              "
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5 flex items-center gap-3">
          <a
            href={project.hrefRepo}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center justify-center
              px-4 py-2 rounded-lg
              bg-blue-500 hover:bg-blue-400
              text-white text-sm font-medium
              transition
            "
          >
            Repo →
          </a>

          {project.hrefLive ? (
            <a
              href={project.hrefLive}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center
                px-4 py-2 rounded-lg
                border border-blue-500/30
                bg-slate-950/30
                text-white text-sm font-medium
                hover:bg-slate-900 transition
              "
            >
              Live →
            </a>
          ) : (
            <span className="text-xs text-gray-400 select-none">
              Demo em breve
            </span>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute inset-0 bg-blue-500/12 blur-3xl" />
      </div>
    </article>
  );
}
