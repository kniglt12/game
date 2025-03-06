export default class Start extends Phaser.Scene {

    constructor() {
        super({ key: 'Start' });
    }
    preload() {
        this.load.image('start', 'images/start1.png');//开始

        this.load.image('menu', 'images/menu.png');//主菜单

        this.load.image('ui', 'images/ui.png');//ui
        this.load.image('ptjd', 'images/ptjd.png');//拼图进度

        this.load.image('dhk', 'images/dhk.png');//对话框

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
        this.load.image('dn', 'images/dn.png');//电脑
        this.load.image('dn1', 'images/dn2.png');

        this.load.image('scene2', 'images/shj.png');//售货架
        this.load.image('shj_pt4', 'images/shj_pt4.png');
        this.load.image('shj_pt5', 'images/shj_pt5.png');
        this.load.image('shj_pt6', 'images/shj_pt6.png');

        this.load.image('scene3', 'images/js.png');//教室
        this.load.image('js_pt1', 'images/js_pt1.png');
        this.load.image('js_pt2', 'images/js_pt2.png');
        this.load.image('js_pt3', 'images/js_pt3.png');

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

        this.load.image('dz', 'images/dz.png');//弹珠
        this.load.image('dz1', 'images/dz2.png');

        this.load.image('wzh', 'images/wzh.png');//文具盒
        this.load.image('wzh1', 'images/wzh2.png');
    }
    create() {
        // this.scene.start('Scene1');

        this.add.image(0, 0, 'start').setOrigin(0, 0);

        this.input.once('pointerdown', function () {
            this.scene.start('Menu');
        }, this);
    }
}