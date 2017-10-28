class MenuState extends Phaser.State {
  init () {
    this.gameTitle = 'WURWULF'
    this.titleText = 'Menu'
    this.titleTextStyle = {
      fill: '#fff'
    }
  }

  create () {
    let game = this.game

    // TODO: pass params with es6 spread operator ...
    let text = game.add.text(game.world.centerX, game.world.centerY, this.titleText, this.titleTextStyle)
    text.anchor.x = 0.5;``
    text.anchor.y = 0.5;

    text.inputEnabled = true
    text.events.onInputDown.add(this.loadSinglePlay, this)
  }

  loadSinglePlay () {
    let game = this.game

    game.state.start('SinglePlay')
  }
}

export default MenuState
