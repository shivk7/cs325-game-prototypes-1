import "./phaser.js";
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.spritesheet('dice', 'assets/dice.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('math', 'assets/math.png', { frameWidth: 60, frameHeight: 55 });
}
    function create() {
        const dice1 = this.add.sprite(400, 300, 'dice')
        const dice2 = this.add.sprite(600, 300, 'dice')
        const dice3 = this.add.sprite(200, 300, 'dice')
        const dice4 = this.add.sprite(300, 600, 'dice')
        const dice5 = this.add.sprite(500, 600, 'dice')
        const math1 = this.add.sprite(500, 300, 'math')
        const math2 = this.add.sprite(300, 300, 'math')
        const math3 = this.add.sprite(400, 600, 'math')

        this.input.on('pointerdown', () => {
            this.tweens.addCounter({
                duration: 200,
                repeat: 10,
                onRepeat: () => {
                    dice1.setFrame(Phaser.Math.Between(0, 5));
                    dice2.setFrame(Phaser.Math.Between(0, 5));
                    dice3.setFrame(Phaser.Math.Between(0, 5));
                    dice4.setFrame(Phaser.Math.Between(0, 5));
                    dice5.setFrame(Phaser.Math.Between(0, 5));
                    math1.setFrame(Phaser.Math.Between(0, 4));
                    math2.setFrame(Phaser.Math.Between(0, 4));
                    math3.setFrame(Phaser.Math.Between(0, 4));
                }
            });
        });

    }

    function update() {
    }