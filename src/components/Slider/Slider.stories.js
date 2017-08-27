import React from 'react';
import { storiesOf } from '@storybook/react';

import Slider from './Slider';

storiesOf('Slider', module)
  .add('Default', () => (
    <Slider />
  ))
  .add('Starts with lowest bpm', () => (
    <Slider currentBpm={60} />
  ))
  .add('Starts with highest bpm', () => (
    <Slider currentBpm={240} />
  ));
