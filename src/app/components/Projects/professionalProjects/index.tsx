import {LayoutContainer} from "@/app/components/layouts/LayoutContainer";
import styles from "@/app/components/Projects/LatestProjectContainer/styles.module.css";
import Link from "next/link";
import {LatestProjectCard} from "@/app/components/ProjectCard/LatestProjectCard/LatestProjectCard";
import {ProfessionalProjectsData} from "@/app/list/projects/ProfessionalProjectsData";

export const ProfessionalProjects=()=>{
    const lastThreeProjects = ProfessionalProjectsData.slice(-3);

    return(
        <LayoutContainer title={"Projetos Profissionais"} id={"professionalProjects"}>
            <ul className={`${styles.projectListContent}`}>
                {lastThreeProjects.map((project, index) => (
                    <a href={`${project.url}`} target={'_blank'} title={`Visiste o projeto ${project.title}`}>
                        <li key={project.id} className={"border border-gray-900"}>
                            <LatestProjectCard project={project} pathImage={"projectsProfessional"}/>
                        </li>
                    </a>
                ))}
            </ul>
        </LayoutContainer>
    )
}