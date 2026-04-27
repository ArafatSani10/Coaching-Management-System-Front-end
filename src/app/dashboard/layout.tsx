export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar Component Ekhane hobe */}
            <aside className="w-64 border-r bg-zinc-50/50 hidden md:block">
                {/* Sidebar Links */}
            </aside>

            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    );
}