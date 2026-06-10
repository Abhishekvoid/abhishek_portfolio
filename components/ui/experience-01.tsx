import {
  CodeXmlIcon,
  CpuIcon,
  BrainCircuitIcon,
  TerminalIcon,
} from "lucide-react";
import { WorkExperience } from "./work-experience";

export function Experience01() {
  return (
    <div className="w-full bg-black border border-[#141414]">
      <div
        className="
          relative w-full bg-[#050505] p-4
          border-[#141414]
          after:content-[''] after:absolute after:-bottom-[1px]
          after:left-1/2 after:h-[1px] after:w-[180%]
          after:-translate-x-1/2 after:bg-[#141414]
        "
      >
        <h2 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
          ./experience-log
        </h2>
      </div>

      <WorkExperience className="bg-transparent p-6" experiences={EXPERIENCE} />
    </div>
  );
}

const EXPERIENCE = [
  {
    id: "genai-rag-project",
    companyName: "Autonomous R&D",
    companyWebsite: "https://github.com/Abhishekvoid",
    isCurrentEmployer: true,
    positions: [
      {
        id: "rag-lead",
        title: "Full-Stack GenAI & RAG Architect",
        employmentPeriod: { start: "09.2025" }, // Present
        employmentType: "Independent Production",
        icon: <BrainCircuitIcon className="size-3" strokeWidth={1.5} />,
        isExpanded: true,

        description:
          "**[GitHub](https://github.com/Abhishekvoid/RagBag-frontend) • [System Design](https://excalidraw.com/#json=B4VQe_9qrgFyiu3fgqPBO,ZuKsEZ1gFaE5NmiUF1m1eA) • [Architecture Blog](https://ragsystemabhishekrajput.hashnode.dev/building-a-production-grade-rag-system-architecture-trade-offs-and-lessons-learned)**\n\n" +
          "- **Architected a production-grade RAG platform** enabling conversational interaction with user-uploaded documents through semantic retrieval and source-aware responses.\n" +
          "- **Built an end-to-end retrieval pipeline** spanning OCR extraction, semantic chunking, TEI embeddings, Qdrant vector search, cross-encoder reranking, and Llama 3 generation.\n" +
          "- **Implemented distributed ingestion and retrieval workflows** using Django, Celery, Redis, and WebSockets for asynchronous processing and real-time updates.\n" +
          "- **Designed intelligent query orchestration** through intent routing, contextualization, and query expansion, achieving **~1.5–2s end-to-end response latency**.",

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
        ],
      },
    ],
  },
  {
    id: "nexus-automech",
    companyName: "Nexus Automech",
    positions: [
      {
        id: "software-dev-nexus",
        title: "Software Developer (Robotics & IIoT)",
        employmentPeriod: { start: "04.2024", end: "08.2025" },
        employmentType: "Full-time",
        icon: <CpuIcon className="size-3" strokeWidth={1.5} />,
        description:
          "- **Co-led a 2-person engineering team** delivering robotics and industrial IoT systems from R&D prototypes to production deployment.\n" +
          "- **Architected real-time autonomous robot control systems** reducing command latency from **500ms → 150ms (3× improvement)** through Django/WebSocket orchestration and direct Modbus TCP communication.\n" +
          "- **Implemented ROS2-based sensor fusion pipelines** combining YOLOv8 vision, 3D LiDAR, and UWB localization for autonomous navigation and real-time perception.\n" +
          "- **Engineered production safety mechanisms** including hardware emergency stops, watchdog timers, and Redis-backed state reconciliation, delivering **1.5 years of operation without safety incidents**.\n" +
          "- **Built a multi-tenant IIoT platform** processing **60,000+ industrial sensor tags** for **500+ users across 20+ facilities** using Celery/Redis asynchronous pipelines.\n" +
          "- **Designed secure backend architecture** with RBAC, tenant isolation, real-time telemetry dashboards, and PostgreSQL optimizations for high-concurrency industrial workloads.\n" +
          "- **Tech Stack:** Django, ROS2, WebSockets, Modbus TCP, Redis, Celery, PostgreSQL, YOLOv8, OpenCV, LiDAR, UWB",
        skills: [
          "Python",
          "Django REST Framework",
          "ROS2",
          "WebSockets",
          "Modbus TCP",
          "YOLOv8",
          "Redis",
          "Celery",
          "PostgreSQL",
        ],
      },
    ],
  },
  {
    id: "rapidops",
    companyName: "Rapidops",
    positions: [
      {
        id: "frontend-intern-rapidops",
        title: "Frontend Developer Intern",
        employmentPeriod: { start: "08.2022", end: "02.2023" }, // Exact 6 Months block placeholder
        employmentType: "Internship",
        icon: <CodeXmlIcon className="size-3" strokeWidth={1.5} />,
        description:
          "- **Learned modern frontend development fundamentals** including HTML, CSS, JavaScript, Tailwind CSS, React.js, and responsive web design through hands-on client projects.\n" +
          "- **Contributed to multiple B2B service-based applications and websites**, assisting senior engineers in building responsive multi-page user interfaces and reusable frontend components.\n" +
          "- **Collaborated within an agile development environment**, gaining practical experience in code reviews, debugging, component development, and production delivery workflows.",
        skills: [
          "React.js",
          "Next.js",
          "JavaScript",
          "html",
          "CSS",
          "Tailwind CSS",
        ],
      },
    ],
  },
  {
    id: "bisag-n",
    companyName: "BISAG-N",
    positions: [
      {
        id: "ml-intern-bisag",
        title: "Machine Learning Intern",
        employmentPeriod: { start: "06.2022", end: "08.2022" }, // Exact 3 Months block placeholder
        employmentType: "Internship",
        icon: <TerminalIcon className="size-3" strokeWidth={1.5} />,
        description:
          "- **Developed a facial emotion recognition system** using machine learning and computer vision techniques to classify human emotions from image data.\n" +
          "- **Worked with a dataset of 500,000+ images**, performing data cleaning, preprocessing, augmentation, and quality filtering to improve training performance and model generalization.\n" +
          "- **Achieved 92%–94.3% prediction accuracy** through iterative model tuning, evaluation, and optimization while collaborating with the research team on real-world emotion classification workflows.",
        skills: [
          "Python",
          "Deep Learning",
          "Computer Vision",
          "OpenCV",
          "TensorFlow / PyTorch",
        ],
      },
    ],
  },
];
