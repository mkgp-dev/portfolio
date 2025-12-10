import AboutStatus from "@/pages/about/About.Status";
import AboutExperience from "./About.Experience";
import AboutEducation from "./About.Education";

export default function About() {

    return (
        <div className="flex flex-col gap-3">
            <h1 className="font-heading text-4xl">About me</h1>
            <p className="text-sm">I'm a self-taught web developer transitioning from a maritime background. I’m currently focused on learning modern web development fundamentals and building personal projects to sharpen my skills.</p>

            <AboutStatus />
            <AboutExperience />
            <AboutEducation />
        </div>
    );
}