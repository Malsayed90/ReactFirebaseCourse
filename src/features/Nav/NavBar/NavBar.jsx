import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

class NavBar extends Component {
  state = {
    authenticated: true
  }

  handleSignIn = () => 
  this.setState({autheticated: true});

  
  handleSignOut = () => {
    this.setState({autheticated: false});
    this.props.history.push('/');
  }

  render() {
    const{authenticated} = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={NavLink} to='/' exact>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item name="Events" as={NavLink} to='/events'/>
          <Menu.Item name="People" as={NavLink} to='/people'/>
          <Menu.Item as={Link} to='/createEvent'>
            <Button floated="right" positive inverted content="Create Event" />
          </Menu.Item>
          {authenticated? <SignedInMenu signOut={this.handleSignOut}/>: <SignedOutMenu signIn={this.handleSignIn}/>}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
