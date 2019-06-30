import React, { Component } from 'react';
import Phaser from "phaser";
import logoImg from "../assets/logo.png";
import Config from '../config/Config';
import GameScene from '../scenes/GameScene';
import BootScene from '../scenes/BootScene';
import PreloaderScene from '../scenes/PreloaderScene';

export class Game extends Component {
  componentDidMount() {
    const game = new Phaser.Game(Config);
    game.scene.add('Boot', BootScene);
    game.scene.add('Preloader', PreloaderScene);
    game.scene.add('Game', GameScene);
    game.scene.start('Boot');
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
