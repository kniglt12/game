export default class Menu extends Phaser.Scene {

    constructor() {
        super({ key: 'Menu' });
    }
    create() {
        // this.scene.start('Scene1');

        this.add.image(0, 0, 'menu').setOrigin(0, 0);

        let zon1 = this.add.zone(126, 343, 491, 109).setOrigin(0, 0).setInteractive();
        let zon2 = this.add.zone(142, 480, 393, 109).setOrigin(0, 0).setInteractive();
        let zon3 = this.add.zone(1629, 819, 256, 203).setOrigin(0, 0).setInteractive();

        // this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(zon1);
        // this.add.graphics().lineStyle(2, 0x00ff00).strokeRectShape(zon2);
        // this.add.graphics().lineStyle(2, 0x0000ff).strokeRectShape(zon3);
        zon1.on('pointerdown', () => {
            this.scene.start('MainScene');
        });
        zon2.on('pointerdown', () => {
            this.scene.start('Setting');
        });
        zon3.on('pointerdown', () => {
            this.scene.start('Pt');
        });
    }
}