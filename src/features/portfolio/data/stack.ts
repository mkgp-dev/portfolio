import type { Stack } from "@/features/portfolio/types";
import { SiDaisyui, SiElectron, SiExpress, SiMongodb, SiNodedotjs, SiOpenai, SiPostgresql, SiPrisma, SiReact, SiReactquery, SiShadcnui, SiTailwindcss, SiTauri, SiTypescript } from "@icons-pack/react-simple-icons";

export const STACK_LIST: Stack[] = [
    {
        name: "React",
        icon: SiReact,
    },
    {
        name: "TanStack Query",
        icon: SiReactquery,
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
    },
    {
        name: "Node",
        icon: SiNodedotjs,
    },
    {
        name: "Express",
        icon: SiExpress,
    },
    {
        name: "Postgres",
        icon: SiPostgresql,
    },
    {
        name: "Prisma",
        icon: SiPrisma,
    },
    {
        name: "Tailwind",
        icon: SiTailwindcss,
    },
    {
        name: "shadcn/ui",
        icon: SiShadcnui,
    },
    {
        name: "daisyUI",
        icon: SiDaisyui,
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
    },
    {
        name: "Tauri",
        icon: SiTauri,
    },
    {
        name: "Electron",
        icon: SiElectron,
    },
    {
        name: "Codex",
        icon: SiOpenai,
    },
];
