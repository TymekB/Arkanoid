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

        this.cursors = game.input.keyboard.createCursorKeys();

        this.ball = game.add.sprite(100, 100, 'ball');
        this.paddle = game.add.sprite(300, 500, 'paddle');

        game.physics.enable(this.ball);
        game.physics.enable(this.paddle);

        this.ball.body.velocity.x = 300;
        this.ball.body.velocity.y = 300;
        this.ball.body.bounce.setTo(1,1);
        this.ball.body.collideWorldBounds = true;

        this.paddle.body.collideWorldBounds = true;
        this.paddle.body.immovable = true;
    },

    update: function()
    {
        game.physics.arcade.collide(this.ball, this.paddle);

        if(this.cursors.left.isDown)
        {
            this.paddle.x -= 10;
        }

        if(this.cursors.right.isDown)
        {
            this.paddle.x += 10;
        }
    }

};