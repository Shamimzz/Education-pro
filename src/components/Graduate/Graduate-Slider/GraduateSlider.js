import Carousel from 'react-bootstrap/Carousel'
import React, { useEffect, useState } from 'react';
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



    return (
      <div className="">
      <div className="container">
        <Carousel className=" minheight ">
        {items.map((pd, index)=>(  
            <Carousel.Item interval={1500} className="pb-5">
              <Carousel.Caption className="caption w-50 m-auto ">
                  <div className="boxShadow">
                  <img src={pd?.img} className="reviewImg" alt="" />
                  <h4 className="text-warning">{pd?.name}</h4>
                  <p class="text-white" style={{fontSize: '15px'}}>{pd?.title}</p>     
                  <p className="text-center">{pd?.des.slice(0, 200)}</p>
                  </div>
              </Carousel.Caption>
            </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    );
};

export default GraduateSlider;