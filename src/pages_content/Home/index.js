import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import SecondSlide from './Slides/SecondSlide';
// import FirstSlide from './Slides/FirstSlide';
import Landing from './Slides/Landing';
import Shop from "./Shop";
import Categories from "./Categories";
import Blog from "./Blog";

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
                modules={[Pagination]}
                pagination={{ clickable: true }}
                // loop={true}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="relative"
            >
                <SwiperSlide>
                    <SecondSlide />
                </SwiperSlide>
                <SwiperSlide>
                {({ isActive }) => (
                    <Landing active={isActive}/>
                )}
                </SwiperSlide>
            </Swiper>
            {/* <FirstSlide/> */}
            <Shop />
            <Categories />
            <Blog />
        </>
    )
}

export default Home