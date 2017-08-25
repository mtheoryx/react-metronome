import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  margin: 10px;
`;

const Slider = ({ currentBpm, handleChange }) => {
  return (
    <Input
      type="range"
      min="60"
      max="240"
      value={currentBpm}
      onChange={(event) => handleChange(event)}
    />
  )
};

export default Slider;
