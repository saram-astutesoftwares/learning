import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import SecondSlide from './Slides/SecondSlide';
import FirstSlide from './Slides/FirstSlide';
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
            <FirstSlide/>
            <Shop/>
            <Categories/>
            <Blog/>
        </>
    )
}

export default Home