export default function NotFound() {

    return (
        <div className="flex min-h-[65vh] flex-col items-center justify-center gap-3 text-center">
            <h2 className="text-2xl font-heading font-semibold">Page not found</h2>
            <p className="text-sm text-muted-foreground">
                The page you are looking for does not exist.
            </p>
        </div>
    );
}