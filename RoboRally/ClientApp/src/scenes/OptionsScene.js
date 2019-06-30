import Phaser from 'phaser';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.musicOn = true;
    this.soundOn = true;

    this.text = this.add.text(300, 100, 'Options', { fontSize: 40 });
    this.musicButton = this.add.image(200, 200, 'ui_blueBoxCheckmark');
    this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: 24 });

    this.soundButton = this.add.image(200, 300, 'ui_blueBoxCheckmark');
    this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 24 });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', function () {
      this.musicOn = !this.musicOn;
      this.updateAudio();
    }.bind(this));

    this.soundButton.on('pointerdown', function () {
      this.soundOn = !this.soundOn;
      this.updateAudio();
    }.bind(this));

    this.updateAudio();

    //Return to main menu button
    this.menuButton = this.add.sprite(400, 500, 'ui_blueButton02').setInteractive();
    this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);

    this.menuButton.on('pointerdown', function (pointer) {
      this.scene.start('Title');
    }.bind(this));

    //Button Texture Updates
    this.menuButton.on('pointerover', function (event, gameObjects) {
      this.setTexture('ui_blueButton03');
    });

    this.menuButton.on('pointerout', function (event, gameObjects) {
      this.setTexture('ui_blueButton02');
    });
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