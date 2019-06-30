import Phaser from 'phaser';
import Config from '../config/Config';
import Button from '../objects/Button';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.gameButton = new Button(this, Config.width / 2, Config.height / 2 - 100, 'ui_blueButton02', 'ui_blueButton03', 'Play', 'Game');
    this.optionsButton = new Button(this, Config.width / 2, Config.height / 2, 'ui_blueButton02', 'ui_blueButton03', 'Options', 'Options');
    this.creditsButton = new Button(this, Config.width / 2, Config.height / 2 + 100, 'ui_blueButton02', 'ui_blueButton03', 'Credits', 'Credits');
  }
};