import React from 'react';
import styled from 'styled-components';

const Title = styled.span`
  font-size: 1.5em;
`;

const Heading = ({isPlaying, currentBpm}) => {
  return (
    <Title>
      {isPlaying ? 'Playing at:' : ''}
      &nbsp;
      {currentBpm}
      &nbsp;
      BPM
    </Title>
  )
};

export default Heading;
