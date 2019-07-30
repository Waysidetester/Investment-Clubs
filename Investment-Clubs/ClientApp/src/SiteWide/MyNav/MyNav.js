import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './MyNav.scss';

class MyNav extends React.Component{
  state = {
    isOpen: false,
  };
  
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return(
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Prosperity Germinator</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/account">Your Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/club">Clubs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Investment Page</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default MyNav;