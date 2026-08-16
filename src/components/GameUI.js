// src/components/GameUI.js
import { createElement } from '../utils/dom.js';
import { CHOICES } from '../config/constants.js';

export const renderHeader = (state) => {
    return createElement('header', { className: 'header' },
        createElement('h1', {}, 'Piedra, Papel o Tijera'),
        createElement('div', { className: 'scoreboard' },
            createElement('div', { className: 'score' }, `Tú: ${state.playerScore}`),
            createElement('div', { className: 'score' }, `CPU: ${state.cpuScore}`)
        )
    );
};

export const renderChoices = (onChoice) => {
    const buttons = Object.values(CHOICES).map(choice => 
        createElement('button', { 
            className: 'choice-btn', 
            onClick: () => onChoice(choice) 
        }, 
            createElement('span', {}, choice.icon),
            createElement('span', {}, choice.name)
        )
    );
    return createElement('div', { className: 'choices-container' }, ...buttons);
};

export const renderResult = (state, onReset) => {
    if (!state.lastResult) return createElement('div', { className: 'result-empty' });

    return createElement('div', { className: 'result-container' },
        createElement('h2', {}, `¡${state.lastResult.status}!`),
        createElement('p', {}, `Tú elegiste ${state.lastResult.player.icon} - CPU eligió ${state.lastResult.cpu.icon}`),
        createElement('button', { className: 'reset-btn', onClick: onReset }, 'Reiniciar Marcador')
    );
};