import { Badge } from "@/components/ui/badge";
import { SOCIALS_LIST } from "@/constants/socials";
import { STACK_LIST } from "@/constants/stack";
import type { SocialDefinition, StackDefinition } from "@/types";
import { Link } from "react-router";

export default function About() {

    return (
        <div className="flex flex-col gap-6 p-4 md:p-0 md:h-[80vh]">
            <div>
                <h1 className="font-heading font-bold text-4xl">Mark Kenneth Pelayo</h1>
                <p className="font-thin text-2xl">Web Developer</p>
            </div>

            <p>I’m a developer who enjoys crafting clean, user-friendly web applications and building the systems behind them, with a focus on usability, performance, and maintainable code.</p>
            <p>I’m currently looking for my first role where I can contribute to real product work, learn from a team, and grow through collaboration and feedback.</p>

            <div className="flex flex-col gap-2">
                <h4 className="font-heading font-medium text-lg">Tech Stack</h4>
                <div className="flex flex-row flex-wrap gap-2">
                    {STACK_LIST.map((item: StackDefinition, index: number) => (
                        <Badge variant="outline" key={index}>
                            <item.icon />
                            {item.name}
                        </Badge>
                    ))}
                </div>
            </div>

            <div className="mx-auto flex flex-row gap-8 md:mt-auto md:mx-0">
                {SOCIALS_LIST.map((item: SocialDefinition, index: number) => (
                    <Link key={index} to={item.href} className="hover:text-primary">
                        <item.icon className="size-6" />
                    </Link>
                ))}
            </div>
        </div>
    );
}