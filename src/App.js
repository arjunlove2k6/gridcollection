import React from 'react';
import './App.css';
import GridLayout from './GridLayout';


import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <GridLayout rows={[1,2]} coloumns={[1,2,3]} />
  );
}

export default App;
