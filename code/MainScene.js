let drawerOpen1 = false;
let drawerOpen2 = false;
let drawerOpen3 = false;
let ts_ct = false;
let ts_ct1 = false;
let ts_ct2 = false;
let ts_ct3 = false;
import { sum } from './global.js';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }


    gamestart() {
        const ptjd = this.add.image(1569, 890, 'ptjd').setOrigin(0, 0);
        const ptsum = this.add.text(1610, 983, `拼图收集进度: ${sum}/9`, { fontSize: '32px', fill: '#651035', fontFamily: 'Arial' });



        const drawerZone1 = this.add.zone(260, 110, 450, 200).setOrigin(0, 0).setInteractive();
        const drawerZone2 = this.add.zone(730, 110, 450, 200).setOrigin(0, 0).setInteractive();
        const drawerZone3 = this.add.zone(1190, 110, 450, 200).setOrigin(0, 0).setInteractive();

        // 显示交互区域
        // const graphics = this.add.graphics();
        // graphics.lineStyle(2, 0xff0000);
        // graphics.strokeRect(drawerZone1.x, drawerZone1.y, drawerZone1.input.hitArea.width, drawerZone1.input.hitArea.height);
        // graphics.strokeRect(drawerZone2.x, drawerZone2.y, drawerZone2.input.hitArea.width, drawerZone2.input.hitArea.height);
        // graphics.strokeRect(drawerZone3.x, drawerZone3.y, drawerZone3.input.hitArea.width, drawerZone3.input.hitArea.height);

        // 抽屉状态
        if (drawerOpen1) {
            this.ct1 = this.add.image(0, 0, 'ct1').setOrigin(0, 0);
            this.ct1.setDepth(1);
        }
        if (drawerOpen2) {
            this.ct2 = this.add.image(0, 0, 'ct2').setOrigin(0, 0);
            this.ct2.setDepth(2);
        }
        if (drawerOpen3) {
            this.ct3 = this.add.image(0, 0, 'ct3').setOrigin(0, 0);
            this.ct3.setDepth(1);
        }



        drawerZone1.on('pointerdown', () => {

            if (!drawerOpen1) {
                drawerOpen1 = true;
                this.ct1 = this.add.image(0, 0, 'ct1').setOrigin(0, 0);
                this.ct1.setDepth(1);
                if (ts_ct1 == false) {
                    drawerZone1.disableInteractive();
                    drawerZone2.disableInteractive();
                    drawerZone3.disableInteractive();
                    ptjd.destroy();
                    ptsum.destroy();
                    const dhk = this.add.image(58, 770, 'dhk').setOrigin(0, 0);
                    const dhktext = this.add.text(367, 937, '（卧室）用冰棍棒削成的竹蜻蜓静静夹在作业本内页，抽屉里封存着某个暑假的夕阳。', { fontSize: '32px', fontFamily: 'Arial', color: '#000000' });
                    ts_ct1 = true;
                    this.time.delayedCall(0, () => {
                        this.input.once('pointerdown', () => {
                            // dhk.destroy();
                            // dhktext.destroy();
                            this.cameras.main.fadeOut(300, 0, 0, 0);
                            this.cameras.main.on("camerafadeoutcomplete", () => {
                                this.scene.start('Scene1');
                            });
                        });
                    });
                }
                else {
                    this.cameras.main.fadeOut(300, 0, 0, 0);
                    drawerZone1.disableInteractive();
                    drawerZone2.disableInteractive();
                    drawerZone3.disableInteractive();
                    this.cameras.main.on("camerafadeoutcomplete", () => {
                        this.scene.start('Scene1');
                    });
                }
            }
            else {
                drawerOpen1 = false;
                this.ct1.destroy();
            }
        });

        drawerZone2.on('pointerdown', () => {
            if (!drawerOpen2) {
                drawerOpen2 = true;
                this.ct2 = this.add.image(0, 0, 'ct2').setOrigin(0, 0);
                this.ct2.setDepth(2);
                if (ts_ct2 == false) {
                    drawerZone1.disableInteractive();
                    drawerZone2.disableInteractive();
                    drawerZone3.disableInteractive();
                    ptjd.destroy();
                    ptsum.destroy();
                    const dhk = this.add.image(58, 770, 'dhk').setOrigin(0, 0);
                    const dhktext = this.add.text(259, 937, '（小卖部）玻璃瓶中的彩色汽水折射出琥珀色光斑，拉开抽屉，你闻到辣条混杂无花果丝的潮湿气息。', { fontSize: '32px', fontFamily: 'Arial', color: '#000000' });
                    ts_ct2 = true;
                    this.time.delayedCall(0, () => {
                        this.input.once('pointerdown', () => {
                            this.cameras.main.fadeOut(300, 0, 0, 0);
                            this.cameras.main.on("camerafadeoutcomplete", () => {
                                this.scene.start('Scene2');
                            });
                        });
                    });
                } else {
                    this.cameras.main.fadeOut(300, 0, 0, 0);
                    drawerZone1.disableInteractive();
                    drawerZone2.disableInteractive();
                    drawerZone3.disableInteractive();
                    this.cameras.main.on("camerafadeoutcomplete", () => {
                        this.scene.start('Scene2');
                    });
                }
            } else {
                drawerOpen2 = false;
                this.ct2.destroy();
            }
        });

        drawerZone3.on('pointerdown', () => {
            if (!drawerOpen3) {
                drawerOpen3 = true;
                this.ct3 = this.add.image(0, 0, 'ct3').setOrigin(0, 0);
                this.ct3.setDepth(1);
                if (ts_ct3 == false) {
                    drawerZone1.disableInteractive();
                    drawerZone2.disableInteractive();
                    drawerZone3.disableInteractive();
                    ptjd.destroy();
                    ptsum.destroy();
                    const dhk = this.add.image(58, 770, 'dhk').setOrigin(0, 0);
                    const dhktext = this.add.text(383, 937, '（教室）布满粉笔灰的黑板凹槽里躺着半截白色粉笔，抽屉深处传来落笔的簌簌声。', { fontSize: '32px', fontFamily: 'Arial', color: '#000000' });
                    ts_ct3 = true;
                    this.time.delayedCall(0, () => {
                        this.input.once('pointerdown', () => {
                            this.cameras.main.fadeOut(300, 0, 0, 0);

                            this.cameras.main.on("camerafadeoutcomplete", () => {
                                this.scene.start('Scene3');
                            });
                        });
                    });
                } else {
                    this.cameras.main.fadeOut(300, 0, 0, 0);
                    drawerZone1.disableInteractive();
                    drawerZone2.disableInteractive();
                    drawerZone3.disableInteractive();
                    this.cameras.main.on("camerafadeoutcomplete", () => {
                        this.scene.start('Scene3');
                    });
                }
            } else {
                drawerOpen3 = false;
                this.ct3.destroy();
            }
        });
    }
    create() {
        // this.scene.start('Scene1');




        // 添加背景图像到场景中
        const background = this.add.image(0, 0, 'ct').setOrigin(0, 0);

        //ui
        this.add.image(0, 0, 'ui').setOrigin(0, 0);
        // console.log('add ui');
        const ui1 = this.add.zone(26, 10, 80, 80).setOrigin(0, 0).setInteractive();//返回
        const ui2 = this.add.zone(816, 0, 288, 109).setOrigin(0, 0).setInteractive();//主菜单
        const ui3 = this.add.zone(1815, 10, 80, 80).setOrigin(0, 0).setInteractive();//设置

        ui1.on('pointerdown', () => {
            this.scene.start('Menu');
        });
        ui2.on('pointerdown', () => {
            this.scene.start('Menu');
        });
        ui3.on('pointerdown', () => {
            this.scene.start('Setting');
        });


        if (ts_ct == false) {
            const dhk = this.add.image(58, 770, 'dhk').setOrigin(0, 0);
            const dhktext = this.add.text(437, 937, '每个抽屉对应不同的场景、包含不同的奇遇。打开抽屉，寻找那些沉睡的记忆……', { fontSize: '32px', fontFamily: 'Arial', color: '#000000' });
            ts_ct = true;
            this.input.once('pointerdown', () => {
                dhk.destroy();
                dhktext.destroy();
                this.gamestart();
            });
        }
        else {
            this.gamestart();
        }

    }
}