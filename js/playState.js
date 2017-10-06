var score = 0;

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
        this.scoreText = game.add.text(20, 560, 'Score: 0', {fill: '#fff', fontWeight: '300', fontSize: '20px'});

        this.ball = game.add.sprite(150, 300, 'ball');
        this.paddle = game.add.sprite(300, 500, 'paddle');

        game.physics.enable(this.ball);
        game.physics.enable(this.paddle);

        this.ball.body.velocity.x = 300;
        this.ball.body.velocity.y = 300;
        this.ball.body.bounce.setTo(1,1);
        this.ball.body.collideWorldBounds = true;

        this.paddle.body.collideWorldBounds = true;
        this.paddle.body.immovable = true;

        this.createBricks();
    },

    update: function()
    {
        game.physics.arcade.collide(this.ball, this.paddle);
        game.physics.arcade.collide(this.ball, this.bricks, this.ballHitsBrick, this.shouldCollide, this);

        if(this.cursors.left.isDown)
        {
            this.paddle.x -= 8;
        }

        if(this.cursors.right.isDown)
        {
            this.paddle.x += 8;
        }

        if(this.ball.y > this.paddle.y+80)
        {
            game.state.start('lose');
        }

        if(score >= this.bricks.length * 10)
        {
            game.state.start('win');
        }
    },

    createBricks: function()
    {
        this.bricks = game.add.group();

        for(var i = 0; i < 4; i++)
        {
            for (var j = 0; j < 10; j++)
            {
                var brick = this.bricks.create(j*45, i*40, 'brick'+i);

                game.physics.enable(brick);
                brick.body.immovable = true;
            }
        }

        this.bricks.x = 180;
        this.bricks.y = 50;
    },

    ballHitsBrick: function(ball, brick)
    {
        brick.kill();
        score += 10;

        this.scoreText.setText("Score: "+score);
    },

    shouldCollide: function()
    {
        return true;
    }

};