"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <ul className="flex items-center gap-1 p-1 rounded-md glass bg-white/5 backdrop-blur-xl border border-border text-foreground">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <li key={link.href} className="relative">
                            <Link
                                href={link.href}
                                className={cn(
                                    "relative z-10 block px-4 py-2 text-sm font-medium transition-colors duration-200",
                                    isActive ? "text-foreground" : "text-neutral-400 hover:text-neutral-600"
                                )}
                            >
                                {link.label}
                            </Link>
                            {isActive && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute inset-0 z-0 bg-border rounded"
                                    transition={{ type: "tween", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </li>
                    );
                })}
            <ThemeToggle />
            </ul>
        </nav>
    );
}
