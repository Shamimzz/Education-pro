import React from 'react';
import './Header.css';
import { BsSearch } from 'react-icons/bs';
import { FiNavigation } from 'react-icons/fi';
import { Container, Form, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';

const Header = () => {
  const handleSearch = () => {
    var x = document.getElementById("hide");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

    return (
    <div className="bg">
     <div className="container navMenuBorder">
       <Navbar expand="lg">
         <Container fluid>
          <Navbar.Brand href="#" className="LogoDiv">
            <img className="Logoimg" src="https://i.ibb.co/vhvmWBg/kkk-removebg-preview.png" alt="" srcset="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
       <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px'}}
        navbarScroll
        >
        <Nav.Link href="#" style={{color: '#fff'}}>Home  </Nav.Link>
         <NavDropdown
          id="navbarScrollingDropdown"
          title={<span style={{color: '#fff'}}>About</span>}
          >
           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
           <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
           <NavDropdown.Item href="#action5">Something else</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="#action2"></Nav.Link>
          <NavDropdown
           id="navbarScrollingDropdown"
           title={<span style={{color: '#fff'}}>Academic</span>}
          >
           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
           <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
           <NavDropdown.Item href="#action5">Something else</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="#action2"></Nav.Link>
           <NavDropdown
            id="navbarScrollingDropdown"
            title={<span style={{color: '#fff'}}>Admisson</span>}
           >
           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
           <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
           <NavDropdown.Item href="#action5">Something else</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="#action2"></Nav.Link>
           <NavDropdown
            id="navbarScrollingDropdown"
            title={<span style={{color: '#fff'}}>Student Life</span>}
           >
           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
           <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
           <NavDropdown.Item href="#action5">Something else</NavDropdown.Item>
        </NavDropdown>

      </Nav>
       <Form className="d-flex">
         <a onClick={handleSearch}><BsSearch style={{color: '#fff'}}/></a>
         <div id="hide">
            <TextField 
              id="filled-search"
              label="Search field"
              type="search"
              variant="filled"
            />
         </div>
       </Form>
      </Navbar.Collapse>
    </Container>
   </Navbar>
  </div> 

   <Box sx={{ flexGrow: 1 }} className="pt-5">
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12} md={6} className="left-main">
           <div className="left-content">
             <h2 className="hero-text">Start Your carer & push your passion!</h2>
             <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto alias molestias, id similique nihil eaque explicabo quibusdam veritatis ratione deleniti.</p>
             <Button className="btn mt-4" style={{backgroundColor: "#FF7B4B"}}>View Our Program <FiNavigation style={{marginLeft: '5px' }}/> </Button>
           </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="right-content">
            <img className="img-fluid" src="https://i.ibb.co/GxfR85K/bbbb-removebg.png" alt="" srcset="" />
          </div>
        </Grid>
      </Grid>
   </Box>

    </div>
    );
};

export default Header;