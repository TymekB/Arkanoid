var menuState = {

    create: function()
    {
        var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        game.add.text(100, 100, 'Arkanoid - click space to start', {fill: '#fff', fontWeight: '300'});

        space.onDown.add(this.startGame);
    },

    startGame: function()
    {
        game.state.start('play');
    }

};