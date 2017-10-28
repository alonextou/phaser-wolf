class SinglePlayState extends Phaser.State {
  init () {
    this.titleText = 'WereWolf'
  }

  preload () {
    let game = this.game

    game.load.image('bg1', 'assets/images/bg1.png')
  }

  create () {
    let game = this.game

    let background = game.add.image(0, 0, 'bg1')
    background.width = game.width
    background.height = game.height

    let titleText = this.titleText
    let titleTextStyle = {
      fill: '#fff'
    }

    let text = game.add.text(this.world.centerX, game.world.centerY, titleText, titleTextStyle)
    text.anchor.x = 0.5
    text.anchor.y = 0.5

    let downKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC)
    downKey.onDown.add(this.loadMenu, this)
  }

  loadMenu () {
    let game = this.game

    game.state.start('Menu')
  }
}

export default SinglePlayState
