import { Route, Routes } from "react-router";

export default function Content() {

    return (
        <main className="p-4">
            <Routes>
                <Route path="/" element={<p>About me</p>} />
                <Route path="/projects" element={<p>Projects</p>} />
                <Route path="/certificates" element={<p>Certificate</p>} />
            </Routes>
        </main>
    );
}