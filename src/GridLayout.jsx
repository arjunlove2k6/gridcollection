import React from 'react';
import './App.css';
import Account from './Account';
import Customer from './Customer';
import { Container, Row, Col } from 'react-bootstrap'

class GridLayout extends React.Component {

  render() {
    const { rows, coloumns } = this.props
    return (
      <Container fluid={true}>
        <Row className={'header'}> Top Header </Row>
        <Row className={'body'}>
          <Col sm="2" className={'leftNavigation'} >Left navigation</Col>
          <Col sm="10" >
            <Row className={'gridRow'}>
              <Col className={'gridInnerCols'}>
                <h1>Account</h1>
                <Account />
              </Col>
              <Col className={'gridInnerCols'}>
                <h1>Customer</h1>
                <Customer />
              </Col>
              <Col className={'gridInnerCols'}>
                <h1>Box3</h1>
              </Col>
            </Row>
            <Row>
              <Col className={'gridInnerCols'}>
                <h1>Box4</h1>
              </Col>
              <Col className={'gridInnerCols'}>
                <h1>Box5</h1>
              </Col>
              <Col className={'gridInnerCols'}>
                <h1>Box6</h1>
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default GridLayout;
