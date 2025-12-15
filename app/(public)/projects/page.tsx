import { getProjects } from "@/sanity/lib/fetch";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const revalidate = 60; // Revalidate every minute

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <div className="max-w-5xl mx-auto pb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                All Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects?.map((project: any) => (
                    <Link key={project._id} href={`/projects/${project.slug?.current}`}>
                        <GlassCard className="h-full flex flex-col gap-4 group hover:bg-white/10 transition-colors">
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-900 border border-white/10">
                                {project.imageUrl && (
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:contrast-110"
                                    />
                                )}
                                {/* Overlay Icon */}
                                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight className="w-4 h-4 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">{project.title}</h3>
                                <p className="text-sm text-neutral-400 mt-1 line-clamp-2">{project.description}</p>
                            </div>

                            <div className="mt-auto flex gap-2 flex-wrap">
                                {project.skills?.slice(0, 3).map((skill: any, i: number) => (
                                    <span key={i} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    </Link>
                ))}
                {(!projects || projects.length === 0) && (
                    <div className="col-span-full py-20 text-center text-neutral-500">
                        No published projects found.
                    </div>
                )}
            </div>
        </div>
    );
}
