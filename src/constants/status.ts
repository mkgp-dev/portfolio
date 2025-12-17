import type { StatusDefinition } from "@/types";
import { BookOpenText, BriefcaseBusiness, FolderGit2, GraduationCap, SquareLibrary } from "lucide-react";

export const STATUS_LIST: StatusDefinition[] = [
    {
        title: "Developing a start-up project called Nova",
        date: "Present",
        description: "Working on Nova, a non-funded POS system built with Tauri. I handle most backend development and occasionally help refine and clean up the frontend.",
        icon: FolderGit2,
    },
    {
        title: "Formulating my stack with The Odin Project",
        date: "Present",
        description: "Learning through The Odin Project’s Full Stack JavaScript curriculum, currently focused on the Node.js section.",
        icon: BookOpenText,
    },
    {
        title: "Learning more about modern web development with freeCodeCamp",
        date: "Sep 2025",
        description: "Learned modern web development fundamentals through freeCodeCamp, building small projects that strengthened my foundation in HTML, CSS, JavaScript, React, and APIs.",
        icon: SquareLibrary,
    },
    {
        title: "Started to improve my coding with CS50",
        date: "Nov 2024",
        description: "Took CS50 to learn the basics of coding, giving me a strong starting point for building web projects.",
        icon: SquareLibrary,
    },
    {
        title: "Got my first job as Deck Cadet",
        date: "Sep 2022",
        description: "Assisted bridge and deck operations through safety routines, watch rotations, and daily duties. Worked with a multicultural crew and helped resolve minor reporting/tech issues while actively seeking feedback to grow responsibility. Completed 10 months of onboard training before deciding to switch careers into web development.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Completed Classroom Instruction in BS Maritime Transportation",
        date: "Sep 2021",
        description: "Completed three years of academic coursework in BS Maritime Transportation.",
        icon: GraduationCap,
    },
];