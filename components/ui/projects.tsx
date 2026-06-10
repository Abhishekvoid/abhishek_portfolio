"use client";

import { useCallback, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronsUpDownIcon,
  type ChevronsUpDownIconHandle,
} from "./chevrons-up-down-icon";
import { BrainCircuitIcon, Link2Icon, InfinityIcon, PlayIcon, CpuIcon, LayersIcon } from "lucide-react";

export type ProjectItemProps = {
  id: string;
  title: string;
  period: string;
  description: string;
  skills: string[];
  githubUrl?: string;
  blogUrl?: string;
  designUrl?: string;
  isExpanded?: boolean;
  videoPath?: string;
};

export function Projects() {
  return (
    <div className="w-full bg-black border border-[#141414] font-mono antialiased">
      
      {/* Header Container Area */}
    <div
  className="
    relative w-full bg-[#050505] p-4
    after:absolute after:-bottom-[1px]
    after:left-1/2 after:h-px after:w-[180%]
    after:-translate-x-1/2 after:bg-[#141414]
    after:content-['']
  "
>
  <h2 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
    ./projects ({PROJECT_DATA.length})
  </h2>
</div>
      

      {/* THE BOX MATRIX: Dropped generic spacing layout containers.
        This outer element handles the nested box wrapper flow smoothly.
      */}
      <div className="w-full bg-black">
        {PROJECT_DATA.map((project, idx) => {
          const isLast = idx === PROJECT_DATA.length - 1;
          return (
            <ProjectRowItem 
              key={project.id} 
              project={project} 
              isLast={isLast} 
            />
          );
        })}
      </div>
    </div>
  );
}

function ProjectRowItem({ project, isLast }: { project: ProjectItemProps; isLast: boolean }) {
  const chevronsRef = useRef<ChevronsUpDownIconHandle>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleOpenChange = useCallback((open: boolean) => {
    if (open) chevronsRef.current?.startAnimation();
    else chevronsRef.current?.stopAnimation();
  }, []);

  // Dynamically assign icons based on project scope for structural detail
  const getProjectIcon = (id: string) => {
    if (id.includes("rag")) return <BrainCircuitIcon className="size-3.5" strokeWidth={1.5} />;
    if (id.includes("robot")) return <CpuIcon className="size-3.5" strokeWidth={1.5} />;
    return <LayersIcon className="size-3.5" strokeWidth={1.5} />;
  };

  return (
    <Collapsible
      defaultOpen={project.isExpanded}
      onOpenChange={handleOpenChange}
      asChild
    >
      {/* Each project is now hard-boxed into a row container.
        Using conditional styling to prevent double borders on adjacent items.
      */}
      <div className={cn(
        "w-full bg-black transition-colors duration-200",
        !isLast && "border-b border-[#141414]"
      )}>
        
        {/* Header Block Trigger - Expands padding to match row tracking layout */}
        <CollapsibleTrigger className="block w-full text-left select-none outline-none relative p-5 hover:bg-[#050505] transition-colors group/project">
          
          <div className="flex items-center justify-between gap-4 w-full">
            
            {/* Left Content Matrix Block */}
            <div className="flex items-center gap-4">
              {/* Boxed Icon Core frame matching company logs profile specs */}
              <div className="flex size-7 shrink-0 items-center justify-center rounded-sm bg-[#111] border border-[#222] text-zinc-400 group-hover/project:text-zinc-200 group-hover/project:border-zinc-700 transition-colors">
                {getProjectIcon(project.id)}
              </div>

              <div className="space-y-0.5">
                <h4 className="text-[14px] font-semibold tracking-tight text-white group-hover/project:text-zinc-200 transition-colors">
                  {project.title}
                </h4>
                <p className="text-[11px] text-zinc-500 font-mono tracking-tight flex items-center gap-1 tabular-nums">
                  <span>{project.period}</span>
                  <span className="text-zinc-700">—</span>
                  <InfinityIcon className="size-3 text-zinc-600 inline-block" />
                </p>
              </div>
            </div>

            {/* Right Side Control Links Tray */}
            <div className="flex items-center gap-4 text-zinc-500 relative z-30">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors p-1"
                  onClick={(e) => e.stopPropagation()} // Prevents collapsing row when clicking the outbound link
                >
                  <Link2Icon className="size-4" strokeWidth={1.5} />
                </a>
              )}
              <div className="text-zinc-600 group-hover/project:text-zinc-400 p-1">
                <ChevronsUpDownIcon ref={chevronsRef} duration={0.15} />
              </div>
            </div>

          </div>
        </CollapsibleTrigger>

        {/* Inner Content Compartment Block */}
        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="text-[12px] leading-relaxed text-zinc-400 space-y-4 font-mono tracking-tight max-w-none pb-6 px-5 pl-16">
            
            {/* Sub-Header Actions Link Tray */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] border-b border-[#141414] pb-3 text-zinc-500">
              {project.videoPath && (
                <>
                  <button
                    onClick={() => setIsVideoOpen(!isVideoOpen)}
                    className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors font-medium cursor-pointer"
                  >
                    <PlayIcon size={11} fill="currentColor" />
                    {isVideoOpen ? "Hide Demo Video" : "View Demo Video"}
                  </button>
                  {(project.blogUrl || project.designUrl) && <span className="text-zinc-700">|</span>}
                </>
              )}
              
              {project.blogUrl && (
                <>
                  <a
                    href={project.blogUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors underline decoration-zinc-700 underline-offset-2"
                  >
                    Blog Post
                  </a>
                  {project.designUrl && <span className="text-zinc-700">|</span>}
                </>
              )}

              {project.designUrl && (
                <a
                  href={project.designUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors underline decoration-zinc-700 underline-offset-2"
                >
                  System Design Diagram
                </a>
              )}

              {!project.blogUrl && !project.designUrl && !project.videoPath && (
                <span className="text-zinc-600 italic">Blog post & system design under construction</span>
              )}
            </div>

            {/* Local HTML5 Video Content Block */}
            {project.videoPath && isVideoOpen && (
              <div className="w-full max-w-3xl aspect-video bg-[#0c0c0d] border border-[#1c1c1e] rounded overflow-hidden shadow-2xl my-3 animate-collapsible-down">
                <video
                  src={project.videoPath}
                  controls
                  autoPlay
                  preload="metadata"
                  className="w-full h-full object-contain"
                  playsInline
                />
              </div>
            )}

            {/* Markdown Body Parser Display Output */}
            <div className="space-y-3 max-w-3xl [&_p]:text-zinc-400 [&_strong]:text-white [&_a]:text-white [&_a]:underline">
              <ReactMarkdown>{project.description}</ReactMarkdown>
            </div>

          </div>
        </CollapsibleContent>

        {/* Technical Sub-Skills Pill Badge Area */}
        <div className="pb-5 px-5 pl-16 relative z-20">
          <ul className="flex flex-wrap gap-1.5">
            {project.skills.map((skill, i) => (
              <li
                key={i}
                className="inline-flex items-center rounded border border-[#1c1c1e] bg-[#0c0c0d] px-2 py-0.5 text-[10px] text-zinc-500 font-medium tracking-tight hover:border-zinc-700 hover:text-zinc-300 transition-colors cursor-default"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </Collapsible>
  );
}

const PROJECT_DATA: ProjectItemProps[] = [
  {
    id: "rag-knowledge-assistant",
    title: "RAG Knowledge Assistant",
    period: "09.2024",
    isExpanded: true,
    githubUrl: "https://github.com/Abhishekvoid",
    videoPath: "/video/RAG _demo.mp4", 
    blogUrl: "https://ragsystemabhishekrajput.hashnode.dev/building-a-production-grade-rag-system-architecture-trade-offs-and-lessons-learned",
    designUrl: "https://excalidraw.com/#json=B4VQe_9qrgFyiu3fgqPBO,ZuKsEZ1gFaE5NmiUF1m1eA",
    description:
      "Production-grade document intelligence platform for conversational search, study workflows, and knowledge retrieval. Built to solve a common problem in document-chat systems: retrieval quality. Rather than sending every retrieved chunk to the LLM, the system uses query orchestration, reranking, and relevance thresholds to ensure responses remain grounded in source material.\n\n" +
      "**Key Results**\n" +
      "* **Low-Latency Generation**: Achieved ~1.8s average end-to-end latency.\n" +
      "* **Token Optimization**: Reduced unnecessary LLM calls by 60–70% through intent-aware routing.\n" +
      "* **Live Synchronization**: Implemented real-time document processing updates via WebSockets.\n" +
      "* **Learning Engine**: Built support for AI-generated flashcards and study questions.\n\n" +
      "**Engineering Highlights**\n" +
      "* **Async Ingestion Pipeline**: Structured full background extraction tasks running OCR → semantic chunking → embeddings → indexing.\n" +
      "* **Query Orchestration**: Built a comprehensive execution route handling contextualization → intent routing → expansion → retrieval → reranking → generation.\n" +
      "* **Local Embedding Inference**: Deployed local embedding models via TEI delivering ~5ms execution times instead of external API bottlenecks (~150ms).\n" +
      "* **Strict Filtering**: Integrated cross-encoder reranking layers to ensure low-quality or irrelevant chunks never reach generation phases.\n" +
      "* **Distributed Architecture**: Tied systems together cleanly using Django, Celery, Redis, Qdrant, and WebSockets.",
    skills: ["Django", "DRF", "Celery", "Redis", "PostgreSQL", "Qdrant", "TEI", "Cross-Encoder", "Groq", "Llama 3", "Django Channels", "Next.js"],
  },
  {
    id: "autonomous-robot-control-system",
    title: "Autonomous Robot Control System",
    period: "04.2024",
    blogUrl: "https://systemsabhishekrajput.hashnode.dev/modernizing-defense-robotics-from-plc-heavy-control-to-a-sub-150ms-web-orchestrated-hmi",
    designUrl: "https://excalidraw.com/#json=KKoLILVgkGIZepVADyOv1,m0iVGuEmi11GRsiuqqYqaw",
    description:
      "Traditional PLC-based robot control systems provide reliability but often introduce latency and integration challenges when combined with AI-driven autonomy. This project redesigned a legacy PLC-centric architecture into a Python-native, ROS2-integrated control platform focused on low-latency control, autonomous navigation, and industrial-grade safety.\n\n" +
      "**Key Results**\n" +
      "* **Latency Reduction**: Reduced command processing times from 500ms → 150ms (a 3× improvement).\n" +
      "* **Production Grade**: Delivered 1.5+ years of production operation with zero safety incidents.\n" +
      "* **Real-Time Visibility**: Enabled real-time web-based robot control and telemetry tracking.\n" +
      "* **Unified Autonomy**: Integrated vision, localization, and obstacle avoidance into a single coherent system stack.\n\n" +
      "**Engineering Highlights**\n" +
      "* **Direct Command Paths**: Replaced the standard PLC command path with direct Modbus TCP communication, eliminating translation layers to drastically boost responsiveness.\n" +
      "* **Hybrid Sensor Fusion**: Built a multi-sensor ROS2 pipeline combining YOLOv8 vision tracking, UWB positioning coordinates, and 3D LiDAR for robust autonomous navigation.\n" +
      "* **State Reconciliation**: Implemented a Redis-based state engine to instantly detect command drift and maintain synchronization between operator intent and execution.\n" +
      "* **Hardware Fail-Safes**: Designed hardware-backed emergency stop mechanisms and fail-safe control paths to maintain absolute safety during software or network dropouts.",
    skills: ["ROS2", "Django", "Redis", "WebSockets", "Modbus TCP", "YOLOv8", "OpenCV", "UWB", "3D LiDAR"],
  },
  {
    id: "industrial-hmi-plc-platform",
    title: "Industrial HMI/PLC Management Platform",
    period: "04.2024",
    blogUrl: "https://hashnode.com/dashboards",
    designUrl: "#",
  
    description:
      "Industrial clients managing HMI and PLC systems often lacked a unified view of operations, with telemetry spread across multiple systems and manual monitoring workflows. This project focused on building a scalable multi-tenant IIoT platform capable of processing high-frequency industrial data while maintaining strict tenant isolation and real-time visibility.\n\n" +
      "**Key Results**\n" +
      "* **Telemetry Scalability**: Processed 60,000+ industrial sensor tags simultaneously across multiple facilities.\n" +
      "* **High Concurrency**: Supported 500+ users through fluid real-time monitoring dashboards.\n" +
      "* **Strict Security Isolation**: Enabled secure multi-tenant access barriers with absolute analytical data boundaries.\n" +
      "* **Workflow Automation**: Replaced manual spreadsheet monitoring with centralized operational visibility panels.\n\n" +
      "**Engineering Highlights**\n" +
      "* **Multi-Tenant Isolation**: Built a robust multi-tenant Django backend utilizing hierarchical Role-Based Access Control (RBAC).\n" +
      "* **Asynchronous Telemetry Ingestion**: Implemented high-frequency ingestion streams via Celery + Redis pipelines to safely load raw packets without degrading app responsiveness.\n" +
      "* **Database Tuning**: Optimized intensive PostgreSQL workloads using prefetch_related, select_related, and targeted indexing adjustments.\n" +
      "* **WebSocket Feeds**: Delivered live streaming industrial telemetry directly to web dashboards for immediate oversight.",
    skills: [
      "Django",
      "PostgreSQL",
      "Celery",
      "Redis",
      "WebSockets",
      "Modbus TCP",
      "RBAC",
      "Multi-Tenancy",
    ],
  },
];