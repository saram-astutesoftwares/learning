import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const Item = ({data}) => {
  return (
    <a href={`/shop/${data.id}`} className='w-full h-full flex flex-col justify-between'>
      <Image width={250} height={444} alt={data.title} src={data.product_image[0].image_url}/>
      <div className="flex items-center justify-between">
      <h3 className="text-sm font-medium">
        {data.title}
      </h3> 
      <p className="text-sm font-medium">
        ${data.regular_price}
      </p> 
      </div>
    </a>
  )
}

export default Item