import React from 'react';
import { Box, Grid } from '@mui/material';
import { Button } from 'react-bootstrap';
import { FiNavigation } from 'react-icons/fi';
import './AdmissionAid.css';


const AdmissionAid = () => {
    return (
      <div className="container pt-5 pb-5">
        <Box sx={{ flexGrow: 1 }} className="">
           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
             <Grid item xs={12} md={6}>
               <div className="content-aid">
                  <h2 className="about-hero-text">About the University! </h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto alias molestias, id similique nihil eaque explicabo quibusdam veritatis ratione deleniti. Lorem ipsum dolor sit.</p>
                  <Button className="btn p-2" style={{backgroundColor:"#FF7B4B"}}>University Overview<FiNavigation/></Button>
               </div>
             </Grid>
             <Grid item xs={12} md={6} className="left-main">
                <div className="left-img">
                 <img className="about-img" src="https://static.wixstatic.com/media/b08639_46a9190d634d4cffbe497359397b81ea~mv2.jpg/v1/fill/w_560,h_338,al_c,lg_1,q_80/b08639_46a9190d634d4cffbe497359397b81ea~mv2.webp" alt="" srcset="" />
               </div>
             </Grid>
           </Grid>
        </Box>
     </div>
  
    );
};

export default AdmissionAid;