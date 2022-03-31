import { CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Button } from 'react-bootstrap';
import './NewsEvents.css';

import { FiNavigation } from 'react-icons/fi';
const NewsEvents = () => {
    return (
    <div className="container pt-5 pb-5">

    <div className="row news-header">
       <div className="left-align">
         <h2 className="about-hero-text">News And Events</h2>
       </div>
       <div className="right-align">
        <Button className="btn" style={{backgroundColor:"#FF7B4B"}}>View All<FiNavigation style={{marginLeft: '8px'}}/></Button>
       </div>
    </div>

    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6} sm={6}>
     <div>
       <CardActionArea>
         <CardMedia
           className="img-card"
           component="img"
           height="280"
           image="https://www.mecca.com.au/on/demandware.static/-/Sites-MeccaAU-Library/default/dwbbf08bd9/images/careers/graduates/graduates-header-2020@1x.jpg"
          alt="green iguana"
         />
         <CardContent className="cardContent">
           <Typography gutterBottom variant="h5" component="div">
             Life is a distace learning student.
           </Typography>
           <span className="text-muted">December 20, 2020</span>
           <Typography className="mt-3" variant="body2" color="text.secondary">
             Lizards are a widespread group of squamate reptiles, with over 6,000
             species, ranging across all continents except Antarctica Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ab.
           </Typography>
         </CardContent>
       </CardActionArea>
     </div>

      </Grid>
        <Grid item xs={12} md={6} sm={6}>
           <div className="left-img-content">
             <div className="wraper-box">
               <div className="img-box">
                 <img className="image"src="https://www.smwc.edu/wp-content/uploads/smwc-adults-group-studying-e1541810211750.jpg" alt="" srcset=""/>
               </div>
               <div className="content-box">
                 <h5>How to Organise Your Studies</h5>
                 <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, atque!</p>
               </div>
             </div>
           </div>
           <div className="left-img-content">
             <div className="wraper-box">
               <div className="img-box">
                 <img className="image"src="https://resources.finalsite.net/images/f_auto,q_auto/v1615436942/uwoca/gofsyjjmuooa62pw2quu/Graduate-Program-UCW.jpg" alt="" srcset=""/>
               </div>
               <div className="content-box">
                 <h5>How to Organise Your Studies</h5>
                 <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, atque!</p>
               </div>
             </div>
           </div>
           <div className="left-img-content">
             <div className="wraper-box">
               <div className="img-box">
                 <img className="image"src="https://www.smwc.edu/wp-content/uploads/smwc-adults-group-studying-e1541810211750.jpg" alt="" srcset=""/>
               </div>
               <div className="content-box">
                 <h5>How to Organise Your Studies</h5>
                 <p  className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, atque!</p>
               </div>
             </div>
           </div>
        </Grid>
      </Grid>
    </Box>

        </div>
    );
};

export default NewsEvents;