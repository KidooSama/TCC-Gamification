import { UXPractice } from "@/types/uxpractice";
import practice1 from "@/assets/ux-practice-1.jpg";
import practice2 from "@/assets/ux-practice-2.jpg";
import practice3 from "@/assets/ux-practice-3.jpg";
import practice4 from "@/assets/ux-practice-4.jpg";
import practice5 from "@/assets/ux-practice-5.jpg";
import practice6 from "@/assets/ux-practice-6.jpg";
import practice7 from "@/assets/ux-practice-7.jpg";
import practice8 from "@/assets/ux-practice-8.jpg";
import practice9 from "@/assets/ux-practice-9.jpg";
import practice10 from "@/assets/ux-practice-10.jpg";
import practice11 from "@/assets/ux-practice-11.jpg";
import practice12 from "@/assets/ux-practice-12.jpg";
import practice13 from "@/assets/ux-practice-13.jpg";
import practice14 from "@/assets/ux-practice-14.jpg";
import practice15 from "@/assets/ux-practice-15.jpg";
import practice16 from "@/assets/ux-practice-16.jpg";
import practice17 from "@/assets/ux-practice-17.jpg";
import practice18 from "@/assets/ux-practice-18.jpg";
import practice19 from "@/assets/ux-practice-19.jpg";
import practice20 from "@/assets/ux-practice-20.jpg";

export const uxPractices: UXPractice[] = [
  {
    number: 1,
    title: "1 - Gestão Flexível e Compassiva de Consistência",
    description: "Permitir que usuários definam frequências personalizadas de engajamento (ex: '3x por semana'), implementar pausas programadas sem penalidades, e oferecer mecanismos de recuperação gradual após falhas (mini-metas de reconstrução, mensagens de normalização).",
    theoreticalBase: "Deci & Ryan (1985); Busch et al. (2015); Nicholson (2015); Lally et al. (2010); Zimmerman (2002)",
    details: [
      "Permitir personalização de frequências de engajamento conforme ritmo individual do usuário",
      "Implementar sistema de pausas programadas sem aplicação de penalidades ou perda de progresso",
      "Criar mecanismos de recuperação gradual após períodos de inatividade",
      "Desenvolver mini-metas de reconstrução para facilitar retorno após pausas",
      "Incluir mensagens de normalização que validem períodos de ausência como parte natural do processo"
    ],
    examples: [
      "Sistema de metas flexíveis: 'Prefiro treinar 3x por semana' ao invés de diariamente",
      "Modo pausa ativável pelo usuário sem perder streak ou conquistas",
      "Metas de recomeço reduzidas: '5 minutos hoje' após período de inatividade"
    ],
    imageUrl: practice1,
    source: "App Duolingo"
  },
  {
    number: 2,
    title: "2 - Reconhecimento Qualitativo e Processual",
    description: "Incorporar métricas que avaliem profundidade, maestria e estratégias de aprendizagem (não apenas volume), bonificando reflexão, revisão de erros, persistência e metacognição por meio de badges e feedbacks específicos que validem o processo.",
    theoreticalBase: "Locke & Latham (1990); Marton & Säljö (1976); Zimmerman (2002); Nicholson (2015)",
    details: [
      "Avaliar qualidade e profundidade do engajamento, não apenas quantidade",
      "Reconhecer estratégias de aprendizagem profunda e metacognição",
      "Bonificar revisão de erros e persistência diante de desafios",
      "Criar badges específicos para diferentes processos de aprendizagem",
      "Fornecer feedbacks que validem o processo, não apenas resultados"
    ],
    examples: [
      "Badge de 'Aprendiz Reflexivo' para quem revisa erros sistematicamente",
      "Reconhecimento de 'Persistência' ao completar desafio após múltiplas tentativas",
      "Métricas de profundidade: tempo de reflexão, revisão de material, anotações"
    ],
    imageUrl: practice2,
    source: "justinmind.com"
  },
  {
    number: 3,
    title: "3 - Economia Virtual Pedagogicamente Vinculada",
    description: "Conectar moedas e recompensas virtuais a ganhos funcionais reais (acesso a conteúdo avançado, ferramentas educacionais, funcionalidades do sistema) ao invés de itens puramente cosméticos.",
    theoreticalBase: "Kahneman & Tversky (1979); Hamari, Koivisto & Sarsa (2014); Busch et al. (2015)",
    details: [
      "Vincular moedas virtuais a benefícios funcionais e educacionais reais",
      "Evitar recompensas puramente cosméticas sem valor pedagógico",
      "Desbloquear conteúdos avançados através de conquistas significativas",
      "Oferecer ferramentas e recursos educacionais como recompensas",
      "Criar economia que reforce objetivos de aprendizagem e desenvolvimento"
    ],
    examples: [
      "Moedas podem ser trocadas por acesso antecipado a módulos avançados",
      "Desbloquear ferramentas de análise de progresso com pontos conquistados",
      "Acesso a mentoria individual como recompensa de alto valor"
    ],
    imageUrl: practice3,
    source: "dribbble.com"
  },
  {
    number: 4,
    title: "4 - Badges Vinculadas a Competências Verificáveis",
    description: "Estruturar insígnias hierarquicamente por habilidades específicas e processos de aprendizagem, conectando cada conquista a marco pedagógico ou comportamental concreto.",
    theoreticalBase: "Marczewski (2015); Martín-Peña, García-Magro & Sánchez-López (2024)",
    details: [
      "Criar hierarquia de badges baseada em competências específicas",
      "Conectar cada insígnia a marco pedagógico ou comportamental verificável",
      "Estruturar progressão de habilidades de forma clara e tangível",
      "Vincular badges a processos de aprendizagem, não apenas conclusão de tarefas",
      "Tornar critérios de conquista transparentes e alcançáveis"
    ],
    examples: [
      "Badge 'Escritor Iniciante' → 'Escritor Praticante' → 'Escritor Mestre' baseado em competências demonstradas",
      "Insígnia de 'Pensador Crítico' após análises profundas documentadas",
      "Badge de 'Colaborador' vinculado a contribuições significativas em grupo"
    ],
    imageUrl: practice4,
    source: "growthengineering.co.uk"
  },
  {
    number: 5,
    title: "5 - Sistemas de Classificação Multidimensionais",
    description: "Implementar múltiplas categorias de ranking exibidas simultaneamente (volume, consistência, melhoria percentual, variedade de práticas), legitimando diferentes estilos de engajamento.",
    theoreticalBase: "Festinger (1954); Nicholson (2015); Tondello et al. (2016)",
    details: [
      "Criar múltiplos rankings que valorizem diferentes aspectos do engajamento",
      "Exibir classificações por volume, consistência, melhoria e variedade simultaneamente",
      "Legitimar diversos estilos de participação e aprendizagem",
      "Evitar ranking único que favoreça apenas um tipo de usuário",
      "Permitir que cada usuário encontre uma dimensão onde possa se destacar"
    ],
    examples: [
      "Ranking de 'Mais Consistente' separado de 'Maior Volume'",
      "Classificação por 'Maior Melhoria Percentual' ao longo do tempo",
      "Leaderboard de 'Maior Variedade de Práticas' explorando diferentes áreas"
    ],
    imageUrl: practice5,
    source: "App Duolingo"
  },
  {
    number: 6,
    title: "6 - Feedback Contextualizado e Educativo",
    description: "Acompanhar todas as métricas gamificadas com mensagens que explicitem sua conexão com objetivos reais de aprendizagem, desenvolvimento ou saúde, transformando números abstratos em significado concreto.",
    theoreticalBase: "Nielsen (1994); Zimmerman (2002); Martín-Peña, García-Magro & Sánchez-López (2024)",
    details: [
      "Contextualizar todas as métricas com seu significado real e aplicável",
      "Explicar a conexão entre números gamificados e objetivos de vida reais",
      "Transformar dados abstratos em insights acionáveis",
      "Fornecer feedback educativo que amplie compreensão do usuário",
      "Evitar métricas sem contexto ou propósito claro"
    ],
    examples: [
      "Ao invés de apenas '500 pontos', mostrar 'Você desenvolveu consistência - isso te ajuda a formar hábitos duradouros'",
      "Feedback: 'Sua melhoria de 30% indica domínio crescente desta habilidade'",
      "Mensagens que conectam ações gamificadas a benefícios de saúde mental ou física"
    ],
    imageUrl: practice6,
    source: "App Duolingo"
  },
  {
    number: 7,
    title: "7 - Detecção e Prevenção de Padrões de Uso Nocivos",
    description: "Monitorar comportamentos de risco (uso compulsivo, overtraining, sacrifício de bem-estar) e intervir proativamente com mensagens educativas e ajustes temporários de dificuldade.",
    theoreticalBase: "Nicholson (2015); Deci, Koestner & Ryan (1999)",
    details: [
      "Implementar sistemas de detecção de padrões de uso nocivos ou compulsivos",
      "Monitorar sinais de overtraining ou sacrifício de bem-estar",
      "Intervir proativamente com mensagens educativas e de cuidado",
      "Ajustar temporariamente a dificuldade para prevenir burnout",
      "Priorizar saúde e bem-estar do usuário sobre métricas de engajamento"
    ],
    examples: [
      "Alerta: 'Você está engajado há 3 horas - que tal uma pausa?'",
      "Detecção de padrão de uso noturno excessivo com sugestão de horários saudáveis",
      "Redução automática de metas quando sistema detecta sinais de fadiga"
    ],
    imageUrl: practice7,
    source: "support.strava.com"
  },
  {
    number: 8,
    title: "8 - Colaboração Como Alternativa à Competição",
    description: "Oferecer modos cooperativos onde grupos trabalham em direção a objetivos coletivos, distribuindo reconhecimento de forma equitativa e reduzindo pressão competitiva individualista.",
    theoreticalBase: "Deci & Ryan (1985); Marczewski (2015); Hamari, Koivisto & Sarsa (2014)",
    details: [
      "Criar modos cooperativos como alternativa viável à competição individual",
      "Estabelecer objetivos coletivos que incentivem trabalho em equipe",
      "Distribuir reconhecimento de forma equitativa entre membros do grupo",
      "Reduzir pressão competitiva que pode gerar ansiedade ou exclusão",
      "Valorizar contribuições individuais dentro do contexto colaborativo"
    ],
    examples: [
      "Desafios de equipe onde grupo trabalha para meta coletiva",
      "Recompensas compartilhadas quando todos alcançam progresso mínimo",
      "Modo cooperativo opcional para quem prefere não competir individualmente"
    ],
    imageUrl: practice8,
    source: "uxplanet.org"
  },
  {
    number: 9,
    title: "9 - Personalização Adaptativa por Perfil Motivacional",
    description: "Identificar perfis de usuários (conforme modelo HEXAD ou similar) e ajustar interface para destacar elementos mais relevantes a cada tipo.",
    theoreticalBase: "Marczewski (2015); Busch et al. (2015); Tondello et al. (2016)",
    details: [
      "Identificar perfil motivacional do usuário (achiever, socializer, explorer, etc.)",
      "Adaptar interface para destacar elementos relevantes a cada perfil",
      "Personalizar recompensas e feedbacks conforme preferências identificadas",
      "Usar modelos como HEXAD para categorização precisa",
      "Permitir ajustes manuais além da detecção automática"
    ],
    examples: [
      "Para 'Achievers': destacar badges, rankings e conquistas",
      "Para 'Socializers': enfatizar recursos colaborativos e comunidade",
      "Para 'Explorers': apresentar conteúdos ocultos e descobertas"
    ],
    imageUrl: practice9,
    source: "dribbble.com"
  },
  {
    number: 10,
    title: "10 - Transparência em Sistemas Aleatórios",
    description: "Exibir taxas aproximadas de probabilidade em sistemas de drops ou recompensas aleatórias, reduzindo frustração e percepção de arbitrariedade.",
    theoreticalBase: "Kahneman & Tversky (1979); Nicholson (2015)",
    details: [
      "Tornar transparentes as probabilidades em sistemas de recompensas aleatórias",
      "Exibir taxas de drop ou chances de obter itens raros",
      "Reduzir percepção de arbitrariedade e manipulação",
      "Diminuir frustração ao estabelecer expectativas realistas",
      "Manter ética ao evitar mecânicas exploratórias opacas"
    ],
    examples: [
      "Mostrar 'Chance de 5% de item raro' antes de abrir caixa de recompensa",
      "Exibir probabilidades acumuladas: 'Após 10 tentativas, chance de 45%'",
      "Indicador de 'Você está próximo da probabilidade média de conseguir este item'"
    ],
    imageUrl: practice10,
    source: "dribbble.com"
  },
  {
    number: 11,
    title: "11 - Visualização de Progressão Pessoal Longitudinal",
    description: "Fornecer dashboards que mostrem evolução temporal (gráficos de tendências, padrões históricos, comparação com desempenho anterior), destacando melhoria individual ao longo do tempo e recontextualizando posição atual como parte de trajetória pessoal.",
    theoreticalBase: "Locke & Latham (1990); Zimmerman (2002); Hamari, Koivisto & Sarsa (2014); Martín-Peña, García-Magro & Sánchez-López (2024)",
    details: [
      "Criar dashboards de evolução temporal com gráficos e tendências",
      "Mostrar padrões históricos e comparações com desempenho anterior",
      "Destacar melhoria individual ao longo do tempo",
      "Recontextualizar posição atual dentro da trajetória pessoal",
      "Valorizar progresso relativo ao próprio histórico, não apenas comparações externas"
    ],
    examples: [
      "Gráfico mostrando evolução de pontuação nos últimos 6 meses",
      "Comparação: 'Você melhorou 40% comparado ao seu primeiro mês'",
      "Timeline visual mostrando marcos alcançados ao longo da jornada"
    ],
    imageUrl: practice11,
    source: "dribbble.com"
  },
  {
    number: 12,
    title: "12 - Segurança e Equidade em Contextos de Performance",
    description: "Priorizar alertas de segurança sobre incentivos de desempenho, especialmente em contextos físicos ou de saúde, e democratizar acesso a comparações calibradas por características demográficas.",
    theoreticalBase: "Nicholson (2015); Busch et al. (2015)",
    details: [
      "Sempre priorizar segurança e bem-estar sobre métricas de performance",
      "Implementar alertas preventivos em contextos de saúde ou atividade física",
      "Calibrar comparações por características demográficas relevantes",
      "Democratizar acesso a comparações justas e contextualizadas",
      "Evitar incentivos que possam levar a comportamentos de risco"
    ],
    examples: [
      "Em app de fitness: alerta de segurança sobrepõe incentivo de treino intenso",
      "Rankings calibrados por idade, gênero ou nível de experiência",
      "Mensagem: 'Seu descanso é importante - pausar não afeta seu progresso'"
    ],
    imageUrl: practice12,
    source: "dribbble.com"
  },
  {
    number: 13,
    title: "13 - Autonomia Total de Engajamento",
    description: "Garantir que todos os elementos gamificados (sociais, competitivos, colecionáveis) sejam estritamente opcionais com experiência core plenamente funcional sem eles, e validar explicitamente escolhas de não-participação através de mensagens e badges que legitimem diferentes estilos.",
    theoreticalBase: "Deci & Ryan (1985); Nicholson (2015); Marczewski (2015); Busch et al. (2015)",
    details: [
      "Tornar todos os elementos gamificados estritamente opcionais",
      "Garantir que experiência core funcione plenamente sem gamificação",
      "Validar escolhas de não-participação em rankings ou competições",
      "Criar badges que legitimem diferentes estilos de engajamento",
      "Respeitar preferência por experiência minimalista ou privada"
    ],
    examples: [
      "Opção de desativar completamente rankings e comparações sociais",
      "Badge de 'Jornada Solitária' para quem opta por não participar de recursos sociais",
      "Funcionalidades core acessíveis sem necessidade de completar desafios gamificados"
    ],
    imageUrl: practice13,
    source: "dribbble.com"
  },
  {
    number: 14,
    title: "14 - Fragmentação de Objetivos de Longo Prazo em Marcos Intermediários",
    description: "Dividir metas distantes em conquistas menores e celebráveis, reduzindo distância psicológica entre esforço e recompensa e mantendo senso de progresso contínuo.",
    theoreticalBase: "Locke & Latham (1990); Zimmerman (2002)",
    details: [
      "Dividir objetivos de longo prazo em marcos intermediários alcançáveis",
      "Criar conquistas menores que sejam celebráveis ao longo do caminho",
      "Reduzir distância psicológica entre esforço inicial e recompensa final",
      "Manter senso constante de progresso e realização",
      "Evitar desmotivação causada por metas muito distantes"
    ],
    examples: [
      "Meta de 100 dias dividida em marcos de 10, 25, 50 e 75 dias com celebrações",
      "Certificado intermediário ao completar cada módulo de curso longo",
      "Conquistas progressivas: 'Primeira semana', 'Primeiro mês', 'Primeiro trimestre'"
    ],
    imageUrl: practice14,
    source: "App Duolingo"
  },
  {
    number: 15,
    title: "15 - Narrativa e Construção de Identidade Progressiva",
    description: "Estruturar conquistas como arcos narrativos que comuniquem evolução de identidade (ex: 'Novato → Aprendiz → Praticante → Mestre'), utilizando linguagem, títulos e progressão visual que reforcem transformação pessoal ao longo da jornada.",
    theoreticalBase: "Marczewski (2015); Nicholson (2015); Martín-Peña, García-Magro & Sánchez-López (2024)",
    details: [
      "Criar arcos narrativos que comuniquem evolução de identidade do usuário",
      "Utilizar progressão de títulos que reflitam transformação pessoal",
      "Empregar linguagem e elementos visuais que reforcem a jornada",
      "Estruturar níveis como etapas significativas de desenvolvimento",
      "Conectar conquistas a narrativa maior de crescimento pessoal"
    ],
    examples: [
      "Progressão narrativa: 'Novato' → 'Aprendiz' → 'Praticante' → 'Mestre' → 'Mentor'",
      "Títulos que evoluem com significado: 'Explorador Curioso' → 'Navegador Experiente'",
      "Elementos visuais que mudam para refletir jornada (avatar, interface, badges)"
    ],
    imageUrl: practice15,
    source: "dribbble.com"
  },
  {
    number: 16,
    title: "16 - Transparência de Propósito e Design Intencional",
    description: "Explicitar claramente o propósito pedagógico, comportamental ou de bem-estar de cada mecânica gamificada, comunicando aos usuários POR QUE cada elemento existe e COMO contribui para objetivos reais (não apenas 'porque é divertido').",
    theoreticalBase: "Nicholson (2015); Deterding et al. (2011); Deci & Ryan (1985)",
    details: [
      "Comunicar claramente o propósito de cada elemento gamificado",
      "Explicar POR QUE cada mecânica existe e COMO ajuda o usuário",
      "Conectar design de gamificação a objetivos pedagógicos ou de bem-estar reais",
      "Evitar gamificação superficial ou puramente manipulativa",
      "Tornar design intencional transparente para construir confiança"
    ],
    examples: [
      "Tooltip explicando: 'Streaks ajudam a formar hábitos através de consistência diária'",
      "Mensagem: 'Este ranking multidimensional existe para valorizar diferentes estilos de aprendizagem'",
      "Seção 'Por que gamificação?' explicando propósito pedagógico de cada elemento"
    ],
    imageUrl: practice16,
    source: "dribbble.com"
  },
  {
    number: 17,
    title: "17 - Integração com Contexto e Objetivos Externos",
    description: "Permitir que usuários conectem atividades gamificadas a metas, projetos ou contextos reais através de sincronizações (calendários, ferramentas de trabalho, objetivos de vida), evitando que sistema se torne isolado da realidade do usuário.",
    theoreticalBase: "Deci & Ryan (1985); Busch et al. (2015); Nicholson (2015)",
    details: [
      "Permitir integração com ferramentas e contextos reais do usuário",
      "Sincronizar com calendários, aplicativos de produtividade e objetivos de vida",
      "Evitar isolamento do sistema gamificado da realidade do usuário",
      "Conectar conquistas virtuais a progresso em metas reais",
      "Facilitar transferência de aprendizagem para contextos práticos"
    ],
    examples: [
      "Sincronização com Google Calendar para alinhar metas a compromissos reais",
      "Integração com Trello/Notion para conectar badges a projetos profissionais",
      "Conexão com objetivos de vida: 'Esta conquista te aproxima de sua meta de carreira'"
    ],
    imageUrl: practice17,
    source: "dribbble.com"
  },
  {
    number: 18,
    title: "18 - Redundância Motivacional - Múltiplas Portas de Entrada",
    description: "Oferecer diversos sistemas motivacionais simultâneos (progressão numérica, coleção, narrativa, social) para que quando um perde eficácia, outros mantenham engajamento, evitando pontos únicos de falha motivacional.",
    theoreticalBase: "Marczewski (2015); Hamari, Koivisto & Sarsa (2014)",
    details: [
      "Implementar múltiplos sistemas motivacionais operando simultaneamente",
      "Combinar progressão numérica, coleção, narrativa e elementos sociais",
      "Evitar dependência de um único mecanismo motivacional",
      "Permitir que diferentes sistemas suportem usuários em momentos diferentes",
      "Criar redundância que aumente resiliência motivacional do sistema"
    ],
    examples: [
      "Sistema que combina pontos, badges, níveis, narrativa e comunidade simultaneamente",
      "Se usuário perde interesse em ranking, ainda há coleção de badges para explorar",
      "Múltiplas formas de progresso visível: XP, conquistas, storyline, conexões sociais"
    ],
    imageUrl: practice18,
    source: "dribbble.com"
  },
  {
    number: 19,
    title: "19 - Ritmo Respiratório e Momentos de Pausa Estruturada",
    description: "Incorporar ciclos de intensidade/descanso ao design, incentivando ativamente períodos de recuperação por meio de mensagens, ajustes de dificuldade temporários, e validação de que 'não fazer' é parte estratégica de progressão sustentável.",
    theoreticalBase: "Nicholson (2015); Deci, Koestner & Ryan (1999); Lally et al. (2010)",
    details: [
      "Incorporar ciclos naturais de intensidade e descanso no design do sistema",
      "Incentivar ativamente períodos de recuperação e pausa",
      "Validar que 'não fazer' é parte estratégica e saudável do processo",
      "Ajustar temporariamente dificuldade após períodos intensos",
      "Comunicar importância do descanso para sustentabilidade de longo prazo"
    ],
    examples: [
      "Sistema sugere 'Semana de recuperação' após mês de alta intensidade",
      "Mensagem: 'Descanso é progresso - seu corpo e mente precisam de recuperação'",
      "Ajuste automático de metas após período intenso detectado"
    ],
    imageUrl: practice19,
    source: "dribbble.com"
  },
  {
    number: 20,
    title: "20 - Camadas de Profundidade Progressiva (Onboarding Gradual)",
    description: "Revelar complexidade do sistema gradualmente, começando com mecânicas core simples e desbloqueando elementos avançados (economia, social, customização) conforme usuário demonstra domínio, evitando sobrecarga cognitiva inicial.",
    theoreticalBase: "Nielsen (1994); Csikszentmihalyi (1990); Tondello et al. (2016)",
    details: [
      "Revelar complexidade do sistema de forma gradual e progressiva",
      "Começar com mecânicas core simples e intuitivas",
      "Desbloquear elementos avançados conforme usuário demonstra domínio",
      "Evitar sobrecarga cognitiva ao apresentar tudo de uma vez",
      "Criar curva de aprendizagem suave que mantém engajamento sem frustração"
    ],
    examples: [
      "Primeiro nível: apenas pontos e progresso básico",
      "Nível 5: desbloqueio de badges e conquistas",
      "Nível 10: acesso a features sociais e rankings",
      "Nível 20: economia virtual e customização avançada"
    ],
    imageUrl: practice20,
    source: "habitica.fandom.com"
  }
];
