import React from 'react';
import './App.css';
import GridLinks from './GridLinks';
import Account from './Account';
import Customer from './Customer';
import Popup from './Popup';
import { Container, Row, Col, Carousel } from 'react-bootstrap'

class GridLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: '',
      showPopup: false,
      content: '',
      title: '',
      index: 0,
      direction: null
    }
    // this.renderScreens = this.renderScreens.bind(this)
    this.setScreens = this.setScreens.bind(this)
    this.setScreens = this.setScreens.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }


  handleSelect(selectedIndex, e) {
    this.setState({ index: selectedIndex });
    this.setState({ direction: e.direction });
  };

  togglePopup(obj) {
    if (obj) {
      this.setState({ content: obj.content })
      this.setState({ title: obj.title })
    }
    this.setState({ showPopup: !this.state.showPopup })
  }
  renderScreens() {
    console.log('this.state.screen): ', this.state.screen);
    switch (this.state.screen) {
      case 'Account': return (<Account showHidePopup={this.togglePopup} />);
      case 'Customer': return (<Customer showHidePopup={this.togglePopup} />);
      default: return (<Account showHidePopup={this.togglePopup} />);
    }
  }

  setScreens(val) {
    console.log('val: ', val);
    this.setState({ screen: val });
  }

  render() {
    const { rows, coloumns } = this.props
    return (
      <Container fluid={true}>


        <Row className={'header'}> Top Header </Row>
        <Row className={'body'}>
          <Col sm="2" className={'leftNavigation'} >Left navigation</Col>
          <Col sm="10">
        {rows.map((item, index) => {
              return (
                <Row className={'gridRow'}>
                  {coloumns.map((item1, index) => {
                    return (
                      <Col className={'GridCols'}>
                        <div className={'gridInnerCols'}>
                          <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} interval={null} controls={false}>
                            <Carousel.Item>
                              <Account showHidePopup={this.togglePopup} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Customer showHidePopup={this.togglePopup} />
                            </Carousel.Item>
                          </Carousel>
                        </div>
                        {/* {<GridLinks showScreen={this.setScreens} />} */}
                      </Col>
                    )
                  })}
                </Row>
              )
            })}
          </Col>
        </Row>

        
        {/* <Row className={'body'}>
          <Col sm="2" >Left navigation</Col>
          <Col sm="10">
            
            <Row className={'gridRow'}>
            <Col className={'gridInnerCols'}> 1</Col>
            <Col className={'gridInnerCols'}> 2</Col>
            <Col className={'gridInnerCols'}> 3</Col>
            </Row>
            <Row>
            <Col className={'gridInnerCols'}> 1</Col>
            <Col className={'gridInnerCols'}> 2</Col>
            <Col className={'gridInnerCols'}> 3</Col>
            </Row>
          </Col>
        </Row> */}
        <Popup togglePopup={this.togglePopup} show={this.state.showPopup} content={this.state.content} title={this.state.title} />
      </Container>
    );
  }
}

export default GridLayout;
