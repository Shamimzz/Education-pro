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
    <div className="container pt-5 pb-5">


    <div className="row">
      <Box sx={{ flexGrow: 1 }} className="pt-3 pb-3">
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         <Grid item xs={12} md={6}>
          <div className="Graduate-content p-4">
            <h2 className="about-hero-text">How To Apply</h2>
          </div>
         </Grid>
         <Grid item xs={12} md={6} className=" p-5">
           <Button className="btn p-2" style={{backgroundColor:"#FF7B4B"}}>University Overview<FiNavigation style={{marginLeft: '8px'}}/></Button>
         </Grid>
       </Grid>
      </Box>
     </div>



     {/* <Box sx={{ flexGrow: 1 }} className="pt-3 pb-3">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={6} md={12} className="d-flex justify-content-between about-header">
            <h2 className="about-hero-text">How To Apply</h2>
            <Button className="btn Apply-btn" style={{backgroundColor:"#FF7B4B"}}>University Overview<FiNavigation/></Button>
        </Grid>
      </Grid>
     </Box> */}



      <Box sx={{ flexGrow: 1 }} className="">
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 6, md: 12 }}>
        <Grid item xs={6} md={4}>
         <div className="about-box"> 
           <div className="d-flex">
            <span className="Apply-icon"><FaSuperpowers/></span>
            <span className="p-2 para"><h4>You Apply</h4></span>
         </div>
         <div>
          <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi optio rem neque assumenda magni.</p>
        </div>
        </div> 
      </Grid>
      <Grid item xs={6} md={4}>
        <div className="about-box"> 
        <div className="d-flex">
          <span className="Apply-icon"><BiMessageDots/></span>
          <span className="p-2 para"><h4>We Connect</h4></span>
        </div>
        <div>
          <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi optio rem neque assumenda magni.</p>
        </div>
        </div> 
      </Grid>
      <Grid item xs={6} md={4}>
        <div className="about-box"> 
        <div className="d-flex">
          <span className="Apply-icon"><BsCalendar3Week/></span>
          <span className="p-2 para"><h4>You Get Ready</h4></span>
        </div>
        <div>
          <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi optio rem neque assumenda magni.</p>
        </div>
        </div> 
       </Grid>
      </Grid>
     </Box>
    </div>
    );
};

export default HowToApply;