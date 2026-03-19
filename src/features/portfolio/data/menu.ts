import type { MenuItem } from "@/features/portfolio/types";
import { Award, Code, Info, Rss } from "lucide-react";
import Projects from "@/features/portfolio/pages/Projects";
import Certificates from "@/features/portfolio/pages/Certificates";
import Status from "@/features/portfolio/pages/Status";
import Blog from "@/features/blog/pages/Blog";

export const MENU_LIST: MenuItem[] = [
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
        label: "Status",
        path: "/",
        icon: Info,
        page: Status,
    },
    {
        label: "Blog",
        path: "/blog",
        icon: Rss,
        page: Blog,
    }
];
