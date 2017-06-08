import React from 'react';
import ReactDOM from 'react-dom';
import {Component, PropTypes} from 'react';
import {Grid, Row, Col, Clearfix, Navbar, Nav, NavItem, Button} from 'react-bootstrap';

class OptionsMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resizeBoard:this.props.resizeBoard,
      setBoardSpeed:this.props.setBoardSpeed,
    };
  }

  render() {
    return (
      <div>
        <Row className="top-banner action-button">
         <Col xs={8} md={8}>
              <Button className="button" onClick={() => this.state.resizeBoard(15)}>15X15</Button>
              <Button className="button" onClick={() => this.state.resizeBoard(20)}>20X20</Button>
              <Button className="button" onClick={() => this.state.resizeBoard(25)}>25X25</Button>
              <Button className="button" onClick={() => this.state.setBoardSpeed(2500)}>SLOW</Button>
              <Button className="button" onClick={() => this.state.setBoardSpeed(1000)}>MEDIUM</Button>
              <Button className="button" onClick={() => this.state.setBoardSpeed(500)}>FAST</Button>
        </Col>
        </Row>
      </div>
    );
  }

}

export default OptionsMenu