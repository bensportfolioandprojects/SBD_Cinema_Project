import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import SearchBar from "./SearchBar";
import QACLogo from "../resources/logosbd.png"


const NavBar = () => {
  return (
  <>
  {[false].map((expand) => (
    <Navbar key={expand} bg="dark" expand={expand} className="navBar">
      <Container className="navContainer" fluid>
        <Navbar.Brand  href="#"><img className="logoQAC" alt="QA Cinemas Logo" src={QACLogo} width="100px"/></Navbar.Brand>
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
              <Nav.Link href="homepage.html">Homepage</Nav.Link>
              <Nav.Link href="listingsgallery.html">Listing Gallery</Nav.Link>
              <Nav.Link href="newreleasesgallery.html">New Releases</Nav.Link>
              <Nav.Link href="ticketbookings.html">Book your tickets here</Nav.Link>
              <Nav.Link href="payment.html">Payment</Nav.Link>
              <NavDropdown
                title="More Info"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="aboutsbd.html">About SBD</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="classifications.html">
                  Classifications
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="openingtimes.html">
                  Opening Times
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="placestogo.html">
                  Places To Go
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="screens.html">
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