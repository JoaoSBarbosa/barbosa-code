// import { TechnologiesDataProps } from "@/app/type/TechnologiesDataProps";
//
// export const TechnologiesData: TechnologiesDataProps[] = [
//     {
//         id: 1,
//         technology: "React js",
//         uraImage: "/img/icons/react.svg",
//         hardSkill: [
//             "Desenvolvimento de componentes React",
//             "Gerenciamento de estado com React Hooks",
//             "Integração de APIs usando React",
//             "Conhecimento em React Router",
//         ],
//         color: "#61DAFB" // Cor azul associada ao React
//     },
//     {
//         id: 2,
//         technology: "JavaScript",
//         uraImage: "/img/icons/javascript.svg",
//         hardSkill: [
//             "Programação assíncrona com Promises",
//             "Manipulação de DOM",
//             "Trabalhar com eventos e listeners",
//             "Conhecimento em ES6+ features"
//         ],
//         color: "#F7DF1E" // Cor amarela associada ao JavaScript
//     },
//     {
//         id: 3,
//         technology: "Tailwind CSS",
//         uraImage: "/img/icons/tailwindcss.svg",
//         hardSkill: [
//             "Estilização responsiva com Tailwind",
//             "Configuração e personalização de estilos",
//             "Utilização de classes utilitárias"
//         ],
//         color: "#38B2AC" // Cor verde associada ao Tailwind CSS
//     },
//     {
//         id: 4,
//         technology: "TypeScript",
//         uraImage: "/img/icons/typescript.svg",
//         hardSkill: [
//             "Tipagem estática em JavaScript",
//             "Interfaces e tipos personalizados",
//             "Configuração do ambiente com TypeScript"
//         ],
//         color: "#3178C6" // Cor associada ao TypeScript
//     },
//     {
//         id: 5,
//         technology: "Next.js",
//         uraImage: "/img/icons/nextjs.svg",
//         hardSkill: [
//             "Criação de páginas estáticas e dinâmicas",
//             "Roteamento com Next.js",
//             "Integração com API externa"
//         ],
//         color: "#000000" // Cor associada ao Next.js
//     },
//     {
//         id: 6,
//         technology: "Figma",
//         uraImage: "/img/icons/figma.svg",
//         hardSkill: [
//             "Design de interfaces no Figma",
//             "Colaboração e compartilhamento de designs",
//             "Extração de assets para desenvolvimento"
//         ],
//         color: "#F24E1E" // Cor associada ao Figma
//     },
//     {
//         id: 7,
//         technology: "Java",
//         uraImage: "/img/icons/java.svg",
//         hardSkill: [
//             "Programação orientada a objetos",
//             "Manipulação de exceções",
//             "Desenvolvimento de aplicações Java"
//         ],
//         color: "#007396" // Cor associada ao Java
//     },
//     {
//         id: 8,
//         technology: "Spring",
//         uraImage: "/img/icons/spring.svg",
//         hardSkill: [
//             "Desenvolvimento com o framework Spring",
//             "Configuração de segurança com Spring Security",
//             "Integração de bancos de dados com Spring Data"
//         ],
//         color: "#6DB33F" // Cor associada ao Spring
//     },
//     {
//         id: 9,
//         technology: "MySQL",
//         uraImage: "/img/icons/mysql.svg",
//         hardSkill: [
//             "Design de bancos de dados",
//             "Consultas SQL avançadas",
//             "Integração com Java e Spring"
//         ],
//         color: "#4479A1" // Cor associada ao MySQL
//     },
//     {
//         id: 10,
//         technology: "GIT",
//         uraImage: "/img/icons/git.svg",
//         hardSkill: [
//             "Controle de versão com Git",
//             "Branching e merging",
//             "Colaboração em repositórios Git"
//         ],
//         color: "#F05032" // Cor associada ao Git
//     },
// ];
//
// export default TechnologiesData;

import {TechnologiesDataProps} from "@/app/type/TechnologiesDataProps";

export const TechnologiesData: TechnologiesDataProps[] = [
    {
        id: 1,
        technology: "React js",
        uraImage: "/img/icons/react.svg",
        hardSkill: [
            { skill: "Desenvolvimento de componentes React", area: "Componentes" },
            { skill: "Gerenciamento de estado com React Hooks", area: "Estado" },
            { skill: "Integração de APIs usando React", area: "API" },
            { skill: "Conhecimento em React Router", area: "Roteamento" },
        ],
        color: "#61DAFB" // Cor azul associada ao React
    },
    {
        id: 2,
        technology: "JavaScript",
        uraImage: "/img/icons/javascript.svg",
        hardSkill: [
            { skill: "Programação assíncrona com Promises", area: "Async" },
            { skill: "Manipulação de DOM", area: "DOM" },
            { skill: "Trabalhar com eventos e listeners", area: "Events" },
            { skill: "Conhecimento em ES6+ features", area: "ES6" },
        ],
        color: "#F7DF1E" // Cor amarela associada ao JavaScript
    },
    {
        id: 3,
        technology: "Tailwind CSS",
        uraImage: "/img/icons/tailwindcss.svg",
        hardSkill: [
            { skill: "Estilização responsiva com Tailwind", area: "Responsive" },
            { skill: "Configuração e personalização de estilos", area: "Config" },
            { skill: "Utilização de classes utilitárias", area: "Utilitárias" },
        ],
        color: "#38B2AC" // Cor verde associada ao Tailwind CSS
    },
    {
        id: 4,
        technology: "TypeScript",
        uraImage: "/img/icons/typescript.svg",
        hardSkill: [
            { skill: "Tipagem estática em JavaScript", area: "Static Typing" },
            { skill: "Interfaces e tipos personalizados", area: "Interfaces" },
            { skill: "Configuração do ambiente com TypeScript", area: "Environment" },
        ],
        color: "#3178C6" // Cor associada ao TypeScript
    },
    {
        id: 5,
        technology: "Next.js",
        uraImage: "/img/icons/nextjs.svg",
        hardSkill: [
            { skill: "Criação de páginas estáticas e dinâmicas", area: "Static Pages" },
            { skill: "Roteamento com Next.js", area: "Routing" },
            { skill: "Integração com API externa", area: "External API" },
        ],
        color: "#000000" // Cor associada ao Next.js
    },
    {
        id: 6,
        technology: "Figma",
        uraImage: "/img/icons/figma.svg",
        hardSkill: [
            { skill: "Design de interfaces no Figma", area: "Design" },
            { skill: "Colaboração e compartilhamento de designs", area: "Collaboration" },
            { skill: "Extração de assets para desenvolvimento", area: "Assets" },
        ],
        color: "#F24E1E" // Cor associada ao Figma
    },
    {
        id: 7,
        technology: "Java",
        uraImage: "/img/icons/java.svg",
        hardSkill: [
            { skill: "Programação orientada a objetos", area: "OOP" },
            { skill: "Manipulação de exceções", area: "Exceptions" },
            { skill: "Desenvolvimento de aplicações Java", area: "Development" },
        ],
        color: "#007396" // Cor associada ao Java
    },
    {
        id: 8,
        technology: "Spring",
        uraImage: "/img/icons/spring.svg",
        hardSkill: [
            { skill: "Desenvolvimento com o framework Spring", area: "Development" },
            { skill: "Configuração de segurança com Spring Security", area: "Security" },
            { skill: "Integração de bancos de dados com Spring Data", area: "Database" },
        ],
        color: "#6DB33F" // Cor associada ao Spring
    },
    {
        id: 9,
        technology: "MySQL",
        uraImage: "/img/icons/mysql.svg",
        hardSkill: [
            { skill: "Design de bancos de dados", area: "Database Design" },
            { skill: "Consultas SQL avançadas", area: "Advanced SQL" },
            { skill: "Integração com Java e Spring", area: "Integration" },
        ],
        color: "#4479A1" // Cor associada ao MySQL
    },
    {
        id: 10,
        technology: "GIT",
        uraImage: "/img/icons/git.svg",
        hardSkill: [
            { skill: "Controle de versão com Git", area: "Version Control" },
            { skill: "Branching e merging", area: "Branching Merging" },
            { skill: "Colaboração em repositórios Git", area: "Collaboration" },
        ],
        color: "#F05032" // Cor associada ao Git
    },
    // ... (outros objetos da lista)
];
