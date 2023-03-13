import React, { useEffect, useState } from 'react'
import Item from './Item';

const Shop = () => {

  return (
    <div className='mb-5 py-4 w-10/12 mx-auto max-w-[1600px] space-y-5'>
        <h2 className="inline-block text-2xl font-bold uppercase">
            Menswear
            <div className="h-2 w-2/4 bg-primary rounded-lg">

            </div>
        </h2>
        <div className='grid grid-cols-4 gap-5'>
            <Item
                id={1}
                title="Some Shirt Name"
                price={23}
                image="/images/product-1.webp"
            />
            <Item
                id={1}
                title="Some Shirt Name"
                price={23}
                image="/images/product-1.webp"
                newItem
            />
            <Item
                id={1}
                title="Some Shirt Name"
                price={23}
                image="/images/product-1.webp"
            />
            <Item
                id={1}
                title="Some Shirt Name"
                price={23}
                image="/images/product-1.webp"
            />
            <Item
                id={1}
                title="Some Shirt Name"
                price={23}
                image="/images/product-1.webp"
            />
            <Item
                id={1}
                title="Some Shirt Name"
                price={23}
                image="/images/product-1.webp"
            />
            <Item
                id={1}
                title="Some Shirt Name"
                price={23}
                image="/images/product-1.webp"
            />
            <Item
                id={1}
                title="Some Shirt Name"
                price={23}
                image="/images/product-1.webp"
            />
        </div>
    </div>
  )
}

export default Shop