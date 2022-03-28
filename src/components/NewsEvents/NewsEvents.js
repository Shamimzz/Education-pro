import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Button } from 'react-bootstrap';
import './NewsEvents.css';

import { FiNavigation } from 'react-icons/fi';

const NewsEvents = () => {
    return (
        <div className="container pt-5 pb-5">
        <Box sx={{ flexGrow: 1 }} className="pt-3 pb-3">
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           <Grid item xs={6} md={12} className="d-flex justify-content-between">
             <h2 className="about-hero-text">News And Events</h2>
             <Button className="btn" style={{backgroundColor:"#FF7B4B"}}>View All<FiNavigation/></Button>
           </Grid>
          </Grid>
         </Box>

        </div>
    );
};

export default NewsEvents;