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

    // Creamos el panel de enfrentamiento (Tú vs CPU)
    const battleDisplay = createElement('div', { className: 'battle-display' },
        // Tu elección
        createElement('div', { className: 'choice-panel' },
            createElement('span', { className: 'panel-label' }, 'Tu Elección:'),
            createElement('div', { className: 'panel-box' }, `${state.lastResult.player.icon} ${state.lastResult.player.name}`)
        ),
        // VS
        createElement('div', { className: 'vs-text' }, 'Vs.'),
        // Elección CPU
        createElement('div', { className: 'choice-panel' },
            createElement('span', { className: 'panel-label' }, 'CPU Elección:'),
            createElement('div', { className: 'panel-box' }, `${state.lastResult.cpu.icon} ${state.lastResult.cpu.name}`)
        )
    );

    // Retornamos el contenedor completo con el resultado y el botón
    return createElement('div', { className: 'result-container' },
        battleDisplay,
        createElement('h2', { className: `status-${state.lastResult.status.toLowerCase()}` }, `¡${state.lastResult.status}!`),
        createElement('button', { className: 'reset-btn', onClick: onReset }, 'Reiniciar Marcador')
    );
};