import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import './Graduate.css';
import { FiNavigation } from 'react-icons/fi';
import GraduateSlider from './Graduate-Slider/GraduateSlider';

const Graduate = () => {
return (
  <div className="Graduate-Container">
  <div className="container pt-5 pb-5">

    <div className="row news-header">
       <div className="left-align">
         <div className="">
           <h2 className="about-hero-text">Graduate Program</h2>
           <p className="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto alias molestias, id similique nihil eaque explicabo.</p>
          </div>
       </div>
       <div className="right-align">
        <Button className="btn" style={{backgroundColor:"#FF7B4B"}}>View All Program<FiNavigation style={{marginLeft: '8px'}}/></Button>
       </div>
    </div>

     <GraduateSlider/>   {/* SLider component */}

     </div>
    </div>
  );
};

export default Graduate;