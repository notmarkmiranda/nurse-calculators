import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './NavBar.scss'

const NavBar = () => (
  <Navbar staticTop collapeOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">calculate</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        {/* <NavItem eventKey={ 1 } href="/asdf">Link</NavItem>
        <NavItem eventKey={ 2 } href="#">Link</NavItem>
        <NavDropdown eventKey={ 3 } title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={ 3.1 }>Action</MenuItem>
          <MenuItem eventKey={ 3.2 }>Another Action</MenuItem>
          <MenuItem eventKey={ 3.3 }>Something Else</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={ 3.3 }>Separated Link</MenuItem>
        </NavDropdown> */}
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={ 1 } href="/dosage">Dosage</NavItem>
        <NavItem eventKey={ 2 } href="/ramping-up">Ramp Up</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavBar
