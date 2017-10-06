var loseState = {

    create: function()
    {
        var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        game.add.text(100, 100, 'You lose - click space to restart', {fill: '#fff', fontWeight: '300'});

        space.onDown.add(this.restartGame);
    },

    restartGame: function()
    {
        game.state.start('play');
    }

};