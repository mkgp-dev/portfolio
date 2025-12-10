import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PROJECT_LIST } from "@/constants/projects";
import type { ProjectCategory } from "@/types";
import { ExternalLink, GitFork } from "lucide-react";

export default function Projects() {

    return (
        <div className="flex flex-col gap-3">
            <h1 className="font-heading text-4xl">Projects</h1>
            <Tabs defaultValue="personal">
                <TabsList className="w-full">
                    <TabsTrigger className="cursor-pointer" value="personal">Personal</TabsTrigger>
                    <TabsTrigger className="cursor-pointer" value="top">The Odin Project</TabsTrigger>
                    <TabsTrigger className="cursor-pointer" value="fcc">freeCodeCamp</TabsTrigger>
                </TabsList>

                {(Object.entries(PROJECT_LIST) as [ProjectCategory, typeof PROJECT_LIST.personal][]).map(([category, projects]) => (
                    <TabsContent key={category} value={category} className="mt-3">
                        <div className="grid gap-3 md:grid-cols-2">
                            {projects.map((project, index) => (
                                <Card key={index} className="rounded-none">
                                    <CardHeader>
                                        <CardTitle className="font-heading font-semibold text-lg">{project.name}</CardTitle>
                                        {project.description && (
                                            <CardDescription className="-mt-2 leading-tight">{project.description}</CardDescription>
                                        )}
                                        <div className="flex flex-wrap gap-1 text-xs">
                                            {project.framework.map((item) => (
                                                <Badge variant="outline" className="text-muted-foreground">{item}</Badge>
                                            ))}
                                        </div>
                                    </CardHeader>
                                    {(project.source || project.link) && (
                                        <CardFooter className="justify-end gap-4 text-xs">
                                            {project.source && (
                                                <a href={project.source} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                                    <GitFork className="size-3" />
                                                    View source
                                                </a>
                                            )}

                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                                    <ExternalLink className="size-3" />
                                                    Visit site
                                                </a>
                                            )}
                                        </CardFooter>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}