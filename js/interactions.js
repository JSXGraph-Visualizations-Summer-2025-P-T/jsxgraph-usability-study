// js/interactions.js
let interactionLog = [];

function logInteraction(type, data = {}) {
    interactionLog.push({ type, time: Date.now(), ...data });
    console.log(`[${type}] at ${new Date().toLocaleTimeString()}`);
    updateChart();
}

// DOM Events: mouseDown, mouseUp
const container = document.getElementById('jxgbox');

container.addEventListener('mousedown', () => logInteraction('mouseDown'));
container.addEventListener('mouseup', () => logInteraction('mouseUp'));

// Debounce mouseMove to prevent overload
let lastMove = 0;
container.addEventListener('mousemove', () => {
    const now = Date.now();
    if (now - lastMove > 500) {
        lastMove = now;
        logInteraction('mouseMove');
    }
});

// JSXGraph events: pan, zoom
board.addHook(() => logInteraction('zoom'), 'zoom');
board.addHook(() => logInteraction('pan'), 'pan');
