import React from 'react';
import './AboutVarsity.css';

import { FiNavigation } from 'react-icons/fi';

import { Button } from 'react-bootstrap';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';



const AboutVarsity = () => {
    return (
    <div className="container pt-5 pb-5">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={4}>
          <div className="left-img">
            <img className="img-fluid about-img" src="https://static.wixstatic.com/media/b08639_46a9190d634d4cffbe497359397b81ea~mv2.jpg/v1/fill/w_560,h_338,al_c,lg_1,q_80/b08639_46a9190d634d4cffbe497359397b81ea~mv2.webp" alt="" srcset="" />
          </div>
        </Grid>
        <Grid item xs={8} className="left-main">
           <div className="about-content">
             <h2 className="about-hero-text">About the University! </h2>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto alias molestias, id similique nihil eaque explicabo quibusdam veritatis ratione deleniti. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta eveniet quis impedit consequatur deserunt quia odit deleniti nostrum non id!</p>
             <Button className="btn" style={{backgroundColor:"#FF7B4B"}}>View Our Program<FiNavigation/></Button>
           </div>
        </Grid>
      </Grid>
     </Box>

        </div>
    );
};

export default AboutVarsity;