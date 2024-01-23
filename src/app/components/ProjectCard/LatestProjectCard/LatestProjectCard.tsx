import { ProjectsDataPros } from "../../../type/projectsDataPros";
import styles from "./styles.module.css";

import { FaReact, FaJs, FaHtml5, FaSass, FaCss3Alt } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

export type ProjectCardProps = {
    project: ProjectsDataPros;
    backgroundColor?: string;
    textColor?: string;
    paddingSize?:string;
    titleAlign?:string;
}

const technologyIcons: Record<string, React.FC<IconBaseProps>> = {
    React: FaReact,
    JavaScript: FaJs,
    HTML: FaHtml5,
    Sass: FaSass,
    CSS: FaCss3Alt,
};

export const BackgroundColors= {
    WHITE: "#FFFFFF",
    BLACK: "#000000",
    DARK_BLACK: "#1E1E1E",
}
export const TextColors = {
    WHITE: "#FFFFFF",
    BLACK: "#000000",
    GRAY: "#808080",
};
export const PaddingSize = {
    p10: "10px",
    p20: "20px",
    p15: "15px",
};
export const LatestProjectCard = ({ project, paddingSize,titleAlign="center", backgroundColor = BackgroundColors.BLACK, textColor = TextColors.WHITE }: ProjectCardProps) => {
    return (
        <div
            className={`flex flex-col gap-5 ${styles.lastProjecContainer}`}
             style={{ backgroundColor, color: textColor, padding:paddingSize }}>

            <h3 className={`${styles.lastProjectSubTitle}`}>
                {project?.title}
            </h3>
            <img
                src={`/img/projects/${project.coverImage}`}
                alt={project.coverImage}
                className={"rounded-md border-2 border-gray-700"}

            />

            <div className={"flex gap-10 items-center justify-center flex-wrap"}>
                {project?.technologies?.map((tec, index) => {
                    const IconComponent = technologyIcons[tec];

                    return IconComponent ? (
                        <span key={index} className={`${styles.lastProjectTechnologies} rounded-full flex items-center justify-center`}>
                            <IconComponent />
                        </span>
                    ) : null;
                })}
            </div>
        </div>
    );
};
// export const LatestProjectCard = ({ project }: ProjectCardProps) => {
//     return (
//         <div className={`flex flex-col gap-5 ${styles.lastProjecContainer} `}
//         style={{backgroundColor:"#000"}}>
//             <h3
//                 className={`${styles.lastProjectSubTitle}`}>
//                 {project?.title}
//             </h3>
//             <img
//                 src={`/img/projects/${project.coverImage}`}
//                 alt={project.coverImage}
//                 className={"rounded-md"}
//             />
//
//             <div className={"flex gap-10 items-center justify-center flex-wrap"}>
//                 {project?.technologies?.map((tec, index) => {
//                     const IconComponent = technologyIcons[tec];
//
//                     return IconComponent ? (
//                         <span
//                             key={index}
//                             className={`${styles.lastProjectTechnologies}
//                             rounded-full flex items-center justify-center`}>
//                             <IconComponent />
//                         </span>
//                     ) : null;
//                 })}
//             </div>
//         </div>
//     )
// }
