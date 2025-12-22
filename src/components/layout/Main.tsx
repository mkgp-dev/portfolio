import Content from "@/components/layout/Content";
import About from "@/components/layout/About";

export default function Main() {

    return (
        <div className="mx-auto w-full max-w-6xl">
            <div className="flex items-center justify-center min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2.5fr] gap-4 p-0 md:p-4">
                    <About />
                    <Content />
                </div>
            </div>
        </div>
    );
}