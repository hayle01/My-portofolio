import { client } from "./client";
import { groq } from "next-sanity";

export async function getProfile() {
  try {
    return await client.fetch(
      groq`*[_type == "profile"][0]{
        name,
        headline,
        bio,
        "resumeUrl": resume.asset->url,
        socialLinks[] {
          platform,
          url,
          "iconUrl": icon.asset->url
        }
      }`
    );
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

export async function getProjects() {
  try {
    return await client.fetch(
      groq`*[_type == "project" && status == "published"] | order(_createdAt desc) {
        _id,
        title,
        slug,
        description,
        "imageUrl": gallery[0].asset->url,
        liveLink,
        githubLink,
        skills[]->{name, "iconUrl": icon.asset->url}
      }`
    );
  } catch (error) {
     console.error("Error fetching projects:", error);
     return [];
  }
}
