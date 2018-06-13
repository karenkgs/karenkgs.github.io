import { Nav, NavItem, Navbar } from 'react-bootstrap';

import React from 'react';

const HeaderNavbar = () => (
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            SOBRE MIM
          </NavItem>
          <NavItem eventKey={2} href="#">
            PROJETOS
          </NavItem>
          <NavItem eventKey={3} href="#">
            REDES SOCIAIS
          </NavItem>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
);

export default HeaderNavbar;
