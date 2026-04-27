"use client";

import { useEffect, useState } from "react";
import {
    Home,
    LayoutGrid,
    BookOpen,
    Users,
    Info,
    Mail,
    Menu,
    Moon,
    Sun,
    Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import logo from "../../../public/logo/logo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        const nextTheme = localStorage.getItem("site-theme") ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsDark(nextTheme === "dark");
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const nextTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);
        localStorage.setItem("site-theme", nextTheme);
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
    };

    const menu = [
        { title: "Home", url: "/", icon: Home },
        { title: "Batches", url: "/batches", icon: LayoutGrid },
        { title: "Books", url: "/books", icon: BookOpen },
        { title: "Instructors", url: "/instructors", icon: Users },
        { title: "About", url: "/about", icon: Info },
        { title: "Contact", url: "/contact", icon: Mail },
    ];

    return (
        <section className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex h-20 items-center justify-between gap-4">

                    {/* Logo Area - No shadows, No extra glow */}
                    <Link href="/" className="flex shrink-0 items-center">
                        <div className="relative h-10 w-32 sm:h-12 sm:w-44">
                            <Image
                                src={logo}
                                alt="Logo"
                                fill
                                priority
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav - Clean & Rounded */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {menu.map((item) => {
                            const isActive = pathname === item.url;
                            return (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-colors",
                                        isActive
                                            ? "bg-[#00baff] text-white"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                    )}
                                >
                                    <item.icon className="size-4" />
                                    {item.title}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Actions Area */}
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-xl h-10 w-10 transition-all active:scale-95"
                            onClick={toggleTheme}
                        >
                            {mounted && (isDark ? <Sun className="size-5" /> : <Moon className="size-5" />)}
                        </Button>

                        <div className="hidden lg:flex items-center gap-3">

                            <Button
                                asChild
                                className="rounded-xl px-8 h-11 bg-[#00baff] hover:bg-[#00a3e0] text-white font-bold transition-all active:scale-95 shadow-sm"
                            >
                                <Link href="/login" className="flex items-center gap-2">
                                    Sign In <Sparkles className="size-4" />
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile Menu */}
                        <div className="lg:hidden">
                            <Sheet open={open} onOpenChange={setOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon" className="rounded-xl h-10 w-10">
                                        <Menu className="size-5" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-75 sm:w-87.5 p-0 flex flex-col">
                                    <SheetHeader className="p-6 border-b text-left">
                                        <div className="relative h-10 w-32 sm:h-12 sm:w-44">
                                            <Image
                                                src={logo}
                                                alt="Logo"
                                                fill
                                                className="object-contain object-left"
                                            />
                                        </div>
                                    </SheetHeader>

                                    <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                                        {menu.map((item) => {
                                            const isActive = pathname === item.url;
                                            return (
                                                <Link
                                                    key={item.title}
                                                    href={item.url}
                                                    onClick={() => setOpen(false)}
                                                    className={cn(
                                                        "flex items-center gap-3 px-4 py-3 text-base font-semibold rounded-xl transition-all",
                                                        isActive
                                                            ? "bg-[#00baff]/10 text-[#00baff]"
                                                            : "text-muted-foreground hover:bg-muted"
                                                    )}
                                                >
                                                    <item.icon className="size-5" />
                                                    {item.title}
                                                </Link>
                                            );
                                        })}
                                    </div>

                                    <div className="p-4 border-t space-y-2">

                                        <Button asChild className="w-full h-12 rounded-xl bg-[#00baff] text-white font-bold" onClick={() => setOpen(false)}>
                                            <Link href="/login">Sign In</Link>
                                        </Button>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Navbar;