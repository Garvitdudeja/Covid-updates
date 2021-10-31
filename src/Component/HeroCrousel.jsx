import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

export default function HeroCrousel() {
    const [images, setimages] = useState(["https://www.cdc.gov/coronavirus/2019-ncov/images/vaccines/COVID-19_4sticker.png?_=28293",
    "https://www.totalsafety.com/wp-content/uploads/2020/05/COVID19-Website-Banner.jpg",
        "https://cdn.pixabay.com/photo/2020/05/26/17/51/covid-19-5224053__340.png",
        "https://cdn.upmc.com/-/media/upmc/campaigns/covid-vaccine/covid_vaccine_banner_desktop.jpg?la=en&rev=1024a6a7321f40dbbdb960a4ade1f782&h=300&w=1140&la=en&hash=75DC91BDE5C06A4B3BC345C6888469F9",
        "https://cdn.pixabay.com/photo/2020/04/24/19/38/coronavirus-5088470__340.jpg"]);



    const settings ={
        autoplay: true,
        centerMode: true,
        centerPadding: "200px",
        slidesToShow: 1,
        infinite: true,
        slideToScroll: 1,
    };

    return (
        <div className="md:block  sm:hidden focus:outline-none">
            
            <HeroSlider {...settings}>
                {images.map((image) => (
                    <div className=" w-full h-64 py-3 px-2 focus:outline-none ">
                        <img
                            src={image}
                            alt="Banner"
                            className="w-full h-full rounded-md h"
                        />

                    </div>
                ))}
            </HeroSlider>
        </div>
    );
}
