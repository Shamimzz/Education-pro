import React from 'react';
import './AboutVarsity.css';

import { FiNavigation } from 'react-icons/fi';
import { GiEarthAmerica } from 'react-icons/gi';
import { GiMissilePod } from 'react-icons/gi';
import { BsCompass } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { Button } from 'react-bootstrap';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const AboutVarsity = () => {

   return (
   <div className="container pt-5 pb-5">

   <div className="row">
   <Box sx={{ flexGrow: 1 }} className="">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} md={5}>
          <div className="left-img">
            <img className="about-img" src="https://static.wixstatic.com/media/b08639_46a9190d634d4cffbe497359397b81ea~mv2.jpg/v1/fill/w_560,h_338,al_c,lg_1,q_80/b08639_46a9190d634d4cffbe497359397b81ea~mv2.webp" alt="" srcset="" />
          </div>
        </Grid>
        <Grid item xs={12} md={7} className="left-main">
           <div className="university-content pt-5 p-4">
             <h2 className="about-hero-text">About the University! </h2>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto alias molestias, id similique nihil eaque explicabo quibusdam veritatis ratione deleniti. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta eveniet quis impedit consequatur deserunt quia odit deleniti nostrum non id!</p>
             <Button className="btn" style={{backgroundColor:"#FF7B4B"}}>University Overview<FiNavigation/></Button>
           </div>
        </Grid>
      </Grid>
    </Box>
    </div>


    <div className="">
    <Box sx={{ flexGrow: 1 }} className="">
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 6, md: 12 }} className="mt-5">
      <Grid item xs={6} md={4}>
        <div className="about-box"> 
        <div className="d-flex">
          <span className="icon"><GiEarthAmerica/></span>
          <span className="p-2"><h4>History</h4></span>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi optio rem neque assumenda magni.</p>
        </div>
          <span className="d-flex align-items-start"><AiOutlineArrowRight/></span>
        </div> 
      </Grid>
      <Grid item xs={6} md={4}>
        <div className="about-box"> 
        <div className="d-flex">
          <span className="icon"><GiMissilePod/></span>
          <span className="p-2"><h4>Mission</h4></span>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi optio rem neque assumenda magni.</p>
        </div>
          <span className="d-flex align-items-start"><AiOutlineArrowRight/></span>
        </div> 
      </Grid>
      <Grid item xs={6} md={4}>
        <div className="about-box"> 
        <div className="d-flex">
          <span className="icon"><BsCompass/></span>
          <span className="p-2"><h4>History</h4></span>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi optio rem neque assumenda magni.</p>
        </div>
          <span className="d-flex align-items-start"><AiOutlineArrowRight/></span>
        </div> 
      </Grid>
     </Grid>
    </Box>
    </div>


      </div>
    );
};

export default AboutVarsity;