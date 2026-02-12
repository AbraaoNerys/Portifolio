"use client";

import { useState } from "react";

export default function ContactPage() {
  const email = "abraaonerysfrutuoso123@gmail.com"; 
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Erro ao copiar e-mail:", err);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24">
      <section className="max-w-6xl mx-auto px-6">
        
        <div className="bg-slate-900/70 border border-blue-500/20 rounded-2xl p-10 shadow-lg">
          <p className="inline-flex items-center gap-2 text-sm text-blue-200 border border-blue-500/20 bg-slate-950/40 px-3 py-1 rounded-full">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Contato
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            Vamos <span className="text-blue-400">conversar</span>
          </h1>

          <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl">
            Se você quer falar sobre vaga, estágio, freelas ou colaboração em projetos,
            me chama por um dos canais abaixo. Eu respondo o mais rápido possível.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/abra%C3%A3o-nerys-692583213/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 rounded-lg transition font-medium"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/AbraaoNerys"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-blue-400 hover:bg-blue-400 hover:text-black rounded-lg transition font-medium"
            >
              GitHub
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="px-6 py-3 border border-blue-500/20 bg-slate-950/40 hover:bg-slate-900 transition rounded-lg font-medium"
            >
              {copied ? "E-mail copiado ✅" : "Copiar e-mail"}
            </button>
          </div>
        </div>

       
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          
          <div className="bg-slate-900/70 border border-blue-500/20 rounded-2xl p-10 shadow-lg">
            <h2 className="text-2xl font-bold">
              Envie uma <span className="text-blue-400">mensagem</span>
            </h2>
            <p className="mt-2 text-gray-300">
              Por enquanto este formulário é visual (sem backend). Se quiser, eu conecto com e-mail/API depois.
            </p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Formulário visual. Use LinkedIn ou copie o e-mail 🙂");
              }}
            >
              <div>
                <label className="text-sm text-gray-300">Nome</label>
                <input
                  className="mt-2 w-full rounded-xl bg-slate-950/40 border border-blue-500/20 px-4 py-3 outline-none focus:border-blue-400 transition"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">E-mail</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl bg-slate-950/40 border border-blue-500/20 px-4 py-3 outline-none focus:border-blue-400 transition"
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Mensagem</label>
                <textarea
                  className="mt-2 w-full min-h-[140px] rounded-xl bg-slate-950/40 border border-blue-500/20 px-4 py-3 outline-none focus:border-blue-400 transition"
                  placeholder="Conte um pouco sobre o que você precisa..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-400 rounded-lg transition font-medium"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          
          <div className="bg-slate-900/70 border border-blue-500/20 rounded-2xl p-10 shadow-lg">
            <h2 className="text-2xl font-bold">
              Disponível para <span className="text-blue-400">oportunidades</span>
            </h2>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-blue-500/20 bg-slate-950/40 p-6">
                <p className="text-white font-semibold">Back-end (Java/Spring)</p>
                <p className="mt-2 text-gray-300">
                  APIs REST, autenticação, integrações, modelagem de dados e boas práticas.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-slate-950/40 p-6">
                <p className="text-white font-semibold">Full Stack (Next.js/TS)</p>
                <p className="mt-2 text-gray-300">
                  Interfaces modernas + integração com APIs para entregar produto completo.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-slate-950/40 p-6">
                <p className="text-white font-semibold">Colaboração e projetos</p>
                <p className="mt-2 text-gray-300">
                  Tenho interesse em contribuir em projetos reais e aprender com times fortes.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-blue-500/20 bg-slate-950/40 p-6">
              <p className="text-gray-400 text-sm">Contato direto</p>
              <p className="mt-1 text-white font-semibold">{email}</p>
              <p className="mt-2 text-gray-300">
                Prefere LinkedIn? Também funciona perfeito.
              </p>
            </div>
          </div>
        </div>

        <div className="h-12" />
      </section>
    </main>
  );
}
