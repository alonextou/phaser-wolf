import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';

let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create })

let titleText = 'WereWolf'

function preload () {
  //
}

var titleTextStyle = {
  fill: '#fff'
}

function create() {
  let text = game.add.text(game.world.centerX, game.world.centerY, titleText, titleTextStyle)
  text.anchor.x = 0.5;
  text.anchor.y = 0.5;
}

function update() {
  //
}

function render() {
  //
}
