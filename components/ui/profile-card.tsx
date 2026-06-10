"use client";
import { useEffect, useState } from "react";
import {
  Terminal,
  Lightbulb,
  MapPin,
  Phone,
  Link2,
  Clock,
  Mail,
  User2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


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
    <div className="w-full bg-[#0a0a0a] text-[#ededed] font-mono antialiased border border-[#1f1f1f]">
      {/* ── ROW 1: HEADER ── */}
     <div className="flex border-b border-[#1f1f1f] min-h-[160px]">

  {/* Avatar Cell */}
  <div className="w-[160px] h-[160px] flex items-center justify-center border-r border-[#1f1f1f]">
    <div className="relative w-[160px] h-[160px] overflow-hidden rounded-full border border-[#2a2a2e] bg-[#141414]">
      <img
        src="/avatar.jpg"
        alt="Abhishek Rajput"
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center text-[13px] font-bold text-zinc-500">
        AR
      </div>
    </div>
  </div>

  {/* Name Cell */}
  <div className="flex-1 border-r border-[#1f1f1f] relative">

    <div className="absolute bottom-0  w-[100%]">

      <div className="w-full">

        <div className="flex items-center gap-2 pt-1.5 pb-1.5 border-y border-[#1f1f1f] pl-4">

          <h1 className="text-3xl font-bold   tracking-tight leading-none text-white whitespace-nowrap">
            Abhishek Rajput
          </h1>

          <span className="w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center text-white text-xs">
            ✓
          </span>

        </div>

        <RotatingRole />

      </div>

    </div>

  </div>


</div>

      {/* ── ROW 2: INFO MATRIX ── */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] border-b border-[#1f1f1f]">
        {/* Left column */}
        <div className="flex flex-col p-5 gap-[13px] border-b md:border-b-0 md:border-r border-[#1f1f1f]">
          <InfoRow icon={<Terminal size={12} strokeWidth={1.5} />}>
            Backend &amp; Systems Engineer{" "}
            
          </InfoRow>

          <InfoRow icon={<Lightbulb size={12} strokeWidth={1.5} />}>
            Ex-Software Developer{" "}
            <span className="text-zinc-600">@Nexus Automech</span>
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
        <div className="flex flex-col p-5 gap-[13px] bg-[#0c0c0c]">
          <InfoRow icon={<Clock size={12} strokeWidth={1.5} />}>
            <span className="text-white font-medium">IST</span>
            <span className="text-zinc-700 mx-1.5"></span>
            <span className="text-zinc-600 text-[11px]">UTC +5:30</span>
          </InfoRow>

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
        </div>
      </div>

      {/* ── ROW 3: SOCIALS TRAY ── */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr]">
        <div className="p-4 flex items-center gap-4 md:border-r border-[#1f1f1f]">
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
        <div className="hidden md:block bg-[#0c0c0c]" />
      </div>
    </div>
  );
}

function InfoRow({ icon, children }) {
  return (
    <div className="flex items-center gap-[13px] text-[12.5px] tracking-tight text-zinc-400">
      <div className="flex items-center justify-center w-[22px] h-[22px] rounded-[3px] bg-[#161616] border border-[#252525] text-zinc-500 shrink-0">
        {icon}
      </div>
      <span className="leading-none flex items-center gap-0">{children}</span>
    </div>
  );
}

function SocialLink({ href, label, icon }) {
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
