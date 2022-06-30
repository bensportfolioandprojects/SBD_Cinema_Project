import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import SearchBar from "./SearchBar";
import ListingsGalleryLayout from '../listingsgallerylayout';
import QACLogo from "../resources/logosbd.png"
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
  return (
  <>
  {[false].map((expand) => (
    <Navbar key={expand} bg="dark" expand={expand} className="navBar">
      <Container className="navContainer" fluid>
        <Navbar.Brand>
          <NavLink to='/' className="NavBrand">
            <img className="logoQAC" alt="QA Cinemas Logo" src={QACLogo} width="100px"/>
          </NavLink>
        </Navbar.Brand>
        <SearchBar/>
        <Navbar.Toggle className="navMenuButton" aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton className="navBarMenu">
            <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="navBarBody">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to="/" title="Home Page">Homepage</NavLink>
              <NavLink to="/listingsgallery" title="Listings Gallery">Listing Gallery</NavLink>
              <NavLink to="newreleases" title="New Releases">New Releases</NavLink>
              <NavLink to="ticketbooking" title="Ticket Bookings">Book your tickets here</NavLink>
              <NavLink to="payment" title="Payment">Payment</NavLink>
              <NavDropdown className="navDrop"
                title="More Info"
                id={`offcanvasNavbarDropdown-expand-${expand}`}>
                <NavDropdown.Item className="navDrop">
                  <NavLink to="about" title="About Us">About SBD</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navDrop">
                  <NavLink to="classifications" title="Classifications">Classifications</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navDrop">
                  <NavLink to="openingtimes" title="Opening Times">Opening Times</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navDrop">
                  <NavLink to="placestogo" title="Places To Go">Places To Go</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navDrop">
                  <NavLink to="discussionboard" title="Discussion Board">Discussion Board</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navDrop">
                  <NavLink to="screens" title="Screens">Screens</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navDrop">
                  <NavLink to="contactus" title="Contact Us">Contact Us</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
</>
  
  )
}
  
  export default NavBar;