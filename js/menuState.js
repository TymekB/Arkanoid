var menuState = {

    create: function()
    {
        var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        game.add.text(100, 100, 'Arkanoid - click space to start', {fill: '#fff'});

        space.onDown.add(this.startGame);
    },

    startGame: function()
    {
        game.state.start('play');
    }

};