import ProjectCarousel from "@/components/ProjectCarousel";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24">
      <section className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold">
          Projetos <span className="text-blue-400">em destaque</span>
        </h1>

        <p className="text-gray-300 mt-2 max-w-2xl">
          Alguns projetos para você ter uma prévia rápida. Passe o mouse para pausar e
          clique para explorar.
        </p>

        <div className="mt-8">
          <ProjectCarousel items={projects} />
        </div>
      </section>
    </main>
  );
}
