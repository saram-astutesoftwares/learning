import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Shop from "./Shop";
import FirstSlide from './Slides/FirstSlide';
import SecondSlide from './Slides/SecondSlide';

const Home = ({ data, description, error, shop }) => {
    if (error) {
        return (
            <>
                <p className="text-red-500">
                    Error Occured!
                </p>
            </>
        )
    }
    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className=""
            >
                <SwiperSlide className='min-h-[100vh]'>
                    <FirstSlide/>
                </SwiperSlide>
                <SwiperSlide className='min-h-[100vh]'>
                    <SecondSlide/>
                </SwiperSlide>
                {/* {
                    data.map((item, index) => (
                        <SwiperSlide key={index} style={{
                            backgroundImage: `url(${item.background_image})`
                        }} className='min-h-[90vh] w-full flex items-center bg-center bg-cover bg-opacity-80 bg-black' >
                            
                            <div className="w-10/12 max-w-[1600px] mx-auto h-auto pt-[200px]">
                                <h2 className="text-7xl text-white font-bold">
                                        {item.title}
                                </h2>
                            </div>
                        </SwiperSlide>
                    ))
                } */}
            </Swiper>
            <div className='py-4 w-10/12 mx-auto max-w-[1600px]'>
                <div className="flex items-center justify-center">
                    <h2 className="text-3xl font-bold">
                        Shop
                    </h2>
                </div>
                <Shop />
            </div>
        </>
    )
}

export default Home