"use client";

import { useEffect, useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

export default function ProjectCarousel({ items }: { items: Project[] }) {
  
  const list = useMemo(() => [...items, ...items], [items]);

  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [dir, setDir] = useState<1 | -1>(1);


  const step = 1; 

  useEffect(() => {
    if (isHover) return;

    const id = window.setInterval(() => {
      setIndex((prev) => {
        const maxIndex = list.length - 3; 
        const next = prev + step * dir;

        if (next >= maxIndex) {
          setDir(-1);
          return Math.max(0, maxIndex);
        }
        if (next <= 0) {
          setDir(1);
          return 0;
        }
        return next;
      });
    }, 1800);

    return () => window.clearInterval(id);
  }, [isHover, dir, list.length]);

  return (
    <div className="relative">
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-slate-950 to-transparent z-10" />

      
      <div
        className="overflow-hidden"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        
        <div
          className="grid grid-flow-col gap-6 transition-transform duration-700 ease-in-out py-3"
          style={{
            gridAutoColumns: "clamp(260px, calc((100% - 2 * 24px) / 3), 420px)",
            transform: `translateX(calc(-1 * ${index} * (clamp(260px, calc((100% - 2 * 24px) / 3), 420px) + 24px)))`,
          }}
        >
          {list.map((p, i) => (
            <div key={`${p.title}-${i}`}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>

     
      <div className="mt-4 flex flex-wrap gap-3 items-center">
        <button
          type="button"
          onClick={() => setIndex((v) => Math.max(0, v - 1))}
          className="px-4 py-2 rounded-lg border border-blue-500/20 text-white hover:bg-slate-900 transition"
        >
          ←
        </button>

        <button
          type="button"
          onClick={() => setIndex((v) => Math.min(list.length - 3, v + 1))}
          className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white transition font-medium"
        >
          →
        </button>

        <span className="text-gray-400 text-sm">
          (passe o mouse pra pausar)
        </span>
      </div>
    </div>
  );
}
