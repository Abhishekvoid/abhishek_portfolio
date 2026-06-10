"use client";

import { CpuIcon, ArrowUpIcon } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-black border border-[#141414] font-mono antialiased mt-12">
      {/* ── ROW 1: TECHNICAL BUILD SPECIFICATIONS MATRIX ── */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] border-b border-[#141414] items-stretch">
        
        {/* Left Column Track: Framework Stack Spec */}
        <div className="p-4 sm:p-5 flex flex-col justify-center space-y-1 md:border-r border-[#141414]">
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
            <CpuIcon size={11} className="text-zinc-600" />
            Tech Stack:{" "}
          </p>
          <p className="text-[11px] text-zinc-400 leading-relaxed max-w-md">
            Next.js, TypeScript, Tailwind CSS, shadcn/ui &{" "}
            <span className="text-zinc-500 font-medium">@ncdai/ui</span>
          </p>
        </div>

        {/* Right Column Track: Interactive Operational Controls */}
        <div className="p-4 sm:p-5 bg-[#050505] flex items-center justify-between">
          <div className="flex flex-col space-y-0.5">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Copyright Core</p>
            <p className="text-[11px] text-zinc-400 tabular-nums">
              &copy; 2026 Abhishek Rajput
            </p>
          </div>
          
          {/* Back to top node router button */}
          <button
            onClick={scrollToTop}
            className="flex size-7 items-center justify-center rounded-sm border border-[#1c1c1e] bg-black text-zinc-500 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer group"
            title="Return to origin segment"
          >
            <ArrowUpIcon size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>

      {/* ── ROW 2: PRIMARY OUTBOUND ANCHORS TRAY ── */}
    
        
  {/* Left Social Control Panel Tray */}
  <div className="flex flex-col md:flex-row items-stretch">
  <div className="flex w-full items-center justify-center divide-x divide-[#141414] bg-black text-[11px]">
    <a
      href="https://github.com/Abhishekvoid"
      target="_blank"
      rel="noreferrer"
      className="px-4 py-4 border-x border-[#141414] text-zinc-500 hover:text-white transition-colors flex items-center justify-center"
    >
      <FaGithub size={13} />
    </a>

    <a
      href="https://linkedin.com/in/abhishek-rajput-4ba60221a"
      target="_blank"
      rel="noreferrer"
      className="px-4 py-4 text-zinc-500 hover:text-white transition-colors flex items-center justify-center"
    >
      <FaLinkedin size={13} />
    </a>

    <a
      href="mailto:abhishek.rajput7202@gmail.com"
      className="px-4 py-4 border-r border-[#141414] text-zinc-500 hover:text-white transition-colors flex items-center justify-center"
    >
      <FaEnvelope size={13} />
    </a>
  </div>
</div>
  
</div>

  );
}



