import { pt7Find, pt8Find, pt9Find } from './global.js';
import { setPt7Find, setPt8Find, setPt9Find } from './global.js'; // 添加 setter 函数的导入
import { sum } from './global.js';
import { setSum } from './global.js';

let finished2 = false;
let finished1 = false;
export default class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene1' });
    }
    checkReturnToMainScene() {
        if (finished1 && finished2) {
            this.scene.start('MainScene');
        }
    }
    preload() {
    }

    create() {
        const { width, height } = this.scale;

        const background = this.add.image(0, 0, 'scene1').setOrigin(0, 0);

        background.displayWidth = width;
        background.displayHeight = height;

        const zone1 = this.add.zone(620, 375, 220, 100).setOrigin(0, 0).setInteractive();
        const zone2 = this.add.zone(1090, 355, 70, 80).setOrigin(0, 0).setInteractive();
        const zone3 = this.add.zone(1550, 220, 170, 160).setOrigin(0, 0).setInteractive();

        // const graphics = this.add.graphics();
        // graphics.lineStyle(2, 0xff0000);
        // graphics.strokeRect(zone1.x, zone1.y, zone1.input.hitArea.width, zone1.input.hitArea.height);
        // graphics.strokeRect(zone2.x, zone2.y, zone2.input.hitArea.width, zone2.input.hitArea.height);
        // graphics.strokeRect(zone3.x, zone3.y, zone3.input.hitArea.width, zone3.input.hitArea.height);


        //ui
        this.add.image(0, 0, 'ui').setOrigin(0, 0);
        // console.log('add ui');
        const ui1 = this.add.zone(26, 10, 80, 80).setOrigin(0, 0).setInteractive();//返回
        const ui2 = this.add.zone(816, 0, 288, 109).setOrigin(0, 0).setInteractive();//主菜单
        const ui3 = this.add.zone(1815, 10, 80, 80).setOrigin(0, 0).setInteractive();//设置

        ui1.on('pointerdown', () => {
            this.scene.start('MainScene');
        });
        ui2.on('pointerdown', () => {
            this.scene.start('Menu');
        });
        ui3.on('pointerdown', () => {
            this.scene.start('Setting');
        });

        let ptjd = this.add.image(1569, 890, 'ptjd').setOrigin(0, 0);
        let ptsum = this.add.text(1610, 983, `拼图收集进度: ${sum}/9`, { fontSize: '32px', fill: '#651035', fontFamily: 'Arial' });

        let dhk;
        let dhktext, dhktext3;

        // console.log('add ui done');
        //睡觉
        let flag1 = 0;
        zone1.on('pointerdown', () => {
            if (!flag1) {
                ptjd.destroy();
                ptsum.destroy();
                dhk = this.add.image(100, 770, 'dhk').setOrigin(0, 0);
                dhktext3 = this.add.text(867, 907, '（单击枕头）', { fontSize: '32px', fontFamily: 'Arial', color: '#651035' });
                dhktext = this.add.text(277, 957, '枕头下压着带锁日记本，封面用黄色荧光笔写着“绝密”。万籁俱寂，结束一天的劳累，你进入了梦乡……', { fontSize: '32px', fontFamily: 'Arial', color: '#000000' });
                this.time.delayedCall(0, () => {
                    this.input.once('pointerdown', () => {
                        // dhk.destroy();
                        // dhktext.destroy();
                        this.cameras.main.fadeOut(2000, 0, 0, 0);
                    });
                });
                flag1 = 1;

            }
        });

        this.cameras.main.on("camerafadeoutcomplete", () => {
            dhk.destroy();
            dhktext.destroy();
            ptjd = this.add.image(1569, 890, 'ptjd').setOrigin(0, 0);
            ptsum = this.add.text(1610, 983, `拼图收集进度: ${sum}/9`, { fontSize: '32px', fill: '#651035', fontFamily: 'Arial' });
            // console.log("淡出完成！");
            this.cameras.main.fadeIn(2000, 0, 0, 0);

        });
        // this.cameras.main.on("camerafadeincomplete", () => {
        //     // console.log("淡入完成！");
        //     finished1 = true;
        //     this.checkReturnToMainScene();
        // });


        //闹钟
        zone2.once('pointerdown', () => {
            // if (!finished2) {
            this.scene.start('Scene1_1');
            //     finished2 = true;
            //     this.checkReturnToMainScene();
            // }
        });

        zone3.once('pointerdown', () => {
            this.scene.start('Scene1_2');
        });

        if (!pt7Find) {
            const pts7 = this.add.image(0, 0, 'pts7').setOrigin(0, 0);
            const zonex = this.add.zone(1160, 425, 50, 20).setOrigin(0, 0).setInteractive();
            // graphics.strokeRect(zonex.x, zonex.y, zonex.input.hitArea.width, zonex.input.hitArea.height);
            zonex.once('pointerdown', () => {
                let wsPt7 = this.add.image(0, 0, 'ws_pt7').setOrigin(0, 0);
                pts7.destroy();
                this.time.delayedCall(500, () => {
                    this.input.once('pointerdown', () => {
                        if (wsPt7) {
                            // console.log('destroy wsPt7');
                            wsPt7.destroy();
                            wsPt7 = null;
                        }
                    });
                });
                setPt7Find(true);
                setSum(sum + 1);
                ptsum.setText(`拼图收集进度: ${sum}/9`);
            });
        }

        if (!pt8Find) {
            const pts8 = this.add.image(0, 0, 'pts8').setOrigin(0, 0);
            const zonex = this.add.zone(1521, 338, 47, 53).setOrigin(0, 0).setInteractive();
            // graphics.strokeRect(zonex.x, zonex.y, zonex.input.hitArea.width, zonex.input.hitArea.height);
            zonex.once('pointerdown', () => {
                let wsPt8 = this.add.image(0, 0, 'ws_pt8').setOrigin(0, 0);
                pts8.destroy();
                this.time.delayedCall(500, () => {
                    this.input.once('pointerdown', () => {
                        if (wsPt8) {
                            // console.log('destroy wsPt8');
                            wsPt8.destroy();
                            wsPt8 = null;
                        }
                    });
                });
                setPt8Find(true);
                setSum(sum + 1);
                ptsum.setText(`拼图收集进度: ${sum}/9`);
            });
        }

        if (!pt9Find) {
            const pts9 = this.add.image(0, 0, 'pts9').setOrigin(0, 0);
            const zonex = this.add.zone(590, 427, 36, 24).setOrigin(0, 0).setInteractive();
            // graphics.strokeRect(zonex.x, zonex.y, zonex.input.hitArea.width, zonex.input.hitArea.height);
            zonex.once('pointerdown', () => {
                let wsPt9 = this.add.image(0, 0, 'ws_pt9').setOrigin(0, 0);
                pts9.destroy();
                this.time.delayedCall(500, () => {
                    this.input.once('pointerdown', () => {
                        if (wsPt9) {
                            // console.log('destroy wsPt9');
                            wsPt9.destroy();
                            wsPt9 = null;
                        }
                    });
                });
                setPt9Find(true);
                setSum(sum + 1);
                ptsum.setText(`拼图收集进度: ${sum}/9`);
            });
        }
    }
    checkReturnToMainScene() {
        if (finished1 && finished2) {
            this.scene.start('MainScene');
        }
    }

}

