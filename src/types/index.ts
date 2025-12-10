import type { ComponentType } from "react";

type IconComponent = ComponentType<{ className?: string }>;

export type SidebarDefinition = {
    label: string;
    path: string;
    icon: IconComponent;
    page: ComponentType;
};

export type SocialDefinition = {
    label: string;
    href: string;
    icon: IconComponent;
};

export type CertificateDefinition = {
    name: string;
    issuer: string;
    date: string;
    description: string;
    link: string;
};

export type AboutDefinition = {
    name: string;
    description: string;
    icon: IconComponent;
};

export type ProjectCategory = "personal" | "top" | "fcc";

export type ProjectDefinition = {
    name: string;
    description?: string;
    framework: string[],
    source?: string;
    link?: string;
};