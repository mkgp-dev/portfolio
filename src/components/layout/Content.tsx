import { Link, Route, Routes } from "react-router";
import { MENU_LIST } from "@/constants/menu";
import type { MenuDefinition } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function Content() {

    return (
        <div className="flex flex-col gap-4 p-4 md:p-0">
            <NavigationMenu className="mx-auto md:mx-0">
                <NavigationMenuList>
                    {MENU_LIST.map((item: MenuDefinition, index: number) => (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuLink asChild>
                                <Link to={item.path} className="flex flex-row items-center gap-2">
                                    <item.icon className="size-4" />
                                    {item.label}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            <Card className="w-full max-w-5xl p-0 bg-card/70 h-[74.5vh] border-none rounded-md shadow-lg">
                <div className="space-y-4 h-full">
                    <ScrollArea className="w-full h-full">
                        <main className="p-4">
                            <Routes>
                                {MENU_LIST.map((item: MenuDefinition, index: number) => {
                                    const Page = item.page;
                                    return <Route key={index} path={item.path} element={<Page />} />
                                })}
                            </Routes>
                        </main>
                    </ScrollArea>
                </div>
            </Card>
        </div>
    );
}