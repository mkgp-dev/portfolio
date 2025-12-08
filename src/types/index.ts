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