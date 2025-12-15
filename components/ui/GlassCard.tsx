import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    gradient?: boolean;
}

export function GlassCard({ children, className, gradient = false, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl",
                "relative overflow-hidden group",
                className
            )}
            {...props}
        >
            {gradient && (
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}
            {children}
        </div>
    );
}
