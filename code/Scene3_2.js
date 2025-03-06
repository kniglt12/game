import { setTask7 } from "./global.js";
export default class Scene3_2 extends Phaser.Scene {

    constructor() {
        super({ key: 'Scene3_2' });
    }

    preload() {
        this.add.image(0, 0, 'wzh').setOrigin(0, 0);

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

        const dhk = this.add.image(58, 770, 'dhk').setOrigin(0, 0);
        const dhktext = this.add.text(252, 957, '生锈的铁皮文具盒里，原本方正的橡皮已被削成圆锥形，揉皱的纸团是你为课间捉来的西瓜虫搭建的小窝。', { fontSize: '32px', fontFamily: 'Arial', color: '#000000' });
        const dhktext3 = this.add.text(857, 907, '（打开文具盒）', { fontSize: '32px', fontFamily: 'Arial', color: '#651035' });
        this.time.delayedCall(0, () => {
            this.time.delayedCall(0, () => {
                this.input.once('pointerdown', () => {
                    dhk.destroy();
                    dhktext.destroy();
                    dhktext3.destroy();
                    const zon1 = this.add.zone(720, 550, 350, 230).setOrigin(0, 0).setInteractive();

                    // // Display the zone1 boundary
                    // const graphics = this.add.graphics();
                    // graphics.lineStyle(2, 0xff0000);
                    // graphics.strokeRect(zon1.x, zon1.y, zon1.input.hitArea.width, zon1.input.hitArea.height);

                    zon1.on('pointerdown', () => {
                        setTask7(true);
                        this.add.image(0, 0, 'wzh1').setOrigin(0, 0);
                        zon1.removeInteractive();
                        this.time.delayedCall(0, () => {
                            this.input.once('pointerdown', () => {
                                this.scene.start('Scene3');
                            });
                        });

                    });
                });
            });



        });
    }
}