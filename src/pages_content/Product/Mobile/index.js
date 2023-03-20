import Image from 'next/image'
import React from 'react'
import Size from '../Desktop/Size'
import { BsBagPlus } from "react-icons/bs";
import Holder from '../Desktop/Holder';
import Images from './Images';
import { data } from "../data";

const Product = () => {
    return (
        <div className='mx-auto w-11/12 max-w-[1600px]'>
            <div>
                <h1 className="text-3xl font-bold">
                    Some Shirt Name
                </h1>
                <p className="text-xl text-gray-400 font-medium mb-5">
                    Menswear
                </p>
                <p className="text-xl font-medium mb-5">
                    $240
                </p>
            </div>
            <Images data={data} />
            <div className="grid grid-cols-5 gap-5 mt-5 mb-5">
                <div className="border-[1px] rounded-sm border-black">
                    <Image height={200} width={100} alt="Product" className='w-full rounded-sm' src="/images/product-1.webp" />
                </div>
                <div className="border-[1px] rounded-sm">
                    <Image height={200} width={100} alt="Product" className='w-full rounded-sm' src="/images/product-2.webp" />
                </div>
                <div className="border-[1px] rounded-sm">
                    <Image height={200} width={100} alt="Product" className='w-full rounded-sm' src="/images/product-3.webp" />
                </div>
            </div>
            <div className='flex flex-col items-center mb-5'>
                <button aria-label='Cart' className='btn btn-primary !text-lg !rounded-full w-full flex items-center justify-center space-x-2'>
                    <BsBagPlus className='text-xl' />
                    <p>
                        Add to cart
                    </p>
                </button>
            </div>

            <Holder title="Shipping and Returns" borderBottom>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, molestias.
                </p>
            </Holder>
            <Holder title="Weight and Dimensons" borderBottom>
                <p className="text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, dolorem.
                </p>
            </Holder>
            <Holder title="Reviews (148)">
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id omnis ut quod blanditiis, voluptates magnam ad perspiciatis nam nesciunt molestias, sed, iure voluptate ducimus numquam molestiae error sint eveniet!
                </p>
            </Holder>

        </div>
    )
}

export default Product