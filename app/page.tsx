import React from "react";
import ProfileCard from "@/components/ui/profile-card";
import { Experience01 } from "@/components/ui/experience-01";
import { Projects } from "@/components/ui/projects";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-[#ededed] font-mono selection:bg-white selection:text-black antialiased relative overflow-x-hidden">
      <div className="relative w-full h-44 border-b border-[#141414] bg-[radial-gradient(#141414_1px,transparent_1px)] [background-size:16px_16px] before:absolute before:left-[-100vw] before:bottom-0 before:w-[300vw] before:border-b before:border-[#141414]" />

      <div className="absolute inset-y-0 left-0 right-0 pointer-events-none z-0">
        <div className="w-full max-w-5xl mx-auto h-full grid grid-cols-1 md:grid-cols-[1fr_20px] px-4 md:px-8">
          <div className="h-full border-l border-r border-[#141414]" />
          <div className="h-full border-r border-[#141414] hidden md:block" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto -translate-y-10 px-4 md:px-8 space-y-0">
        <div className="relative w-full bg-black border-t border-[#141414] before:absolute before:left-[-100vw] before:top-0 before:w-[300vw] before:border-t before:border-[#141414]">
          <ProfileCard />
        </div>

        <div className="relative w-full border-b border-[#141414] before:absolute before:left-[-100vw] before:bottom-0 before:w-[300vw] before:border-b before:border-[#141414]" />

        <div className="relative flex h-10 w-full border-b border-[#141414] before:absolute before:left-[-100vw] before:-z-1 before:h-full before:w-[300vw] before:bg-[repeating-linear-gradient(315deg,#141414_0,#141414_1px,transparent_0,transparent_50%)] before:[background-size:10px_10px] after:absolute after:left-[-100vw] after:bottom-0 after:w-[300vw] after:border-b after:border-[#141414]">
          <div className="w-full h-full md:border-r border-[#141414]/40 pointer-events-none" />
        </div>

        <div className="relative w-full bg-black pt-0 before:absolute before:left-[-100vw] before:top-0 before:w-[300vw] before:border-t before:border-[#141414]">
          <Experience01 />
        </div>

        <div className="relative w-full border-b border-[#141414] before:absolute before:left-[-100vw] before:bottom-0 before:w-[300vw] before:border-b before:border-[#141414]" />

        <div className="relative w-full bg-black  before:absolute before:left-[-100vw] before:top-0 before:w-[300vw] before:border-t before:border-[#141414]"></div>

        <div className="relative w-full border-b border-[#141414] before:absolute before:left-[-100vw] before:bottom-0 before:w-[300vw] before:border-b before:border-[#141414] pb-12" />
        <div className="relative flex h-10 w-full border-b border-[#141414] before:absolute before:left-[-100vw] before:-z-1 before:h-full before:w-[300vw] before:bg-[repeating-linear-gradient(315deg,#141414_0,#141414_1px,transparent_0,transparent_50%)] before:[background-size:10px_10px] after:absolute after:left-[-100vw] after:bottom-0 after:w-[300vw] after:border-b after:border-[#141414]">
          <div className="w-full h-full md:border-r border-[#141414]/40 pointer-events-none" />
        </div>

        <div className="relative w-full bg-black before:absolute before:left-[-100vw] before:top-0 before:w-[300vw] before:border-t before:border-[#141414]">
          <Projects />
        </div>
      </div>

    </div>
  );
}
