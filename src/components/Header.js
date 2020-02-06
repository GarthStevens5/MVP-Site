import React from 'react'
import logo from '../logo.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from './Products';
import HomePage from './HomePage';
import Testimonials from './Testimonials';
import Winners from './Winners';

const Header = () => { 
  return(
    <Router>
    <div>
      <Navbar bg="light" expand="lg">
      <img src={logo} className="App-logo" alt="logo" />
        <Navbar.Brand href="/">Mountain View Publishers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/winners">Winners</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">FAQs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Privacy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">BBB Certification</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/products' component={Products} />
              <Route path='/Winners' component={Winners} />
              <Route path='/testimonials' component={Testimonials} />
          </Switch>
    </div>
    </Router>
  )
}

export default Header