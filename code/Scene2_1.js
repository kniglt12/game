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

        const zon1 = this.add.zone(620, 216, 593, 688).setOrigin(0, 0).setInteractive();

        // 创建进度条
        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(620, 900, 600, 50);

        let progress = 0;
        let progressEvent;

        zon1.on('pointerdown', () => {
            progressEvent = this.time.addEvent({
                delay: 50,
                callback: () => {
                    progress += 0.03;
                    progressBar.clear();
                    progressBar.fillStyle(0x651035, 1);
                    progressBar.fillRect(625, 905, 590 * progress, 40);

                    if (progress >= 1) {
                        progressBar.clear();
                        this.add.image(0, 0, 'lt1').setOrigin(0, 0);
                        progressEvent.remove();
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
    }
}