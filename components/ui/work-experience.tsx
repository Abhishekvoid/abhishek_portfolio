"use client"

import { useCallback, useRef, type ComponentProps } from "react"
import { differenceInMonths, parse } from "date-fns"
import ReactMarkdown from "react-markdown"
import { cn } from "@/lib/utils"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import { ChevronsUpDownIcon, type ChevronsUpDownIconHandle } from "./chevrons-up-down-icon"
import { BriefcaseBusinessIcon, InfinityIcon } from "lucide-react"

export type ExperiencePositionItemType = {
  id: string
  title: string
  employmentPeriod: { start: string; end?: string }
  employmentType?: string
  description?: string
  icon?: React.ReactElement
  skills?: string[]
  isExpanded?: boolean
}

export type ExperienceItemType = {
  id: string
  companyName: string
  companyLogo?: string
  companyWebsite?: string
  positions: ExperiencePositionItemType[]
  isCurrentEmployer?: boolean
}

export function WorkExperience({ className, experiences }: { className?: string; experiences: ExperienceItemType[] }) {
  return (
    <div className={cn("bg-black text-[#ededed] font-mono antialiased", className)}>
      <div className="space-y-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="space-y-4">
            
            {/* Company Header */}
            <div className="flex items-center gap-3">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-[#111] border border-[#222]">
                {exp.companyLogo ? (
                  <img src={exp.companyLogo} alt={exp.companyName} className="size-3.5 object-contain grayscale opacity-90" />
                ) : (
                  <BriefcaseBusinessIcon className="size-3 text-zinc-500" strokeWidth={1.5} />
                )}
              </div>
              <h3 className="text-[14px] font-semibold tracking-tight text-white flex items-center gap-1.5">
                {exp.companyWebsite ? (
                  <a className="hover:text-zinc-300 transition-colors hover:underline" href={exp.companyWebsite} target="_blank" rel="noreferrer">
                    {exp.companyName}
                  </a>
                ) : (
                  exp.companyName
                )}
                {exp.isCurrentEmployer && (
                  <span className="inline-flex size-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                )}
              </h3>
            </div>

           
            <div className="relative pl-[11px] space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-[#1c1c1e]">
              {exp.positions.map((pos, idx) => {
                const isLast = idx === exp.positions.length - 1;
                return (
                  <ExperiencePositionItem 
                    key={pos.id} 
                    position={pos} 
                    isLastInCompany={isLast} 
                  />
                )
              })}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

function ExperiencePositionItem({ 
  position, 
  isLastInCompany 
}: { 
  position: ExperiencePositionItemType; 
  isLastInCompany: boolean 
}) {
  const chevronsRef = useRef<ChevronsUpDownIconHandle>(null)
  const handleOpenChange = useCallback((open: boolean) => {
    if (open) chevronsRef.current?.startAnimation()
    else chevronsRef.current?.stopAnimation()
  }, [])

  const { start, end } = position.employmentPeriod
  const duration = formatDuration(start, end)

  return (
    <Collapsible defaultOpen={position.isExpanded} onOpenChange={handleOpenChange} disabled={!position.description} asChild>
      <div className="relative group/trigger">
        
        {isLastInCompany && (
          <div className="absolute left-[-11px] top-0 bottom-2 w-px bg-black z-10">
            <div className="absolute top-0 left-0 h-3 w-[12px] border-l border-b border-[#1c1c1e] rounded-bl-md" />
          </div>
        )}

        <CollapsibleTrigger className="block w-full text-left select-none outline-none relative pl-7 before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-5 before:rounded-md transition-colors hover:before:bg-[#09090b] data-disabled:before:content-none">
          
        
          <div className="absolute left-0 top-[2px] z-20 flex size-[22px] items-center justify-center rounded border border-[#222] bg-[#0c0c0d] text-zinc-500 transition-colors group-hover/trigger:text-zinc-300 group-hover/trigger:border-zinc-700">
            {position.icon ?? <BriefcaseBusinessIcon className="size-2.5" strokeWidth={1.5} />}
          </div>

          <div className="relative z-10 mb-1 flex items-start gap-3 text-[13px] pt-0.5">
            <h4 className="flex-1 font-medium tracking-tight text-zinc-200 group-hover/trigger:text-white transition-colors">
              {position.title}
            </h4>
            <div className="shrink-0 text-zinc-600 transition-colors group-hover/trigger:text-zinc-400 group-disabled/trigger:hidden">
              <ChevronsUpDownIcon ref={chevronsRef} duration={0.15} />
            </div>
          </div>

          <dl className="relative z-10 flex items-center gap-2 pl-0 text-[11px] text-zinc-500 tracking-tight">
            {position.employmentType && (
              <>
                <dd>{position.employmentType}</dd>
                <Separator className="h-3 bg-[#1c1c1e] self-center" orientation="vertical" />
              </>
            )}
            <dd className="flex items-center gap-0.5 tabular-nums text-zinc-400">
              <span>{start}</span>
              <span className="text-zinc-600">—</span>
              {!end ? <InfinityIcon className="size-3 text-zinc-500 inline-block" /> : <span>{end}</span>}
            </dd>
            {duration && (
              <>
                <Separator className="h-3 bg-[#1c1c1e] self-center" orientation="vertical" />
                <dd className="tabular-nums text-zinc-500">{duration}</dd>
              </>
            )}
          </dl>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          {position.description && (
            <div className="text-[12px] leading-relaxed text-zinc-400 space-y-1 font-mono tracking-tight max-w-none pt-3 pl-7 pr-4 [&_p]:text-zinc-400 [&_strong]:text-white [&_a]:text-white [&_a]:underline">
              <ReactMarkdown>{position.description}</ReactMarkdown>
            </div>
          )}
        </CollapsibleContent>

        {Array.isArray(position.skills) && position.skills.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 pt-3 pl-7">
            {position.skills.map((skill, i) => (
              <li key={i} className="inline-flex items-center rounded border border-[#1c1c1e] bg-[#0c0c0d] px-2 py-0.5 text-[10px] text-zinc-400 font-medium tracking-tight">
                {skill}
              </li>
            ))}
          </ul>
        )}

      </div>
    </Collapsible>
  )
}

function formatDuration(start: string, end?: string): string {
  const startHasMonth = start.includes(".")
  if (!startHasMonth && end && !end.includes(".")) {
    const years = parseInt(end, 10) - parseInt(start, 10)
    return years <= 0 ? "" : `${years}y`
  }
  const startDate = start.includes(".") ? parse(start, "MM.yyyy", new Date()) : parse(`01.${start}`, "MM.yyyy", new Date())
  const endDate = end ? (end.includes(".") ? parse(end, "MM.yyyy", new Date()) : parse(`12.${end}`, "MM.yyyy", new Date())) : new Date()
  const totalMonths = differenceInMonths(endDate, startDate) + 1
  if (totalMonths <= 0) return ""
  if (totalMonths < 12) return `${totalMonths}m`
  const y = Math.floor(totalMonths / 12)
  const m = totalMonths % 12
  return m === 0 ? `${y}y` : `${y}y ${m}m`
}