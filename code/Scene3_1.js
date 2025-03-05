import { setTask6 } from "./global.js";
export default class Scene3_1 extends Phaser.Scene {

    constructor() {
        super({ key: 'Scene3_1' });
    }

    preload() {
        this.add.image(0, 0, 'ks').setOrigin(0, 0);

        //ui
        this.add.image(0, 0, 'ui').setOrigin(0, 0);
        const ui1 = this.add.zone(26, 10, 80, 80).setOrigin(0, 0).setInteractive();//返回
        const ui2 = this.add.zone(816, 0, 288, 109).setOrigin(0, 0).setInteractive();//主菜单
        const ui3 = this.add.zone(1815, 10, 80, 80).setOrigin(0, 0).setInteractive();//设置

        ui1.on('pointerdown', () => {
            this.scene.start('Scene3');
        });
        ui2.on('pointerdown', () => {
            this.scene.start('Menu');
        });
        ui3.on('pointerdown', () => {
            this.scene.start('Setting');
        });

        const dhk = this.add.image(100, 770, 'dhk').setOrigin(0, 0);
        const dhktext1 = this.add.text(439, 945, '被阳光晒卷边的《 儿童书籍》静静躺在满是划痕与字迹的木质桌面上。', { fontSize: '32px', fontFamily: 'Arial', color: '#000000' });
        const dhktext2 = this.add.text(652, 991, '翻开132页,用修正液画满五角星的课程表掉落。', { fontSize: '32px', fontFamily: 'Arial', color: '#000000' });
        const dhktext3 = this.add.text(867, 897, '（看一本书）', { fontSize: '32px', fontFamily: 'Arial', color: '#651035' });
        this.time.delayedCall(0, () => {
            this.input.once('pointerdown', () => {
                dhk.destroy();
                dhktext1.destroy();
                dhktext2.destroy();
                dhktext3.destroy();
                const zon1 = this.add.zone(720, 480, 350, 350).setOrigin(0, 0).setInteractive();

                // // Display the zone1 boundary
                // const graphics = this.add.graphics();
                // graphics.lineStyle(2, 0xff0000);
                // graphics.strokeRect(zon1.x, zon1.y, zon1.input.hitArea.width, zon1.input.hitArea.height);

                zon1.on('pointerdown', () => {
                    setTask6(true);
                    this.add.image(0, 0, 'ks1').setOrigin(0, 0);
                    zon1.removeInteractive();
                    this.time.delayedCall(0, () => {
                        this.input.once('pointerdown', () => {
                            this.scene.start('Scene3');
                        });
                    });

                });
            });
        });



    }
}