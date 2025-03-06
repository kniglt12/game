import { setTask5 } from "./global.js";
export default class Scene2_2 extends Phaser.Scene {

    constructor() {
        super({ key: 'Scene2_2' });
    }

    preload() {
        this.add.image(0, 0, 'dz').setOrigin(0, 0);

        //ui
        this.add.image(0, 0, 'ui').setOrigin(0, 0);
        const ui1 = this.add.zone(26, 10, 80, 80).setOrigin(0, 0).setInteractive();//返回
        const ui2 = this.add.zone(816, 0, 288, 109).setOrigin(0, 0).setInteractive();//主菜单
        const ui3 = this.add.zone(1815, 10, 80, 80).setOrigin(0, 0).setInteractive();//设置

        ui1.on('pointerdown', () => {
            this.scene.start('Scene2');
        });
        ui2.on('pointerdown', () => {
            this.scene.start('Menu');
        });
        ui3.on('pointerdown', () => {
            this.scene.start('Setting');
        });

        const dhk = this.add.image(58, 770, 'dhk').setOrigin(0, 0);
        const dhktext1 = this.add.text(390, 945, '琉璃质感的彩色弹珠在夕阳下仍熠熠生辉，在与伙伴玩耍的午后，袅袅炊烟缓缓升起，', { fontSize: '32px', fontFamily: 'Arial', color: '#000000' });
        const dhktext2 = this.add.text(791, 991, '你知道，该是回家的时候了。', { fontSize: '32px', fontFamily: 'Arial', color: '#000000' });
        const dhktext3 = this.add.text(885, 897, '（买弹珠）', { fontSize: '32px', fontFamily: 'Arial', color: '#651035' });
        this.time.delayedCall(0, () => {
            this.input.once('pointerdown', () => {
                dhk.destroy();
                dhktext1.destroy();
                dhktext2.destroy();
                dhktext3.destroy();
                const zon1 = this.add.zone(782, 447, 404, 348).setOrigin(0, 0).setInteractive();

                // // Display the zone1 boundary
                // const graphics = this.add.graphics();
                // graphics.lineStyle(2, 0xff0000);
                // graphics.strokeRect(zon1.x, zon1.y, zon1.input.hitArea.width, zon1.input.hitArea.height);

                zon1.on('pointerdown', () => {
                    setTask5(true);
                    this.add.image(0, 0, 'dz1').setOrigin(0, 0);
                    zon1.removeInteractive();
                    this.time.delayedCall(0, () => {
                        this.input.once('pointerdown', () => {
                            this.scene.start('Scene2');
                        });
                    });

                });
            });
        });



    }
}