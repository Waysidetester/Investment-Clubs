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
  Button
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
      let partnersClubs = [];
  
      for(let i=0; i<this.props.clubIds.length; i++){
        partnersClubs.push(
          <DropdownItem key={i} href={`/club/?partnerId=${this.props.currentUser}&clubId=${this.props.clubIds[i]}`}>
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
            {partnersClubs}
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
              {this.ClubSetter()}
          </Nav>
        </Collapse>
        <Button className='disclaimer-button' color={'danger'} onClick={this.props.ShowDisclaimer}>Disclaimer</Button>
      </Navbar>
    );
  }
}

export default MyNav;