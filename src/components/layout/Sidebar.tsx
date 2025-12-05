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
} from "@/components/ui/sidebar";
import { SIDEBAR_LIST } from "@/constants/sidebar";
import type { SidebarDefinition } from "@/types";
import { Link } from "react-router";

export default function SidebarLayout() {

    return (
        <Sidebar collapsible="none" className="border-r border-border/60">
            <SidebarHeader className="px-4 py-3">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link to="/">
                                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <p>MK</p>
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-heading font-semibold">Mark Kenneth Pelayo</span>
                                    <span>Web Developer</span>
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
                            {SIDEBAR_LIST.map((item: SidebarDefinition, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton
                                        asChild
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
            </SidebarContent>
        </Sidebar>
    );
}