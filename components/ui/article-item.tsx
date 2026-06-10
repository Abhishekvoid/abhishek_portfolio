"use client";

import { format } from "date-fns";
import { cn } from "@/lib/utils";

export type ArticleItemProps = {
  url: string;
  title: string;
  coverUrl: string;
  createdAt: string;
};

export function ArticleItem({
  url,
  title,
  coverUrl,
  createdAt,
}: ArticleItemProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "flex flex-col gap-3 p-3 transition-colors duration-200 hover:bg-[#050505] group text-left",
        "border border-[#141414] bg-black"
      )}
    >
      {/* Article Cover Box Image Frame */}
      <div className="relative aspect-video w-full overflow-hidden border border-[#141414] bg-[#0c0c0d]">
        {/* Tech overlay grid network mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#141414_1px,transparent_1px)] [background-size:8px_8px] opacity-40 pointer-events-none z-10" />
        <img
          src={coverUrl}
          alt={title}
          className="size-full object-cover filter grayscale contrast-[1.1] brightness-[0.9] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300 ease-out"
        />
      </div>

      {/* Text Data Block info fields */}
      <div className="flex flex-col gap-2 flex-1 justify-between">
        <h3 className="text-[13px] font-semibold leading-snug tracking-tight text-zinc-200 group-hover:text-white transition-colors line-clamp-2">
          {title}
        </h3>

        <dl className="pt-1">
          <dt className="sr-only">Published on</dt>
          <dd className="text-[10px] text-zinc-500 font-mono tracking-tight tabular-nums uppercase">
            <time dateTime={new Date(createdAt).toISOString()}>
              {format(new Date(createdAt), "MMM d, yyyy")}
            </time>
          </dd>
        </dl>
      </div>
    </a>
  );
}