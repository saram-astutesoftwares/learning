import React from 'react'
import BlogItem from './BlogItem'

const Blog = () => {
  return (
    <>
        <div className='mb-5 py-4 w-10/12 mx-auto max-w-[1600px] space-y-5'>
            <h2 className="inline-block text-2xl font-bold uppercase">
                Blog
                <div className="h-2 w-2/4 bg-primary rounded-lg">

                </div>
            </h2> 

            <div className="grid md:grid-cols-2 gap-5">
                <BlogItem/>
                <BlogItem/>
            </div>
        </div>
    </>
  )
}

export default Blog