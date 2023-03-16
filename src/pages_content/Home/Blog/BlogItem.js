import Image from 'next/image'
import React from 'react'

const BlogItem = () => {
  return (
    <div>
        <div className="bg-cover bg-no-repeat" >
            <Image src="/images/blog.webp" height={500} width={700} className="w-full rounded-lg mb-5"/>
            <span className="block text-sm font-medium uppercase">
                FASHION
            </span>
            <h2 className="block text-xl font-bold mb-5">
                Hot Summer Fashion for Women new collections arrives of Lorem Ipsum available.
            </h2>
            <div className="flex items-center space-x-5">
                <Image src="/images/mugshot.webp" height={100} width={100} className={"rounded-full h-12 w-12"}/>
                <p className="text-base font-medium">
                    John Doe
                </p>
                <p className="text-base font-medium text-gray-500">
                    16 March 2023
                </p>
            </div>
        </div>
    </div>
  )
}

export default BlogItem