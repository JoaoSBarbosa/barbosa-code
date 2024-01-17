import { ProjectsDataPros } from "../../../type/projectsDataPros";
import styles from "./styles.module.css";

import { FaReact, FaJs, FaHtml5, FaSass, FaCss3Alt } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

export type ProjectCardProps = {
    project: ProjectsDataPros;
}

const technologyIcons: Record<string, React.FC<IconBaseProps>> = {
    React: FaReact,
    JavaScript: FaJs,
    HTML: FaHtml5,
    Sass: FaSass,
    CSS: FaCss3Alt,
};

export const LatestProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className={`flex flex-col gap-5 ${styles.lastProjecContainer} `}>
            <h3 className={`${styles.lastProjectSubTitle}`}>{project?.title}</h3>
            <img src={`/img/${project.coverImage}`} alt={project.coverImage} className={"rounded-md"}/>

            <div className={"flex gap-10 items-center justify-center flex-wrap"}>
                {project?.technologies?.map((tec, index) => {
                    const IconComponent = technologyIcons[tec];

                    return IconComponent ? (
                        <span
                            key={index}
                            className={`${styles.lastProjectTechnologies} 
                            rounded-full flex items-center justify-center`}>
                            <IconComponent />
                        </span>
                    ) : null;
                })}
            </div>
        </div>
    )
}
