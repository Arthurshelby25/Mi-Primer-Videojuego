// src/store/gameState.js
import { SCREENS, STORAGE_KEY } from '../config/constants.js';

let state = {
    screen: SCREENS.GAME,
    playerScore: 0,
    cpuScore: 0,
    round: 0,
    lastResult: null
};

export const getState = () => ({ ...state });

export const setState = (newState) => {
    state = { ...state, ...newState };
    saveState();
};

export const resetGame = () => {
    state = {
        ...state,
        playerScore: 0,
        cpuScore: 0,
        round: 0,
        lastResult: null
    };
    saveState();
};

const saveState = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const loadState = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            state = { ...state, ...JSON.parse(saved) };
        } catch (e) {
            console.error('Error al cargar el estado', e);
        }
    }
};