import React, { useState } from 'react'
import Image from 'next/image';
import Container from './Container';
import { AnimatePresence } from 'framer-motion';

const Images = ({data}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div className='col-span-7 space-y-5'>
            {
                data.images ?
                    <Image onClick={() => setOpen({
                        alt:data.images[0].alt,
                        url: data.images[0].url
                    })} height={1500} width={1500} alt={data.images[0].alt} className='w-full cursor-zoom-in' src={data.images[0].url} />
                    : null
            }
            <div className="grid grid-cols-2 gap-5">
                {
                    data.images && data.images.length > 1 ?
                        data.images.map((item, index) => (
                            index > 0 &&
                            <Image onClick={() => setOpen({
                                url: item.url,
                                alt: item.alt
                            })} height={1500} width={1500} alt={item.alt} className='w-full cursor-zoom-in' src={item.url} />
                        ))
                    :
                        null
                }
            </div>

        </div>
        <AnimatePresence>
            {
                open &&
                    <Container data={data.images} url={open.url} alt={open.alt} setOpen={setOpen}/>
            }
        </AnimatePresence>
        </>
    )
}

export default Images