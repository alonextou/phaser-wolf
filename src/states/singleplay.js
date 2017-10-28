class SinglePlayState extends Phaser.State {
  preload () {
    let game = this.game
    game.load.image('player', 'assets/images/player.png')
    game.load.image('bg1', 'assets/images/bg1.png')
  }

  create () {
    let game = this.game
    let background = game.add.image(0, 0, 'bg1')
    background.width = game.width
    background.height = game.height

    let player = game.add.sprite(this.world.centerX, game.world.centerY, 'player')
    player.scale.setTo(.1)
    player.anchor.x = 0.5
    player.anchor.y = 0.5

    let downKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC)
    downKey.onDown.add(this.loadMenu, this)
  }

  loadMenu () {
    let game = this.game

    game.state.start('Menu')
  }
}

export default SinglePlayState
