import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { EDUCATION_LIST } from "@/constants/about";
import type { AboutDefinition } from "@/types";

export default function AboutEducation() {

    return (
        <Card className="relative rounded-none">
            <CardContent>
                <Badge className="absolute right-4 top-4 bg-blue-600 text-white">Education</Badge>

                <div className="divide-y divide-border">
                    {EDUCATION_LIST.map((item: AboutDefinition, index: number) => (
                        <div key={index} className="flex flex-col py-3">
                            <h4 className="font-heading font-medium text-lg flex items-center gap-2">
                                <item.icon className="size-5" />
                                {item.name}
                            </h4>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}