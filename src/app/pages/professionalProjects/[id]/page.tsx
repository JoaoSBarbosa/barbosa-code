import {DataProfessionalProjectsProps, DataProfessionalProjects} from "@/app/list/projects/dataProfessionalProjects";
import {HeaderNav} from "@/app/components/header/HeaderNav";
import styles from "./styles.module.css";
import {ExternalNavButton, NavButton} from "@/app/components/utils/buttons/NavButton";
import Footer from "@/app/pages/footer/page";
import {Button, Tooltip} from 'flowbite-react';

type Props = {
    params: {
        id: number;
    };
};

const Page = ({params}: Props) => {
    // Convertendo params.id para número
    const projectId = Number(params.id);

    // Encontrar o projeto com o ID correspondente
    const project: DataProfessionalProjectsProps | undefined = DataProfessionalProjects.find(
        (p) => p.id === projectId
    );
    return (
        <>
            <HeaderNav/>
            <div>
                {project ? (
                    <div className={`${styles.projectContainer} bg-gray-700`}>
                        <div className={`${styles.projectContent} max-w-screen-xl mx-auto`}>

                            <div className={`${styles.projectImageContainer} flex justify-center`}>
                                <img
                                    src={`/img/projects/${project.coverImage[0]}`}
                                    alt={`${project.title}`}
                                />
                            </div>

                            <div className={styles.projectDetails}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className={styles.projectTechnologies}>
                                    <p>Tecnologias:</p>
                                    <ul className={"flex gap-5 flex-wrap"}>
                                        {project.technologies.map((tech, index) => (
                                            <li key={index}>
                                                <Tooltip content={tech} style="light">
                                                    <img
                                                        src={`/img/icons/${tech.toLowerCase()}.svg`}
                                                        alt={`${tech}`}
                                                        className={`rounded-full p-1`}
                                                    />
                                                </Tooltip>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <ExternalNavButton
                                    href={project?.url}
                                    value="Visite o projeto"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <h2>Projeto não encontrado</h2>
                )}
            </div>
            <Footer/>
        </>
    );
};

export default Page;
//     return (
//         <>
//             <HeaderNav />
//             <div>
//                 {project ? (
//                     <div className={`${styles.projectContainer} bg-gray-700`}>
//                         <div className={`${styles.projectContent} max-w-screen-xl mx-auto`}>
//                             <div className={styles.projectImageContainer}>
//                                 <img src={`/img/projects/${project.coverImage[0]}`} alt={`${project.title} Image`} />
//                             </div>
//                             <div className={styles.projectDetails}>
//                                 <h2>{project.title}</h2>
//                                 <p>{project.description}</p>
//                                 <div className={styles.projectTechnologies}>
//                                     <p>Technologies:</p>
//                                     <ul>
//                                         {project.technologies.map((tech, index) => (
//                                             <li key={index}>{tech}</li>
//                                         ))}
//                                     </ul>
//                                 </div>
//
//
//                                 <ExternalNavButton
//                                     href={project?.url}
//                                     value="Visite o projeto"
//                                 />
//
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <h2>Projeto não encontrado</h2>
//                 )}
//             </div>
//         </>
//     );
// };
//
// export default Page;
