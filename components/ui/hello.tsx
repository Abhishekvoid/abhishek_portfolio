"use client";

import {
  TerminalIcon,
  MapPinIcon,
  ShieldCheckIcon,
  GlobeIcon,
  ArrowUpRightIcon,
} from "lucide-react";

export function Hello() {
  // Smooth scroll controller matching the page architecture IDs
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full bg-black border border-[#141414] font-mono antialiased">
      {/* Micro Terminal Top Bar Header */}
      <div
  className="
    relative bg-[#050505] p-4 flex items-center justify-between
    after:content-['']
    after:absolute after:-bottom-[1px]
    after:left-1/2 after:w-[180%]
    after:h-px after:-translate-x-1/2
    after:bg-[#141414]
  "
>
  <h2 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
    <TerminalIcon className="size-3.5 text-zinc-500" />
    ./hello.sh
  </h2>

  <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 tracking-tight">
    <span className="relative flex h-1.5 w-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
    </span>
    <span className="text-zinc-400 font-medium">Active</span>
  </div>
</div>

      {/* Main Core Bio Area */}
      <div className="p-6 space-y-5 bg-black">
        <div className="space-y-1">
          
        </div>

        {/* Your Refined Copy Selection */}
        <div className="space-y-4 text-[12px] leading-relaxed text-zinc-400 max-w-3xl font-mono tracking-tight">
          <p className="text-zinc-200 font-medium text-[13px]">
            Hey, I'm Abhishek 👋
          </p>
          <p>
            Backend & Systems Engineer with 1.5+ years building AI platforms,
            autonomous robotics systems, and industrial software. I solve
            problems around distributed systems, real-time infrastructure, and
            taking products from R&D to production.
          </p>
          tsx
          <div className="space-y-2 pt-1">
            <p className="text-white font-medium">// Recently Shipped:</p>

            <ul className="list-disc pl-5 space-y-1 text-zinc-300">
              <li>
                <span className="text-white">Production RAG Platform</span>{" "}
                (intelligent routing, 30% cost reduction)
              </li>
              <li>
                <span className="text-white">Robot Control System</span> with 3×
                lower latency
              </li>
              <li>
                <span className="text-white">Multi-Tenant IIoT Platform</span>{" "}
                processing 60,000+ sensor tags
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive CTA Link Action Row */}
        <div className="flex items-center gap-4 pt-2 text-[12px]">
          <button
            onClick={() => scrollToSection("projects-section")}
            className="text-white hover:text-zinc-300 font-medium transition-colors cursor-pointer flex items-center gap-1 group"
          >
            <span>[View Projects]</span>
            <ArrowUpRightIcon
              size={12}
              className="text-zinc-500 group-hover:text-white transition-colors"
            />
          </button>

          <button
            onClick={() => scrollToSection("profile-section")}
            className="text-zinc-400 hover:text-white font-medium transition-colors cursor-pointer flex items-center gap-1 group"
          >
            <span>[Get in Touch]</span>
            <ArrowUpRightIcon
              size={12}
              className="text-zinc-600 group-hover:text-zinc-400 transition-colors"
            />
          </button>
        </div>

        {/* Asymmetrical Horizontal Meta Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#111] text-[11px] text-zinc-500">
          <div className="flex items-center gap-2.5">
            <div className="flex size-5 shrink-0 items-center justify-center rounded-sm bg-[#09090b] border border-[#1c1c1e] text-zinc-500">
              <MapPinIcon size={11} />
            </div>
            <span>Ahmedabad, Gujarat, India</span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex size-5 shrink-0 items-center justify-center rounded-sm bg-[#09090b] border border-[#1c1c1e] text-zinc-500">
              <ShieldCheckIcon size={11} />
            </div>
            <span>Robotics, AI Infra & Distributed Architecture</span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex size-5 shrink-0 items-center justify-center rounded-sm bg-[#09090b] border border-[#1c1c1e] text-zinc-500">
              <GlobeIcon size={11} />
            </div>
            <span className="text-zinc-400">
              Tech:{" "}
              <span className="text-zinc-500">
                Python, ROS2, Celery, Redis, Qdrant, Next.js
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex size-5 shrink-0 items-center justify-center rounded-sm bg-[#09090b] border border-[#1c1c1e] text-zinc-500">
              <ArrowUpRightIcon size={11} />
            </div>
            <span className="text-zinc-300">
              Exploring:{" "}
              <span className="text-zinc-500">
                Early-stage opportunities in Robotics + AI
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
