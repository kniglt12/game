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

        const zone1 = this.add.zone(615, 375, 220, 100).setOrigin(0, 0).setInteractive();
        const zone2 = this.add.zone(1090, 355, 70, 80).setOrigin(0, 0).setInteractive();
        const zone3 = this.add.zone(1550, 220, 170, 160).setOrigin(0, 0).setInteractive();

        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0xff0000);
        graphics.strokeRect(zone1.x, zone1.y, zone1.input.hitArea.width, zone1.input.hitArea.height);
        graphics.strokeRect(zone2.x, zone2.y, zone2.input.hitArea.width, zone2.input.hitArea.height);
        graphics.strokeRect(zone3.x, zone3.y, zone3.input.hitArea.width, zone3.input.hitArea.height);



        //睡觉
        let flag1 = 0;
        zone1.on('pointerdown', () => {
            if (!flag1) {
                flag1 = 1;
                this.cameras.main.fadeOut(3000, 0, 0, 0);
            }
        });

        this.cameras.main.on("camerafadeoutcomplete", () => {
            // console.log("淡出完成！");
            this.cameras.main.fadeIn(3000, 0, 0, 0);
        });
        this.cameras.main.on("camerafadeincomplete", () => {
            // console.log("淡入完成！");
            finished1 = true;
            this.checkReturnToMainScene();
        });


        //闹钟
        zone2.once('pointerdown', () => {
            if (!finished2) {
                this.scene.start('Scene1_1');
                finished2 = true;
                this.checkReturnToMainScene();
            }
        });
    }
    checkReturnToMainScene() {
        if (finished1 && finished2) {
            this.scene.start('MainScene');
        }
    }

}

