import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';

import MenuState from './states/menu'
import SinglePlayState from './states/singleplay'

let game = new Phaser.Game(800, 600, Phaser.AUTO, 'halp')
game.state.add('Menu', MenuState, false)
game.state.add('SinglePlay', SinglePlayState, false)

game.state.start('Menu')
