import type { MenuDefinition } from "@/types";
import { Award, Code, Info } from "lucide-react";
import Projects from "@/pages/Projects";
import Certificates from "@/pages/Certificates";
import Status from "@/pages/Status";

export const MENU_LIST: MenuDefinition[] = [
    {
        label: "Status",
        path: "/",
        icon: Info,
        page: Status,
    },
    {
        label: "Projects",
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