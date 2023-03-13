import Image from 'next/image'
import React from 'react'
import Size from './Size'

const Product = () => {
  return (
    <div className='mt-24 mx-auto w-10/12 max-w-[1600px]'>
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-7">
                <Image height={1500} width={1500} alt="Product" className='w-full' src="/images/product-1.webp"/>
            </div>
            <div className="col-span-5 px-12">
                <h1 className="text-3xl font-bold">
                    Some Shirt Name
                </h1>
                <p className="text-xl text-gray-400 font-medium mb-5">
                    Menswear
                </p>
                <div className="grid grid-cols-5 gap-5 mb-5">
                    <div className="border-[1px] rounded-sm border-black">
                        <Image height={200} width={100} alt="Product" className='w-full rounded-sm' src="/images/product-1.webp"/>
                    </div>
                    <div className="border-[1px] rounded-sm">
                        <Image height={200} width={100} alt="Product" className='w-full rounded-sm' src="/images/product-2.webp"/>
                    </div>
                    <div className="border-[1px] rounded-sm">
                        <Image height={200} width={100} alt="Product" className='w-full rounded-sm' src="/images/product-3.webp"/>
                    </div>
                </div>
                <Size/>
            </div>
        </div>
    </div>
  )
}

export default Product