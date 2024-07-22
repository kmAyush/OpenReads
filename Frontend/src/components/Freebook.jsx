import React,{useEffect, useState} from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from 'axios'


function Freebook() {
  const [book, setBook] = useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
        const response = await axios.get("http://localhost:4001/book");
        console.log(response.data);
        const data = response.data.filter((data) => data.category === "Free");
        setBook(data);
      } catch (error){
        console.log(error);
      }
    }
    getBook();
  }, [])

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
                <h1 className='text-xl font-bold'>Recommended Books</h1>
            </div>
            <div>
                <Slider {...settings}>
                    {book.map((item)=>(<Cards item={item} key={item.id}/>))}
                </Slider>
            </div>
        </div>
    </>
  )
}

export default Freebook
