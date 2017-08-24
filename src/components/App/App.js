import React, { Component } from 'react';
import styled from 'styled-components';

import Metronome from '../Metronome/Metronome'

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Metronome />
      </Wrapper>
    );
  }
}

export default App;
