// UPDATE

export type Stand = (typeof STANDS)[number];

export type StandCategory =
  | 'Institucional'
  | 'Educação'
  | 'Saúde'
  | 'Telecom'
  | 'Comércio'
  | 'Serviços'
  | 'Indústria'
  | 'Serviços Automotivos'
  | 'Outros';

export const STANDS = [
  {
    id: 'acessibilidade-1',
    logoFilename: null,
    name: 'Acessibilidade',
    category: 'Outros',

    description:
      'Espaço dedicado à promoção da inclusão social, com orientações, serviços de apoio e recursos para garantir acessibilidade plena aos visitantes do evento.',
    position: { topPx: '305', leftPx: '96', widthPx: '119', heightPx: '178' },
  },
  {
    id: 'claro-2',
    logoFilename: 'claro.png',
    name: 'Claro',
    category: 'Telecom',
    description:
      'Operadora líder em telecomunicações, apresentando soluções de internet, telefonia móvel, TV por assinatura e tecnologia para consumidores e empresas.',
    position: { topPx: '487', leftPx: '96', widthPx: '119', heightPx: '178' },
  },
  {
    id: 'entrada-3',
    logoFilename: null,
    name: 'Entrada',
    category: 'Outros',
    description:
      'Acesso principal do evento, projetado para oferecer uma recepção acolhedora e organizada aos visitantes.',
    position: { topPx: '677', leftPx: '93', widthPx: '123.5', heightPx: '260' },
  },
  {
    id: 'turisrio-4',
    logoFilename: 'turisrio.png',
    name: 'TurisRio',
    category: 'Institucional',
    description:
      'Órgão oficial de turismo do Estado do Rio de Janeiro, divulgando os principais destinos turísticos e promovendo o desenvolvimento do setor.',
    position: { topPx: '947', leftPx: '96', widthPx: '119', heightPx: '179' },
  },
  {
    id: 'funarj-5',
    logoFilename: 'funarj.jpg',
    name: 'FunaRJ',
    category: 'Institucional',
    description:
      'Fundação Anita Mantuano de Artes do Estado do Rio de Janeiro, responsável por fomentar e apoiar atividades culturais e artísticas em todo o estado.',
    position: { topPx: '1129', leftPx: '96', widthPx: '119', heightPx: '177' },
  },
  {
    id: 'portal-moveis-construcao-6',
    logoFilename: null,
    name: 'Portal Móveis e Construção',
    category: 'Comércio',
    description:
      'Espaço dedicado a empresas do setor de móveis, decoração e construção civil, com lançamentos, tendências e soluções para o lar e obras comerciais.',
    position: { topPx: '1312', leftPx: '96', widthPx: '576', heightPx: '114' },
  },
  {
    id: 'artesanato-setur-7',
    logoFilename: null,
    name: 'Artesanato Setur',
    category: 'Institucional',
    description:
      'Projeto da Secretaria de Turismo do Estado do Rio de Janeiro, promovendo e valorizando o artesanato fluminense e os pequenos produtores locais.',
    position: { topPx: '1254', leftPx: '311', widthPx: '362', heightPx: '56' },
  },
  {
    id: 'flavia-cavalcante-8',
    logoFilename: null,
    name: 'Flavia Cavalcante',
    category: 'Comércio',
    description:
      'Marca de moda e acessórios com peças autorais e criativas, destacando design contemporâneo e produção artesanal.',
    position: { topPx: '306.5', leftPx: '1033', widthPx: '60', heightPx: '58' },
  },
  {
    id: 'unimed-9',
    logoFilename: 'unimed.png',
    name: 'Unimed',
    category: 'Saúde',
    description:
      'Operadora de planos de saúde com ampla rede de atendimento médico e hospitalar, oferecendo serviços de qualidade e cuidado integral à saúde.',
    position: { topPx: '508', leftPx: '365', widthPx: '120', heightPx: '58' },
  },
  {
    id: 'portal-da-saudade-10',
    logoFilename: 'portal-da-saudade.png',
    name: 'Portal da Saudade',
    category: 'Serviços',
    description:
      'Empresa especializada em serviços funerários e de homenagens, com foco em atendimento humanizado e apoio às famílias em momentos delicados.',
    position: { topPx: '508', leftPx: '486', widthPx: '119', heightPx: '58' },
  },
  {
    id: 'fundacao-sergio-loureiro-11',
    logoFilename: 'fundacao-sergio-loureiro.png',
    name: 'Fundação Sergio Loureiro',
    category: 'Institucional',
    description:
      'Instituição dedicada a projetos sociais e educacionais que promovem cidadania, educação e inclusão social na região.',
    position: { topPx: '508', leftPx: '607', widthPx: '119', heightPx: '58' },
  },
  {
    id: 'grupo-aapvr-12',
    logoFilename: 'aapvr.jpg',
    name: 'Grupo AAPVR',
    category: 'Institucional',
    description:
      'Associação dos Aposentados e Pensionistas de Volta Redonda, referência em assistência, lazer e qualidade de vida para seus associados.',
    position: { topPx: '508', leftPx: '728', widthPx: '119', heightPx: '58' },
  },
  {
    id: 'quicknet-13',
    logoFilename: 'quicknet.jpg',
    name: 'QUICKNET',
    category: 'Telecom',
    description:
      'Provedor regional de internet banda larga, oferecendo soluções rápidas, estáveis e com atendimento local para residências e empresas.',
    position: { topPx: '447', leftPx: '970', widthPx: '119', heightPx: '119' },
  },
  {
    id: 'sebrae-14',
    logoFilename: 'sebrae.png',
    name: 'SEBRAE',
    category: 'Serviços',
    description:
      'Serviço Brasileiro de Apoio às Micro e Pequenas Empresas, com orientações, consultorias e programas de incentivo ao empreendedorismo.',
    position: { topPx: '628', leftPx: '365', widthPx: '180', heightPx: '118.8' },
  },
  {
    id: 'inb-15',
    logoFilename: 'inb.png',
    name: 'INB',
    category: 'Institucional',
    description:
      'Indústrias Nucleares do Brasil, empresa responsável pela produção e gerenciamento do ciclo do combustível nuclear, com foco em segurança e sustentabilidade.',
    position: { topPx: '628', leftPx: '546', widthPx: '180', heightPx: '118.8' },
  },
  {
    id: 'cdl-16',
    logoFilename: 'cdl.webp',
    name: 'CDL',
    category: 'Comércio',
    description:
      'Câmara de Dirigentes Lojistas de Volta Redonda, atuando no fortalecimento do comércio local por meio de serviços, treinamentos e representação institucional.',
    position: { topPx: '689', leftPx: '728', widthPx: '120', heightPx: '58' },
  },
  {
    id: 'associacao-comercial-17',
    logoFilename: 'associacao-comercial.png',
    name: 'Associação Comercial',
    category: 'Comércio',
    description:
      'Entidade que representa os empresários e comerciantes locais, promovendo networking, eventos e soluções para o desenvolvimento do setor comercial.',
    position: { topPx: '689', leftPx: '849.8', widthPx: '120', heightPx: '58' },
  },
  {
    id: 'sunlife-18',
    logoFilename: 'sunlife.jpg',
    name: 'SunLife',
    category: 'Saúde',
    description:
      'Empresa de saúde e bem-estar, com soluções em seguros, planos de saúde e serviços de qualidade para diferentes perfis de clientes.',
    position: { topPx: '629', leftPx: '972.8', widthPx: '118', heightPx: '119' },
  },
  {
    id: 'unifoa-19',
    logoFilename: 'unifoa.jpg',
    name: 'UniFOA',
    category: 'Educação',
    description:
      'Centro Universitário de Volta Redonda, referência regional em ensino superior, com cursos de graduação, pós-graduação e extensão.',
    position: { topPx: '866', leftPx: '368', widthPx: '180', heightPx: '118.8' },
  },
  {
    id: 'unifoa-20',
    logoFilename: 'unifoa.jpg',
    name: 'UniFOA',
    category: 'Educação',
    description:
      'Centro Universitário de Volta Redonda, referência regional em ensino superior, com cursos de graduação, pós-graduação e extensão.',
    position: { topPx: '866', leftPx: '550', widthPx: '118', heightPx: '118.8' },
  },
  {
    id: 'csn-20',
    logoFilename: 'csn.png',
    name: 'CSN',
    category: 'Indústria',
    description:
      'Companhia Siderúrgica Nacional, uma das maiores indústrias siderúrgicas do Brasil, com forte presença econômica e social na região de Volta Redonda.',
    position: { topPx: '866', leftPx: '671', widthPx: '179', heightPx: '118.8' },
  },
  {
    id: 'prefeitura-vr-21',
    logoFilename: 'pmvr.png',
    name: 'Prefeitura de Volta Redonda',
    category: 'Institucional',
    description:
      'Órgão oficial de administração pública municipal, responsável por políticas públicas, serviços urbanos e desenvolvimento da cidade.',
    position: { topPx: '866', leftPx: '852', widthPx: '119', heightPx: '57' },
  },
  {
    id: 'juven-22',
    logoFilename: 'juven.png',
    name: 'Juven',
    category: 'Institucional',
    description:
      'Departamento municipal de Juventude, Esporte e Lazer de Volta Redonda, promovendo atividades, projetos e políticas voltadas aos jovens da cidade.',
    position: { topPx: '926', leftPx: '852', widthPx: '119', heightPx: '58' },
  },
  {
    id: 'sicomercio-23',
    logoFilename: 'sicomercio.png',
    name: 'Sicomércio',
    category: 'Comércio',
    description:
      'Sindicato do Comércio Varejista de Volta Redonda, atuando na defesa dos interesses do setor e promovendo desenvolvimento e capacitação empresarial.',
    position: { topPx: '866', leftPx: '973', widthPx: '118', heightPx: '119' },
  },
  {
    id: 'chocolate-araucaria-24',
    logoFilename: 'chocolate-araucaria.jpg',
    name: 'Chocolate Araucária',
    category: 'Comércio',
    description:
      'Marca especializada na produção artesanal de chocolates, oferecendo produtos diferenciados com foco em qualidade e tradição.',
    position: { topPx: '1108', leftPx: '308', widthPx: '59', heightPx: '58' },
  },
  {
    id: 'chic-viagens-25',
    logoFilename: 'chic-viagens-turismo.png',
    name: 'Chic Viagens',
    category: 'Serviços',
    description:
      'Agência de turismo especializada em pacotes personalizados, viagens nacionais e internacionais e consultoria em roteiros turísticos.',
    position: { topPx: '1046.8', leftPx: '368', widthPx: '119.5', heightPx: '60.5' },
  },
  {
    id: 'tecnomedi-26',
    logoFilename: 'tecnomedi.png',
    name: 'TECNOMEDI',
    category: 'Saúde',
    description:
      'Distribuidora de equipamentos médicos e hospitalares, com soluções para hospitais, clínicas e profissionais da saúde.',
    position: { topPx: '1048', leftPx: '489.2', widthPx: '119.5', heightPx: '58' },
  },
  {
    id: 'protecao-veicular-27',
    logoFilename: null,
    name: 'Associação de Proteção Veicular',
    category: 'Serviços Automotivos',
    description:
      'Estande dedicado à apresentação de planos de proteção veicular, oferecendo soluções acessíveis e serviços de assistência para veículos de associados.',
    position: { topPx: '1048', leftPx: '610', widthPx: '118', heightPx: '58' },
  },
  {
    id: 'quatree-28',
    logoFilename: 'quatree.jpg',
    name: 'Quatree',
    category: 'Comércio',
    description:
      'Marca nacional de alimentos para cães e gatos, com foco em nutrição de qualidade e bem-estar animal.',
    position: { topPx: '1254', leftPx: '794', widthPx: '179', heightPx: '57' },
  },
  {
    id: 'pets-garden-29',
    logoFilename: 'pets-garden.png',
    name: "Pet's Garden",
    category: 'Comércio',
    description:
      'Loja especializada em produtos e serviços para pets, oferecendo desde rações até acessórios e banho e tosa.',
    position: { topPx: '1254', leftPx: '974', widthPx: '120', heightPx: '57' },
  },
  {
    id: 'eletronic-seguranca-30',
    logoFilename: 'eletronic.png',
    name: 'Eletronic Segurança',
    category: 'Serviços',
    description:
      'Empresa especializada em tecnologia para segurança eletrônica, oferecendo câmeras, alarmes e soluções de monitoramento.',
    position: { topPx: '446', leftPx: '1270.8', widthPx: '120', heightPx: '57' },
  },
  {
    id: 'wise-up-31',
    logoFilename: 'wiseup.png',
    name: 'Wise Up',
    category: 'Educação',
    description:
      'Rede de escolas de idiomas com metodologia dinâmica e foco no ensino rápido do inglês para adultos e profissionais.',
    position: { topPx: '506', leftPx: '1270.8', widthPx: '60', heightPx: '58' },
  },
  {
    id: 'diario-delas-32',
    logoFilename: 'diario-delas.png',
    name: 'Diário Delas',
    category: 'Outros',
    description:
      'Portal de notícias, comportamento e lifestyle, com conteúdo voltado ao público feminino e à valorização da mulher.',
    position: { topPx: '446', leftPx: '1392.5', widthPx: '119.5', heightPx: '118' },
  },
  {
    id: 'talk-ativacoes-33',
    logoFilename: null,
    name: 'Talk e Ativações',
    category: 'Serviços',
    description:
      'Agência especializada em eventos promocionais, ativações de marca e soluções criativas para comunicação e marketing experiencial.',
    position: { topPx: '566.5', leftPx: '1270.5', widthPx: '241', heightPx: '181.8' },
  },
  {
    id: 'cristal-34',
    logoFilename: 'cristal.png',
    name: 'Cristal - Cursos e Festas (A)',
    category: 'Serviços',
    description:
      'Espaço dedicado a cursos, eventos e serviços para festas, oferecendo soluções em gastronomia, confeitaria, decoração e organização de eventos sociais e corporativos.',
    position: { topPx: '306.5', leftPx: '1513', widthPx: '119', heightPx: '58' },
  },
  {
    id: 'cristal-35',
    logoFilename: 'cristal.png',
    name: 'Cristal - Cursos e Festas (B)',
    category: 'Serviços',
    description:
      'Área voltada à apresentação de serviços e produtos para o mercado de festas e eventos, incluindo buffet, aulas de culinária e opções para celebrações personalizadas.',
    position: { topPx: '306.5', leftPx: '1633', widthPx: '118', heightPx: '58' },
  },
  {
    id: 'cristal-36',
    logoFilename: 'cristal.png',
    name: 'Cristal - Cursos e Festas (C)',
    category: 'Serviços',
    description:
      'Estande com foco em experiências gastronômicas, decoração temática e soluções criativas para o segmento de festas, cursos de culinária e eventos especiais.',
    position: { topPx: '306.5', leftPx: '1751', widthPx: '126', heightPx: '58' },
  },
  {
    id: 'cristal-37',
    logoFilename: 'cristal.png',
    name: 'Cristal - Cursos e Festas (D)',
    category: 'Serviços',
    description:
      'Espaço institucional da marca Cristal, dedicado à demonstração de serviços completos para eventos, incluindo organização, buffet, cursos de gastronomia e locação de espaços.',
    position: { topPx: '170.5', leftPx: '1876', widthPx: '172.5', heightPx: '194' },
  },
  {
    id: 'portal-moveis-construcao-b-38',
    logoFilename: null,
    name: 'Portal Móveis e Construção (B)',
    category: 'Comércio',
    description:
      'Área ampliada do Portal Móveis e Construção, destacando produtos e soluções para arquitetura, interiores, construção civil e design de ambientes residenciais e corporativos.',
    position: { topPx: '170.5', leftPx: '2051', widthPx: '115', heightPx: '577' },
  },
].sort((a, b) => a.name.localeCompare(b.name));
