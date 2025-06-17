const STANDS = [
  {
    id: 'stand-1',
    name: 'Estande A',
    description: 'Detalhes do estande A...',
    position: {
      topPx: '100',
      leftPx: '150',
      widthPx: '80',
      heightPx: '80',
    },
  },
  {
    id: 'stand-2',
    name: 'Estande B',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '296',
      leftPx: '201',
      widthPx: '80',
      heightPx: '80',
    },
  },
];

const ZOOM_SCALE = 2;

export { STANDS, ZOOM_SCALE };
export type Stand = (typeof STANDS)[number];
