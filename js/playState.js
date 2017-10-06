var playState = {

    preload: function()
    {
        game.load.image('ball', 'assets/ball.png');
        game.load.image('paddle', 'assets/paddle.png');
        game.load.image('brick0', 'assets/brick0.png');
        game.load.image('brick1', 'assets/brick1.png');
        game.load.image('brick2', 'assets/brick2.png');
        game.load.image('brick3', 'assets/brick3.png');
        game.load.image('brick4', 'assets/brick4.png');
    },

    create: function()
    {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.ball = game.add.sprite(100, 100, 'ball');

        game.physics.enable(this.ball);

        this.ball.body.velocity.x = 300;
        this.ball.body.velocity.y = 300;
        this.ball.body.bounce.setTo(1,1);
        this.ball.body.collideWorldBounds = true;
    },

    update: function()
    {

    }

};