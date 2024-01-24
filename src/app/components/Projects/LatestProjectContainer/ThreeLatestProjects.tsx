import {LatestProjectCard} from "@/app/components/ProjectCard/LatestProjectCard/LatestProjectCard";
import {ProjectsData} from "@/app/list/projects/projectsData";
import styles from "./styles.module.css";
import Link from "next/link";
import {LinkButton, NavButton} from "@/app/components/utils/buttons/NavButton";
import {ProjectsDataPros} from "@/app/type/projectsDataPros";

type ThreeLatestProjectsProps ={
    projectsData: ProjectsDataPros[],
    title: string,
    hrefUri: string,
}
//últimos projetos
export const ThreeLatestProjects = ({projectsData, title, hrefUri}:ThreeLatestProjectsProps) => {
    const lastThreeProjects = projectsData.slice(-3);
    return (
        <article className={`${styles.projectListContainer}`}>
            <h2 className={`${styles.lastProjectTitle} max-w-screen-xl mx-auto`}>{title}</h2>
            <ul className={`${styles.projectListContent}`}>
                {lastThreeProjects.map((project, index) => (
                    <Link href={`/projects/${project.id}`}>
                        <li key={project.id}>
                            <LatestProjectCard project={project}/>
                        </li>
                    </Link>
                ))}
            </ul>

            <div className={"max-w-screen-xl mx-auto px-5"}>
                <LinkButton href={`/${hrefUri}`} value={"Ver todos"}/>
            </div>
        </article>
    );
};