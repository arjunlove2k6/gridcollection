import React from 'react';
import './App.css';


import { Container, Row, Col } from 'react-bootstrap'

class GridLinks extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { showScreen } = this.props
        const arr = [1, 2, 3, 4];
        return (
            <Container className={'gridLinks'}>
                <span className={'corosalLinks'}>
                    <Col onClick={() => showScreen('Account')}>.</Col>
                    <Col onClick={() => showScreen('Customer')}>.</Col>
                    {/* <Col onClick={() => showScreen}>Link 3</Col>
                    <Col onClick={() => showScreen}>Link 4</Col> */}
                </span>
            </Container>
        );
    }
}

export default GridLinks;
