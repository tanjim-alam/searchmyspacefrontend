import React from 'react'
import BlogViewPage from './BlogViewPage';

export async function generateMetadata({ params }) {
    const response = await fetch(`http://localhost:8082/api/v1/blog/byslug/${params.slug}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      return {
        title: "Project Not Found",
        description: "No details available for this project.",
      };
    }
  
    const data = await response.json();
    const blog = await data?.blog;
  
    return {
      title: blog?.title,
      description: blog?.metaDescription,
      openGraph: {
        title: blog?.title,
        description: blog?.metaDescription
      },
    };
  }

function page({params}) {
    const {slug} = params;
  return <BlogViewPage slug={slug}/>
}

export default page