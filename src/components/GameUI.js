// src/components/GameUI.js

// ... (mantén renderHeader y renderChoices igual)

export const renderResult = (state, onReset) => {
    if (!state.lastResult) return createElement('div', { className: 'result-empty' });

    // 1. Creamos el panel de enfrentamiento (Tú vs CPU)
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

    // 2. Retornamos el contenedor completo con el resultado y el botón
    return createElement('div', { className: 'result-container' },
        battleDisplay,
        createElement('h2', { className: `status-${state.lastResult.status.toLowerCase()}` }, `¡${state.lastResult.status}!`),
        createElement('button', { className: 'reset-btn', onClick: onReset }, 'Reiniciar Marcador')
    );
};