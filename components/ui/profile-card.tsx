import React from 'react'
import { Terminal, Lightbulb, MapPin, Phone, Link2, Clock, Mail, User2} from 'lucide-react'
import { FaGithub, FaLinkedin } from "react-icons/fa"


export default function ProfileCard() {
  return (
    <div className="w-full bg-black text-[#ededed] font-mono antialiased">

      <div className="relative border-t border-l border-[#141414] grid grid-cols-1 md:grid-cols-2">

        <div className="flex flex-col justify-between p-6 space-y-[14px] border-r border-b border-[#141414]">
          
          <div className="flex items-center gap-[14px] text-[13px] tracking-tight group cursor-pointer">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-[#161616] border border-[#222222] text-zinc-500 group-hover:text-zinc-300 transition-colors">
              <Terminal size={13} strokeWidth={1.5} />
            </div>
            <span className="text-zinc-400 group-hover:text-zinc-300">
              Backend & AI Engineer <span className="text-white">@Independent</span>
            </span>
          </div>

          <div className="flex items-center gap-[14px] text-[13px] tracking-tight group cursor-pointer">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-[#161616] border border-[#222222] text-zinc-500 group-hover:text-zinc-300 transition-colors">
              <Lightbulb size={13} strokeWidth={1.5} />
            </div>
            <span className="text-zinc-400 group-hover:text-zinc-300">
              Software Developer <span className="text-white">@Nexus Automech</span>
            </span>
          </div>

          <div className="flex items-center gap-[14px] text-[13px] tracking-tight text-zinc-400">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-[#161616] border border-[#222222] text-zinc-500">
              <MapPin size={13} strokeWidth={1.5} />
            </div>
            <span>Ahmedabad, Gujarat, India</span>
          </div>

          <div className="flex items-center gap-[14px] text-[13px] tracking-tight text-zinc-400">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-[#161616] border border-[#222222] text-zinc-500">
              <Phone size={13} strokeWidth={1.5} />
            </div>
            <span className="text-[#ededed]">+91 63541 04982</span>
          </div>


          <div className="flex items-center gap-[14px] text-[13px] tracking-tight group">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-[#161616] border border-[#222222] text-zinc-500 group-hover:text-zinc-300 transition-colors">
              <Link2 size={13} strokeWidth={1.5} />
            </div>
            <a 
              href="https://github.com/Abhishekvoid" 
              target="_blank" 
              rel="noreferrer" 
              className="text-zinc-400 group-hover:text-white transition-colors hover:underline"
            >
              github.com/Abhishekvoid
            </a>
          </div>
        </div>


        <div className="flex flex-col justify-between p-6 space-y-6 md:space-y-0 bg-[#050505] border-r border-b border-[#141414]">
          

          <div className="flex items-center gap-[14px] text-[13px] tracking-tight">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-[#161616] border border-[#222222] text-zinc-500">
              <Clock size={13} strokeWidth={1.5} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">IST</span>
              <span className="text-zinc-600">//</span>
              <span className="text-zinc-500 text-xs">UTC +5:30</span>
            </div>
          </div>


          <div className="flex items-center gap-[14px] text-[13px] tracking-tight group">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-[#161616] border border-[#222222] text-zinc-500 group-hover:text-zinc-300 transition-colors">
              <Mail size={13} strokeWidth={1.5} />
            </div>
            <a 
              href="mailto:abhishek.rajput7202@gmail.com" 
              className="text-zinc-400 group-hover:text-white transition-colors hover:underline"
            >
              abhishek.rajput7202@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-[14px] text-[13px] tracking-tight">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-[#161616] border border-[#222222] text-zinc-500">
              <User2 size={13} strokeWidth={1.5} />
            </div>
            <span className="text-zinc-400">he/him</span>
          </div>
        </div>
      </div>

      <div className="
        relative border-l border-r border-b border-[#141414]
        p-4 flex items-center gap-[18px] bg-black
        before:content-[''] before:absolute before:-top-[1px]
        before:left-1/2 before:h-px before:w-[140%]
        before:-translate-x-1/2 before:bg-[#141414]
      ">
     
        <a 
          href="https://github.com/Abhishekvoid" 
          target="_blank" 
          rel="noreferrer" 
          className="text-zinc-500 hover:text-white transition-colors"
        >
          <FaGithub size={16} />
        </a>

   
        <a 
          href="https://linkedin.com/in/abhishek-rajput-4ba60221a" 
          target="_blank" 
          rel="noreferrer" 
          className="text-zinc-500 hover:text-white transition-colors"
        >
          <FaLinkedin size={16} />
        </a>

      </div>
    </div>
  )
}