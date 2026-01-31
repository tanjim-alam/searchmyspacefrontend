// app/[purl]/page.jsx

import React from "react";
import ProjectViewPage from "./ProjectViewPage";

export async function generateMetadata({ params }) {
  const response = await fetch(
    `https://searchmyspacebackend-production.up.railway.app/api/v1/project/by/${params.purl}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return {
      title: "Project Not Found",
      description: "No details available for this project.",
    };
  }

  const data = await response.json();
  const project = data.project;

  return {
    title: project?.title || project.projectName,
    description: project.metaDescription || project.projectName,
    openGraph: {
      title: project.title || project.projectName,
      description: project.metaDescription || project.projectName,
      images: [project.projectImage || "/default-image.jpg"],
    },
  };
}

// ✅ Function name must be PascalCase ("Page")
export default function Page({ params }) {
  const { purl } = params;
  return <ProjectViewPage purl={purl} />;
}
