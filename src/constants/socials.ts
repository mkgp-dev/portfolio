import type { SocialDefinition } from "@/types";
import { SiCodepen, SiFreecodecamp, SiGithub } from "@icons-pack/react-simple-icons";
import { Globe, Mail } from "lucide-react";

export const SOCIALS_LIST: SocialDefinition[] = [
    {
        label: "Github",
        href: "https://github.com/mkgp-dev",
        icon: SiGithub,
    },
    {
        label: "freeCodeCamp",
        href: "https://www.freecodecamp.org/mkgp-dev",
        icon: SiFreecodecamp,
    },
    {
        label: "CodePen",
        href: "https://codepen.io/mkgp-dev",
        icon: SiCodepen,
    },
    {
        label: "Linkedin",
        href: "https://www.linkedin.com/in/mkgpdev",
        icon: Globe,
    },
    {
        label: "Email",
        href: "mailto:mkgpdev@gmail.com",
        icon: Mail,
    },
];