import { Card } from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarLayout from "@/components/layout/Sidebar";
import Content from "@/components/layout/Content";

export default function Main() {

    return (
        <Card className="w-full max-w-5xl p-0 bg-card/70 h-[40vh] border-none rounded-none shadow-lg">
            <SidebarProvider className="min-h-[40vh]">
                <SidebarLayout />
                <Content />
            </SidebarProvider>
        </Card>
    );
}