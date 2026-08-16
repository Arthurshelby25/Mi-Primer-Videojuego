// src/app.js
import { getState, setState, resetGame, loadState } from './store/gameState.js';
import { getRandomChoice, evaluateRound } from './utils/gameLogic.js';
import { renderHeader, renderChoices, renderResult } from './components/GameUI.js';

const root = document.getElementById('root');

const handleChoice = (playerChoice) => {
    const cpuChoice = getRandomChoice();
    const status = evaluateRound(playerChoice, cpuChoice);
    
    const currentState = getState();
    let { playerScore, cpuScore, round } = currentState;

    if (status === 'VICTORIA') playerScore++;
    if (status === 'DERROTA') cpuScore++;

    setState({
        playerScore,
        cpuScore,
        round: round + 1,
        lastResult: { player: playerChoice, cpu: cpuChoice, status }
    });

    renderApp();
};

const handleReset = () => {
    resetGame();
    renderApp();
};

const renderApp = () => {
    root.innerHTML = ''; 
    const state = getState();

    const appContainer = document.createElement('div');
    
    appContainer.appendChild(renderHeader(state));
    appContainer.appendChild(renderChoices(handleChoice));
    appContainer.appendChild(renderResult(state, handleReset));

    root.appendChild(appContainer);
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderApp();
});