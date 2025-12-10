import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarSeparator,
    SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { SIDEBAR_LIST } from "@/constants/sidebar";
import { SOCIALS_LIST } from "@/constants/socials";
import type { SocialDefinition } from "@/types";
import type { SidebarDefinition } from "@/types";
import { Link, useLocation } from "react-router";

export default function SidebarLayout() {
    const location = useLocation();

    return (
        <Sidebar collapsible="none" className="border-r border-border/60 shrink-0">
            <SidebarHeader className="py-3">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link to="/">
                                <div className="flex flex-col leading-none">
                                    <span className="font-heading font-semibold text-lg">Mark Kenneth Pelayo</span>
                                    <span className="-mt-1">Web Developer</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarSeparator className="mx-0" />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {SIDEBAR_LIST.map((item: SidebarDefinition, index: number) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={location.pathname === item.path}
                                    >
                                        <Link to={item.path}>
                                            <item.icon className="size-4" />
                                            {item.label}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator className="-mt-2 mx-0" />
                <SidebarGroup>
                    <SidebarGroupLabel>Socials</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {SOCIALS_LIST.map((item: SocialDefinition, index: number) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton
                                        asChild
                                    >
                                        <Link to={item.href}>
                                            <item.icon className="size-4" />
                                            {item.label}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}