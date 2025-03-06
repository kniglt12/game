import { setTask4 } from "./global.js";
export default class Scene2_1 extends Phaser.Scene {

    constructor() {
        super({ key: 'Scene2_1' });
    }

    preload() {
        this.add.image(0, 0, 'lt').setOrigin(0, 0);

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
        const dhktext1 = this.add.text(299, 945, '你攥着零花钱，挑了心仪的辣条。撕开包装，“嘶啦” 一声，浓郁辣香扑鼻，红油顺着袋边滴下。', { fontSize: '32px', fontFamily: 'Arial', color: '#000000' });
        const dhktext2 = this.add.text(621, 991, '辣麻辣鲜香瞬间在味蕾上绽放，点燃了童年的快乐。', { fontSize: '32px', fontFamily: 'Arial', color: '#000000' });
        const dhktext3 = this.add.text(885, 897, '（买辣条）', { fontSize: '32px', fontFamily: 'Arial', color: '#651035' });
        this.time.delayedCall(0, () => {
            this.input.once('pointerdown', () => {
                dhk.destroy();
                dhktext1.destroy();
                dhktext2.destroy();
                dhktext3.destroy();
                const zon1 = this.add.zone(620, 216, 593, 688).setOrigin(0, 0).setInteractive();

                // 创建进度条
                const progressBar = this.add.graphics();

                let progress = 0;
                let progressEvent;

                zon1.on('pointerdown', () => {
                    progressEvent = this.time.addEvent({
                        delay: 50,
                        callback: () => {
                            progress += 0.03;
                            progressBar.clear();
                            progressBar.fillStyle(0x651035, 1);
                            progressBar.fillRect(615, 960, 690 * progress, 58);

                            if (progress >= 1) {
                                setTask4(true);
                                progressBar.fillRect(615, 960, 690, 58);
                                progressEvent.remove();
                                zon1.removeInteractive();
                                this.time.delayedCall(200, () => {

                                    this.add.image(0, 0, 'lt1').setOrigin(0, 0);
                                    this.input.once('pointerdown', () => {
                                        this.scene.start('Scene2');
                                    });
                                });
                            }
                        },
                        loop: true
                    });
                });

                zon1.on('pointerup', () => {
                    if (progressEvent) {
                        progressEvent.remove();
                        progressBar.clear();
                        progress = 0;
                    }
                });

                zon1.on('pointerout', () => {
                    if (progressEvent) {
                        progressEvent.remove();
                        progressBar.clear();
                        progress = 0;
                    }
                });
            });
        });

    }
}