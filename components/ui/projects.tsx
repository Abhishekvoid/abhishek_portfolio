"use client"

import { useCallback, useRef } from "react"
import ReactMarkdown from "react-markdown"
import { cn } from "@/lib/utils"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronsUpDownIcon, type ChevronsUpDownIconHandle } from "./chevrons-up-down-icon"
import { BrainCircuitIcon, Link2Icon, InfinityIcon } from "lucide-react"

export type ProjectItemProps = {
  id: string
  title: string
  period: string
  description: string
  skills: string[]
  githubUrl?: string
  architectureUrl?: string
  isExpanded?: boolean
}

export function Projects() {
  return (
    <div className="w-full bg-black border border-[#141414] font-mono antialiased">
      
    
      <div className="border-b border-[#141414] p-4 bg-[#050505]">
        <h2 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
          ./projects (1)
        </h2>
      </div>

   
      <div className="p-6 space-y-6 bg-black text-[#ededed]">
        {PROJECT_DATA.map((project) => (
          <ProjectRowItem key={project.id} project={project} />
        ))}
      </div>

    </div>
  )
}

function ProjectRowItem({ project }: { project: ProjectItemProps }) {
  const chevronsRef = useRef<ChevronsUpDownIconHandle>(null)
  
  const handleOpenChange = useCallback((open: boolean) => {
    if (open) chevronsRef.current?.startAnimation()
    else chevronsRef.current?.stopAnimation()
  }, [])

  return (
    <Collapsible
      defaultOpen={project.isExpanded}
      onOpenChange={handleOpenChange}
      asChild
    >
      <div className="relative group/project">
        
       
        <CollapsibleTrigger className="block w-full text-left select-none outline-none relative pl-8 before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-6 before:rounded-md transition-colors hover:before:bg-[#09090b]">

          <div className="absolute left-0 top-[4px] z-20 flex size-[22px] items-center justify-center rounded border border-[#222] bg-[#0c0c0d] text-zinc-500 transition-colors group-hover/project:text-zinc-300 group-hover/project:border-zinc-700">
            <BrainCircuitIcon className="size-2.5" strokeWidth={1.5} />
          </div>

          <div className="relative z-10 flex items-start justify-between gap-4 pt-0.5">
            <div className="space-y-0.5">
              <h4 className="text-[13px] font-semibold tracking-tight text-zinc-200 group-hover/project:text-white transition-colors">
                {project.title}
              </h4>
              <p className="text-[11px] text-zinc-500 font-mono tracking-tight flex items-center gap-0.5 tabular-nums">
                <span>{project.period}</span>
                <span className="text-zinc-600">—</span>
                <InfinityIcon className="size-3 text-zinc-600 inline-block" />
              </p>
            </div>

            <div className="flex items-center gap-3 text-zinc-500 pt-1 relative z-30">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()} 
                >
                  <Link2Icon className="size-3.5" strokeWidth={1.5} />
                </a>
              )}
              <div className="text-zinc-600 group-hover/project:text-zinc-400">
                <ChevronsUpDownIcon ref={chevronsRef} duration={0.15} />
              </div>
            </div>
          </div>

        </CollapsibleTrigger>

      
        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="text-[12px] leading-relaxed text-zinc-400 space-y-3 font-mono tracking-tight max-w-none pt-4 pl-8 pr-4 [&_p]:text-zinc-400 [&_strong]:text-white [&_a]:text-white [&_a]:underline">
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </div>
        </CollapsibleContent>

        <ul className="flex flex-wrap gap-1.5 pt-4 pl-8 relative z-20">
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
    </Collapsible>
  )
}

const PROJECT_DATA: ProjectItemProps[] = [
  {
    id: "genai-rag-assistant",
    title: "Full-Stack GenAI RAG Knowledge Assistant",
    period: "09.2024",
    isExpanded: true,
    githubUrl: "https://github.com/Abhishekvoid",
    architectureUrl: "PENDING_URL",
    description:
      "Architected a production-grade GenAI system engineered to ingest raw unstructured documentation and process low-latency intellectual response context layers.\n\n" +
      "* **Natural multi-layer parsing**: Integrated customized pipeline structures running OCR ingestion → semantic chunking → vector storage mapping natively.\n" +
      "* **Intelligent execution routing**: Programmed intent-based query controllers reducing downstream heavy LLM generation token dependencies by 30% via immediate detection filters.\n" +
      "* **Asynchronous ingestion threads**: Engineered a robust background queuing mechanism running Django, Celery, and Redis to safely parallelize chunk processing routines cleanly.",
    skills: [
      "Django",
      "Qdrant",
      "Llama 3",
      "Celery",
      "Redis",
      "Next.js",
      "TypeScript",
      "Supabase",
      "TEI",
      "Semantic Chunking"
    ],
  },
]