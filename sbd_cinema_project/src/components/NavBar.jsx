import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import SearchBar from "./SearchBar";
import QACLogo from "../resources/logosbd.png"
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
  <>
  {[false].map((expand) => (
    <Navbar key={expand} bg="dark" expand={expand} className="navBar">
      <Container className="navContainer" fluid>
        <Navbar.Brand>
          <Link to='/' className="NavBrand">
            <img className="logoQAC" alt="QA Cinemas Logo" src={QACLogo} width="100px"/>
          </Link>
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
              <Link as={Link} to="/" title="Home Page">Homepage</Link>
              <Link as={Link} to="/listingsgallery" title="Listings Gallery">Listing Gallery</Link>
              <Link href="newreleases">New Releases</Link>
              <Link href="ticketbookings">Book your tickets here</Link>
              <Link href="payment">Payment</Link>
              <NavDropdown
                title="More Info"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="aboutsbd">About SBD</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="classifications">
                  Classifications
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="openingtimes">
                  Opening Times
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="placestogo">
                  Places To Go
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="screens">
                  Screens
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