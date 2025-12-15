# 🚀 My Personal Portfolio Website

This is my personal portfolio website project, built using the power of Next.js 16 and the headless content management system (CMS), Sanity.io. It is designed to showcase my projects, skills, and professional experience.

## 🛠️ Tech Stack

This project is built on a modern, robust technology stack:

* **Frontend Framework:** Next.js (App Router, v16+)
* **Styling:** Tailwind CSS (v4)
* **Content Management System (CMS):** Sanity.io (Headless CMS, v3+)
* **Animation & Effects:** Framer Motion
* **Package Manager:** pnpm
* **Code Formatter/Linter:** Biome

## ✨ Key Features

* **Embedded Sanity Studio:** The Sanity Studio is fully integrated directly into the Next.js app on the `/studio` route.
* **Data-Driven Content:** All projects, skills, and other content are managed via Sanity, allowing for easy updates without touching the code.
* **Modern React/Next:** Built with the latest versions of React (v19) and Next.js (v16) for optimal performance and developer experience.
* **Smooth Interactions:** Utilizes Framer Motion for smooth transitions and animations.

## 🏃 Getting Started (Local Development)

To run the project on your local machine:

1.  **Environment Variables:** Create a `.env` file in the root directory and add your Sanity API keys:
    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID=...
    NEXT_PUBLIC_SANITY_DATASET=production
    NEXT_PUBLIC_SANITY_API_VERSION=2024-12-01
    SANITY_API_WRITE_TOKEN=...
    ```
2.  **Install Dependencies:**
    ```bash
    pnpm install
    ```
3.  **Start the Development Server:**
    ```bash
    pnpm dev
    ```
    *The application will run at: `http://localhost:3000`*

## 🧑‍💻 Accessing the Sanity Studio

To manage your content:
* Visit the dedicated route: `http://localhost:3000/studio`
* Sign in with your Sanity account.