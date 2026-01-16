import type { ComponentType } from "react";

type IconComponent = ComponentType<{ className?: string }>;

export type MenuItem = {
    label: string;
    path: string;
    icon: IconComponent;
    page: ComponentType;
};

export type SocialLink = {
    label: string;
    href: string;
    icon: IconComponent;
};

export type Certificate = {
    name: string;
    issuer: string;
    date: string;
    description: string;
    link: string;
};

export type Status = {
    title: string;
    date: string;
    description: string;
    icon: IconComponent;
};

export type Project = {
    name: string;
    description?: string;
    framework: string[];
    source?: string;
    link?: string;
};

export type ProjectCategory = "showcase" | "top" | "fcc";

export type Stack = {
    name: string;
    icon: IconComponent;
};