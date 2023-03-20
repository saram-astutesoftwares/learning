import React from 'react'
import Desktop from "./Desktop";
import Mobile from './Mobile';
const Product = () => {
  return (
    <>
    <div className='hidden lg:block'>
        <Desktop/>
    </div>
    <div className='block lg:hidden'>
        <Mobile/>
    </div>
    </>
  )
}

export default Product