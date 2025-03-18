import React from 'react'

function BlogCard() {
  return (
    <div className="w-[300px] flex flex-col">
  <img 
    src="https://static.360realtors.com/properties/photos/6749/mini/1729574999_0propertyimage.webp" 
    alt="Property" 
    className="w-full h-48 object-cover rounded-md"
  />
  <div className="flex flex-col py-2 max-w-[300px]">
    <h2 className="text-lg font-medium text-gray-800 mb-2">
      Report Highlights Growth in Real..
    </h2>
    <span className="text-gray-600 text-sm">
      The premium residential market in major cities has witnessed significant price appreciation, led by Gurgaon.
    </span>
  </div>
</div>


  )
}

export default BlogCard