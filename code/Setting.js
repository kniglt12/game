export default class Menu extends Phaser.Scene {

    constructor() {
        super({ key: 'Setting' });
    }

    preload() {
        this.add.image(0, 0, 'setting').setOrigin(0, 0);
    }
}