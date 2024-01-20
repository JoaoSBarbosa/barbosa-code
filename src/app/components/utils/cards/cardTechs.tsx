"use client"
import {useState, useEffect, useContext} from "react";
import {Tabs} from 'flowbite-react';
import {TechnologiesData} from "@/app/list/technologies/technologiesData";
import {TechnologiesDataProps} from "@/app/type/TechnologiesDataProps";
import {Button, Timeline} from 'flowbite-react';
import {HiAcademicCap, HiArrowNarrowRight, HiCalendar, HiCode} from 'react-icons/hi';
import styles from "./cardTeach.module.css";
import {CreateContext} from "@/app/Contexts/ServicesContext";

export const CardTechs = () => {
    const [tech, setTech] = useState<TechnologiesDataProps | undefined>(TechnologiesData[0]);
    const [selectedTechIndex, setSelectedTechIndex] = useState<number | null>(null);

    const createContext = useContext(CreateContext);
    // UseEffect para manter selecionado o primeiro elemento da lista
    useEffect(() => {
        setTech(TechnologiesData[0]);
        setSelectedTechIndex(null);
    }, []);

    const handleTechClick = (techItem: TechnologiesDataProps, index: number) => {
        setTech(techItem);
        setSelectedTechIndex(index);
        console.log(techItem.technology);
        if (techItem.technology === "Next.js" ||
            techItem.technology === "React js" ||
            techItem.technology === "TypeScript" ||
            techItem.technology === "Tailwind CSS" ||
            techItem.technology === "JavaScript") {

            createContext?.setIsSelectionTech(true);
            createContext?.setSelectedTech("frontend");

        }else
        if (techItem.technology === "Java" ||
            techItem.technology === "Spring" ||
            techItem.technology === "GIT") {

            createContext?.setIsSelectionTech(true);
            createContext?.setSelectedTech("beckend");

        }else
        if (techItem.technology === "MySQL") {

            createContext?.setIsSelectionTech(true);
            createContext?.setSelectedTech("banco");

        }
        if (techItem.technology === "Figma") {

            createContext?.setIsSelectionTech(true);
            createContext?.setSelectedTech("ui");

        }
    };

    return (
        <div className={`flex flex-col gap-20 ${styles.cardTechMain}`} style={{padding: "20px"}}>
            <div className={`${styles.cardTechContainer}`}>
                {TechnologiesData.map((techItem, index) => (
                    <div
                        key={techItem.id}
                        className={`bg-transparent rounded-full cursor-pointer 
                        ${styles.svgContainer} ${selectedTechIndex === index ? styles.selectedTech : ''}
                         ${styles.technologiesImageContainer}`}
                        onClick={() => handleTechClick(techItem, index)}
                    >
                        <img
                            src={techItem.uraImage}
                            className={`rounded-full max-w-full object-cover `}
                            alt={techItem.technology}
                        />
                    </div>
                ))}
            </div>

            <div className={"flex flex-col gap-10"}>
                <div className={"flex items-center "}>
                    <h2 className={"text-3xl"}>{tech?.technology}</h2>
                    <span
                        style={{backgroundColor: tech?.color}}
                        className={"inline-block w-4 h-4 rounded-full ml-2"}
                    />
                </div>

                <Timeline>
                    {tech?.hardSkill.map((skill, index) => (
                        <Timeline.Item key={index}>
                            <Timeline.Point icon={HiCode}/>
                            <Timeline.Content>
                                <Timeline.Time>{skill.area}</Timeline.Time>
                                <Timeline.Body style={{maxWidth: "80%"}}
                                               className={"text-white mt-2"}>{skill.skill}</Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                    ))}
                </Timeline>
            </div>
        </div>
    );
};
