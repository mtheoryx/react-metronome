import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Slider from './Slider';

class SliderBox extends Component {
  state = {
    bpm: 120
  };
  handleChange = e => this.setState({bpm: parseInt(e.target.value)});
  render() {
    return <Slider
      currentBpm={this.state.bpm}
      handleChange={this.handleChange}/>
  }
};

storiesOf('Slider', module)
  .add('Default', () => (
      <SliderBox />
    )
  );
