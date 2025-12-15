import { getProfile, getProjects } from "@/sanity/lib/fetch";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
export const revalidate = 60; 
export default async function Home() {
  const profile = await getProfile();
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto space-y-24 pb-20">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-6 pt-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight  bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/40">
          {profile?.name || "Moabdirahim"}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed">
          {profile?.headline || "Creative Developer constructing digital experiences."}
        </p>

        <div className="flex gap-4 pt-4">
          {profile?.resumeUrl && (
            <a
              href={`/api/analytics/resume-download?id=${profile._id || ''}`}
              className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
            >
              Download Resume
            </a>
          )}
          <Link href="/projects" className="px-6 py-3 rounded text-white bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 hover:bg-white/10 transition-colors">
            View My Work
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest Projects</h2>
          <Link href="/projects" className="flex items-center gap-2 text-neutral-800 hover:text-gray-600 transition-colors">
            All Projects <MoveRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects?.slice(0, 2).map((project: any) => (
            <Link key={project._id} href={`/projects/${project.slug?.current}`}>
              <GlassCard gradient className="h-full flex flex-col gap-4 group cursor-pointer border-white/5 bg-white/5">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-neutral-900 border border-white/10">
                  {project.imageUrl && (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-neutral-400 text-sm line-clamp-2">{project.description}</p>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
