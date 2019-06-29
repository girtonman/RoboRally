import Phaser from 'phaser';
import roboLogo from "../assets/roboLogo.png";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('roboLogo', roboLogo);
  }

  create() {
    this.scene.start('Preloader');
  }
};