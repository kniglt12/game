export default class Pt extends Phaser.Scene {

    constructor() {
        super({ key: 'Pt' });
        this.currentDepth = 1;
    }

    preload() {

    }
    create() {
        this.add.image(0, 0, 'pt').setOrigin(0, 0);

        const getRandomPosition = () => ({
            x: Phaser.Math.Between(0, this.scale.width - 100),
            y: Phaser.Math.Between(0, this.scale.height - 100)
        });

        this.pt1 = this.add.sprite(getRandomPosition().x, getRandomPosition().y, 'pt1').setOrigin(0, 0).setInteractive();
        this.pt2 = this.add.sprite(getRandomPosition().x, getRandomPosition().y, 'pt2').setOrigin(0, 0).setInteractive();
        this.pt3 = this.add.sprite(getRandomPosition().x, getRandomPosition().y, 'pt3').setOrigin(0, 0).setInteractive();
        this.pt4 = this.add.sprite(getRandomPosition().x, getRandomPosition().y, 'pt4').setOrigin(0, 0).setInteractive();
        this.pt5 = this.add.sprite(getRandomPosition().x, getRandomPosition().y, 'pt5').setOrigin(0, 0).setInteractive();
        this.pt6 = this.add.sprite(getRandomPosition().x, getRandomPosition().y, 'pt6').setOrigin(0, 0).setInteractive();
        this.pt7 = this.add.sprite(getRandomPosition().x, getRandomPosition().y, 'pt7').setOrigin(0, 0).setInteractive();
        this.pt8 = this.add.sprite(getRandomPosition().x, getRandomPosition().y, 'pt8').setOrigin(0, 0).setInteractive();
        this.pt9 = this.add.sprite(getRandomPosition().x, getRandomPosition().y, 'pt9').setOrigin(0, 0).setInteractive();

        this.pt1.setDepth(2);
        this.pt2.setDepth(2);
        this.pt3.setDepth(2);
        this.pt4.setDepth(2);
        this.pt5.setDepth(2);
        this.pt6.setDepth(2);
        this.pt7.setDepth(2);
        this.pt8.setDepth(2);
        this.pt9.setDepth(2);

        this.input.setDraggable(this.pt1);
        this.input.setDraggable(this.pt2);
        this.input.setDraggable(this.pt3);
        this.input.setDraggable(this.pt4);
        this.input.setDraggable(this.pt5);
        this.input.setDraggable(this.pt6);
        this.input.setDraggable(this.pt7);
        this.input.setDraggable(this.pt8);
        this.input.setDraggable(this.pt9);

        let correctPositions = {
            pt1: { x: 294.03651115618675, y: 105.76064908722105 },
            pt2: { x: 613.3874239350912, y: 99.91886409736307 },
            pt3: { x: 1158.6206896551723, y: 96.02434077079101 },
            pt4: { x: 303.77281947261656, y: 409.5334685598378 },
            pt5: { x: 724.3813387423935, y: 318.01217038539545 },
            pt6: { x: 1028.15415821501, y: 407.58620689655163 },
            pt7: { x: 314.6146044624747, y: 612.0486815415821 },
            pt8: { x: 617.2819472616633, y: 703.5699797160244 },
            pt9: { x: 1150.8316430020282, y: 617.8904665314401 }
        };

        let snapRange = 50; // 磁吸范围

        this.input.on('dragstart', (pointer, gameObject) => {
            this.currentDepth += 1;
            gameObject.setDepth(this.currentDepth); // 将拖拽的精灵设置为最高深度
        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('dragend', (pointer, gameObject) => {
            let correctPosition = correctPositions[gameObject.texture.key];
            if (Phaser.Math.Distance.Between(gameObject.x, gameObject.y, correctPosition.x, correctPosition.y) < snapRange) {
                gameObject.x = correctPosition.x;
                gameObject.y = correctPosition.y;
                gameObject.setDepth(1);
                gameObject.disableInteractive(); // 禁用拖拽
            }
        });

        // this.input.keyboard.on('keydown-F', () => {
        //     console.log(`let pt1_x=${this.pt1.x}, pt1_y=${this.pt1.y};`);
        //     console.log(`let pt2_x=${this.pt2.x}, pt2_y=${this.pt2.y};`);
        //     console.log(`let pt3_x=${this.pt3.x}, pt3_y=${this.pt3.y};`);
        //     console.log(`let pt4_x=${this.pt4.x}, pt4_y=${this.pt4.y};`);
        //     console.log(`let pt5_x=${this.pt5.x}, pt5_y=${this.pt5.y};`);
        //     console.log(`let pt6_x=${this.pt6.x}, pt6_y=${this.pt6.y};`);
        //     console.log(`let pt7_x=${this.pt7.x}, pt7_y=${this.pt7.y};`);
        //     console.log(`let pt8_x=${this.pt8.x}, pt8_y=${this.pt8.y};`);
        //     console.log(`let pt9_x=${this.pt9.x}, pt9_y=${this.pt9.y};`);
        // });
    }
}