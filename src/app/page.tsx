import Image from "next/image";
import ProjectCarousel from "../components/ProjectCarousel";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24">
      <section className="max-w-6xl w-full mx-auto px-6 flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-slate-900 border border-blue-500/20 rounded-2xl p-10 shadow-lg w-full">
          
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Olá, eu sou <span className="text-blue-400">Abraão Davi</span>
            </h1>

            <h2 className="text-xl text-blue-300 mb-6">
              Desenvolvedor Back-end (Java & Spring Boot) | Full Stack
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Desenvolvedor com foco em back-end utilizando Java e Spring Boot,
              especializado na criação de APIs REST modernas e escaláveis.
              Atualmente atuo também como full stack, desenvolvendo aplicações
              completas com Next.js e TypeScript.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/AbraaoNerys"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-400 rounded-lg transition font-medium"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/abra%C3%A3o-nerys-692583213/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-blue-400 hover:bg-blue-400 hover:text-black rounded-lg transition font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>

          
          <div className="flex justify-center md:justify-end relative">

            
            <div className="absolute w-[320px] h-[320px] bg-blue-500/20 blur-3xl rounded-full" />

            <Image
              src="/profile.jpeg"
              alt="Foto Abraão"
              width={300}
              height={300}
              className="
                relative
                rounded-2xl
                border border-blue-500/30
                shadow-xl
                object-cover
                hover:scale-[1.03]
                transition
              "
              priority/>

        </div>
        </div>
      </section>
    </main>
  );
}
