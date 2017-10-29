class SinglePlayState extends Phaser.State {
  preload () {
    let game = this.game
    game.load.image('player', 'assets/images/player.png')
    game.load.image('bg1', 'assets/images/bg1.png')
    game.load.image('ground1', 'assets/images/ground1.jpg')
  }

  create () {
    let game = this.game
    game.physics.startSystem(Phaser.Physics.ARCADE)

    let background = game.add.image(0, 0, 'bg1')
    background.width = game.width
    background.height = game.height

    this.player = game.add.sprite(this.world.centerX, game.world.centerY - 100, 'player')
    game.physics.enable(this.player, Phaser.Physics.ARCADE)

    this.player.scale.setTo(.1)
    this.player.anchor.x = 0.5
    this.player.anchor.y = 0.5
    this.player.body.velocity.x = 0
    this.player.speedMultiplier = 1
    this.player.body.gravity.y = 1000

    this.platforms = game.add.group()
    this.platforms = game.add.physicsGroup()
    this.platforms.enableBody = true
    let ground = this.platforms.create(0, game.world.height - 64, 'ground1')
    ground.body.immovable = true
    let ledge = this.platforms.create(400, 400, 'ground1')
    ledge.body.immovable = true
    this.platforms.setAll('body.immovable', true)

    this.player.hitPlatform = game.physics.arcade.collide(this.player, this.platforms)

    let downKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC)
    downKey.onDown.add(this.loadMenu, this)
  }

  loadMenu () {
    let game = this.game

    game.state.start('Menu')
  }

  update () {
    let game = this.game

    let cursors = game.input.keyboard.createCursorKeys()
    let shiftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SHIFT)
    let spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

    if (shiftKey.isDown) {
      this.player.speedMultiplier = 3
    } else {
      this.player.speedMultiplier = 1
    }

    if (cursors.left.isDown) {
      this.player.body.velocity.x = -150 * this.player.speedMultiplier;
      this.player.animations.play('left')
    } else if (cursors.right.isDown) {
      this.player.body.velocity.x = 150 * this.player.speedMultiplier;
      this.player.animations.play('right')
    } else {
      this.player.body.velocity.x = 0
      this.player.animations.stop();
      this.player.frame = 4;
    }

    game.physics.arcade.collide(this.player, this.platforms)

    //  Allow the player to jump if they are touching the ground.
    if (spaceKey.isDown && this.player.body.touching.down && this.player.hitPlatform)
    {
        this.player.body.velocity.y = -500;
    }

    //  You DIE
    if (this.player.body.y > game.height)
    {
        game.state.start('Menu')
    }
  }
}

export default SinglePlayState
