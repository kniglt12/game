export default class Scene1_1 extends Phaser.Scene {

    constructor() {
        super({ key: 'Scene1_1' });
    }

    preload() {
    }

    create() {
        const { width, height } = this.scale;

        const background = this.add.image(0, 0, 'scene1_1').setOrigin(0, 0);

        background.displayWidth = width;
        background.displayHeight = height;

        let shizhen, fenzhen, miaozhen;
        let currentTime_s = 0;
        let currentTime_f = 0;
        let currentTime_m = 0;



        miaozhen = this.add.sprite(963, 555, 'mz');
        fenzhen = this.add.sprite(965, 555, 'fz');
        shizhen = this.add.sprite(965, 555, 'sz');

        shizhen.setOrigin(0.5, 0.98);
        fenzhen.setOrigin(0.5, 0.98);
        miaozhen.setOrigin(0.5, 0.98);

        // 启用交互
        shizhen.setInteractive();
        fenzhen.setInteractive();
        miaozhen.setInteractive();

        // 初始化角度
        shizhen.rotation = Phaser.Math.DegToRad(0);
        fenzhen.rotation = Phaser.Math.DegToRad(0);
        miaozhen.rotation = Phaser.Math.DegToRad(0);

        // 输入处理
        this.input.on('dragstart', (pointer, gameObject) => {
            this.lastAngle = gameObject.rotation;
            // console.log(this.lastAngle);
        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            // 计算鼠标相对于指针中心的角度
            const angle = Phaser.Math.Angle.Between(
                gameObject.x,
                gameObject.y,
                pointer.x,
                pointer.y
            );
            let snappedAngle;
            if (gameObject === shizhen) {
                snappedAngle = Math.round((Phaser.Math.RadToDeg(angle) + 90) / 30) * 30;
            } else {
                snappedAngle = Math.round((Phaser.Math.RadToDeg(angle) + 90) / 6) * 6;
            }
            //snappedAngle = Math.round((Phaser.Math.RadToDeg(angle) + 90) / 30) * 30;

            let delta = snappedAngle - Phaser.Math.RadToDeg(this.lastAngle);
            if (delta > 180) {
                delta -= 360;
            } else if (delta < -180) {
                delta += 360;
            }
            // console.log(delta);

            if (gameObject === shizhen) {
                currentTime_s += Math.round(delta / 30);

                // console.log(currentTime_s);
            }
            else if (gameObject === fenzhen) {
                currentTime_f += Math.round(delta / 6);
                if (currentTime_f >= 60) {
                    currentTime_s += 1;
                    currentTime_f %= 60;
                }
                else if (currentTime_f < 0) {
                    currentTime_s -= 1
                    currentTime_f = 60 + currentTime_f % 60;
                }
                // console.log(currentTime_f);
            }
            else if (gameObject === miaozhen) {
                currentTime_m += Math.round(delta / 6);
                if (currentTime_m >= 60) {
                    currentTime_f += 1;
                    currentTime_m %= 60;
                    if (currentTime_f >= 60) {
                        currentTime_s += 1
                        currentTime_f %= 60;
                    }
                }
                else if (currentTime_m < 0) {
                    currentTime_f -= 1;
                    currentTime_m = 60 + currentTime_m % 60;
                    if (currentTime_f < 0) {
                        currentTime_s -= 1;
                        currentTime_f = 60 + currentTime_f % 60;
                    }
                }
                // console.log(currentTime_m);
            }
            currentTime_s = (currentTime_s + 12) % 12;
            this.lastAngle = Phaser.Math.DegToRad(snappedAngle);
            shizhen.rotation = Phaser.Math.DegToRad(
                (currentTime_s % 12) * 30 +
                currentTime_f * 0.5 +
                currentTime_m * (0.5 / 60)
            );
            // 分针角度：分钟*6 + 秒*0.1
            fenzhen.rotation = Phaser.Math.DegToRad(
                currentTime_f * 6 +
                currentTime_m * 0.1
            );
            // 秒针角度：秒*6
            miaozhen.rotation = Phaser.Math.DegToRad(currentTime_m * 6);
            console.log(currentTime_s, currentTime_f, currentTime_m);
            if (currentTime_s === 7 && currentTime_f === 30 && currentTime_m === 0) {
                this.input.off('dragstart');
                this.input.off('drag');
                this.cameras.main.fadeOut(1000, 0, 0, 0);
                this.cameras.main.on('camerafadeoutcomplete', () => {
                    this.scene.start('Scene1');
                });
                // this.scene.start('Scene1');
            }
        });

        // 启用拖拽
        this.input.setDraggable(shizhen);
        this.input.setDraggable(fenzhen);
        this.input.setDraggable(miaozhen);
    }
}