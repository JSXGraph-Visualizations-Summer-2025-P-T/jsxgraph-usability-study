// js/board.js
const board = JXG.JSXGraph.initBoard('jxgbox', {
    boundingbox: [-5, 5, 5, -5],
    axis: true,
    showCopyright: false,
    showNavigation: false,
    pan: { enabled: true },
    zoom: { enabled: true },
});

const curve = board.create('functiongraph', [x => x ** 2], { strokeColor: '#0066cc' });


