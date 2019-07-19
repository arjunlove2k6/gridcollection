import React from 'react';
import './App.css';
import { Button, Modal } from 'react-bootstrap'
import Sub1 from './Sub1';
import Sub2 from './Sub2';
import Sub3 from './Sub3';
import Sub4 from './Sub4';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.renderComp = this.renderComp.bind(this)
  }

  renderComp(type) {
    switch (type) {
      case 'sub1':
        return (<Sub1 />)
      case 'sub2':
        return (<Sub2 />)
      case 'sub3':
        return (<Sub3 />)
      case 'sub4':
        return (<Sub4 />)
    }
  }

  render() {
    return (
      <span>
        <Modal show={this.props.show} onHide={this.props.togglePopup}>
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.content}
            {this.renderComp(this.props.childComp)}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.togglePopup}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}

export default Popup;