import React, { Component } from 'react';
import click1 from '../../audio/click1.wav';
import click2 from '../../audio/click2.wav';
import './Metronome.css';

import ActionButton from '../ActionButton/ActionButton';
import Heading from '../Heading/Heading';
import Slider from '../Slider/Slider';

class Metronome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };

    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }

  handleBpmChange = event => {
    const bpm = event.target.value;

    if (this.state.playing) {
      clearInterval(this.timer);

      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);

      this.setState({
        count: 0,
        bpm
      });
    } else {
      this.setState({ bpm });
    }
  }

  startStop = () => {
    if (this.state.playing) {
      // Stop the timer
      clearInterval(this.timer);
      this.setState({
        playing: false,
        count: 0
      });
    } else {
      // Start a timer with the current BPM
      this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);

      this.setState({
        count: 0,
        playing: true
      }, this.playClick)
    }
  }

  playClick = () => {
    const { count, beatsPerMeasure } = this.state;

    if (count % beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }

    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  }

  render() {
    const { playing, bpm } = this.state;

    return (
      <div className="metronome">

        <Heading
          isPlaying={playing}
          currentBpm={bpm} />

        <Slider
          currentBpm={bpm}
          handleChange={this.handleBpmChange} />

        <ActionButton
          isPlaying={playing}
          handleOnClick={this.startStop} />
      </div>
    );
  }
}

export default Metronome;
