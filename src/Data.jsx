import Project1 from './assets/project1.png';
import Project2 from './assets/project2.png';
import Project3 from './assets/project3.png';
import Project4 from './assets/project4.png';
import Project5 from './assets/project5.png';
import Project6 from './assets/project6.png';
import Project7 from './assets/project7.png';
import Project9 from './assets/project9.png';
import Project11 from './assets/project11.png';
import Project12 from './assets/project12.png';
import Project13 from './assets/project13.png';
import Project14 from './assets/project14.png';
import Project15 from './assets/project15.png';
import Project17 from './assets/project17.png';
import Project18 from './assets/project18.png';
import Project19 from './assets/project19.png';
import Project20 from './assets/project20.png';
import Project21 from './assets/project21.png';
import Project22 from './assets/project22.png';
import Project23 from './assets/project23.png';
import Project24 from './assets/project24.png';
import Project25 from './assets/project25.png';
import Project26 from './assets/project26.png';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Serviços',
    path: 'services',
  },
  {
    name: 'Habilidades',
    path: 'skills',
  },
  {
    name: 'Trabalhos',
    path: 'work',
  },
  {
    name: 'Currículo',
    path: 'resume',
  },

  {
    name: 'Artigos',
    path: 'blog',
  },
  {
    name: 'Contato',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Front-end',
    title: 'Desenvolvedora Front-end',
    description:
      'Tenho experiência com React, Bootstrap, JavaScript e TypeScript, além de estar explorando o Next.js recentemente.',
  },
  {
    id: 2,
    name: ' UI/UX ',
    title: ' Designer UI/UX ',
    description:
      'Com experiência em Figma e Photoshop, focada em criar interfaces intuitivas e centradas no usuário.',
  },
  {
    id: 3,
    name: ' Back-end ',
    title: ' Desenvolvedora Back-end ',
    description:
      ' Gosto de Java e Spring Boot, tenho conhecimentos também em Node.js e Python. ',
  },
  {
    id: 4,
    name: ' Banco de dados ',
    title: ' Banco de dados ',
    description:
      ' Possuo conhecimentos em SQL, incluindo modelagem, otimização e administração básica. ',
  },
  {
    id: 5,
    name: ' Cloud ',
    title: ' Cloud - AWS ',
    description:
      'iniciando com AWS, focada em aprender e aplicar práticas para otimizar recursos e garantir a escalabilidade e segurança das soluções na nuvem.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'Java - Spring Boot',
    percentage: 38,
    description:
      'Experiência com desenvolvimento backend usando Java e Spring Boot, focando em criar aplicações robustas e escaláveis.',
  },

  {
    id: 2,
    name: 'JavaScript - React',
    percentage: 74,
    description:
      'Conhecimento em React para criar interfaces de usuário dinâmicas e responsivas usando bootstrap e next.',
  },

  {
    id: 3,
    name: 'SQL',
    percentage: 55,
    description:
      'Experiência com bancos de dados SQL, incluindo modelagem, otimização e administração garantindo integridade e a eficiência dos dados.',
  },

  {
    id: 4,
    name: 'AWS',
    percentage: 15,
    description:
      'Início no aprendizado de AWS, com foco em compreender e aplicar práticas para otimização de recursos e segurança em soluções de nuvem.',
  },

  {
    id: 5,
    name: 'Python',
    percentage: 33,
    description:
      'Início no aprendizado de Python para IA, explorando TensorFlow, scikit-learn, Pandas e NumPy para desenvolvimento e análise de dados.',
  },

  {
    id: 6,
    name: 'Figma',
    percentage: 80,
    description:
      'Habilidade em usar Figma para design de interfaces, criando protótipos e mockups visualmente atraentes e funcionais',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'UI UX Design',
    title: 'Coffe Station',
    description:
      'A Coffee Station é uma plataforma para amantes de café em estações de transporte público.',
      link:'https://www.figma.com/design/zrgibQwdee4D6ABOb1rB3L/Landing?node-id=0-1&t=ijC8KIK5t53rgNUY-1' ,
  },
  {
    id: 2,
    img: Project2,
    category: 'UI UX Design',
    title: 'Mobile Teste',
    description:
      'Design de um app que permite gerenciar todos os dispositivos da sua casa de forma prática e intuitiva com poucos cliques.',
      link: 'https://www.figma.com/design/P70s7U2MijeZLLQr7Epq7C/Mobile---Teste?node-id=0-1&t=bVB35iJfSDJNrVaM-1',
  },
  {
    id: 3,
    img: Project3,
    category: 'Back-end',
    title: 'API Bloco de Notas',
    description:
      'To-Do List API é uma API RESTful para gerenciamento de tarefas, oferecendo as funcionalidades completas de CRUD com autenticação segura.',
      link:'https://github.com/pamyszz/to-do-list',
  },
  {
    id: 4,
    img: Project4,
    category: 'Front-end',
    title: 'Sul Solidário',
    description:
      'Uma plataforma criada para ajudar vítimas de enchentes no RS, atuando como Designer UI/UX e Desenvolvedora Front-End.',
      link:'https://www.sulidario.com.br/',
  },
  {
    id: 5,
    img: Project5,
    category: 'Back-end',
    title: 'Escola de idiomas - Banco de dados',
    description:
      'O modelo representa um sistema de gestão acadêmica com foco em alunos, cursos e matrículas.',
      link:'https://github.com/pamyszz/escola-de-idiomas-mer',
  },
  {
    id: 6,
    img: Project6,
    category: 'Outros',
    title: 'Logo - Modelly',
    description:
      'Criei a logo para a Modelly, uma plataforma que conecta artesãos com compradores, destacando seus produtos artesanais.',
      link:'https://drive.google.com/file/d/1SmKuEQ41hfNsoLRBK5geQtg7luHMQL4V/view?usp=sharing',
},

{
  id: 7,
  img: Project7,
  category: 'UI UX Design',
  title: 'Menos é Mais',
  description:
    '"Menos é mais" é um design de landing page para uma loja minimalista, destacando produtos com um layout simples e elegante.',
    link:'https://www.figma.com/design/8qUgak5irf77pkvKMD8UYe/Menos-%C3%A9-Mais?m=auto&t=YYYA84BDEgCK0Ufq-1',
},

{
  id: 8,
  img: Project4,
  category: 'UI UX Design',
  title: 'Sul Solidário',
  description:
    'Uma plataforma criada para ajudar vítimas de enchentes no RS, atuando como Designer UI/UX e Desenvolvedora Front-End.',
    link:'https://www.figma.com/design/TdGmJKzMV6kiVcAA6ovRh8/Sul-Solid%C3%A1rio?m=auto&t=YYYA84BDEgCK0Ufq-1',
},

{
  id: 9,
  img: Project9,
  category: 'Front-end',
  title: 'Fokus',
  description:
    'Fokus é uma ferramenta de produtividade que ajuda você a focar nas tarefas importantes e a gerenciar seu tempo de forma eficiente',
    link:'https://fokus-alura-ten.vercel.app/',
},

{
  id: 10,
  img: Project1,
  category: 'Front-end',
  title: 'Coffe Station',
  description:
    'A Coffee Station é uma plataforma para amantes de café em estações de transporte público.',
    link:'https://coffee-station-mauve.vercel.app/',
},

{
  id: 11,
  img: Project11,
  category: 'Back-end',
  title: ' Consutório - Banco de dados',
  description:
    'Banco de dados para gerenciar informações de pacientes, médicos, consultas e receitas de um consultório médico.',
    link:'https://github.com/pamyszz/consultorio-bd-mer',
},

{
  id: 12,
  img: Project12,
  category: 'UI UX Design',
  title: 'Braskoki',
  description:
    'Braskoki fornece ferramentas para cortar, perfurar e desbastar, incluindo serras, brocas e discos abrasivos.',
    link:'https://www.figma.com/design/oITszelq9SHSYD9XYcYbDN/Braskoki---Releitura?m=auto&t=YYYA84BDEgCK0Ufq-1',
},

{
  id: 13,
  img: Project13,
  category: 'UI UX Design',
  title: 'Netshoes - Releitura',
  description:
    'Releitura da Landing Page da Netshoes: Atualizei o design para uma navegação mais intuitiva e destaque claro para ofertas e produtos.',
    link:'https://www.figma.com/design/wF8gzsVKWmvkacoC66sED7/Netshoes---Releitura?m=auto&t=YYYA84BDEgCK0Ufq-1',
},

{
  id: 14,
  img: Project14,
  category: 'Front-end',
  title: 'Praiagens',
  description:
    'Praiagens valoriza as praias brasileiras e promove a cultura local, destacando o melhor do litoral nacional com informações e ofertas exclusivas.',
    link:'https://praiagens-q9gj5wm7w-pamys-projects.vercel.app/',
},

{
  id: 15,
  img: Project14,
  category: 'UI UX Design',
  title: 'Praiagens',
  description:
    'Praiagens valoriza as praias brasileiras e promove a cultura local, destacando o melhor do litoral nacional com informações e ofertas exclusivas.',
    link:'https://www.figma.com/design/1uLAjj0Z88SegqY8Wfbjk4/...?m=auto&t=YYYA84BDEgCK0Ufq-1',
},

{
  id: 16,
  img: Project15,
  category: 'Front-end',
  title: 'Netflix Clone',
  description:
    'Clone do Netflix desenvolvido como projeto pessoal com HTML, CSS, JavaScript e Bootstrap.',
    link:'https://netflixo-ivory.vercel.app/',
},

{
  id: 17,
  img: Project17,
  category: 'Back-end',
  title: 'Loja de CDs - Banco de Dados',
  description:
    'Banco de dados para uma loja de CDs, gerenciando produtos, categorias, artistas, clientes e transações.',
    link:'https://github.com/pamyszz/loja-cds',
},

{
  id: 18,
  img: Project18,
  category: 'UI UX Design',
  title: 'GessoArt',
  description:
    'UI/UX Design para uma loja de gesso, com uma interface intuitiva e visualmente atraente para facilitar a navegação e a compra.',
    link:'https://www.figma.com/design/J83HUTcfv3HF7kiMkh2F3c/Loja-de-Gesso---Landing-Fict%C3%ADcia?m=auto&t=YYYA84BDEgCK0Ufq-1',
},

{
  id: 19,
  img: Project19,
  category: 'Front-end',
  title: 'Beats 3',
  description:
    'O site Beats 3 oferece fones de ouvido Beats de alta qualidade, com opções premium e acessíveis.',
    link:'https://pamyszz.github.io/Beats-3/',
},

{
  id: 20,
  img: Project20,
  category: 'Front-end',
  title: 'Modelo - Site Sushi',
  description:
    'Este é um site hipotético para um restaurante de sushi, com pratos populares, opção de pedidos e informações sobre eventos.',
    link:'https://pamyszz.github.io/Pamy-s-Sushi/',
},

{
  id: 21,
  img: Project21,
  category: 'UI UX Design',
  title: 'Divertidamente',
  description:
    'UI/UX Design pro catálogo de personagens de Divertidamente, com uma interface envolvente para explorar os personagens.',
    link:'',
},

{
  id: 22,
  img: Project22,
  category: 'Back-end',
  title: 'Modelly - Banco de Dados',
  description:
    'O banco de dados gerencia um marketplace de artesanato, incluindo usuários, produtos, pedidos, pagamentos e avaliações.',
    link:'https://github.com/pamyszz/modelly-banco',
},

{
  id: 23,
  img: Project23,
  category: 'Back-end',
  title: 'Caixa Eletrônico - Fictício',
  description:
    'Projeto de caixa eletrônico com funções para verificar saldo, extrato, saque, depósito, transferência e logout.',
    link:'https://github.com/pamyszz/caixa_eletronico',
},

{
  id: 24,
  img: Project24,
  category: 'Front-end',
  title: 'Jogo do Número Secreto',
  description:
    'O Jogo do Número Secreto desafia o jogador a adivinhar um número secreto com dicas sobre se o chute é maior ou menor.',
    link:'https://jogo-rho-ashy.vercel.app/',
},

{
  id: 25,
  img: Project25,
  category: 'Outros',
  title: 'Modelo de Post - Modelly',
  description:
    'Post sobre Modelly: uma plataforma que conecta artesãos com compradores, destacando produtos artesanais.',
    link:'https://www.figma.com/design/FqqJyZ3NY6PHCIgjdOYIat/Modelly-post?m=auto&t=KyHHrEaZugeN4H5V-1',
},

{
  id: 26,
  img: Project26,
  category: 'Outros',
  title: 'Mapa de Carreira',
  description:
    'O Mapa de Carreira destaca minha jornada profissional, habilidades em Desenvolvimento Web e proficiência em tecnologias.',
    link:'https://mapa-carreira.vercel.app/',
},
];

export const cv = [
  {
    id: 1,
    title: 'Recepcionista',
    subtitle: 'Hospital Japonês Santa Cruz',
    date: '2021 - 2022',
    description:
      'Minha função era: Fornecer informações aos pacientes, executar a marcação de consultas, organizar o protocolo de atendimento, assim como sanar dúvidas em geral, sempre à disposição para responder às várias demandas do setor',
    category: 'experience',
  },

  {
    id: 2,
    title: 'Análise e Desenvolvimento de Sistemas',
    subtitle: 'UNINOVE - Universidade Nove de Julho',
    date: '2022 - 2024',
    description:
      'Meu foco principal é analisar e desenvolver sistemas interativos, com ênfase em HTML, CSS e JavaScript, e também explorar a interseção entre o Front-End e o Back-End. Durante meu curso, aprendi a estruturar páginas da web, criar designs atraentes, dominar as linguagens essenciais como JavaScript e a utilização de frameworks Front-End como o React. Também adquiri habilidades em controle de versão, integração de APIs e muita noção de banco de dados, além de abordar tópicos de segurança na web.',
    category: 'education',
  },

  {
    id: 3,
    title: 'Psicologia Cognitiva e Psicolinguística',
    subtitle: 'USP - Universidade de São Paulo',
    date: '2019 - 2021',
    description:
      'A equipe de pesquisa, composta por estudantes de diferentes áreas, trabalhou colaborativamente, aprendendo a importância de ouvir e respeitar opiniões, especialmente em assuntos sensíveis. A pesquisa revelou que muitos alunos enfrentam discriminação racial e religiosa, mas também identificou exemplos inspiradores de combate à discriminação e promoção da diversidade. Com 440 horas de estudo, desenvolvemos habilidades em pesquisa e análise, destacando a importância da empatia e compaixão. A bolsa do CNPq foi crucial para o progresso do projeto, e espero que nosso trabalho contribua para a inclusão e compreensão nas comunidades.',
    category: 'education',
  },

  {
    id: 4,
    title: 'Desenvolvedora Front-end & Designer UI/UX',
    subtitle: 'Sul Solidário - Trabalho Voluntário',
    date: '05/2024 - 06/2024',
    description:
      'Desenvolvi em grupo uma plataforma para ajudar vítimas das enchentes no Rio Grande do Sul, reunindo informações, facilitando doações e colaborando com ONGs locais. Atuei como UI/UX Designer e Desenvolvedora Front-End.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Product Owner, Desenvolvedora Front-end & AWS',
    subtitle: 'Modelly',
    date: '02/2024 - 07/2024',
    description:
      'Como Product Owner deste projeto, gerenciei as tarefas da equipe, organizei o cronograma e trabalhei de forma eficaz, direcionando a equipe de acordo com as metodologias ágeis. Além disso, atuei como desenvolvedora Front-end, utilizando React.js. Para o back-end foi usado Java Spring e MySQL no banco de dados. Também fui responsável pela criação da identidade visual, posts e a interface de usuário.',
    category: 'experience',
  },

  {
    id: 6,
    title: 'Programação Web Full Stack - Java',
    subtitle: 'SENAC - Lapa Tito (Polo de Tecnologia)',
    date: '01/2024 - 07/2024',
    description:
      'O curso de Programador Web tem como objetivo formar profissionais capazes de desenvolver e estruturar tanto o Front-end quanto o Back-end de aplicações web. Ao longo do curso, os alunos criam projetos e realizam testes, garantindo a funcionalidade e eficiência das suas soluções. O currículo inclui o acesso e a manipulação de banco de dados utilizando diversas linguagens de programação, sempre aderindo aos padrões internacionais de desenvolvimento.',
    category: 'education',
  },

  {
    id: 7,
    title: 'Programação Web e Metodologias Ágeis',
    subtitle: 'PROA - Instituto Proa',
    date: '01/2024 - 07/2024',
    description:
    'O Proa é um curso voltado para a empregabilidade, preparando jovens nos aspectos Técnicos e Comportamentais. No núcleo técnico, os alunos desenvolvem suas habilidades em desenvolvimento Web Full Stack através de trabalhos em grupo, experiências corporativas, projetos e diversas atividades. No núcleo comportamental, o foco está em aprimorar as competências socioemocionais e o perfil profissional dos alunos, com atividades de autoconhecimento, definição de propósito, carreira e mercado de trabalho. Além disso, há o DemoDay, um projeto de conclusão onde os alunos aplicam os conhecimentos técnicos e comportamentais adquiridos ao longo do curso.',
    category: 'education',
  },

  {
    id: 8,
    title: 'Freelancer',
    subtitle: 'Desenovlvedora Front-end & Designer UI/UX',
    date: '01/2024 - 07/2024',
    description:
    'O Proa é um curso voltado para a empregabilidade, preparando jovens nos aspectos Técnicos e Comportamentais. No núcleo técnico, os alunos desenvolvem suas habilidades em desenvolvimento Web Full Stack através de trabalhos em grupo, experiências corporativas, projetos e diversas atividades. No núcleo comportamental, o foco está em aprimorar as competências socioemocionais e o perfil profissional dos alunos, com atividades de autoconhecimento, definição de propósito, carreira e mercado de trabalho. Além disso, há o DemoDay, um projeto de conclusão onde os alunos aplicam os conhecimentos técnicos e comportamentais adquiridos ao longo do curso.',
    category: 'experience',
  },
];

