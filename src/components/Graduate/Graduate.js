import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import './Graduate.css';


import { FiNavigation } from 'react-icons/fi';
import GraduateSlider from './Graduate-Slider/GraduateSlider';

// import {GiEarthAmerica} from 'react-icons/gi';

const Graduate = () => {

return (
    <div className="Graduate-Container">
  <div className="container pt-5 pb-5">

  <div className="row">
    <Box sx={{ flexGrow: 1 }} className="">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} md={6}>
        <div className="Graduate-content p-4">
           <h2 className="about-hero-text">Graduate Program</h2>
           <p className="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto alias molestias, id similique nihil eaque explicabo.</p>
           </div>
        </Grid>
        <Grid item xs={12} md={6} className="left-main p-5">
          <Button className="btn p-2" style={{backgroundColor:"#FF7B4B"}}>View All Program<FiNavigation style={{marginLeft: '8px'}}/></Button>
        </Grid>
      </Grid>
     </Box>
    </div>

     <GraduateSlider/>

     </div>
    </div>
  );
};

export default Graduate;