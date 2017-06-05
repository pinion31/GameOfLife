import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import Store from './store/BoardStore';
import {Grid, Row, Col, Clearfix, Navbar, Nav, NavItem} from 'react-bootstrap';
import {startBoard} from './actions/actionCreators';

ReactDOM.render(
  <div>
    <Board></Board>
  </div>,
  document.getElementById('app')
);