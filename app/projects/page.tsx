// app/projects/page.tsx

import React from "react";
import ProjectsPage from "./projectsPage";
import { baseUrl } from "app/sitemap";
import { Metadata } from "next";

// Server-side metadata wrapper
export const metadata: Metadata = {
  title: "Projects / Utkarsh Nath",
  description: "View all my works on the website.",
  openGraph: {
    title: "Projects / Utkarsh Nath",
    description: "View all my works on the website.",
    siteName: "Utkarsh Nath",
    url: `${baseUrl}/projects`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/api/og?title=${encodeURIComponent(
          "hey, I'm Utkarsh / Check Out What I've Worked On"
        )}`,
        width: 2400,
        height: 1260,
        alt: "Projects / Utkarsh Nath",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects / Utkarsh Nath",
    description: "View all my works on the website.",
    images: [
      `${baseUrl}/api/og?title=${encodeURIComponent(
        "hey, I'm Utkarsh / Check Out What I've Worked On"
      )}`,
    ],
  },
};

export default function Projects() {
  return (
    <div>
      <ProjectsPage />
    </div>
  );
}
