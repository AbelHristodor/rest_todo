import React, {useState} from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap'

export default function Mynavbar() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Navbar color="faded" dark className="bg-dark">
            <NavbarBrand href="/" className="mr-auto">Todo</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="#">...</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
      </Navbar>
    )
}
