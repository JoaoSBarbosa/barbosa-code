import {ProjectsDataPros} from "@/app/type/projectsDataPros";

export const ProjectsData: ProjectsDataPros[] = [
    {
        id: 1,
        title: 'Portfólio versão 1',
        coverImage: 'project1.png',
        description: 'Primeiro portfolio desenvolvido através.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        url: 'https://joaosbarbosa.github.io/portfolio-barbosa/',
    },
    {
        id: 2,
        title: 'Medic Land',
        coverImage: 'project2.png',
        description: 'Projeto de um site de um hospital ficticio contendo páginas, feito com HTML, CSS e JavaScript. O intuioto do projeto é estudar o bom uso de flex box, eventos js, variaveis css, e responsividade .',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        url: 'https://medicland.netlify.app/',
    },
    {
        id: 3,
        title: 'Galeria de imagens',
        coverImage: 'project3.png',
        description: 'Projeto de uma página de galerias de imagens feito com HTML, Sass. O intuioto do projeto é entender a funcionalidade e uso do Sass como Mixins, Nesting, Heranças entre outros, aplicando todos o seus conceitos para desenvolvver um layout responsivo e bonito.',
        technologies: ['HTML', 'Sass',],
        url: 'https://galerias.netlify.app/',
    },
    {
        id: 4,
        title: 'Cyberdyne System',
        coverImage: 'project4.png',
        description: ' Projete um site fictício totalmente responsivo. O intuioto do projeto é aprimorar as habilidade em desenvolver sites aplicando bons uso de variaveis, responsividade, reutilização de códigos e posicionamento de elementos. O site foi desenvolvido com HTML, CSSe JavaScript.',
        technologies: ['HTML', 'CSS','JavaScript'],
        url: 'https://cyberdynesystemv2.netlify.app/',
    },
    {
        id: 5,
        title: 'Bikcraft',
        coverImage: 'project10.png',
        description: 'Bikcraft é um projeto de e-commerce fictício que oferece a venda de bicicletas elétricas personalizadas de alta qualidade, bem como opções de seguros para os compradores. O site foi desenvolvido com foco em proporcionar uma experiência responsiva e acessível em diferentes dispositivos. O objetivo principal foi aprimorar habilidades em design responsivo, organização de projetos, modularização de código e integração com serviços externos. A construção do site envolveu a utilização de tecnologias como HTML, PHP, CSS e JavaScript, garantindo uma estrutura sólida e interatividade aprimorada para os usuários.',
        technologies: ['HTML', 'PHP','CSS','JavaScript'],
        url: 'https://bikcraft.joaosbarbosa.com.br/',
    },{
        id: 6,
        title: 'Itaqua Alerta',
        coverImage: 'project12.png',
        description: 'Itaqua Alerta é um sistema web para denúncias e acompanhamento de ocorrências em bairros. Desenvolvido em PHP, JavaScript e Bootstrap, permite cadastro de denúncias com detalhes como título, categoria, localização, data e foto. Após o registro, um e-mail de confirmação é enviado ao usuário. Conta com sistema de login, recuperação de conta e validações de idade mínima (16 anos) e e-mail. O projeto foi desenvolvido no contexto de trabalho de extensão acadêmica do curso de Análise e Desenvolvimento de Sistemas.',
        technologies: ['PHP', 'Bootstrap', 'CSS','JavaScript'],
        url: 'https://github.com/JoaoSBarbosa/itaquaalerta',
        gitRepository:true
    },
    {
        id: 6,
        title: 'Playcinejb',
        coverImage: 'project11.png',
        description: 'PlayCineJB é um clone do sistema de streaming Netflix, desenvolvido com React, HTML, CSS e JavaScript. O projeto consome a API do TMDB para exibir informações sobre filmes e séries. Totalmente responsivo, permite aos usuários explorar o catálogo de títulos, visualizar detalhes, trailers e avaliações. É uma aplicação web que simula a experiência de um serviço de streaming, visando aprimorar habilidades em consumo de APIs, componentização com React e desenvolvimento de interfaces responsivas.',
        technologies: ['REACT', 'CSS','HTML'],
        url: 'https://playcinejb-fg65ejzx6-joaosbarbosa.vercel.app/',
    },
];