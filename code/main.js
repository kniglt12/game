import MainScene from './MainScene.js';
import Scene1 from './Scene1.js';
import Scene2 from './Scene2.js';
import Scene3 from './Scene3.js';
import Scene1_1 from './Scene1_1.js';
import Scene1_2 from './Scene1_2.js';
import Pt from './Pt.js';
import Menu from './Menu.js';
import Setting from './Setting.js';
import Scene2_1 from './Scene2_1.js';
import Scene3_1 from './Scene3_1.js';


const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1920,
    height: 1080,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [Menu, MainScene, Scene1, Scene1_1, Scene1_2, Scene2, Scene2_1, Scene3, Scene3_1, Pt, Setting],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false
        },
    }
};

const game = new Phaser.Game(config);
