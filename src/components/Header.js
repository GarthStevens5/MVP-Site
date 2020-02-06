import React from 'react'
import logo from '../logo.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from './Products';
import JackpotJournal from './JackpotJournal';
import Up4Grabs from './Up4Grabs'; 
import HomePage from './HomePage';
import Testimonials from './Testimonials';
import Winners from './Winners';
import Privacy from './Privacy';

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
            <NavDropdown title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item href="/products">Products Page</NavDropdown.Item>
            <NavDropdown.Divider />
              <NavDropdown.Item href="/jackpot-journal">JackpotJournal</NavDropdown.Item>
              <NavDropdown.Item href="/Up4Grabs">Up4Grabs</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/prize-winners"> Prize Winners</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">FAQs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
              <NavDropdown.Item href="/privacy">Privacy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">BBB Certification</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/products' component={Products} />
              <Route path='/jackpot-journal' component={JackpotJournal} />
              <Route path='/Up4Grabs' component={Up4Grabs} />
              <Route path='/privacy' component={Privacy} />
              <Route path='/prize-winners' component={Winners} />
              <Route path='/testimonials' component={Testimonials} />
              <Route path='/privacy' component={Privacy} />
          </Switch>
    </div>
    </Router>
  )
}

export default Header