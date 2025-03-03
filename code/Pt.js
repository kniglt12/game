import { pt1Find, pt2Find, pt3Find, pt4Find, pt5Find, pt6Find, pt7Find, pt8Find, pt9Find } from './global.js';
import { setPt1Find, setPt2Find, setPt3Find, setPt4Find, setPt5Find, setPt6Find, setPt7Find, setPt8Find, setPt9Find } from './global.js'; // 添加 setter 函数的导入

export default class Pt extends Phaser.Scene {

    constructor() {
        super({ key: 'Pt' });
        this.currentDepth = 1;
    }

    preload() {

    }

    create() {
        this.add.image(0, 0, 'pt').setOrigin(0, 0);

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

        const getRandomPosition = () => ({
            x: Phaser.Math.Between(0, this.scale.width - 100),
            y: Phaser.Math.Between(0, this.scale.height - 100)
        });

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

        const createPt = (key, find, setFind) => {
            // console.log('createPt', key, find);
            if (find !== 0) {
                const position = find === 2 ? correctPositions[key] : getRandomPosition();
                const pt = this.add.sprite(position.x, position.y, key).setOrigin(0, 0).setInteractive();
                pt.setDepth(find === 2 ? 1 : 2);
                if (find === 2) {
                    console.log('disableInteractive', key);
                    pt.disableInteractive();
                } else {
                    this.input.setDraggable(pt);
                    pt.setInteractive({ draggable: true });
                    console.log('setInteractive', key);
                    pt.on('dragstart', () => {
                        this.currentDepth += 1;
                        pt.setDepth(this.currentDepth);
                    });

                    pt.on('drag', (pointer, dragX, dragY) => {
                        pt.x = dragX;
                        pt.y = dragY;
                    });

                    pt.on('dragend', () => {
                        const correctPosition = correctPositions[key];
                        if (Phaser.Math.Distance.Between(pt.x, pt.y, correctPosition.x, correctPosition.y) < snapRange) {
                            pt.x = correctPosition.x;
                            pt.y = correctPosition.y;
                            pt.setDepth(1);
                            pt.disableInteractive();
                            setFind(2); // 正确调用对应的setter
                            console.log(`${key} 已归位`);
                        }
                    });
                }
            }
        };

        createPt('pt1', pt1Find, setPt1Find);
        createPt('pt2', pt2Find, setPt2Find);
        createPt('pt3', pt3Find, setPt3Find);
        createPt('pt4', pt4Find, setPt4Find);
        createPt('pt5', pt5Find, setPt5Find);
        createPt('pt6', pt6Find, setPt6Find);
        createPt('pt7', pt7Find, setPt7Find);
        createPt('pt8', pt8Find, setPt8Find);
        createPt('pt9', pt9Find, setPt9Find);
    }
}