export default class Menu extends Phaser.Scene {

    constructor() {
        super({ key: 'Setting' });
    }

    preload() {
        this.add.image(0, 0, 'setting').setOrigin(0, 0);
        //ui
        // this.add.image(0, 0, 'ui').setOrigin(0, 0);
        // console.log('add ui');
        const ui1 = this.add.zone(26, 25, 80, 80).setOrigin(0, 0).setInteractive();//返回

        // const graphics = this.add.graphics();
        // graphics.lineStyle(2, 0xff0000);
        // graphics.strokeRect(ui1.x, ui1.y, ui1.width, ui1.height);
        ui1.on('pointerdown', () => {
            this.scene.start('Menu');
        });
        const zon1 = this.add.zone(684, 414, 509, 101).setOrigin(0, 0).setInteractive();
        const zon2 = this.add.zone(684, 616, 509, 101).setOrigin(0, 0).setInteractive();
        const zon3 = this.add.zone(684, 808, 509, 101).setOrigin(0, 0).setInteractive();
        // const graphics = this.add.graphics();
        // graphics.lineStyle(2, 0xff0000);
        // graphics.strokeRect(zon1.x, zon1.y, zon1.width, zon1.height);
        // graphics.strokeRect(zon2.x, zon2.y, zon2.width, zon2.height);
        // graphics.strokeRect(zon3.x, zon3.y, zon3.width, zon3.height);
        zon1.on('pointerdown', () => {
            this.add.image(0, 0, 'setting3').setOrigin(0, 0);
            zon1.removeInteractive();
            zon2.removeInteractive();
            zon3.removeInteractive();
            ui1.removeInteractive();
            this.time.delayedCall(0, () => {
                ui1.setInteractive();
                ui1.on('pointerdown', () => {
                    this.scene.start('Setting');
                });
            });
        });
        zon2.on('pointerdown', () => {
            this.add.image(0, 0, 'setting2').setOrigin(0, 0);
            zon1.removeInteractive();
            zon2.removeInteractive();
            zon3.removeInteractive();
            ui1.removeInteractive();
            this.time.delayedCall(0, () => {
                ui1.setInteractive();
                ui1.on('pointerdown', () => {
                    this.scene.start('Setting');
                });
            });
        });
        zon3.on('pointerdown', () => {
            this.add.image(0, 0, 'setting1').setOrigin(0, 0);
            zon1.removeInteractive();
            zon2.removeInteractive();
            zon3.removeInteractive();
            ui1.removeInteractive();
            this.time.delayedCall(0, () => {
                ui1.setInteractive();
                ui1.on('pointerdown', () => {
                    this.scene.start('Setting');
                });
            });
        });
    }
}