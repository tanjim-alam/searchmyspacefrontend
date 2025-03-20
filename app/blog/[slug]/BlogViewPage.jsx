"use client"
import Spinner from '@/app/components/Spinner';
import { getAllBlogs, getBlog } from '@/app/redux/slices/blogSlice';
import dateFormeter from '@/app/utils/dateFormater';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import { LuNewspaper } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux'

function BlogViewPage({slug}) {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const {blog, blogList} = useSelector((state)=>state.blog);
    console.log(blog)
    async function fetchBlog(){
        try {
            setIsLoading(true)
            await dispatch(getBlog(slug));
            setIsLoading(false)
            await dispatch(getAllBlogs());
        } catch (error) {
            setIsLoading(false)
            throw new Error(error.message)
        }
    }
    useEffect(()=>{
        fetchBlog();
    },[slug]);
      console.log(blogList);
  return (
    <div className=' w-[100%] min-h-screen h-[100%] py-10 bg-[#ecf7f3]'>
                {isLoading ? 
                <div className='h-[90vh] w-full flex justify-center items-center'>
                    <Spinner />
                </div> : (
                    <div className='lg:w-[100%] xl:w-[80%] sm:w-[100%] w-[100%] m-auto'>
                        <div className=' w-full flex gap-4 py-5 flex-col lg:flex-col xl:flex-row'>
                            {blog ? (
                                <>
                                    <div id="my_modal_3" className="lg:w-[100%] xl:w-[70%] w-[100%] shadow-md bg-white p-4">
                                        <div className="flex flex-col gap-4">
                                            <div>
                                                <h1 className=' text-2xl  md:text-3xl font-medium'>{blog?.title}</h1>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <div className='flex items-center gap-1 bg-slate-200 p-1 text-xs rounded-sm'>
                                                    <FaCalendarAlt />
                                                    <p>{dateFormeter(blog?.createdAt)}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <img className='w-full' src={blog?.featureImage} alt="" />
                                            </div>
                                            <div dangerouslySetInnerHTML={{ __html: blog?.content }}>
                                            </div>
                                        </div>
                                    </div>
                                    {/* =================== */}
                                    <div className="lg:w-[100%] xl:w-[30%] w-[100%]">
                                        <div className='w-[100%] flex flex-col gap-4'>
                                            <div className='flex items-center gap-2 shadow-md bg-white p-4'>
                                                <div className='rounded-full p-2 bg-primary text-white'>
                                                    <LuNewspaper className='text-2xl' />
                                                </div>
                                                <div>
                                                    <h3 className='text-lg font-medium'>Latest Blogs</h3>
                                                    <p className=' text-sm'>Updates from around the world</p>
                                                </div>
                                            </div>
                                            {
                                                blogList?.map((blog,i) => (
                                                    <Link 
                                                    href={`/blog/${blog.slug}`}
                                                    key={i} className='flex items-center gap-2 bg-white shadow-md p-2'>
                                                        <div className='h-[100%] text-white'>
                                                            <img className='w-[90px] h-[64px] rounded-full' src={blog?.featureImage} alt="" />
                                                        </div>
                                                        <div>
                                                            <h3 className='text-md font-medium'>{(blog?.title).substring(0, 37)}..</h3>
                                                            <p className=' text-sm text-[var(--primary)]'>Read more</p>
                                                        </div>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </>
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                )}
            </div>
  )
}

export default BlogViewPage