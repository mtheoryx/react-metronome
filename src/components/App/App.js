import React, { Component } from 'react';
import styled from 'styled-components';

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
        <span>Hello from React!</span>
      </Wrapper>
    );
  }
}

export default App;
