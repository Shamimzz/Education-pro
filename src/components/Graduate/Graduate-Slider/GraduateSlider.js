import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Graduate-Slider.css';
import { Card, Col, Row } from 'react-bootstrap';

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
    speed: 300
  }

    return (
      <div className="container">

            {/* <Slider {...settings} className="">
                {
                    items.map(pd => (
                        <div className="g-4">
                          <div className="p-4 card">
                            <div className="card-img">
                              <img className="img-fluid" src={pd.img} alt="" />
                            </div>
                              <h4>{pd.title}</h4>
                              <p>{pd.des}</p>
                          </div>
                        </div>
                    ))
                }
            </Slider> */}



{/* <Row sm={1} xs={2} md={4} className="g-4">
<Slider {...settings} >
  {items.map((pd, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={pd.img} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Slider>
</Row> */}


      <div className="row">
        <Slider {...settings} >
             { items.map(pd => (
              <div className="col-lg-3 col-md-4 col-sm-12 p-2">
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