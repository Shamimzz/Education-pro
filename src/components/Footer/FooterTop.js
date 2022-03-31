import { Grid } from '@mui/material';
import React from 'react';
import './FooterTop.css';
import { Button} from 'react-bootstrap';
import { FiNavigation } from 'react-icons/fi';

const FooterTop = () => {
    return (
        <div className="container pt-5 pb-5 ">
        <Grid container spacing={1} columns={12}>
          <Grid item xs={12}>
            <div className="top-text">
              <h2>Are you ready to take the next step toward your future career?</h2>
              <Button className="btn mt-4" style={{backgroundColor:"#FF7B4B"}}>University Overview<FiNavigation style={{marginLeft:'8px'}}/></Button>
            </div>
          </Grid>
        </Grid>

        <Grid className="mt-5 row">
          <Grid className="col-md-3 col-sm-6">
            <div className="Grid-wraper">
               <div className="footer-img">
                 <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/9/9f/St_Edwards_University_Logo_png.png" alt="footer" srcset="" />
               </div>
               <li>711-2888 Nulla St.</li>
               <li>Mankato Misssoppi 98522</li>
               <li>(985) 252-7401</li>
               <li>Iris Watson</li>
            </div>
          </Grid>
          <Grid className="col-md-3 col-sm-6">
          <div className="Grid-wraper">
            <h5 className="footer-h5">Main Navigation</h5>
            <li>Home</li>
            <li>About</li>
            <li>Academic</li>
            <li>Admisson</li>
            <li>Student Lite</li>
           </div>
          </Grid>
          <Grid className="col-md-3 col-sm-6">
            <div className="Grid-wraper">
              <h5 className="footer-h5">Main Navigation</h5>
              <li>Home</li>
              <li>About</li>
              <li>Academic</li>
              <li>Admisson</li>
              <li>Student Lite</li>
             </div>
          </Grid>
          <Grid className="col-md-3 col-sm-6">
           <div className="Grid-wraper">
             <h5 className="footer-h5">Main Navigation</h5>
             <li>Home</li>
             <li>About</li>
             <li>Academic</li>
             <li>Admisson</li>
             <li>Student Lite</li>
            </div>
          </Grid>
        </Grid>
        <hr />
        <div className="footer-down d-flex justify-content-between wrapper row">
          <ul className="d-flex justify-content-around col-sm-6 col-md-6">
              <a href="#" className="p-2">Cookies</a>
              <a href="#" className="p-2">Treams & Conditions</a>
              <a href="#" className="p-2">Privacy Policy</a>
          </ul>   
          <ul className="mt-2 col-sm-6 col-md-6">
              <a href="#" className="p-2">Copyright @2022 It Company</a>
          </ul>        
        </div>

        </div>
    );
};

export default FooterTop;