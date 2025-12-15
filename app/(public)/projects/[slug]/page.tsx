import { getProjectBySlug } from "@/sanity/lib/fetchProject";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ProjectAnalytics, TrackedLink } from "@/components/ProjectAnalytics";
import { Github, ExternalLink } from "lucide-react";

export const revalidate = 60;

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) return notFound();

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <ProjectAnalytics projectId={project._id} />

            <div className="mb-10 pt-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

                <div className="flex gap-4">
                    {project.liveLink && (
                        <TrackedLink
                            href={project.liveLink}
                            projectId={project._id}
                            type="live"
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" /> Live Demo
                        </TrackedLink>
                    )}
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition-colors"
                        >
                            <Github className="w-4 h-4" /> Source Code
                        </a>
                    )}
                </div>
            </div>

            <div className="glass p-8 rounded-2xl mb-12 bg-white/5">
                <p className="text-lg text-neutral-300 leading-relaxed whitespace-pre-line">
                    {project.description}
                </p>

                {project.skills && (
                    <div className="mt-8 flex flex-wrap gap-2">
                        {project.skills.map((skill: any, i: number) => (
                            <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 border border-white/5">
                                <span className="text-sm text-neutral-300">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="space-y-8">
                <h2 className="text-2xl font-semibold">Gallery</h2>
                <div className="grid grid-cols-1 gap-6">
                    {project.galleryUrls?.map((url: string, i: number) => (
                        <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
                            <Image
                                src={url}
                                alt={`${project.title} screenshot ${i + 1}`}
                                fill
                                className="object-cover"
                                quality={90}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
