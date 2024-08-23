import React from "react";
import {Navbar , Container , NavDropdown , Nav} from "react-bootstrap";
import './nav.css';
import logo from '../../assents/log2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'
const Navbars = ()=>{
    return(
        <Navbar expand="lg" >
        <Container>
          <Navbar.Brand>
            <img src= {logo} title='logos' alt=""/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"className="active">Home</Nav.Link>
              
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Service" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>

                
              </NavDropdown>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              </NavDropdown>
             
              <Nav.Link href="#home">ِِContact us</Nav.Link>
              <Nav.Link href="#home">
              <FontAwesomeIcon icon= {faSearch}/></Nav.Link>
                 
              <Nav.Link href="#home"> 
               <FontAwesomeIcon icon= {faPhone} className="phone"/>
                  +(213) 0670122629 </Nav.Link>
              <Nav.Link href="#home">ِِContact us</Nav.Link>
              <Nav.Link href="#home">ِِ
                 <button> contact us<span> > </span>  </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}
export default Navbars;
