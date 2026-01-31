import Link from 'next/link'
import React from 'react'

function BlogCard({blog}) {
  return (
    <Link 
    href={`/blog/${blog?.slug}`}
    className="w-[300px] flex flex-col">
  <img 
    src={blog?.featureImage} 
    alt="Property" 
    className="w-full h-48 object-cover rounded-md"
  />
  <div className="flex flex-col py-2 max-w-[300px]">
    <h2 className="text-lg font-medium text-gray-800 mb-2">
      {blog?.title.substring(0,60)} {blog?.title?.length > 60 ? "..." : null}
    </h2>
    <span className="text-gray-600 text-sm">
      {blog?.metaDescription.substring(0,150)} {blog?.metaDescription?.length > 150 ? "..." : null}
    </span>
  </div>
</Link>


  )
}

export default BlogCard