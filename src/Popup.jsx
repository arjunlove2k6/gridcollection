import React from 'react';
import './App.css';
import { Button, Modal } from 'react-bootstrap'

class Popup extends React.Component {
  constructor(props) {
    super(props);
    
  }
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  
  render() {
    return (
      <span>
      <Modal className={'myModal'} show={this.props.show} onHide={this.props.togglePopup}>
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.togglePopup}>
            Close
            </Button>
          <Button variant="primary" onClick={this.props.togglePopup}>
            Save Changes
            </Button>
        </Modal.Footer>
      </Modal>
      </span>
    );
  }
}

export default Popup;