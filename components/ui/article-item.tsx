import React from "react"

type ArticleItemProps = {
  url: string
  title: string
  coverUrl: string
  createdAt: string
}

export function ArticleItem({ title, coverUrl, createdAt }: ArticleItemProps) {
  return (
    <a href="#" className="block space-y-3 outline-none group/card">

      <div className="w-full aspect-[16/10] bg-[#121212] border border-[#1c1c1c] overflow-hidden grayscale group-hover/card:grayscale-0 transition-all duration-300">
        <img 
          src={coverUrl} 
          alt={title} 
          className="w-full h-full object-cover scale-100 group-hover/card:scale-102 transition-transform duration-500" 
        />
      </div>
      
      <div className="space-y-1">
        <p className="text-[10px] text-zinc-500 font-mono tracking-tight tabular-nums">
          {createdAt.replace(/-/g, ".")}
        </p>
        <h4 className="text-[12px] font-medium leading-snug tracking-tight text-zinc-300 group-hover/card:text-white transition-colors">
          {title}
        </h4>
      </div>
    </a>
  )
}