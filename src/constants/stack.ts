import type { StackDefinition } from "@/types";
import { SiExpress, SiMongodb, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiReactquery, SiShadcnui, SiTailwindcss, SiTypescript } from "@icons-pack/react-simple-icons";
import { Bot } from "lucide-react";

export const STACK_LIST: StackDefinition[] = [
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
        name: "MongoDB",
        icon: SiMongodb,
    },
    {
        name: "Codex",
        icon: Bot,
    },
];