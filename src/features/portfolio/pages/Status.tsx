import { Card, CardContent } from "@/shared/ui/card";
import { Separator } from "@/shared/ui/separator";
import { STATUS_LIST } from "@/features/portfolio/data/status";
import type { Status } from "@/features/portfolio/types";

export default function Status() {

    return (
        <section>
            <div className="container">
                <div className="relative mx-auto max-w-4xl">
                    <Separator
                        orientation="vertical"
                        className="absolute top-4 left-2 bg-gray-700"
                    />
                    <div className="space-y-10 -mt-2">
                    {STATUS_LIST.map((item: Status, index: number) => (
                        <div key={index} className="relative pl-8">
                            <div className="absolute top-2.5 -left-1 flex size-6 items-center justify-center rounded-full bg-foreground text-black">
                                <item.icon className="size-4" />
                            </div>

                            <h4 className="py-2 text-lg font-heading font-semibold tracking-tight">
                                {item.title}
                            </h4>

                            <h5 className="text-sm tracking-tight text-muted-foreground -mt-2">
                                {item.date}
                            </h5>

                            <Card className="my-5 rounded-none shadow-none">
                                <CardContent className="text-muted-foreground">
                                    {item.description}
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
