import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  margin: 10px;
`;

const Slider = ({ currentBpm = 100, handleChange }) => {
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

Slider.propTypes = {
  currentBpm: PropTypes.number,
  handleChange: PropTypes.func.isRequired
}

export default Slider;
