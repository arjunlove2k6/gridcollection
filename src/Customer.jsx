import React from 'react';
import './App.css';
import Popup from './Popup';
import { Col, Carousel } from 'react-bootstrap'

class Customer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screen: '',
      showPopup: false,
      content: '',
      title: '',
      index: 0,
      direction: null,
      subComp: ''
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
  }

  handleSelect(selectedIndex, e) {
    this.setState({ index: selectedIndex });
    this.setState({ direction: e.direction });
  };
  togglePopup(obj) {
    if (obj) {
      this.setState({ content: obj.content })
      this.setState({ title: obj.title })
      this.setState({ subComp: obj.comp })
    }
    this.setState({ showPopup: !this.state.showPopup })
  }

  render() {
    return (
      <Col>
        <div className={'subComp'}>
          <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} interval={null} controls={false}>
            <Carousel.Item className={'subComp'} onClick={() =>
              this.togglePopup(
                {
                  content: 'Tthis is Sub3 popup',
                  title: 'SUB3',
                  comp: 'sub3'
                })
            }>
              Sub3
            </Carousel.Item>
            <Carousel.Item className={'subComp'} onClick={() =>
              this.togglePopup(
                {
                  content: 'This is Sub4 popup',
                  title: 'SUB4',
                  comp: 'sub4'
                })
            }>
              Sub4
            </Carousel.Item>
          </Carousel>
        </div>
        <Popup togglePopup={this.togglePopup} show={this.state.showPopup} content={this.state.content} title={this.state.title} childComp={this.state.subComp} />
      </Col>
    );
  }

}

export default Customer;
