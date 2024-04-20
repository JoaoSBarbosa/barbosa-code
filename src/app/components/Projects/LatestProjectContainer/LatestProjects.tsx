import {LatestProjectCard} from "@/app/components/ProjectCard/LatestProjectCard/LatestProjectCard";
import styles from "./styles.module.css";
import Link from "next/link";
import {LinkButton, NavButton} from "@/app/components/utils/buttons/NavButton";
import {ProjectsDataPros} from "@/app/type/projectsDataPros";
import {ContainerLayout} from "@/app/components/layouts/Layouts";
import {DisplayCard} from "@/app/components/displayCard";
import {ProjectsData} from "@/app/list/projects/projectsData";
import {useEffect, useState} from "react";


//últimos projetos
export const LatestProjects = () => {

    const [lastThreeProjects, setLastThreeProjects] = useState<ProjectsDataPros[]>([]);
    useEffect(() => {
        setLastThreeProjects(ProjectsData.slice(-3))
    }, []);

    // const lastThreeProjects = ProjectsData.slice(-3);
    return (

        <ContainerLayout title={'últimos projetos'}>
            <ul className={`${styles.projectListContent}`}>
                {lastThreeProjects.map((project, index) => (
                    <div className={"flex flex-col"}>
                        <Link href={`/pages/projects/${project.id}`}>
                            <li key={project.id} className={"border border-gray-900"}>
                                <DisplayCard project={project}/>
                            </li>
                        </Link>
                        <span className={"text-white"}>{project.id}</span>
                    </div>

                ))}
            </ul>

            <div className={"max-w-screen-xl mx-auto px-5"}>
                <LinkButton href={`/projects`} value={"Ver todos"}/>
            </div>
        </ContainerLayout>
    );
};