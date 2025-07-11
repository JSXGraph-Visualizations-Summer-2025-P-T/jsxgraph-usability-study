// js/interactions.js
let interactionLog = [];

const logInteraction = (type, data = {}) => {
    interactionLog.push({ type, time: Date.now(), ...data });
    console.log(`${type} event at ${new Date().toLocaleTimeString()}`, data);
    updateChart();
};

board.addHook('mouseDown', () => logInteraction('mouseDown'));
board.addHook('mouseUp', () => logInteraction('mouseUp'));
board.addHook('mouseMove', () => logInteraction('mouseMove'));

board.on('zoom', () => logInteraction('zoom'));
board.on('pan', () => logInteraction('pan'));
