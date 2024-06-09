import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from 'axios'
//import list from "../../public/list.json";
import Cards from './Cards';

//this list is an array only

function FreeNotes() {
  const [notes, setNotes] = useState([])   //now our data is in this "notes"
  useEffect(()=>{
      const getNotes=async()=>{
          try {
            const res = await axios.get("http://localhost:4001/notes");   //we are calling this api
            //console.log(res.data)
            const data = res.data.filter((data) => data.category === "Free");
            console.log(data);
            setNotes(data);
          } catch (error) {
              console.log(error)
          }
      }
      getNotes();
  },[])

    //to filter data using filter function of js used on arrays
    //=== means check type as well as data
    //const filterData = list.filter((data) => data.category === "Free"); now no use humne setNotes mein use kr liya ise
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            //these breakpoints specifies width in pixels, ki kitne width pr kitne cards dikhenge, for sm md etc devices
            //checkout tailwind->responsive to know which device is for what width
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
    <div>
    <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
    <p> Bbuwqbd cubducbdc ucsbudcds ucbucnud cudnMI uXUNXM9CM IVNIFVMICMD HBubsuw xwixnxsuxnschd uccus sxns cn cicc cuhfhy rcvtcv zn,pmpmm oimhbw cytdb.</p>
    
    </div>
    
    <div>
    
    <Slider {...settings}>
        {notes.map((item)=>(
            //<Cards/>
            <Cards item={item} key={item.id} /> 
             //here filterdata is an array and we are using map to map cards
            //in react to pass data from parent to child we use props
        ))}
    </Slider>
    </div>
    </div>
    </>
  );
}

export default FreeNotes;