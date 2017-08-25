import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #C94D46;
  padding: 10px;
  border: 1px solid #832420;
  border-radius: 2px;
  width: 100px;
  color: #fff;
  font-size: 18px;

  &:focus {
    outline: 0;
  }
`;

const ActionButton = ({isPlaying, handleOnClick}) => {
  return (
    <Button onClick={handleOnClick}>
      { isPlaying ? 'Stop' : 'Start' }
    </Button>
  );
};

export default ActionButton;
