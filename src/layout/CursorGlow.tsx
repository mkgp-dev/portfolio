import { useEffect, useRef } from "react";

export default function CursorGlow() {
    const glowRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const finePointer = window.matchMedia("(pointer: fine)").matches;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!finePointer || reduceMotion) return;

        const glow = glowRef.current;
        if (!glow) return;

        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let frame = 0;

        const update = () => {
            glow.style.setProperty("--glow-x", `${x}px`);
            glow.style.setProperty("--glow-y", `${y}px`);
            frame = 0;
        };

        const onMove = (event: MouseEvent) => {
            x = event.clientX;
            y = event.clientY;
            if (frame === 0) {
                frame = window.requestAnimationFrame(update);
            }
        };

        update();
        window.addEventListener("mousemove", onMove, { passive: true });

        return () => {
            window.removeEventListener("mousemove", onMove);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);

    return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}