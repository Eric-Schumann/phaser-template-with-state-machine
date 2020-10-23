import Phaser from 'phaser';
import BootScene from './scenes/BootScene';

const config = {
    type: Phaser.AUTO,
    parent: '#root',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 100
            }
        }
    },
    scene: [BootScene]
};

const game = new Phaser.Game(config);