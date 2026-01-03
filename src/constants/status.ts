import type { StatusDefinition } from "@/types";
import { BookOpenText, BriefcaseBusiness, CalendarCheck2, FolderGit2, GraduationCap, Search, SquareLibrary } from "lucide-react";

export const STATUS_LIST: StatusDefinition[] = [
    {
        title: "Transitioning from Learning to Job Hunting",
        date: "Jan 2026",
        description: "Moved from the learning phase into job searching, with a solid base from beginner to intermediate work. I’m now looking for a role that fits my skills, despite the challenging market we have right now.",
        icon: Search,
    },
    {
        title: "Developing a start-up project called Nova",
        date: "Nov 2025",
        description: "Working on Nova, a non-funded POS system built with Tauri. I handle most backend development and occasionally help refine and clean up the frontend.",
        icon: FolderGit2,
    },
    {
        title: "Improving skills through The Odin Project",
        date: "Oct 2025",
        description: "On a friend’s recommendation, I started The Odin Project’s Full Stack JavaScript curriculum, building personal projects for my portfolio while further strengthening my web development skills.",
        icon: BookOpenText,
    },
    {
        title: "Learning modern web development through freeCodeCamp",
        date: "Sep 2025",
        description: "To align with modern practices, I started to take freeCodeCamp courses and built small projects that strengthened my foundation in HTML, CSS, JavaScript, React, and basic RESTful APIs.",
        icon: SquareLibrary,
    },
    {
        title: "Starting web development through CS50W",
        date: "Nov 2024",
        description: "Took CS50W to deepen my understanding of web development, including core features, basic system design, and building projects with clear structure and layout guidelines.",
        icon: SquareLibrary,
    },
    {
        title: "Strengthening fundamentals through CS50x",
        date: "Nov 2024",
        description: "Realized I was missing a lot of programming fundamentals, so I took CS50x to build a solid foundation and strengthen my coding skills.",
        icon: SquareLibrary,
    },
    {
        title: "Realization and Career Shift",
        date: "Jul 2022",
        description: "I completed 10 months onboard, supporting bridge and deck operations through safety routines, watch rotations, and daily duties while working with a multicultural crew. Along the way, I handled minor reporting/technical issues and actively sought feedback to grow my responsibility, and this experience ultimately led me to shift my career toward web development which is what I truly wanted to pursue.",
        icon: CalendarCheck2,
    },
    {
        title: "First job as a Deck Cadet",
        date: "Sep 2022",
        description: "After a long period of submitting job applications to various companies and agencies, I secured my first deck cadet role and signed a 9-month onboard contract.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Completed Classroom Instruction in BS Maritime Transportation",
        date: "Sep 2021",
        description: "Completed three years of academic coursework in BS Maritime Transportation.",
        icon: GraduationCap,
    },
];