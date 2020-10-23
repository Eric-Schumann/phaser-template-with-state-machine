import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    create() {
        this.add.text(this.scale.width / 2, this.scale.height / 2, 'BootScene').setOrigin(0.5);
    }
}