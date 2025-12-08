import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-8">
                <p>Hi! I’m Mark, a self-taught web developer transitioning from a maritime background. I’m currently focused on learning modern web development fundamentals and building personal projects to sharpen my skills.</p>

                <p>I’m actively working toward landing my first professional role so I can keep growing my knowledge and experience. If you’re interested in working together or just want to connect, feel free to reach out!</p>
            </div>

            <Card className="rounded-none">
                <CardHeader className="gap-0">
                    <CardTitle className="font-heading">The Odin Project</CardTitle>
                    <CardDescription>Learning Full Stack JavaScript. Currently <span className="font-bold">36%</span> through the <span className="font-bold">NodeJS</span> section.</CardDescription>
                    <CardAction>
                        <Badge variant="secondary" className="bg-blue-600 font-heading font-semibold">
                            Current status
                        </Badge>
                    </CardAction>
                </CardHeader>
            </Card>
        </div>
    );
}