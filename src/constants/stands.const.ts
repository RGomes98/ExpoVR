export type StandCategory =
  | 'Institucional'
  | 'Educação e Pesquisa'
  | 'Saúde e Bem-Estar'
  | 'Tecnologia e Telecom'
  | 'Comércio e Varejo'
  | 'Serviços e Consultoria'
  | 'Indústria e Produção'
  | 'Mobilidade e Transporte'
  | 'Turismo e Cultura'
  | 'Alimentos e Gastronomia'
  | 'Comunicação e Mídia'
  | 'Outros';

export type Stand = {
  id: string;
  logoFilename: string | null;
  name: string;
  category: StandCategory;
  description: string;
  position: { topPx: string; leftPx: string; widthPx: string; heightPx: string };
};

export const MAP: Stand[] = [
  {
    id: 'pavilion',
    logoFilename: 'expovr-logo.png',
    name: 'Pavilhão ExpoVR 2025',
    category: 'Outros' as const,
    description:
      'Espaço dedicado à promoção de negócios, inovação e networking, reunindo empresas, startups e instituições para exposição e troca de experiências.',
    position: { topPx: '1608', leftPx: '1519.5', widthPx: '650', heightPx: '400' },
  },
];

export const STANDS: Stand[] = [
  {
    id: 'byd',
    logoFilename: 'byd-logo.png',
    name: 'BYD',
    category: 'Mobilidade e Transporte' as const,
    description: 'Multinacional líder em veículos elétricos e soluções de mobilidade sustentável.',
    position: { topPx: '618', leftPx: '200', widthPx: '238', heightPx: '721' },
  },
  {
    id: 'inb',
    logoFilename: 'inb-logo.png',
    name: 'INB - Indústrias Nucleares do Brasil',
    category: 'Indústria e Produção' as const,
    description:
      'Empresa pública federal responsável pelo ciclo do combustível nuclear no Brasil, com foco em mineração, enriquecimento e produção de combustível para usinas nucleares.',
    position: { topPx: '1890', leftPx: '195', widthPx: '243', heightPx: '354' },
  },
  {
    id: 'turisrio',
    logoFilename: 'turisrio-logo.png',
    name: 'TurisRio',
    category: 'Turismo e Cultura' as const,
    description:
      'Órgão oficial de turismo do Estado do Rio de Janeiro, divulgando os principais destinos turísticos e promovendo o desenvolvimento do setor.',
    position: { topPx: '2247', leftPx: '195', widthPx: '243', heightPx: '373' },
  },
  {
    id: 'artesanato-expovr',
    logoFilename: null,
    name: 'Artesanato - ExpoVR',
    category: 'Turismo e Cultura' as const,
    description:
      'Espaço dedicado à exposição e comercialização de peças artesanais da região, valorizando a cultura local, o trabalho manual e os artesãos do Sul Fluminense.',
    position: { topPx: '2476', leftPx: '450 ', widthPx: '960', heightPx: '145' },
  },
  {
    id: 'artesanato-setur',
    logoFilename: null,
    name: 'Artesanato - SETUR',
    category: 'Turismo e Cultura' as const,
    description:
      'Projeto da Secretaria de Turismo do Estado do Rio de Janeiro, promovendo e valorizando o artesanato fluminense e os pequenos produtores locais.',
    position: { topPx: '2476', leftPx: '1420', widthPx: '774', heightPx: '145' },
  },
  {
    id: 'aapvr',
    logoFilename: 'aapvr-logo.jpg',
    name: 'Grupo AAPVR',
    category: 'Institucional' as const,
    description:
      'Associação dos Aposentados e Pensionistas de Volta Redonda, referência em assistência, lazer e qualidade de vida para seus associados.',
    position: { topPx: '618', leftPx: '728', widthPx: '242', heightPx: '120' },
  },
  {
    id: 'plamesc',
    logoFilename: 'plamesc-logo.jpg',
    name: 'PLAMESC',
    category: 'Saúde e Bem-Estar' as const,
    description:
      'Plano de saúde acessível que oferece atendimento completo com profissionais qualificados, garantindo cuidado e bem-estar para associados e suas famílias.',
    position: { topPx: '618', leftPx: '970', widthPx: '242', heightPx: '120' },
  },
  {
    id: 'saude-mulher',
    logoFilename: null,
    name: 'Saúde Mulher',
    category: 'Saúde e Bem-Estar' as const,
    description:
      'Serviço especializado em saúde feminina, oferecendo atendimento dedicado e programas de prevenção para o bem-estar integral da mulher.',
    position: { topPx: '618', leftPx: '1212', widthPx: '249', heightPx: '120' },
  },
  {
    id: 'rede-contabil-digital',
    logoFilename: 'rede-contabil-logo.png',
    name: 'Rede Contábil Digital',
    category: 'Serviços e Consultoria' as const,
    description:
      'Plataforma digital que oferece serviços contábeis para apoiar a gestão financeira de empresas, simplificando processos por meio da tecnologia.',
    position: { topPx: '618', leftPx: '1461', widthPx: '119', heightPx: '120' },
  },
  {
    id: 'atitude-feminina',
    logoFilename: 'atitude-feminina-logo.png',
    name: 'Atitude Feminina',
    category: 'Comércio e Varejo' as const,
    description:
      'Loja de moda feminina com variedade em roupas e acessórios, atendendo diferentes estilos e ocasiões com foco no público local.',
    position: { topPx: '618', leftPx: '1580', widthPx: '243', heightPx: '120' },
  },
  {
    id: 'vilage-templo-ninicos',
    logoFilename: 'village-42-logo.png',
    name: 'Village 42',
    category: 'Comércio e Varejo' as const,
    description:
      'Espaço colaborativo que reúne moda fitness, roupas infantis e lifestyle em um ambiente voltado para conexão, criatividade e empreendedorismo feminino. Abriga as marcas Templo Moda Fitness, NiNicos Moda Infantil e iniciativas do próprio Village 42.',
    position: { topPx: '618', leftPx: '1823', widthPx: '122', heightPx: '120' },
  },
  {
    id: 'michele-megane',
    logoFilename: null,
    name: 'Michele Megane',
    category: 'Serviços e Consultoria' as const,
    description:
      'Studio especializado em extensões capilares, oferecendo serviços personalizados com foco em beleza, autoestima e cuidado com os fios.',
    position: { topPx: '618', leftPx: '1947', widthPx: '122', heightPx: '120' },
  },
  {
    id: 'viti-souls',
    logoFilename: null,
    name: 'Vitis Souls',
    category: 'Serviços e Consultoria' as const,
    description:
      'Projeto de desenvolvimento pessoal idealizado por Flávia Cavalcante, que une psicologia, autoconhecimento e propósito para apoiar pessoas em processos de reconexão e transformação de vida.',
    position: { topPx: '618', leftPx: '2069', widthPx: '122', heightPx: '120' },
  },
  {
    id: 'abrasel',
    logoFilename: 'abrasel-logo.png',
    name: 'Abrasel',
    category: 'Institucional' as const,
    description:
      'Entidade que representa o setor de bares e restaurantes, promovendo o desenvolvimento do segmento e apoiando empreendedores da alimentação fora do lar por meio de articulação, capacitação e representatividade.',
    position: { topPx: '618', leftPx: '2925', widthPx: '115', heightPx: '120' },
  },
  {
    id: 'alerj',
    logoFilename: 'alerj-logo.png',
    name: 'ALERJ',
    category: 'Institucional' as const,
    description:
      'Órgão legislativo do Estado do Rio de Janeiro, responsável pela elaboração de leis estaduais, fiscalização do poder público e promoção de políticas públicas em benefício da população fluminense.',
    position: { topPx: '892', leftPx: '602', widthPx: '246', heightPx: '124' },
  },
  {
    id: 'sms-vr',
    logoFilename: null,
    name: 'Secretaria Municipal da Saúde',
    category: 'Saúde e Bem-Estar' as const,
    description:
      'Secretaria Municipal de Saúde de Volta Redonda responsável por garantir o acesso integral e humanizado à saúde da população, por meio de uma rede de atendimento qualificada e gestão participativa.',
    position: { topPx: '892', leftPx: '848', widthPx: '248', heightPx: '124' },
  },
  {
    id: 'wiseup',
    logoFilename: 'wiseup-logo.png',
    name: 'WiseUp',
    category: 'Educação e Pesquisa' as const,
    description:
      'Rede de escolas de idiomas focada no ensino de inglês para jovens e adultos, oferecendo métodos práticos e acompanhamento personalizado para o aprendizado eficiente.',
    position: { topPx: '892', leftPx: '1220', widthPx: '124', heightPx: '124' },
  },
  {
    id: 'unimed',
    logoFilename: 'unimed-logo.png',
    name: 'Unimed',
    category: 'Saúde e Bem-Estar' as const,
    description:
      'Cooperativa de trabalho médico que oferece planos de saúde, serviços de assistência médica e hospitalar, garantindo atendimento humanizado e de qualidade aos seus clientes.',
    position: { topPx: '1018', leftPx: '726', widthPx: '248', heightPx: '122' },
  },
  {
    id: 'portal-da-saudade',
    logoFilename: 'portal-da-saudade-logo.png',
    name: 'Portal da Saudade',
    category: 'Serviços e Consultoria' as const,
    description:
      'Empresa especializada em serviços funerários e memoriais, oferecendo apoio humanizado e atendimento dedicado para famílias em momentos delicados.',
    position: { topPx: '1018', leftPx: '974', widthPx: '244', heightPx: '122' },
  },
  {
    id: 'multi-dog',
    logoFilename: 'multi-dog-logo.webp',
    name: 'Multi Dog',
    category: 'Comércio e Varejo' as const,
    description:
      'Loja especializada em produtos para cães, oferecendo uma variedade de rações, acessórios e cuidados para o bem-estar dos pets.',
    position: { topPx: '1018', leftPx: '1218', widthPx: '126', heightPx: '122' },
  },
  {
    id: 'mobi-eletro',
    logoFilename: 'mobi-eletro-logo.png',
    name: 'Mobi Eletro',
    category: 'Mobilidade e Transporte' as const,
    description:
      'Especializada em mobilidade elétrica sustentável, oferece motos, scooters e bicicletas elétricas, além de serviços de manutenção especializados.',
    position: { topPx: '892', leftPx: '1458', widthPx: '244', heightPx: '125' },
  },
  {
    id: 'eletronic-seguranca',
    logoFilename: 'eletronic-logo.png',
    name: 'Eletronic Segurança',
    category: 'Serviços e Consultoria' as const,
    description:
      'Empresa especializada em tecnologia para segurança eletrônica, oferecendo câmeras, alarmes e soluções de monitoramento.',
    position: { topPx: '1017', leftPx: '1458', widthPx: '244', heightPx: '125' },
  },
  {
    id: 'governo-rj',
    logoFilename: 'governo-rj-logo.jpg',
    name: 'Governo do Rio de Janeiro',
    category: 'Institucional' as const,
    description:
      'Órgão público estadual responsável pela administração e políticas públicas no Rio de Janeiro, promovendo desenvolvimento social, econômico e cultural.',
    position: { topPx: '892', leftPx: '1702', widthPx: '242', heightPx: '125' },
  },
  {
    id: 'maneco-autoescola',
    logoFilename: 'maneco-autoescola-logo.png',
    name: 'Maneco Autoescola',
    category: 'Serviços e Consultoria' as const,
    description:
      'Autoescola que oferece cursos para primeira habilitação, inclusão e troca de categoria, preparando motoristas com foco em segurança e responsabilidade no trânsito.',
    position: { topPx: '1017', leftPx: '1823', widthPx: '121', heightPx: '125' },
  },
  {
    id: 'quicknet',
    logoFilename: 'quicknet-logo.jpg',
    name: 'Quicknet',
    category: 'Tecnologia e Telecom' as const,
    description:
      'Provedora de serviços de internet e soluções em conectividade, garantindo acesso estável e suporte técnico para clientes residenciais e empresariais.',
    position: { topPx: '892', leftPx: '1946', widthPx: '242', heightPx: '250' },
  },
  {
    id: 'sebrae',
    logoFilename: 'sebrae-logo.png',
    name: 'Sebrae',
    category: 'Serviços e Consultoria' as const,
    description:
      'Instituição dedicada ao apoio e desenvolvimento de micro e pequenas empresas, oferecendo consultorias, capacitações e ferramentas para fortalecer o empreendedorismo local.',
    position: { topPx: '1261', leftPx: '736', widthPx: '364', heightPx: '242' },
  },
  {
    id: 'arigos',
    logoFilename: null,
    name: 'Arigós',
    category: 'Turismo e Cultura' as const,
    description:
      'Projeto que valoriza a identidade cultural regional por meio de produtos, experiências ou ações ligadas à história e à criatividade local.',
    position: { topPx: '1261', leftPx: '1102', widthPx: '242', heightPx: '242' },
  },
  {
    id: 'cinbal',
    logoFilename: 'cinbal-logo.png',
    name: 'CINBAL',
    category: 'Indústria e Produção' as const,
    description:
      'Empresa do Grupo Incoflandres, especializada em corte, envernizamento, litografia e transporte de folhas metálicas. Com sede em Volta Redonda, atua desde 1980 com forte presença logística e foco em qualidade e atendimento ao setor industrial.',
    position: { topPx: '1256', leftPx: '1450', widthPx: '242', heightPx: '124' },
  },
  {
    id: 'sider-shopping',
    logoFilename: 'sider-shopping-logo.png',
    name: 'Sider Shopping',
    category: 'Comércio e Varejo' as const,
    description:
      'Centro de compras que reúne lojas, serviços, gastronomia e lazer em um ambiente confortável e acessível, atendendo diversos perfis de consumidores.',
    position: { topPx: '1383', leftPx: '1450', widthPx: '242', heightPx: '124' },
  },
  {
    id: 'cdl',
    logoFilename: 'cdl-logo.webp',
    name: 'CDL Volta Redonda',
    category: 'Institucional' as const,
    description:
      'Câmara de Dirigentes Lojistas de Volta Redonda, instituição que apoia o comércio local, promove capacitações e fortalece o empreendedorismo na cidade.',
    position: { topPx: '1256', leftPx: '1694', widthPx: '242', heightPx: '124' },
  },
  {
    id: 'associacao-comercial',
    logoFilename: 'associacao-comercial-logo.png',
    name: 'Associação Comercial - ACIAP',
    category: 'Institucional' as const,
    description:
      'Associação Comercial, Industrial e Agropastoril de Volta Redonda, há 70 anos promovendo o desenvolvimento econômico local por meio do apoio ao empreendedorismo, à indústria e ao comércio.',
    position: { topPx: '1383', leftPx: '1694', widthPx: '242', heightPx: '124' },
  },
  {
    id: 'sunlife-energia',
    logoFilename: 'sunlife-logo.png',
    name: 'SunLife Energia Solar',
    category: 'Tecnologia e Telecom' as const,
    description:
      'Empresa especializada em soluções de energia solar fotovoltaica, oferecendo projetos personalizados para residências e empresas com foco em economia e sustentabilidade.',
    position: { topPx: '1258', leftPx: '1938', widthPx: '242', heightPx: '248' },
  },
  {
    id: 'unifoa-1',
    logoFilename: 'unifoa-logo.jpg',
    name: 'UniFOA - Estande 1',
    category: 'Educação e Pesquisa' as const,
    description:
      'Centro Universitário de Volta Redonda, referência em ensino superior na região, oferecendo cursos de graduação, pós-graduação e extensão com foco na formação acadêmica e cidadã.',
    position: { topPx: '1735', leftPx: '736', widthPx: '365', heightPx: '240' },
  },
  {
    id: 'unifoa-2',
    logoFilename: 'unifoa-logo.jpg',
    name: 'UniFOA - Estande 2',
    category: 'Educação e Pesquisa' as const,
    description:
      'Centro Universitário de Volta Redonda, referência em ensino superior na região, oferecendo cursos de graduação, pós-graduação e extensão com foco na formação acadêmica e cidadã.',
    position: { topPx: '1735', leftPx: '1102', widthPx: '242', heightPx: '240' },
  },
  {
    id: 'csn',
    logoFilename: 'csn-logo.png',
    name: 'CSN',
    category: 'Indústria e Produção' as const,
    description:
      'Uma das maiores produtoras de aço do Brasil e da América Latina, a CSN é referência em siderurgia, mineração e logística, contribuindo para o desenvolvimento econômico e industrial da região.',
    position: { topPx: '1735', leftPx: '1456', widthPx: '242', heightPx: '240' },
  },
  {
    id: 'prefeitura-volta-redonda',
    logoFilename: 'pmvr-logo.png',
    name: 'Prefeitura Municipal de Volta Redonda',
    category: 'Institucional' as const,
    description:
      'Órgão público responsável pela administração e desenvolvimento da cidade de Volta Redonda, promovendo políticas públicas que visam o bem-estar social, econômico e cultural da população local.',
    position: { topPx: '1735', leftPx: '1700', widthPx: '242', heightPx: '240' },
  },
  {
    id: 'sicomercio',
    logoFilename: 'sicomercio-logo.png',
    name: 'Sicomércio',
    category: 'Serviços e Consultoria' as const,
    description:
      'Sindicato que representa o comércio varejista da cidade, atuando na defesa dos interesses dos empresários e promovendo o desenvolvimento sustentável do setor comercial local.',
    position: { topPx: '1735', leftPx: '1946', widthPx: '242', heightPx: '240' },
  },
  {
    id: 'diario-delas',
    logoFilename: 'diario-delas-logo.png',
    name: 'Diário Delas',
    category: 'Comunicação e Mídia' as const,
    description:
      'Canal colaborativo que conecta mulheres, oferecendo conteúdo sobre o universo feminino com foco em inspiração, empoderamento e troca de experiências.',
    position: { topPx: '1725', leftPx: '2430', widthPx: '242', heightPx: '230' },
  },
  {
    id: 'diario-do-vale',
    logoFilename: 'diario-do-vale-logo.png',
    name: 'Diário do Vale',
    category: 'Comunicação e Mídia' as const,
    description:
      'Jornal regional que cobre notícias locais, políticas, cultura e acontecimentos da região, mantendo a população informada com credibilidade e proximidade.',
    position: { topPx: '1725', leftPx: '2676', widthPx: '244', heightPx: '230' },
  },
  {
    id: 'seleto-hotel',
    logoFilename: 'seleto-hotel-logo.png',
    name: 'Seleto Hotel',
    category: 'Turismo e Cultura' as const,
    description:
      'Hotel localizado no centro de Volta Redonda, oferecendo estrutura moderna, atendimento de qualidade e suítes confortáveis, além de espaço para eventos e serviço exclusivo de regulação médica 24h.',
    position: { topPx: '2220', leftPx: '615', widthPx: '122', heightPx: '125' },
  },
  {
    id: 'prefeitura-rio-claro',
    logoFilename: 'prefeitura-rio-claro-logo.png',
    name: 'Prefeitura de Rio Claro',
    category: 'Institucional' as const,
    description:
      'Administração municipal de Rio Claro, responsável pela gestão pública, execução de políticas sociais, urbanas e de desenvolvimento sustentável no município.',
    position: { topPx: '2220', leftPx: '860', widthPx: '122', heightPx: '125' },
  },
  {
    id: 'prefeitura-valenca',
    logoFilename: 'prefeitura-valenca-logo.png',
    name: 'Prefeitura de Valença',
    category: 'Institucional' as const,
    description:
      'Órgão responsável pela administração pública do município de Valença, atuando na promoção de políticas públicas voltadas à saúde, educação, infraestrutura e desenvolvimento social.',
    position: { topPx: '2220', leftPx: '982', widthPx: '122', heightPx: '125' },
  },
  {
    id: 'rotas-turisticas-rj',
    logoFilename: null,
    name: 'Rotas Turísticas RJ',
    category: 'Turismo e Cultura' as const,
    description:
      'Estande coletivo que apresenta os principais destinos turísticos do Estado do Rio de Janeiro, incluindo as rotas do Vale do Café, Agulhas Negras e Costa Verde, promovendo cultura, natureza e experiências regionais autênticas.',
    position: { topPx: '2220', leftPx: '1104', widthPx: '244', heightPx: '125' },
  },
  {
    id: 'tecnomedi',
    logoFilename: 'tecnomedi-logo.png',
    name: 'Tecnomedi',
    category: 'Saúde e Bem-Estar' as const,
    description:
      'Loja especializada em produtos ortopédicos, médicos e de bem-estar, oferecendo uma linha completa de itens para cuidados com a saúde, com atendimento personalizado e entrega para todo o Brasil.',
    position: { topPx: '2095', leftPx: '1104', widthPx: '244', heightPx: '125' },
  },
  {
    id: 'mediterranea-cookchef',
    logoFilename: 'mediterranea-logo.webp',
    name: 'Mediterrânea Cook Chef',
    category: 'Comércio e Varejo' as const,
    description:
      'Marca especializada em panelas antiaderentes premium, inspiradas na culinária mediterrânea. Seus produtos reduzem o uso de óleo, não liberam metais e promovem uma alimentação mais saudável.',
    position: { topPx: '2095', leftPx: '982', widthPx: '120', heightPx: '125' },
  },
  {
    id: 'escudo-protecao',
    logoFilename: 'escudo-logo.png',
    name: 'Escudo Proteção Veicular',
    category: 'Serviços e Consultoria' as const,
    description:
      'Associação de proteção veicular sem fins lucrativos que atua com base no associativismo para oferecer suporte em casos de sinistros como roubo, colisão, incêndio ou furto. O Programa de Proteção Automotiva (PPA) oferece cobertura e benefícios por meio do sistema de rateio entre os associados.',
    position: { topPx: '2095', leftPx: '736', widthPx: '244', heightPx: '125' },
  },
  {
    id: 'queops-travel',
    logoFilename: 'queops-logo.png',
    name: 'Queops Travel',
    category: 'Turismo e Cultura' as const,
    description:
      'Operadora de turismo especializada em roteiros personalizados, nacionais e internacionais, oferecendo experiências completas para diferentes perfis de viajantes. Atua com foco em atendimento dedicado e viagens em destaque no mercado.',
    position: { topPx: '2095', leftPx: '1457', widthPx: '138', heightPx: '125' },
  },
  {
    id: 'chic-viagens',
    logoFilename: 'chic-viagens-turismo-logo.png',
    name: 'Chic Viagens',
    category: 'Turismo e Cultura' as const,
    description:
      'Agência com mais de 25 anos de atuação em Volta Redonda, especializada em viagens nacionais e internacionais. Destaque por oferecer voos diretos exclusivos, como a rota Brasil–Cairo, e por transformar sonhos em experiências únicas.',
    position: { topPx: '2095', leftPx: '1590', widthPx: '110', heightPx: '125' },
  },
  {
    id: 'andromeda-gestao',
    logoFilename: 'andromeda-logo.jpg',
    name: 'Andromeda Gestão e Projetos',
    category: 'Serviços e Consultoria' as const,
    description:
      'Consultoria especializada em gestão estratégica, oferecendo cursos, mentorias e soluções personalizadas para impulsionar carreiras e empresas com foco em resultados concretos.',
    position: { topPx: '2095', leftPx: '1824', widthPx: '120', heightPx: '125' },
  },
  {
    id: 'transporte-excelsior',
    logoFilename: 'transporte-excelsior-logo.png',
    name: 'Transporte Excelsior',
    category: 'Mobilidade e Transporte' as const,
    description:
      'Empresa dedicada ao transporte de cargas com foco na segurança, eficiência e inovação, agregando valor aos produtos através de tecnologias modernas e práticas responsáveis.',
    position: { topPx: '2095', leftPx: '1944', widthPx: '120', heightPx: '125' },
  },
  {
    id: 'nowigo',
    logoFilename: 'nowigo-logo.png',
    name: 'Nowigo',
    category: 'Tecnologia e Telecom' as const,
    description:
      'Soluções tecnológicas para eventos que facilitam pagamentos digitais, controle de acesso e análise de dados, promovendo mais agilidade e organização em feiras, shows, festivais e espaços recorrentes.',
    position: { topPx: '2095', leftPx: '2066', widthPx: '120', heightPx: '125' },
  },
  {
    id: 'produtores-rurais-vale-do-cafe',
    logoFilename: null,
    name: 'Produtores Rurais Vale do Café',
    category: 'Institucional' as const,
    description:
      'Cooperativa que reúne produtores rurais da região do Vale do Café, promovendo a agricultura sustentável, o desenvolvimento local e a valorização dos produtos da região.',
    position: { topPx: '2220', leftPx: '1625', widthPx: '562', heightPx: '122' },
  },
  {
    id: 'talk-ativacoes',
    logoFilename: null,
    name: 'Talk & Ativações',
    category: 'Comunicação e Mídia' as const,
    description:
      'Espaço dedicado a palestras, workshops e ativações interativas que promovem conexão, aprendizado e engajamento. Aqui você encontra conteúdos inspiradores e experiências dinâmicas para fortalecer redes, estimular o diálogo e criar oportunidades de networking.',
    position: { topPx: '1155', leftPx: '2438', widthPx: '490', heightPx: '355' },
  },
  {
    id: 'galeria-tecnica',
    logoFilename: null,
    name: 'Galeria Técnica',
    category: 'Outros' as const,
    description:
      'Espaço dedicado à exposição de inovações, projetos e soluções técnicas, promovendo conhecimento, aprendizado e troca de experiências entre profissionais e visitantes.',
    position: { topPx: '885', leftPx: '2441', widthPx: '490', heightPx: '252' },
  },
  {
    id: 'cafe-espaco',
    logoFilename: null,
    name: 'Espaço Café',
    category: 'Alimentos e Gastronomia' as const,
    description: 'Ambiente para convivência, networking e momentos de pausa durante o evento.',
    position: { topPx: '618', leftPx: '2540', widthPx: '385', heightPx: '120' },
  },
  {
    id: 'sala-de-palestras',
    logoFilename: null,
    name: 'Sala de Palestras',
    category: 'Outros' as const,
    description: 'Espaço dedicado para apresentações, palestras e debates durante o evento.',
    position: { topPx: '1085', leftPx: '3145', widthPx: '636', heightPx: '632' },
  },
  {
    id: 'exposicao-carros-antigos',
    logoFilename: null,
    name: 'Exposição de Carros Antigos',
    category: 'Mobilidade e Transporte' as const,
    description:
      'Evento que reúne carros clássicos e antigos, celebrando a história e a cultura automobilística.',
    position: { topPx: '1122', leftPx: '3782', widthPx: '530', heightPx: '855' },
  },
  {
    id: 'apae',
    logoFilename: 'apae-logo.jpg',
    name: 'APAE',
    category: 'Saúde e Bem-Estar' as const,
    description:
      'Associação dedicada ao atendimento, apoio e inclusão de pessoas com deficiência, promovendo saúde, educação e qualidade de vida.',
    position: { topPx: '575', leftPx: '3782', widthPx: '530', heightPx: '545' },
  },
  {
    id: 'entrada-pavilhao',
    logoFilename: null,
    name: 'Entrada do Pavilhão',
    category: 'Outros' as const,
    description: 'Ponto de acesso principal ao evento e área de recepção dos visitantes.',
    position: { topPx: '1360', leftPx: '200', widthPx: '238', heightPx: '518' },
  },
].sort((a, b) => a.name.localeCompare(b.name));
