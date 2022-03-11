import React from 'react';
import './Header.css';

import { BsSearch } from 'react-icons/bs';
import { FiNavigation } from 'react-icons/fi';

import { Container, Form, FormControl, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';



const Header = () => {




  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



    return (

    <div className="bg">

<div className="container">
<Navbar expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        {/* <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        /> */}
        <BsSearch/>
      </Form>
    </Navbar.Collapse>
  </Container>
  </Navbar>
  </div> 




    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8} className="left-main">
           <div className="left-content">
             <h2 className="hero-text">Start Your carer & push your passion!</h2>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto alias molestias, id similique nihil eaque explicabo quibusdam veritatis ratione deleniti.</p>
             <Button className="btn" style={{backgroundColor: "#FF7B4B"}}>View Our Program <FiNavigation/> </Button>
           </div>
        </Grid>
        <Grid item xs={8}>
          <div className="right-content">
            <img fluid src="https://i.ibb.co/GxfR85K/bbbb-removebg.png" alt="" srcset="" />
          </div>
        </Grid>
      </Grid>
    </Box>





    </div>
    );
};

export default Header;