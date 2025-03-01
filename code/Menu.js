export default class Menu extends Phaser.Scene {

    constructor() {
        super({ key: 'Menu' });
    }
    preload() {
        this.load.image('menu', 'images/menu.png');//主菜单

        this.load.image('ui', 'images/ui.png');//ui

        this.load.image('setting', 'images/setting.png');//设置

        this.load.image('ct', 'images/ct.png');//主界面抽屉
        this.load.image('ct1', 'images/ct1.png');//左上
        this.load.image('ct2', 'images/ct2.png');//中上
        this.load.image('ct3', 'images/ct3.png');//右上

        this.load.image('scene1', 'images/ws.png');//卧室
        this.load.image('scene1_1', 'images/nz.png');//闹钟
        this.load.image('sz', 'images/nz_sz.png');//时针
        this.load.image('fz', 'images/nz_fz.png');//分针
        this.load.image('mz', 'images/nz_mz.png');//秒针
        this.load.image('ws_pt7', 'images/ws_pt7.png');
        this.load.image('ws_pt8', 'images/ws_pt8.png');
        this.load.image('ws_pt9', 'images/ws_pt9.png');

        this.load.image('scene2', 'images/shj.png');//售货架

        this.load.image('scene3', 'images/js.png');//教室

        this.load.image('pt', 'images/pt.png');//拼图
        this.load.image('pt1', 'images/pt1.png');
        this.load.image('pt2', 'images/pt2.png');
        this.load.image('pt3', 'images/pt3.png');
        this.load.image('pt4', 'images/pt4.png');
        this.load.image('pt5', 'images/pt5.png');
        this.load.image('pt6', 'images/pt6.png');
        this.load.image('pt7', 'images/pt7.png');
        this.load.image('pt8', 'images/pt8.png');
        this.load.image('pt9', 'images/pt9.png');

        this.load.image('pts1', 'images/pts1.png');//拼图碎片
        this.load.image('pts2', 'images/pts2.png');
        this.load.image('pts3', 'images/pts3.png');
        this.load.image('pts4', 'images/pts4.png');
        this.load.image('pts5', 'images/pts5.png');
        this.load.image('pts6', 'images/pts6.png');
        this.load.image('pts7', 'images/pts7.png');
        this.load.image('pts8', 'images/pts8.png');
        this.load.image('pts9', 'images/pts9.png');

        this.load.image('ks', 'images/ks.png');//看书
        this.load.image('ks1', 'images/ks2.png');

        this.load.image('lt', 'images/lt.png');//辣条
        this.load.image('lt1', 'images/lt2.png');
    }
    create() {
        this.add.image(0, 0, 'menu').setOrigin(0, 0);

        let zon1 = this.add.zone(126, 343, 491, 109).setOrigin(0, 0).setInteractive();
        let zon2 = this.add.zone(142, 480, 393, 109).setOrigin(0, 0).setInteractive();
        let zon3 = this.add.zone(1629, 819, 256, 203).setOrigin(0, 0).setInteractive();

        // this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(zon1);
        // this.add.graphics().lineStyle(2, 0x00ff00).strokeRectShape(zon2);
        // this.add.graphics().lineStyle(2, 0x0000ff).strokeRectShape(zon3);
        zon1.on('pointerdown', () => {
            this.scene.start('MainScene');
        });
        zon2.on('pointerdown', () => {
            this.scene.start('Setting');
        });
        zon3.on('pointerdown', () => {
            this.scene.start('Pt');
        });
    }
}