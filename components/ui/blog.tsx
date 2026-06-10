"use client";

import { ArrowUpRightIcon, BookOpenIcon } from "lucide-react";
import { ArticleItem } from "./article-item";

export type Article = {
  id: string;
  title: string;
  coverUrl: string;
  createdAt: string;
  url: string;
};

export function Blog() {
  return (
    <div className="w-full bg-black border border-[#141414] font-mono antialiased">
      
      {/* Component Shell Header Panel */}
      <div className="border-b border-[#141414] p-4 bg-[#050505] flex items-center justify-between">
        <h2 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
          <BookOpenIcon className="size-3.5 text-zinc-500" />
          ./publications ({articles.length})
        </h2>
        
        <a 
          href="https://hashnode.com/@abhixshek" 
          target="_blank" 
          rel="noreferrer"
          className="text-[11px] text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group font-medium"
        >
          <span>systems.hashnode.dev</span>
          <ArrowUpRightIcon size={12} className="text-zinc-600 group-hover:text-white transition-colors" />
        </a>
      </div>

      {/* Adaptive Matrix Dynamic Grid Layer Wrapper */}
      <div className="p-5 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {articles.map((article) => (
            <ArticleItem
              key={article.id}
              url={article.url}
              title={article.title}
              coverUrl={article.coverUrl}
              createdAt={article.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Linked directly to your live production publication assets and logs
const articles: Article[] = [
  {
    id: "1",
    title: "Building a Production-Grade RAG System: Architecture, Trade-offs, and Lessons Learned",
    url: "https://ragsystemabhishekrajput.hashnode.dev/building-a-production-grade-rag-system-architecture-trade-offs-and-lessons-learned",
    coverUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", 
    createdAt: "2024-09-15",
  },
  {
    id: "2",
    title: "Modernizing Defense Robotics: From PLC-Heavy Control to a Sub-150ms Web-Orchestrated HMI",
    url: "https://systemsabhishekrajput.hashnode.dev/modernizing-defense-robotics-from-plc-heavy-control-to-a-sub-150ms-web-orchestrated-hmi",
    coverUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop", 
    createdAt: "2024-04-20",
  },
  {
    id: "3",
    title: "IIoT Telemetry Core Ingestion Engineering: Processing 60K High-Frequency Tag Packages at Scale",
    url: "https://systemsabhishekrajput.hashnode.dev", // Under Construction link routing fallback
    coverUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop", 
    createdAt: "2026-06-10", 
  },
];