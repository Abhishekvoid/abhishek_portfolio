"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  Terminal,
  Lightbulb,
  MapPin,
  Phone,
  Link2,
  Clock,
  Mail,
  User2,
  FileText,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type InfoRowProps = {
  icon: ReactNode;
  children: ReactNode;
};

type SocialLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
};

const roles = [
  "Backend & Systems Engineer",
  "Robotics & AI Infrastructure",
  "Building from R&D to Production",
];

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-3 mb-3 pl-4 h-5 overflow-hidden">
      <div
        className="flex flex-col transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${index * 20}px)`,
        }}
      >
        {roles.map((role) => (
          <p
            key={role}
            className="h-5 text-sm font-mono text-zinc-400 whitespace-nowrap leading-5"
          >
            {role}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function ProfileCard() {
  return (
    <div className="w-full bg-[#0a0a0a] text-[#ededed] font-mono antialiased border border-[#141414]">
      {/* ── ROW 1: HEADER ── */}
      <div className="flex border-b border-[#141414] min-h-[160px]">
        {/* Avatar Cell */}
        <div className="w-[160px] h-[160px] flex items-center justify-center border-r border-[#141414] shrink-0 bg-black">
          <div className="relative w-[160px] h-[160px] overflow-hidden rounded-full border border-[#1c1c1e] bg-[#141414]">
            <img
            // 
              src="#" 
              alt="Abhishek Rajput"
              className="w-max h-max object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-[13px] font-bold text-zinc-500 z-0">
              AR
            </div>
          </div>
        </div>

        {/* Name Cell */}
        <div className="flex-1 border-r border-[#141414] relative bg-black">
          <div className="absolute bottom-0 w-[100%]">
            <div className="w-full">
              <div className="flex items-center gap-2 pt-1.5 pb-1.5 border-y border-[#141414] pl-4">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight leading-none text-white whitespace-nowrap">
                  Abhishek Rajput
                </h1>
                <span className="inline-flex size-3.5 items-center justify-center rounded-full bg-blue-500 text-black shadow-[0_0_8px_rgba(59,130,246,0.4)] shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-2 text-white">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
              </div>
              <RotatingRole />
            </div>
          </div>
        </div>
      </div>

      {/* ── ROW 2: INFO MATRIX ── */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] border-b border-[#141414]">
        {/* Left column */}
        <div className="flex flex-col p-5 gap-[13px] border-b md:border-b-0 md:border-r border-[#141414] bg-black">
          <InfoRow icon={<Terminal size={12} strokeWidth={1.5} />}>
            Backend &amp; Systems Engineer
          </InfoRow>

          
          <InfoRow icon={<MapPin size={12} strokeWidth={1.5} />}>
            Ahmedabad, Gujarat, India
          </InfoRow>

          <InfoRow icon={<Phone size={12} strokeWidth={1.5} />}>
            <span className="text-[#ededed]">+91 63541 04982</span>
          </InfoRow>

          <InfoRow icon={<Link2 size={12} strokeWidth={1.5} />}>
            <a
              href="https://github.com/Abhishekvoid"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors hover:underline"
            >
              github.com/Abhishekvoid
            </a>
          </InfoRow>
        </div>

        {/* Right column */}
        <div className="flex flex-col p-5 gap-[13px] bg-[#050505]">
          <div className="flex items-center gap-[14px] text-[13px] tracking-tight text-zinc-400">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-[#161616] border border-[#222222] text-zinc-500">
              <Clock size={13} strokeWidth={1.5} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">IST</span>
              <span className="text-zinc-700"></span>
              <span className="text-zinc-500 text-xs">UTC +5:30</span>
            </div>
          </div>

          <InfoRow icon={<Mail size={12} strokeWidth={1.5} />}>
            <a
              href="mailto:abhishek.rajput7202@gmail.com"
              className="text-zinc-400 hover:text-white transition-colors hover:underline"
            >
              abhishek.rajput7202@gmail.com
            </a>
          </InfoRow>

          <InfoRow icon={<User2 size={12} strokeWidth={1.5} />}>
            <span className="text-zinc-400">he/him</span>
          </InfoRow>

          {/* NEW NATIVE RESUME ROUTER ENTRY */}
          <InfoRow icon={<FileText size={12} strokeWidth={1.5} />}>
            <a
              href="/pdf/Abhishek_rajput_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors font-semibold underline decoration-zinc-700 underline-offset-2 hover:decoration-white"
            >
              View Resume 
            </a>
          </InfoRow>
        </div>
      </div>

      {/* ── ROW 3: SOCIALS TRAY ── */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr]">
        <div className="p-4 flex items-center gap-4 md:border-r border-[#141414] bg-black">
          <SocialLink
            href="https://github.com/Abhishekvoid"
            label="GitHub"
            icon={<FaGithub size={15} />}
          />
          <SocialLink
            href="https://linkedin.com/in/abhishek-rajput-4ba60221a"
            label="LinkedIn"
            icon={<FaLinkedin size={15} />}
          />
        </div>
        <div className="hidden md:block bg-[#050505]" />
      </div>
    </div>
  );
}

function InfoRow({ icon, children }: InfoRowProps) {
  return (
    <div className="flex items-center gap-[13px] text-[12.5px] tracking-tight text-zinc-400">
      <div className="flex items-center justify-center w-[22px] h-[22px] rounded-[3px] bg-[#161616] border border-[#252525] text-zinc-500 shrink-0">
        {icon}
      </div>
      <span className="leading-none flex items-center gap-0">{children}</span>
    </div>
  );
}

function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="text-zinc-600 hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
}