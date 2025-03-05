import { pt1Find, pt2Find, pt3Find } from './global.js';
import { setPt1Find, setPt2Find, setPt3Find } from './global.js';
import { sum } from './global.js';
import { setSum } from './global.js';
import { task6, task7 } from './global.js';

export default class Scene3 extends Phaser.Scene {

    constructor() {
        super({ key: 'Scene3' });
    }

    preload() {
        this.add.image(0, 0, 'scene3').setOrigin(0, 0);

        //ui
        this.add.image(0, 0, 'ui').setOrigin(0, 0);
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

        this.add.image(1569, 890, 'ptjd').setOrigin(0, 0);
        const ptsum = this.add.text(1610, 983, `拼图收集进度: ${sum}/9`, { fontSize: '32px', fill: '#651035', fontFamily: 'Arial' });


        if (!pt1Find) {
            const pts1 = this.add.image(0, 0, 'pts1').setOrigin(0, 0);
            const zonex = this.add.zone(634, 823, 41, 46).setOrigin(0, 0).setInteractive();
            // graphics.strokeRect(zonex.x, zonex.y, zonex.input.hitArea.width, zonex.input.hitArea.height);
            zonex.once('pointerdown', () => {
                let jsPt1 = this.add.image(0, 0, 'js_pt1').setOrigin(0, 0);
                pts1.destroy();
                this.time.delayedCall(500, () => {
                    this.input.once('pointerdown', () => {
                        if (jsPt1) {
                            // console.log('destroy jsPt1');
                            jsPt1.destroy();
                            jsPt1 = null;
                        }
                    });
                });
                setPt1Find(true);
                setSum(sum + 1);
                ptsum.setText(`拼图收集进度: ${sum}/9`);
            });
        }

        if (!pt2Find) {
            const pts2 = this.add.image(0, 0, 'pts2').setOrigin(0, 0);
            const zonex = this.add.zone(711, 402, 52, 29).setOrigin(0, 0).setInteractive();
            // graphics.strokeRect(zonex.x, zonex.y, zonex.input.hitArea.width, zonex.input.hitArea.height);
            zonex.once('pointerdown', () => {
                let jsPt2 = this.add.image(0, 0, 'js_pt2').setOrigin(0, 0);
                pts2.destroy();
                this.time.delayedCall(500, () => {
                    this.input.once('pointerdown', () => {
                        if (jsPt2) {
                            // console.log('destroy jsPt2');
                            jsPt2.destroy();
                            jsPt2 = null;
                        }
                    });
                });
                setPt2Find(true);
                setSum(sum + 1);
                ptsum.setText(`拼图收集进度: ${sum}/9`);
            });
        }

        if (!pt3Find) {
            const pts3 = this.add.image(0, 0, 'pts3').setOrigin(0, 0);
            const zonex = this.add.zone(1254, 293, 26, 36).setOrigin(0, 0).setInteractive();
            // graphics.strokeRect(zonex.x, zonex.y, zonex.input.hitArea.width, zonex.input.hitArea.height);
            zonex.once('pointerdown', () => {
                let jsPt3 = this.add.image(0, 0, 'js_pt3').setOrigin(0, 0);
                pts3.destroy();
                this.time.delayedCall(500, () => {
                    this.input.once('pointerdown', () => {
                        if (jsPt3) {
                            // console.log('destroy jsPt3');
                            jsPt3.destroy();
                            jsPt3 = null;
                        }
                    });
                });
                setPt3Find(true);
                setSum(sum + 1);
                ptsum.setText(`拼图收集进度: ${sum}/9`);
            });
        }
        if (!task6) {
            const zone1 = this.add.zone(0, 627, 222, 121).setOrigin(0, 0).setInteractive();
            zone1.on('pointerdown', () => {
                this.scene.start('Scene3_1');
            });
        }
    }
}