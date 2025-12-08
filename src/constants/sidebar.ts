import type { SidebarDefinition } from "@/types";
import { Award, Code, Info } from "lucide-react";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Certificates from "@/pages/Certificates";

export const SIDEBAR_LIST: SidebarDefinition[] = [
    {
        label: "About me",
        path: "/",
        icon: Info,
        page: About,
    },
    {
        label: "Personal projects",
        path: "/projects",
        icon: Code,
        page: Projects,
    },
    {
        label: "Certificates",
        path: "/certificates",
        icon: Award,
        page: Certificates,
    }
];