"use client";
import React from "react";
import { HeaderNav } from "@/app/components/header/HeaderNav";
import { ServicesContext } from "@/app/Contexts/ServicesContext";
import Footer from "@/app/pages/footer/page";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import styles from "./experiences.module.css";
import {ContainerLayout} from "@/app/components/layouts/Layouts";

interface Experience {
    year: string;
    lastYear?: string;
    company: string;
    role: string;
    responsibilities: string;
    technologies: string[];
}

export const Experiencece = () => {
    const experiences: Experience[] = [
        {
            year: "2022",
            lastYear: "2023",
            company: "ByFanstore",
            role: "Assistente de programação",
            responsibilities:
                "Responsável pelo desenvolvimento de sites de e-commerce com WordPress, utilizando codificação em JavaScript, HTML5 e CSS para estruturar e estilizar o conteúdo; " +
                "Criação de documentação técnica para auxiliar na manutenção e atualização do site, assim como na integração com sistemas ERP;\n" +
                "• Utilização de ferramentas como: Jira, Trello, Analytics, Google Search Console Google Data, Workspace, Hotjar e Mautic para monitoramento e análise de dados;",
            technologies: ["React", "JavaScript", "HTML", "CSS"],
        },
        {
            year: "2023",
            lastYear: "atualmente",
            company: "Angulo Sistema",
            role: "Programador júnior",
            responsibilities:
                "Responsável pelo desenvolvimento backend Java, aplicando camadas service, controller, repository, DAO, e métodos CRUD para processar requisições. No frontend, emprego React, Next, TypeScript, Tailwind, e Flowbite, consumindo APIs REST do Java e facilitando a comunicação entre frontend e backend.",
            technologies: ["Java", "Spring", "Next-js", "MySQL","React"],
        },
    ];

    const customizedMarker = (experience: Experience) => {
        return (
            <span
                className={`${styles.marker} flex items-center justify-center text-white border-circle z-1 shadow-1`}
            >
        {experience.year}
      </span>
        );
    };

    const customizedContent = (experience: Experience) => {
        return (
            <Card
                title={experience.role}
                subTitle={`${experience.company} (${experience.year} - ${experience.lastYear})`}
                className={styles.card}
            >
                <p>
                    <strong>Responsabilidades:</strong>{" "}
                    {experience.responsibilities}</p>
                <p>
                    <strong>Tecnologias utilizadas:</strong>{" "}
                    {experience.technologies.join(", ")}
                </p>
            </Card>
        );
    };

    return (
        <ContainerLayout title={"Experiência"}>
            <div className={styles.container}>
                <Timeline
                    value={experiences}
                    align="alternate"
                    className={styles.timeline}
                    marker={customizedMarker}
                    content={customizedContent}
                />
            </div>
        </ContainerLayout>
    );
};

