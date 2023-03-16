import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
    <>
        <div className='mb-5 py-4 w-10/12 mx-auto max-w-[1600px] space-y-5'>
            <div className="grid grid-cols-2 gap-5">
                <Image src="/images/cat/1.webp" height={1000} width={1000} className="images-round"/>
                <div className='space-y-5'>
                    <div className="grid grid-cols-2 gap-5">
                        <Image src="/images/cat/2.webp" height={1000} width={1000} className="images-round"/>
                        <Image src="/images/cat/3.webp" height={1000} width={1000} className="images-round"/>
                    </div>
                    <Image src="/images/cat/4.webp" height={1000} width={1000} className="rounded-[20px] lg:rounded-[40px]"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Categories