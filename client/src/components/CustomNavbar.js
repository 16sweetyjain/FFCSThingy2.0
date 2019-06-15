import React from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, NavbarBrand, Row } from 'react-bootstrap';

import "whatwg-fetch";
import '../App.css';
import '../css/nav-bar.css'

import navbarImage from '../images/logo.png';


class CustomNavbar extends React.Component {

	renderThemeChoices = () => {
		console.log(this.props.themes);
		return Object.keys(this.props.themes).map(v => {
			return (
				<NavDropdown.Item eventKey={v}>{this.props.themes[v].name}</NavDropdown.Item>
			)
		})
	}

	render() {
		return (
			<Navbar className="navBar" bg="light" fixed="top" expand="md">
				
				<NavbarBrand href="#home" class="navbar-left">
					{/* <img className="logo" alt="FFCSThingy" src={navbarImage}></img> */}
					FFCSThingy
				</NavbarBrand>
				
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				
				<Navbar.Collapse className="linksContainer" id="basic-navbar-nav">
					
					<Nav className="mr-auto">
						<Nav.Link className="navLink">Home</Nav.Link>
						<Nav.Link className="navLink">About</Nav.Link>
					</Nav>

					<Nav className="navLeft">
						<Nav.Link className="navLink" disabled>
							Credits: {this.props.creditCount}
						</Nav.Link>

						<NavDropdown
							title="Theme"
							className="navDropContainer"
							onSelect={this.props.changeActiveTheme}
						>
							{this.renderThemeChoices()}
						
						</NavDropdown>
						
						<NavDropdown 
							title={<img className="userProfileImage" 
								src={this.props.user.picture} />} 
							className="navDropContainer"
						>
							<NavDropdown.Item disabled>
								{this.props.user.display_name}
							</NavDropdown.Item>

							<NavDropdown.Divider />
							
							<NavDropdown.Item>Logout</NavDropdown.Item>
						</NavDropdown>
					</Nav>

				</Navbar.Collapse>
			
			</Navbar>
		)
	}

}

export default CustomNavbar;