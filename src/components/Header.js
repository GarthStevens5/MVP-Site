import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../MVP_Logo_noText.png'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JackpotJournal from './JackpotJournal';
import Up4Grabs from './Up4Grabs'; 
import HomePage from './HomePage';
import Testimonials from './Testimonials';
import Winners from './Winners';
import Privacy from './Privacy';
import Promotions from './Promotions';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export class Header extends React.Component {

  constructor(props) {
    
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseEnter2 = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseLeave2 = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false,
    };
    this.state2 = {
      dropdown2Open: false
    };
  }
  

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  toggle2() {
    this.setState(prevState => ({
      dropdown2Open: !prevState.dropdown2Open
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }

  onMouseEnter2() {
    this.setState({dropdownOpen2: true});
  }

  onMouseLeave2() {
    this.setState({dropdownOpen2: false});
  }

  render() {
    return(
    <React.Fragment>
    <Router>
    <div>
      <Navbar bg="light" expand="lg">
      <hr />
        <div className="TopHeader">
        <div className="HeaderBrand">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar.Brand href="/">Mountain View Publishers</Navbar.Brand>
        </div>
        <div className="ContactInfo">
          <Navbar.Brand>Email: support@mvpmail.com</Navbar.Brand>
          <Navbar.Brand>Call: (800) MVP-7989</Navbar.Brand>
        </div>
        </div>
      </Navbar>
      <Navbar bg="dark" variant="dark" expand="lg">
      
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <hr />
          <Nav className="mr-auto">
            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
      <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle >
          About
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="/contact">Contact</DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="/faq">FAQs</DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="/privacy">Privacy</DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="/BBB">BBB Certification</DropdownItem>
        </DropdownMenu>
      </Dropdown>
            <Nav.Link href="/jackpot-journal">Jackpot Journal</Nav.Link>
            <Nav.Link href="/up4grabs">Up4Grab$</Nav.Link>
            <Nav.Link href="/promotions">Promotions</Nav.Link>
            <Nav.Link href="/winners">Winners</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      

      <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/jackpot-journal' component={JackpotJournal} />
              <Route path='/Up4Grabs' component={Up4Grabs} />
              <Route path='/privacy' component={Privacy} />
              <Route path='/promotions' component={Promotions} />
              <Route path='/winners' component={Winners} />
              <Route path='/testimonials' component={Testimonials} />
              <Route path='/privacy' component={Privacy} />
          </Switch>
    </div>
    </Router>
    </React.Fragment>
  )
}
}

export default Header