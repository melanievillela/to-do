import React, { Component } from 'react';
import { 
    Collapse,
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink    
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar dark expand="sm" className="navbar mb-5">
                    <Container>
                        <NavbarBrand href="/" className="brand">ToDo</NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        )        
    }
}

export default AppNavbar;

/*
Use below to add links
<NavbarToggler onClick={this.toggle}></NavbarToggler>
<Collapse isOpen={this.state.isOpen} navbar>
    <Nav className="ml-auto" navbar>
        <NavItem>
            <NavLink href="melanievillela.github.io">Portfolio</NavLink>
        </NavItem>
    </Nav>
</Collapse>
*/