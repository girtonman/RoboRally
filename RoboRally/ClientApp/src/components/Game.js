import React, { Component } from 'react';
import Config from '../config/Config';
import RoboRallyGame from '../RoboRallyGame'

export class Game extends Component {
  componentDidMount() {
    const game = new RoboRallyGame(Config);
  };

  render() {
    return (
      <div id="robo-rally-game"
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'row'
        }}
      >
      </div>
    )
  };
}
