import type { MenuDefinition } from "@/types";
import { Award, BookOpenText, Code, Info } from "lucide-react";
import Projects from "@/pages/Projects";
import Certificates from "@/pages/Certificates";
import Status from "@/pages/Status";
import Blog from "@/pages/Blog";

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
    },
    {
        label: "Blog",
        path: "/blog",
        icon: BookOpenText,
        page: Blog,
    }
];