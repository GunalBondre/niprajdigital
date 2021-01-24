import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg='light' expand='lg'>
          <div className='container'>
            <Navbar.Brand href='/'>NIPRAJ | DIGITAL</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                {/* <Nav.Link href='/blog'>BLOG</Nav.Link> */}
                <Nav.Link href='/about'>ABOUT</Nav.Link>
              </Nav>
            </Navbar.Collapse>{" "}
          </div>
        </Navbar>
      </div>
    );
  }
}
