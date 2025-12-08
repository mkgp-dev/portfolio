import { Route, Routes } from "react-router";
import { SIDEBAR_LIST } from "@/constants/sidebar";
import type { SidebarDefinition } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Content() {

    return (
        <ScrollArea className="w-full h-full">
            <main className="px-8 py-4">
                <Routes>
                    {SIDEBAR_LIST.map((item: SidebarDefinition, index: number) => {
                        const Page = item.page;
                        return <Route key={index} path={item.path} element={<Page />} />
                    })}
                </Routes>
            </main>
        </ScrollArea>
    );
}