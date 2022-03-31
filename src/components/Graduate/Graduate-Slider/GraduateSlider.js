import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Graduate-Slider.css';

const GraduateSlider = () => {
  const [items, setItems] = useState([]);
  useEffect( () => {
    fetch('./GraduateItems.json')
    .then(res => res.json())
    .then(data=> {
        setItems(data); 
    })
  })

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    dots: true,
    centerMode: true, // important for responsive 
    speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // initialSlide: 0,

  };


  const responsive = [
    {
      breakpoint: 2024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3, 
        infinite: true,
        dots: true
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        dots: true
      },
    },
    {
      breakpoint: 676,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      },
    },
  ]


    return (
      <div className="container">

      <div className="">
        <Slider
         {...settings}
         responsive={responsive}
         slidesToShow={4}
         >
             { items.map(pd => (
              <div className="p-2">
                <div className="p-4 card">
                  <div className="card-img">
                    <img className="img-fluid graduate-img" src={pd.img} alt="" />
                  </div>
                    <h5>{pd.title}</h5>
                  <p>{pd.des}</p>
                </div>
              </div>
             ))}
       </Slider>
      </div> 


      </div>
    );
};

export default GraduateSlider;