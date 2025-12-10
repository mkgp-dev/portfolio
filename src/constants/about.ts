import type { AboutDefinition } from "@/types";
import { BookOpenText, BriefcaseBusiness, FolderGit2, GraduationCap, SquareLibrary } from "lucide-react";

export const STATUS_LIST: AboutDefinition[] = [
    {
        name: "Nova",
        description: "I’m currently working on a non-funded startup project called Nova, a Point of Sale (POS) system built with Tauri, where I handle most of the back-end work while also helping improve and clean up the front-end.",
        icon: FolderGit2,
    },
    {
        name: "The Odin Project",
        description: "I’m currently learning through The Odin Project’s Full Stack JavaScript curriculum, and I’m at the NodeJS section.",
        icon: BookOpenText,
    },
];

export const EXPERIENCE_LIST: AboutDefinition[] = [
    {
        name: "Deck Cadet",
        description: "I spent my time as a deck cadet shadowing officers on the bridge and deck, helping with daily safety routines, rotating duties, and long shifts. I worked with a multicultural crew, helped sort out small reporting/tech issues, and kept asking for feedback so I could take on more responsibility.",
        icon: BriefcaseBusiness,
    },
];

export const EDUCATION_LIST: AboutDefinition[] = [
    {
        name: "freeCodeCamp",
        description: "Learned modern web development fundamentals through freeCodeCamp, building small projects that strengthened my foundation in HTML, CSS, JavaScript, React, and APIs.",
        icon: SquareLibrary,
    },
    {
        name: "CS50",
        description: "Took CS50 to learn the basics of coding, giving me a strong starting point for building web projects.",
        icon: SquareLibrary,
    },
    {
        name: "Completed Classroom Instruction in BS Maritime Transportation",
        description: "Finished 3 years of academic coursework in BS Maritime Transportation and completed 10 months of onboard training before deciding to switch careers into web development.",
        icon: GraduationCap,
    },
];