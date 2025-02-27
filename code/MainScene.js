let drawerOpen1 = false;
let drawerOpen2 = false;
let drawerOpen3 = false;
export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
        this.load.image('ct', 'images/ct.png');//主界面抽屉
        this.load.image('ct1', 'images/ct1.png');//左上
        this.load.image('ct2', 'images/ct2.png');//中上
        this.load.image('ct3', 'images/ct3.png');//右上

        this.load.image('scene1', 'images/ws.png');//卧室
        this.load.image('scene1_1', 'images/nz.png');//闹钟
        this.load.image('sz', 'images/nz_sz.png');//时针
        this.load.image('fz', 'images/nz_fz.png');//分针
        this.load.image('mz', 'images/nz_mz.png');//秒针

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
        this.load.image('ks1', 'images/ks1.png');

        this.load.image('lt', 'images/lt.png');//辣条
        this.load.image('lt1', 'images/lt1.png');
    }

    create() {
        this.scene.start('Scene1');



        // 获取游戏画布的宽度和高度
        const { width, height } = this.scale;

        // 添加背景图像到场景中
        const background = this.add.image(0, 0, 'ct').setOrigin(0, 0);

        // 调整背景图像的大小以适应画布
        background.displayWidth = width;
        background.displayHeight = height;

        const drawerZone1 = this.add.zone(260, 110, 450, 200).setOrigin(0, 0).setInteractive();
        const drawerZone2 = this.add.zone(730, 110, 450, 200).setOrigin(0, 0).setInteractive();
        const drawerZone3 = this.add.zone(1190, 110, 450, 200).setOrigin(0, 0).setInteractive();

        // 显示交互区域
        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0xff0000);
        graphics.strokeRect(drawerZone1.x, drawerZone1.y, drawerZone1.input.hitArea.width, drawerZone1.input.hitArea.height);
        graphics.strokeRect(drawerZone2.x, drawerZone2.y, drawerZone2.input.hitArea.width, drawerZone2.input.hitArea.height);
        graphics.strokeRect(drawerZone3.x, drawerZone3.y, drawerZone3.input.hitArea.width, drawerZone3.input.hitArea.height);

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
                this.ct1.displayWidth = width;
                this.ct1.displayHeight = height;
                this.cameras.main.fadeOut(2000, 0, 0, 0);
                drawerZone1.disableInteractive();
                drawerZone2.disableInteractive();
                drawerZone3.disableInteractive();
                this.cameras.main.on("camerafadeoutcomplete", () => {
                    this.scene.start('Scene1');
                });
            }
        });

        drawerZone2.on('pointerdown', () => {
            if (!drawerOpen2) {
                drawerOpen2 = true;
                this.ct2 = this.add.image(0, 0, 'ct2').setOrigin(0, 0);
                this.ct2.setDepth(2);
                this.ct2.displayWidth = width;
                this.ct2.displayHeight = height;
                this.cameras.main.fadeOut(2000, 0, 0, 0);
                drawerZone1.disableInteractive();
                drawerZone2.disableInteractive();
                drawerZone3.disableInteractive();
                this.cameras.main.on("camerafadeoutcomplete", () => {
                    this.scene.start('Scene2');
                });
            }
        });

        drawerZone3.on('pointerdown', () => {
            if (!drawerOpen3) {
                drawerOpen3 = true;
                this.ct3 = this.add.image(0, 0, 'ct3').setOrigin(0, 0);
                this.ct3.setDepth(1);
                this.ct3.displayWidth = width;
                this.ct3.displayHeight = height;
                this.cameras.main.fadeOut(2000, 0, 0, 0);
                drawerZone1.disableInteractive();
                drawerZone2.disableInteractive();
                drawerZone3.disableInteractive();
                this.cameras.main.on("camerafadeoutcomplete", () => {
                    this.scene.start('Scene3');
                });
            }
        });
    }
}