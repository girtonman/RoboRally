import Phaser from 'phaser';
import logoImg from "../assets/logo.png";

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    var _this = this;
    // add logo image
    this.add.image(400, 200, 'roboLogo');

    // display progress bar
    this.progressBar = this.add.graphics();
    this.progressBox = this.add.graphics();
    this.progressBox.fillStyle(0x222222, 0.8);
    this.progressBox.fillRect(240, 370, 320, 50);

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    this.loadingText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    this.loadingText.setOrigin(0.5, 0.5);

    this.percentText = this.make.text({
      x: width / 2,
      y: height / 2 + 95,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    this.percentText.setOrigin(0.5, 0.5);

    this.assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 150,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    this.assetText.setOrigin(0.5, 0.5);
    
    _this.ready = function () {
      // remove progress bar when complete
      _this.progressBar.destroy();
      _this.progressBox.destroy();
      _this.loadingText.destroy();
      _this.percentText.destroy();
      _this.assetText.destroy();

      _this.scene.start('Title');
    };

    // update progress bar
    this.load.on('progress', function (value) {
      _this.percentText.setText(parseInt(value * 100) + '%');
      _this.progressBar.clear();
      _this.progressBar.fillStyle(0xffffff, 1);
      _this.progressBar.fillRect(250, 380, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', function (file) {
      _this.assetText.setText('Loading asset: ' + file.key);
    });

    this.load.on('complete', function () {
      _this.time.delayedCall(3000, _this.ready, [], _this);
    });

    // load assets needed in our game
    //this.load.image('blueButton1', 'assets/ui/blue_button02.png');
    //this.load.image('blueButton2', 'assets/ui/blue_button03.png');
    this.load.image('logo', logoImg);
  };
};