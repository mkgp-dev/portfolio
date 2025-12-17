import { SOCIALS_LIST } from "@/constants/socials";
import type { SocialDefinition } from "@/types";
import { Link } from "react-router";

export default function About() {

    return (
        <div className="flex flex-col gap-6 p-4 md:p-0 md:h-[80vh]">
            <div>
                <h1 className="font-heading font-bold text-4xl">Mark Kenneth Pelayo</h1>
                <p className="font-thin text-2xl">Web Developer</p>
            </div>

            <p>I'm a self-taught web developer transitioning from a maritime background.</p>
            <p>Currently focused on learning modern web development fundamentals and building personal projects to sharpen my skills.</p>

            <div className="mx-auto flex flex-row gap-8 md:mt-auto md:mx-0">
                {SOCIALS_LIST.map((item: SocialDefinition, index: number) => (
                    <Link key={index} to={item.href} className="hover:text-slate-500">
                        <item.icon className="size-6" />
                    </Link>
                ))}
            </div>
        </div>
    );
}