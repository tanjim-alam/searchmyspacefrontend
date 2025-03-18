import React from 'react'
import ProjectViewPage from './ProjectViewPage';

// export async function generateMetadata({ params }) {
//   const response = await fetch(`http://localhost:8082/api/v1/project/by/${params.purl}`, {
//     cache: "no-store",
//   });
//   if (!response.ok) {
//     return {
//       title: "Project Not Found",
//       description: "No details available for this project.",
//     };
//   }

//   const data = await response.json();
//   const project = await data.project;

//   return {
//     title: project.projectName,
//     description: project.projectDescription || project.projectName,
//     openGraph: {
//       title: project.projectName,
//       description: project.projectDescription || project.projectName,
//       images: [project.projectImage || "/default-image.jpg"],
//     },
//   };
// }

function page({params}) {
    const {purl} = params;
  return <ProjectViewPage purl={purl}/>
}

export default page