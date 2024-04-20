"use client";
import React, {useEffect, useState} from "react";
import {HeaderNav} from "@/app/components/Sections/header/HeaderNav";
import {ServicesContext} from "@/app/Contexts/ServicesContext";
import Footer from "@/app/components/Sections/footer";
import {Timeline as PrimeTimeline} from "primereact/timeline";
import {Card} from "primereact/card";
import styles from "./experiences.module.css";
import {ContainerLayout} from "@/app/components/layouts/Layouts";
import {Button, Timeline} from "flowbite-react";
import {HiArrowNarrowRight, HiBriefcase, HiCalendar} from "react-icons/hi";
import {TimelineTheme} from "@/app/theme/TimelineTheme";

interface Experience {
    year: string;
    lastYear?: string;
    company: string;
    role: string;
    responsibilities: string;
    technologies: string[];
}

export const Experiencece = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Verifica se a tela é pequena
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Defina o tamanho de tela pequena conforme necessário
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Verifica o tamanho da tela ao carregar a página

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


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
            technologies: ["Java", "Spring", "Next-js", "MySQL", "React"],
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

                {
                    !isSmallScreen ? (

                            <PrimeTimeline
                                value={experiences}
                                align="alternate"
                                className={styles.timeline}
                                marker={customizedMarker}
                                content={customizedContent}
                            />
                        )
                        :
                        (
                            <Timeline className={"text-white"} theme={TimelineTheme} >
                                {experiences.map((experience)=>(
                                    <Timeline.Item>
                                        <Timeline.Point icon={HiBriefcase} />
                                        <Timeline.Content>
                                            <span className="text-sm my-1 font-bold text-gray-500">{experience.year} - {experience.lastYear}</span>
                                            <h2 className="text-2xl my-1 font-semibold text-customPurple">{experience.company}</h2>
                                            <h4 className={`text-xl font-semibold text-customPurple ${styles.subTitle}`}>{experience.role}</h4>
                                            <p className="text-lg my-1 text-gray-400 max-w-screen-2xl text-justify">{experience.responsibilities}</p>
                                        </Timeline.Content>
                                    </Timeline.Item>
                                ))}
                            </Timeline>
                        )
                }
            </div>
        </ContainerLayout>
    );
};

