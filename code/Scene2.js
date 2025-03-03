import { pt4Find, pt5Find, pt6Find, setPt4Find, setPt5Find, setPt6Find } from './global.js';
export default class Scene2 extends Phaser.Scene {

    constructor() {
        super({ key: 'Scene2' });
    }

    preload() {
        this.add.image(0, 0, 'scene2').setOrigin(0, 0);

        //ui
        this.add.image(0, 0, 'ui').setOrigin(0, 0);
        const ui1 = this.add.zone(26, 10, 50, 80).setOrigin(0, 0).setInteractive();//返回
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

        //拼图
        if (!pt4Find) {
            const pts4 = this.add.image(0, 0, 'pts4').setOrigin(0, 0);
            const zonex = this.add.zone(922, 473, 76, 78).setOrigin(0, 0).setInteractive();
            // graphics.strokeRect(zonex.x, zonex.y, zonex.input.hitArea.width, zonex.input.hitArea.height);
            zonex.once('pointerdown', () => {
                let shjPt4 = this.add.image(0, 0, 'shj_pt4').setOrigin(0, 0);
                pts4.destroy();
                this.time.delayedCall(500, () => {
                    this.input.once('pointerdown', () => {
                        if (shjPt4) {
                            // console.log('destroy shjPt7');
                            shjPt4.destroy();
                            shjPt4 = null;
                        }
                    });
                });
                setPt4Find(true);
            });
        }

        if (!pt5Find) {
            const pts5 = this.add.image(0, 0, 'pts5').setOrigin(0, 0);
            const zonex = this.add.zone(1490, 429, 130, 153).setOrigin(0, 0).setInteractive();
            // graphics.strokeRect(zonex.x, zonex.y, zonex.input.hitArea.width, zonex.input.hitArea.height);
            zonex.once('pointerdown', () => {
                let shjPt5 = this.add.image(0, 0, 'shj_pt5').setOrigin(0, 0);
                pts5.destroy();
                this.time.delayedCall(500, () => {
                    this.input.once('pointerdown', () => {
                        if (shjPt5) {
                            // console.log('destroy shjPt5');
                            shjPt5.destroy();
                            shjPt5 = null;
                        }
                    });
                });
                setPt5Find(true);
            });
        }

        if (!pt6Find) {
            const pts6 = this.add.image(0, 0, 'pts6').setOrigin(0, 0);
            const zonex = this.add.zone(938, 218, 65, 36).setOrigin(0, 0).setInteractive();
            // graphics.strokeRect(zonex.x, zonex.y, zonex.input.hitArea.width, zonex.input.hitArea.height);
            zonex.once('pointerdown', () => {
                let shjPt6 = this.add.image(0, 0, 'shj_pt6').setOrigin(0, 0);
                pts6.destroy();
                this.time.delayedCall(500, () => {
                    this.input.once('pointerdown', () => {
                        if (shjPt6) {
                            // console.log('destroy shjPt6');
                            shjPt6.destroy();
                            shjPt6 = null;
                        }
                    });
                });
                setPt6Find(true);
            });
        }
    }
}