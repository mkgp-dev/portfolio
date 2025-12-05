import type { SidebarDefinition } from "@/types";
import { Award, Code, Info } from "lucide-react";

export const SIDEBAR_LIST: SidebarDefinition[] = [
    {
        label: "About me",
        path: "/",
        icon: Info,
    },
    {
        label: "Personal projects",
        path: "/projects",
        icon: Code,
    },
    {
        label: "Certificates",
        path: "/certificates",
        icon: Award,
    }
];