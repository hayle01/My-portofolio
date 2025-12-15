import { client } from "./client";
import { groq } from "next-sanity";

export async function getProjectBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      description,
      "galleryUrls": gallery[].asset->url,
      liveLink,
      githubLink,
      "skills": skills[]->{name, "iconUrl": icon.asset->url},
      views
    }`,
    { slug }
  );
}
