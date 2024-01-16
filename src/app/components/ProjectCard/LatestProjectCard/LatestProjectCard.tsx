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

const technologyColors: Record<string, string> = {
    React: '#61DAFB',
    JavaScript: '#F7DF1E',
    HTML: '#E34C26',
    Sass: '#CC6699',
    CSS: '#1572B6',
};

export const LatestProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <>
            <img src={`/img/${project.coverImage}`} alt={project.coverImage} />
            <h3 className={`${styles.lastProjectSubTitle}`}>{project?.title}</h3>
            <p>{project.id}</p>
            <div className={"flex gap-3 flex-wrap"}>
                {project?.technologies?.map((tec, index) => {
                    const IconComponent = technologyIcons[tec];
                    const color = technologyColors[tec] || '#000'; // Cor padrão caso não esteja definida

                    return IconComponent ? (
                        <span key={index} className={`${styles.lastProjectTechnologies} rounded-full flex items-center justify-center`} style={{ color }}>
                            <IconComponent />
                        </span>
                    ) : null;
                })}
            </div>
        </>
    )
}
