import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './MyNav.scss';

class MyNav extends React.Component{
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  ClubSetter = () => {
    if(this.props.clubIds !== null){
      let x = [];
  
      for(let i=0; i<this.props.clubIds.length; i++){
        x.push(
          <DropdownItem href={`/club/?partnerId=${this.props.currentUser}&clubId=${this.props.clubIds[i]}`}>
            Club {(i+1)}
          </DropdownItem>
        )
      }
  
      return(
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Clubs
          </DropdownToggle>
          <DropdownMenu right>
            {x}
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    }
    return <NavLink href="/club">Clubs</NavLink>
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
              {this.ClubSetter()}
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