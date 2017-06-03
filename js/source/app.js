import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import Store from './store/BoardStore';
import {Grid, Row, Col, Clearfix, Navbar, Nav, NavItem} from 'react-bootstrap';

ReactDOM.render(
  <div>
    <Grid>
      <Row className="show-grid">
          <Col xs={12} md={12}>
           <Navbar inverse className="top-banner action-button">
             <Navbar.Header className="header">
               <Navbar.Brand className="brand nav-align">
               Game Of Life
               </Navbar.Brand>
             </Navbar.Header>
             <Nav className="nav-align">
              <NavItem>Run</NavItem>
              <NavItem>Pause</NavItem>
              <NavItem>Clear</NavItem>
             </Nav>
           </Navbar>
           </Col>
      </Row>
      <Row className="show-grid board-holder">
        <Col xs={8} md={8}> <Board></Board> </Col>
      </Row>
    </Grid>
  </div>,
  document.getElementById('app')
);