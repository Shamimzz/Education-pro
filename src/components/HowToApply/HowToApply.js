import React from 'react';
import './HowToApply.css';
import { BiMessageDots } from 'react-icons/bi';
import { BsCalendar3Week } from 'react-icons/bs';
import { FaSuperpowers } from 'react-icons/fa';
import { FiNavigation } from 'react-icons/fi';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { Button, Col, Row } from 'react-bootstrap';


const HowToApply = () => {
    return (
    <div className="container">



     <Box sx={{ flexGrow: 1 }} className="">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={6} md={12} className="d-flex justify-content-between">
            <h2 className="about-hero-text">About the University! </h2>
             <Button className="btn" style={{backgroundColor:"#FF7B4B"}}>University Overview<FiNavigation/></Button>
        </Grid>
      </Grid>
     </Box>



      <Box sx={{ flexGrow: 1 }} className="">
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 6, md: 12 }}>
        <Grid item xs={6} md={4}>
         <div className="about-box"> 
           <div className="d-flex">
            <span className="Apply-icon"><FaSuperpowers/></span>
            <span className="p-2"><h4>You Apply</h4></span>
         </div>
         <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi optio rem neque assumenda magni.</p>
        </div>
        </div> 
      </Grid>
      <Grid item xs={6} md={4}>
        <div className="about-box"> 
        <div className="d-flex">
          <span className="Apply-icon"><BiMessageDots/></span>
          <span className="p-2"><h4>We Connect</h4></span>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi optio rem neque assumenda magni.</p>
        </div>
        </div> 
      </Grid>
      <Grid item xs={6} md={4}>
        <div className="about-box"> 
        <div className="d-flex">
          <span className="Apply-icon"><BsCalendar3Week/></span>
          <span className="p-2"><h4>You Get Ready</h4></span>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi optio rem neque assumenda magni.</p>
        </div>
        </div> 
       </Grid>
      </Grid>
     </Box>
    </div>
    );
};

export default HowToApply;