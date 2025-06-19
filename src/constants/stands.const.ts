const ZOOM_SCALE = 2;

const STANDS = [
  {
    name: 'Acessibilidade',
    description: 'Detalhes do estande A...',
    position: {
      topPx: '305',
      leftPx: '96',
      widthPx: '119',
      heightPx: '178',
    },
  },
  {
    name: 'Claro',
    description: 'Detalhes do estande A...',
    position: {
      topPx: '487',
      leftPx: '96',
      widthPx: '119',
      heightPx: '178',
    },
  },
  {
    name: 'Entrada',
    description: 'Detalhes do estande A...',
    position: {
      topPx: '677',
      leftPx: '93',
      widthPx: '123.5',
      heightPx: '260',
    },
  },
  {
    name: 'TurisRio',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '947',
      leftPx: '96',
      widthPx: '119',
      heightPx: '179',
    },
  },
  {
    name: 'FunaRJ',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '1129',
      leftPx: '96',
      widthPx: '119',
      heightPx: '177',
    },
  },
  {
    name: 'Portal Móveis e Construção',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '1312',
      leftPx: '96',
      widthPx: '576',
      heightPx: '114',
    },
  },
  {
    name: 'Artesanato Setur',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '1254',
      leftPx: '311',
      widthPx: '362',
      heightPx: '56',
    },
  },
  {
    name: 'Flavia Cavalcante',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '306.5',
      leftPx: '1033',
      widthPx: '60',
      heightPx: '58',
    },
  },
  {
    name: 'Unimed',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '508',
      leftPx: '365',
      widthPx: '120',
      heightPx: '58',
    },
  },
  {
    name: 'Portal da Saudade',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '508',
      leftPx: '486',
      widthPx: '119',
      heightPx: '58',
    },
  },
  {
    name: 'Fundação Sergio Loureiro',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '508',
      leftPx: '607',
      widthPx: '119',
      heightPx: '58',
    },
  },
  {
    name: 'Grupo AAPVR',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '508',
      leftPx: '728',
      widthPx: '119',
      heightPx: '58',
    },
  },
  {
    name: 'QUICKNET',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '447',
      leftPx: '970',
      widthPx: '119',
      heightPx: '119',
    },
  },
  {
    name: 'SEBRAE',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '628',
      leftPx: '366',
      widthPx: '179',
      heightPx: '118.8',
    },
  },
  {
    name: 'INB',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '628',
      leftPx: '546',
      widthPx: '180',
      heightPx: '118.8',
    },
  },
  {
    name: 'CDL',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '689',
      leftPx: '728.8',
      widthPx: '118',
      heightPx: '58',
    },
  },
  {
    name: 'Associação Comercial',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '689',
      leftPx: '849.8',
      widthPx: '120',
      heightPx: '58',
    },
  },
  {
    name: 'SunLife',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '629',
      leftPx: '972.8',
      widthPx: '118',
      heightPx: '119',
    },
  },
  {
    name: 'UniFOA',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '866',
      leftPx: '368',
      widthPx: '180',
      heightPx: '118.8',
    },
  },
  {
    name: 'UniFOA',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '866',
      leftPx: '550',
      widthPx: '118',
      heightPx: '118.8',
    },
  },
  {
    name: 'CSN',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '866',
      leftPx: '671',
      widthPx: '179',
      heightPx: '118.8',
    },
  },
  {
    name: 'Prefeitura de Volta Redonda',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '866',
      leftPx: '852',
      widthPx: '119',
      heightPx: '57',
    },
  },
  {
    name: 'Juven',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '926',
      leftPx: '852',
      widthPx: '119',
      heightPx: '58',
    },
  },
  {
    name: 'Sicomércio',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '866',
      leftPx: '973',
      widthPx: '118',
      heightPx: '119',
    },
  },
  {
    name: 'Chocolate Araucária',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '1108',
      leftPx: '308',
      widthPx: '59',
      heightPx: '58',
    },
  },
  {
    name: 'Chic Viagens',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '1046.8',
      leftPx: '368',
      widthPx: '119.5',
      heightPx: '60.5',
    },
  },
  {
    name: 'TECNOMEDI',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '1048',
      leftPx: '489.2',
      widthPx: '119.5',
      heightPx: '58',
    },
  },
  {
    name: 'LOREM IPSUM',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '1048',
      leftPx: '610',
      widthPx: '118',
      heightPx: '58',
    },
  },
  {
    name: 'Quatree',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '1254',
      leftPx: '794',
      widthPx: '179',
      heightPx: '57',
    },
  },
  {
    name: "Pet's Garden",
    description: 'Detalhes do estande B...',
    position: {
      topPx: '1254',
      leftPx: '974',
      widthPx: '120',
      heightPx: '57',
    },
  },
  {
    name: 'Eletronic Segurança',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '446',
      leftPx: '1270.8',
      widthPx: '119',
      heightPx: '57',
    },
  },
  {
    name: 'Wise Up',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '506',
      leftPx: '1270.8',
      widthPx: '60',
      heightPx: '58',
    },
  },
  {
    name: 'Diário Delas',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '446',
      leftPx: '1392.5',
      widthPx: '119.5',
      heightPx: '118',
    },
  },
  {
    name: 'Talk e Ativações',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '566.5',
      leftPx: '1270.5',
      widthPx: '241',
      heightPx: '181.8',
    },
  },
  {
    name: 'Cristal',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '306.5',
      leftPx: '1513',
      widthPx: '119',
      heightPx: '58.0',
    },
  },
  {
    name: 'Cristal',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '306.5',
      leftPx: '1633',
      widthPx: '118',
      heightPx: '58.0',
    },
  },
  {
    name: 'Cristal',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '306.5',
      leftPx: '1751',
      widthPx: '126',
      heightPx: '58.0',
    },
  },
  {
    name: 'Cristal',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '170.5',
      leftPx: '1876',
      widthPx: '172',
      heightPx: '194',
    },
  },
  {
    name: 'Portal Móveis e Construção',
    description: 'Detalhes do estande B...',
    position: {
      topPx: '170.5',
      leftPx: '2051',
      widthPx: '114',
      heightPx: '577',
    },
  },
].map((stand) => ({ ...stand, id: crypto.randomUUID() }));

export { STANDS, ZOOM_SCALE };
export type Stand = (typeof STANDS)[number];
