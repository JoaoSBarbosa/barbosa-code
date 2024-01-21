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
        technologies: ['HTLM', 'CSS','JavaScript'],
        url: 'https://cyberdynesystemv2.netlify.app/',
    },
];