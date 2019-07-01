import Phaser from 'phaser';
import Config from '../config/Config';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    //Change camera viewport
    const defaultTilemapSize = 3600;
    const tilemapScale = 0.15;
    const widthOffset = (Config.width - (defaultTilemapSize * tilemapScale)) / 2;
    const heightOffset = (Config.height - (defaultTilemapSize * tilemapScale)) / 2;
    this.cameras.main.setViewport(widthOffset, heightOffset, Config.width, Config.height);

    //Create map
    const map = this.make.tilemap({ key: 'chess' });

    //Add tilesets
    const tilesets = [];
    tilesets.push(map.addTilesetImage('TilesetA', 'TilesetA'));
    tilesets.push(map.addTilesetImage('TilesetB', 'TilesetB'));
    tilesets.push(map.addTilesetImage('Pushers', 'Pushers'));
    tilesets.push(map.addTilesetImage('Pits', 'Pits'));

    //Add tilemap layers
    const layers = {};
    layers.floorLayer = map.createStaticLayer("Floor", tilesets, 0, 0);
    layers.floorObjectsLayer = map.createStaticLayer("FloorObjects", tilesets, 0, 0);
    layers.wallObjectsLayer1 = map.createStaticLayer("WallObjects1", tilesets, 0, 0);
    layers.wallObjectsLayer2 = map.createStaticLayer("WallObjects2", tilesets, 0, 0);
    layers.wallsLayer1 = map.createStaticLayer("Walls1", tilesets, 0, 0);
    layers.wallsLayer2 = map.createStaticLayer("Walls2", tilesets, 0, 0);

    layers.floorLayer.setScale(tilemapScale, tilemapScale);
    layers.floorObjectsLayer.setScale(tilemapScale, tilemapScale);
    layers.wallObjectsLayer1.setScale(tilemapScale, tilemapScale);
    layers.wallObjectsLayer2.setScale(tilemapScale, tilemapScale);
    layers.wallsLayer1.setScale(tilemapScale, tilemapScale);
    layers.wallsLayer2.setScale(tilemapScale, tilemapScale);
  }
};