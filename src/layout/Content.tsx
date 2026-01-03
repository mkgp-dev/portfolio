import { Link, Route, Routes, useLocation } from "react-router";
import { MENU_LIST } from "@/constants/menu";
import type { MenuDefinition } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import NotFound from "@/pages/NotFound";

export default function Content() {
    const location = useLocation();

    return (
        <div className="flex flex-col gap-4 p-4 md:p-0">
            <div className="w-full overflow-x-auto pb-2 md:pb-0">
                <NavigationMenu className="w-full max-w-full justify-start">
                    <NavigationMenuList>
                        {MENU_LIST.map((item: MenuDefinition, index: number) => (
                            <NavigationMenuItem
                                key={index}
                            >
                                <NavigationMenuLink
                                    asChild
                                    data-active={location.pathname === item.path}
                                >
                                    <Link to={item.path} className="flex flex-row items-center gap-2">
                                        <item.icon className="size-4" />
                                        {item.label}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <Card className="w-full max-w-5xl p-0 bg-transparent h-[74.5vh] border-none shadow-none">
                <div className="space-y-4 h-full">
                    <ScrollArea className="w-full h-full">
                        <main className="p-4">
                            <Routes>
                                {MENU_LIST.map((item: MenuDefinition, index: number) => {
                                    const Page = item.page;
                                    return <Route key={index} path={item.path} element={<Page />} />
                                })}
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </main>
                    </ScrollArea>
                </div>
            </Card>
        </div>
    );
}