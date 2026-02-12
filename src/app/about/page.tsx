export default function AboutPage() {
  const skills = [
    { group: "Back-end (foco)", items: ["Java", "Spring Boot", "APIs REST", "JWT/Auth", "PostgreSQL", "Docker"] },
    { group: "Front-end (atuo)", items: ["Next.js", "TypeScript", "React", "Tailwind CSS"] },
    { group: "Base", items: ["Git/GitHub", "Clean Code", "Boas práticas", "Deploy", "Modelagem de dados"] },
  ];

  const highlights = [
    {
      title: "Java & Spring Boot",
      text: "Meu foco principal é construir APIs REST bem estruturadas, escaláveis e fáceis de manter.",
    },
    {
      title: "Full Stack quando precisa",
      text: "Também desenvolvo aplicações completas com Next.js + TypeScript, integrando frontend moderno com backend sólido.",
    },
    {
      title: "Problema real → solução",
      text: "Gosto de criar sistemas que resolvem processos do dia a dia com clareza, performance e experiência do usuário.",
    },
  ];

  const timeline = [
    {
      title: "Hoje",
      text: "Aprimorando Java/Spring e arquitetura de APIs (boas práticas, organização e escalabilidade).",
    },
    {
      title: "Experiência prática",
      text: "Projetos e freelas com Next.js/TypeScript, integração com APIs e construção de interfaces modernas.",
    },
    {
      title: "Base acadêmica",
      text: "Ciência da Computação + aprendizado contínuo, sempre fortalecendo fundamentos e engenharia de software.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24">
      <section className="max-w-6xl mx-auto px-6">
        
        <div className="bg-slate-900/70 border border-blue-500/20 rounded-2xl p-10 shadow-lg">
          <div className="flex flex-col gap-6">
            <div>
              <p className="inline-flex items-center gap-2 text-sm text-blue-200 border border-blue-500/20 bg-slate-950/40 px-3 py-1 rounded-full">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Sobre mim
              </p>

              <h1 className="mt-4 text-4xl font-bold">
                Construo soluções <span className="text-blue-400">back-end</span> com visão de produto
              </h1>

              <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl">
                Sou desenvolvedor com foco em <span className="text-white font-medium">Java e Spring Boot</span>, dedicado a criar
                <span className="text-white font-medium"> APIs REST</span> modernas, bem organizadas e escaláveis. Atualmente também atuo como
                <span className="text-white font-medium"> full stack</span> usando <span className="text-white font-medium">Next.js e TypeScript</span>,
                garantindo integração limpa entre interface e backend.
              </p>
            </div>

            
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-blue-500/20 bg-slate-950/40 p-5">
                <p className="text-gray-400 text-sm">Stack principal</p>
                <p className="mt-1 text-lg font-semibold">Java • Spring Boot</p>
              </div>
              <div className="rounded-2xl border border-blue-500/20 bg-slate-950/40 p-5">
                <p className="text-gray-400 text-sm">Tipo de entrega</p>
                <p className="mt-1 text-lg font-semibold">APIs REST • Sistemas</p>
              </div>
              <div className="rounded-2xl border border-blue-500/20 bg-slate-950/40 p-5">
                <p className="text-gray-400 text-sm">Também atuo</p>
                <p className="mt-1 text-lg font-semibold">Next.js • TypeScript</p>
              </div>
            </div>

            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/AbraaoNerys"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-400 rounded-lg transition font-medium"
              >
                Ver GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abra%C3%A3o-nerys-692583213/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-blue-400 hover:bg-blue-400 hover:text-black rounded-lg transition font-medium"
              >
                Ver LinkedIn
              </a>
            </div>
          </div>
        </div>

        
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-blue-500/20 bg-slate-900/60 backdrop-blur p-6 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-white">{h.title}</h3>
              <p className="mt-2 text-gray-300 leading-relaxed">{h.text}</p>

              
              <div className="pointer-events-none absolute -inset-24 opacity-0 hover:opacity-100 transition duration-500" />
            </div>
          ))}
        </div>

        
        <div className="mt-10 bg-slate-900/70 border border-blue-500/20 rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl font-bold">
            Stack & <span className="text-blue-400">competências</span>
          </h2>
          <p className="mt-2 text-gray-300 max-w-3xl">
            Priorizo back-end (Java/Spring) e mantenho capacidade full stack para entregar soluções completas quando necessário.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {skills.map((s) => (
              <div key={s.group} className="rounded-2xl border border-blue-500/20 bg-slate-950/40 p-6">
                <p className="text-white font-semibold">{s.group}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-white/90 border border-blue-500/20 bg-slate-950/30 px-2 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="bg-slate-900/70 border border-blue-500/20 rounded-2xl p-10 shadow-lg">
            <h2 className="text-2xl font-bold">
              Minha <span className="text-blue-400">linha do tempo</span>
            </h2>
            <p className="mt-2 text-gray-300">
              Um resumo rápido do que eu venho construindo e para onde estou indo.
            </p>

            <div className="mt-8 space-y-6">
              {timeline.map((t, idx) => (
                <div key={t.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-blue-400" />
                    {idx !== timeline.length - 1 ? (
                      <div className="w-px flex-1 bg-blue-500/20 mt-2" />
                    ) : null}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t.title}</p>
                    <p className="mt-1 text-gray-300 leading-relaxed">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="bg-slate-900/70 border border-blue-500/20 rounded-2xl p-10 shadow-lg">
            <h2 className="text-2xl font-bold">
              Como eu <span className="text-blue-400">trabalho</span>
            </h2>

            <ul className="mt-6 space-y-4 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-400">✔</span>
                Foco em organização: camadas, responsabilidades claras e código legível.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✔</span>
                API bem pensada: rotas consistentes, validação, autenticação e boas práticas.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✔</span>
                Entrega com propósito: resolver problema real e facilitar manutenção no futuro.
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-blue-500/20 bg-slate-950/40 p-6">
              <p className="text-white font-semibold">Quer ver na prática?</p>
              <p className="mt-2 text-gray-300">
                Acesse a página de <span className="text-white font-medium">Projetos</span> e veja os cards com prévia + links do repositório.
              </p>

              <a
                href="/projects"
                className="inline-flex mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-400 rounded-lg transition font-medium"
              >
                Ir para Projetos →
              </a>
            </div>
          </div>
        </div>

        <div className="h-12" />
      </section>
    </main>
  );
}
