import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import "./header.module.css"

const Header = ({ siteTitle }) => (
  <div className="container-fluid ">
    <Navbar className="container" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={require("../images/bantu-orange-thumb.png")}
          alt="logo"
          style={{ width: "40px", marginTop: "10px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            href="/"
            style={{color: '#5a6671', fontSize: "1rem", fontFamily: "Poppins,Mirza,sans-serif", paddingRight: 12 }}
          >
            Home
          </Nav.Link>
          <Nav.Link href="#link" style={{color: '#5a6671', fontSize: "1rem", fontFamily: "Poppins,Mirza,sans-serif", paddingRight: 12}}>Pages</Nav.Link>
          <Nav.Link href="#link" style={{color: '#5a6671', fontSize: "1rem", fontFamily: "Poppins,Mirza,sans-serif", paddingRight: 12}}>Elements</Nav.Link>
          <Nav.Link href="#link" style={{color: '#5a6671', fontSize: "1rem", fontFamily: "Poppins,Mirza,sans-serif", paddingRight: 12}}>About</Nav.Link>
          <Nav.Link href="#link" style={{color: '#5a6671', fontSize: "1rem", fontFamily: "Poppins,Mirza,sans-serif", paddingRight: 12}}>Contact</Nav.Link>
          <Nav.Link href="#link" style={{color: '#5a6671', fontSize: "1rem", fontFamily: "Poppins,Mirza,sans-serif", paddingRight: 12}}>Blog</Nav.Link>
          <Nav.Link href="#link" style={{color: '#5a6671', fontSize: "1rem", fontFamily: "Poppins,Mirza,sans-serif", paddingRight: 12}}>Shop</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
