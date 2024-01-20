
import { TechnologiesDataProps } from "@/app/type/TechnologiesDataProps";

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
            { skill: "Configuração do ambiente com TypeScript", area: "Ambiente" },
        ],
        color: "#3178C6" // Cor associada ao TypeScript
    },
    {
        id: 5,
        technology: "Next.js",
        uraImage: "/img/icons/nextjs.svg",
        hardSkill: [
            { skill: "Criação de páginas estáticas e dinâmicas", area: "Páginas Estáticas" },
            { skill: "Roteamento com Next.js", area: "Roteamento" },
            { skill: "Integração com API externa", area: "API Externa" },
        ],
        color: "#000000" // Cor associada ao Next.js
    },
    {
        id: 6,
        technology: "Figma",
        uraImage: "/img/icons/figma.svg",
        hardSkill: [
            { skill: "Design de interfaces no Figma", area: "Design" },
            { skill: "Colaboração e compartilhamento de designs", area: "Colaboração" },
            { skill: "Extração de assets para desenvolvimento", area: "Assets" },
        ],
        color: "#F24E1E" // Cor associada ao Figma
    },
    {
        id: 7,
        technology: "Java",
        uraImage: "/img/icons/java.svg",
        hardSkill: [
            {
                skill: "Desenvolvimento de sistemas utilizando os princípios da Programação Orientada a Objetos (OOP).",
                area: "Desenvolvimento",
            },
            {
                skill: "Experiência na manipulação de exceções para tratamento de erros em aplicações Java",
                area: "Desenvolvimento",
            },
            {
                skill: "Desenvolvimento de aplicações robustas e escaláveis em Java",
                area: "Desenvolvimento",
            },
            { skill: "Criação de tabelas e relacionamentos em bancos de dados", area: "Banco de Dados" },
        ],
        color: "#007396"
    },
    {
        id: 8,
        technology: "Spring",
        uraImage: "/img/icons/spring.svg",
        hardSkill: [
            {
                skill: "Habilidades com Spring Framework para o desenvolvimento eficiente de aplicações empresariais robustas e escaláveis.",
                area: "Desenvolvimento",
            },
            { skill: "Desenvolvimento com o framework Spring", area: "Desenvolvimento" },
            { skill: "Configuração de segurança com Spring Security", area: "Segurança" },
            { skill: "Integração de bancos de dados com Spring Data", area: "Integração" },

        ],
        color: "#6DB33F" // Cor associada ao Spring
    },
    {
        id: 9,
        technology: "MySQL",
        uraImage: "/img/icons/mysql.svg",
        hardSkill: [
            { skill: "Design de tabelas e relacionamentos", area: "Banco de Dados" },
            { skill: "Consultas SQL avançadas", area: "Consultas Avançadas SQL" },
            { skill: "Integração com Java e Spring", area: "Integração" },
        ],
        color: "#4479A1" // Cor associada ao MySQL
    },
    {
        id: 10,
        technology: "GIT",
        uraImage: "/img/icons/git.svg",
        hardSkill: [
            { skill: "Controle de versão com Git", area: "Controle de Versão" },
            { skill: "Branching e merging", area: "Branching e Merging" },
            { skill: "Colaboração em repositórios Git", area: "Colaboração" },
        ],
        color: "#F05032" // Cor associada ao Git
    },
];