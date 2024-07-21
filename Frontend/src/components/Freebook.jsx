import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";
function Freebook() {
  const filterData = list.filter((data)=>data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

  };
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
                <h1 className='text-xl font-bold'>Free Books</h1>
            </div>
            <div>
                <Slider {...settings}>
                    {filterData.map((item)=>(<Cards item={item} key={item.id}/>))}
                </Slider>
            </div>
        </div>
    </>
  )
}

export default Freebook
