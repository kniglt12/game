
export default class Scene1_2 extends Phaser.Scene {

    constructor() {
        super({ key: 'Scene1_2' });
    }

    preload() {
        this.add.image(0, 0, 'dn').setOrigin(0, 0);

        //ui
        this.add.image(0, 0, 'ui').setOrigin(0, 0);
        const ui1 = this.add.zone(26, 10, 80, 80).setOrigin(0, 0).setInteractive();//返回
        const ui2 = this.add.zone(816, 0, 288, 109).setOrigin(0, 0).setInteractive();//主菜单
        const ui3 = this.add.zone(1815, 10, 80, 80).setOrigin(0, 0).setInteractive();//设置

        ui1.on('pointerdown', () => {
            this.scene.start('Scene1');
        });
        ui2.on('pointerdown', () => {
            this.scene.start('Menu');
        });
        ui3.on('pointerdown', () => {
            this.scene.start('Setting');
        });

        const dhk = this.add.image(100, 770, 'dhk').setOrigin(0, 0);
        const dhktext1 = this.add.text(543, 945, '屏幕亮起，熟悉的4399游戏加载界面闪过，却突然跳出一行文字', { fontSize: '32px', fontFamily: 'Arial', color: '#000000' });
        const dhktext2 = this.add.text(611, 991, '‘警告！梦境侵蚀率15%——找到碎片，否则永远迷失！’', { fontSize: '32px', fontFamily: 'Arial', color: '#000000' });
        const dhktext3 = this.add.text(867, 897, '（打开电脑）', { fontSize: '32px', fontFamily: 'Arial', color: '#651035' });
        this.time.delayedCall(0, () => {
            this.input.once('pointerdown', () => {
                dhk.destroy();
                dhktext1.destroy();
                dhktext2.destroy();
                dhktext3.destroy();
                const zon1 = this.add.zone(670, 100, 700, 500).setOrigin(0, 0).setInteractive();

                // // Display the zone1 boundary
                // const graphics = this.add.graphics();
                // graphics.lineStyle(2, 0xff0000);
                // graphics.strokeRect(zon1.x, zon1.y, zon1.input.hitArea.width, zon1.input.hitArea.height);

                zon1.on('pointerdown', () => {
                    this.add.image(0, 0, 'dn1').setOrigin(0, 0);
                    zon1.removeInteractive();
                    this.time.delayedCall(0, () => {
                        this.input.once('pointerdown', () => {
                            this.scene.start('Scene1');
                        });
                    });

                });
            });
        });


    }
}