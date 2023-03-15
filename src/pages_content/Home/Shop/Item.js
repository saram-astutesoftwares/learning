import Image from 'next/image';
import React from 'react'
import Currency from 'react-currency-formatter';
import {motion} from "framer-motion";

const Item = ({ id, title, image, price, newItem, }) => {
  return (
    <motion.div
      initial={{
        opacity:0,
        y:"80%"
      }}
      whileInView={{
        opacity:1,
        y:"0"
      }}
      transition={{
        type:"tween"
      }}
      viewport={{once:true}}
    className='relative group overflow-hidden'>
    <a href={`/shop/${id}`} className='w-full h-full flex flex-col justify-between'>
      <div className="relative overflow-hidden">
        <Image width={500} height={500} alt={title} src={image} className="rounded-lg w-full" />
        
      </div>

       <div className="mt-2">
       <h3 className="font-bold capitalize">
          {title}
          {
            newItem &&
            <span className="ml-2 bg-primary text-white py-1 px-2 rounded-full text-[10px]">
              NEW  
            </span>
          }
        </h3>
        <span className="font-medium text-gray-400 text-sm">
          Menswear
        </span>
        <p className="font-bold text-lg">
          <Currency quantity={price} currency="USD" />
        </p>
       </div>
    </a>
    <div className="rounded-lg py-5 flex flex-col items-center justify-center group-hover:translate-y-[-0%] translate-x-[-50%] translate-y-[100%] transition-all absolute w-10/12 bg-white top-full group-hover:top-2/4 left-2/4">
          <p className="text-sm font-bold uppercase mb-2">
            Quick Add
          </p>
          <div className="gap-2 grid grid-cols-3">
            <div className="hover:bg-black hover:text-white hover:shadow-xl cursor-pointer select-none py-1 text-center px-3 rounded-lg border-2 border-black">
              S
            </div>
            <div className="hover:bg-black hover:text-white hover:shadow-xl cursor-pointer select-none py-1 text-center px-3 rounded-lg border-2 border-black">
              M
            </div>
            <div className="hover:bg-black hover:text-white hover:shadow-xl cursor-pointer select-none py-1 text-center px-3 rounded-lg border-2 border-black">
              L
            </div>
          </div>
    </div>
    </motion.div>
  )
}

export default Item