import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Projects() {

    return (
        <Tabs defaultValue="personal">
            <TabsList>
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="top">The Odin Project</TabsTrigger>
                <TabsTrigger value="fcc">freeCodeCamp</TabsTrigger>
            </TabsList>
        </Tabs>
    );
}