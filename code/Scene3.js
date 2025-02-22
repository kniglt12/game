export default class Scene3 extends Phaser.Scene {

    constructor() {
        super({ key: 'Scene3' });
    }

    preload() {
        this.add.image(0, 0, 'scene3').setOrigin(0, 0);
        const zone1 = this.add.zone(615, 375, 220, 100).setOrigin(0, 0).setInteractive();

        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0xff0000);
        graphics.strokeRect(zone1.x, zone1.y, zone1.input.hitArea.width, zone1.input.hitArea.height);

        zone1.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.cameras.main.on('camerafadeoutcomplete', () => {
                this.scene.start('MainScene');
            });
        });
    }
}