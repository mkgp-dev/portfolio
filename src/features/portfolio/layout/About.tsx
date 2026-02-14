import { Badge } from "@/shared/ui/badge";
import { SOCIALS_LIST } from "@/features/portfolio/data/socials";
import { STACK_LIST } from "@/features/portfolio/data/stack";
import type { SocialLink, Stack } from "@/features/portfolio/types";

export default function About() {

    return (
        <div className="flex flex-col gap-6 p-4 md:p-0 md:h-[80vh]">
            <div>
                <h1 className="font-heading font-bold text-4xl">Mark Kenneth Pelayo</h1>
                <p className="font-thin text-2xl">Junior Web/Software Developer</p>
            </div>

            <p>I’m a developer who enjoys crafting clean, user-friendly web applications with a focus on user experience, performance, and maintainable code.</p>
            <p>I’m currently seeking an entry-level/junior developer role where I can contribute to real product work, learn from a team, and grow through collaboration and feedback.</p>

            <div className="flex flex-col gap-2">
                <div className="flex flex-row flex-wrap gap-2">
                    {STACK_LIST.map((item: Stack, index: number) => (
                        <Badge variant="outline" key={index}>
                            <item.icon />
                            {item.name}
                        </Badge>
                    ))}
                </div>
            </div>

            <div className="mx-auto flex flex-row gap-8 md:mt-auto md:mx-0">
                {SOCIALS_LIST.map((item: SocialLink, index: number) => (
                    <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                    >
                        <item.icon className="size-6" />
                    </a>
                ))}
            </div>
        </div>
    );
}
