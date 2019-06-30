import Phaser from 'phaser';
import Button from '../objects/Button';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.model = this.sys.game.globals.model;
    this.model.musicOn = true;
    this.model.soundOn = true;

    this.text = this.add.text(300, 100, 'Options', { fontSize: 40 });
    this.musicButton = this.add.image(200, 200, 'ui_blueBoxCheckmark');
    this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: 24 });

    this.soundButton = this.add.image(200, 300, 'ui_blueBoxCheckmark');
    this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 24 });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', function () {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    }.bind(this));

    this.soundButton.on('pointerdown', function () {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    }.bind(this));

    this.updateAudio();

    //Return to main menu button
    this.menuButton = new Button(this, 400, 500, 'ui_blueButton02', 'ui_blueButton03', 'Menu', 'Title');
  }

  updateAudio() {
    if (this.musicOn === false) {
      this.musicButton.setTexture('ui_greyBox');
    } else {
      this.musicButton.setTexture('ui_blueBoxCheckmark');
    }

    if (this.soundOn === false) {
      this.soundButton.setTexture('ui_greyBox');
    } else {
      this.soundButton.setTexture('ui_blueBoxCheckmark');
    }
  }
};