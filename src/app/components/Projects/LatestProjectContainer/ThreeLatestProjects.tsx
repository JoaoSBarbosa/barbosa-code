import {LatestProjectCard} from "@/app/components/ProjectCard/LatestProjectCard/LatestProjectCard";
import {projectsData} from "@/app/list/projects/projectsData";
import styles from "./styles.module.css";
import Link from "next/link";


export const ThreeLatestProjects = () => {
    const lastThreeProjects = projectsData.slice(-3);
    return (
        <article className={`${styles.projectListContainer} `}>
            <h2 className={`${styles.lastProjectTitle} max-w-screen-xl mx-auto`}>últimos projetos</h2>
            <ul className={`${styles.projectListContent}`}>
                {lastThreeProjects.map((project, index) => (
                    <Link href={`/projects/${project.id}`}>
                        <li key={project.id}>
                            <LatestProjectCard project={project}/>
                        </li>
                    </Link>
                ))}
            </ul>

        </article>
    );
};