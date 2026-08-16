// src/utils/gameLogic.js
import { CHOICES } from '../config/constants.js';

export const getRandomChoice = () => {
    const keys = Object.keys(CHOICES);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return CHOICES[randomKey];
};

export const evaluateRound = (playerChoice, cpuChoice) => {
    if (playerChoice.id === cpuChoice.id) return 'EMPATE';

    const winConditions = {
        'ROCK': 'SCISSORS',
        'PAPER': 'ROCK',
        'SCISSORS': 'PAPER'
    };

    if (winConditions[playerChoice.id] === cpuChoice.id) {
        return 'VICTORIA';
    }

    return 'DERROTA';
};