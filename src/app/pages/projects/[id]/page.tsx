// import {ProjectsDataPros} from "@/app/type/projectsDataPros";
// import {HeaderNav} from "@/app/components/Sections/header/HeaderNav";
// import {ProjectsData} from "@/app/list/projects/projectsData";
// import styles from "../../../globalStyles/projects.module.css";
// import {
//     ExternalNavButton,
//     NavButton
// } from "@/app/components/utils/buttons/NavButton";
// import {HiOutlineArrowSmLeft} from "react-icons/hi";
// import React from "react";
// import Footer from "@/app/components/Sections/footer";
//
// type Props = {
//     params: {
//         id: number;
//     };
// };
// const Page = ({params}: Props) => {
//     // Convertendo params.id para número
//     const projectId = Number(params.id);
//
//     // Encontrar o projeto com o ID correspondente
//     const project: ProjectsDataPros | undefined = ProjectsData.find(
//         (p) => p.id === projectId
//     );
//
//
//     return (
//         <>
//             <HeaderNav/>
//             <div>
//
//                 {project ? (
//                     <div className={`${styles.projectContainer} bg-gray-700`}>
//
//                         <div className={`${styles.projectContent} max-w-screen-xl mx-auto border border-purple-500`}>
//
//                             <div className={styles.projectImageContainer}>
//                                 <img src={`/img/projects/${project.coverImage}`} alt={project.title}/>
//                             </div>
//
//                             <div className={styles.projectDetails}>
//                                 <h2>{project.title}</h2>
//                                 <p>{project.description}</p>
//                                 <div className={styles.projectTechnologies}>
//                                     <p>Tecnologias:</p>
//                                     <ul>
//                                         {project.technologies.map((tech, index) => (
//                                             <li key={index}>{tech}</li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 <div
//                                     className={`${styles.projectContainerButton} max-w-screen-xl mx-auto flex items-start sm:items-center py-2 my-4  w-full`}>
//
//                                     <ExternalNavButton
//                                         width={"maxContent"}
//                                         href={project?.url}
//                                         value="Visite o projeto"
//                                     />
//                                     <NavButton
//                                         textColor={"#fff"}
//                                         href={"/."}
//                                         value={"Voltar"}
//                                     >
//                                         <HiOutlineArrowSmLeft className="h-6 w-6"/>
//                                     </NavButton>
//                                 </div>
//                             </div>
//                         </div>
//
//                     </div>
//
//                 ) : (
//                     <h2>Projeto não encontrado</h2>
//                 )}
//             </div>
//             <Footer/>
//         </>
//     );
// };
//
// export default Page;

import {ProjectsDataPros} from "@/app/type/projectsDataPros";
import {HeaderNav} from "@/app/components/Sections/header/HeaderNav";
import {ProjectsData} from "@/app/list/projects/projectsData";
import {HiOutlineArrowSmLeft, HiOutlineLink} from "react-icons/hi";
import React from "react";
import Footer from "@/app/components/Sections/footer";
import styles from "./ProjectSelected.module.css";

type Props = {
    params: {
        id: number;
    };
};


const ProjectSelected = ({params}: Props) => {
    const projectId = Number(params.id);
    const project: ProjectsDataPros | undefined = ProjectsData.find(
        (p) => p.id === projectId
    );

    return (
        <div className="min-h-screen flex flex-col">
            <HeaderNav/>
            <main className="flex-grow">
                {project ? (
                    <div className="bg-black py-8">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className={"border border-gray-400 rounded-lg"}>
                                    <img
                                        src={`/img/projects/${project.coverImage}`}
                                        alt={project.title}
                                        className={`w-full h-auto max-h-dvh rounded-lg shadow-lg ${styles.projectImage}`}
                                    />
                                </div>
                                <div className="text-white">
                                    <h2 className="text-3xl font-bold mb-4">
                                        {project.title}
                                    </h2>
                                    <p className="mb-4">{project.description}</p>
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold mb-2">
                                            Tecnologias:
                                        </h3>
                                        <div className="flex flex-wrap">
                                            {project.technologies.map(
                                                (tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-gray-600 text-white py-1 px-2 mr-2 mb-2 rounded"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className="tems-start gap-5  mt-8">
                                        <div className="grid grid-cols-2 gap-5 w-max">

                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                                                bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-lg
                                                shadow-purple-500/50 hover:bg-gradient-to-br text-white font-bold py-2 px-4 rounded-lg "
                                            >
                                                Visite o projeto

                                            </a>


                                            <a
                                                href="/"
                                                className="
                                                flex items-center text-purple-500 hover:text-white border border-purple-700
                                                hover:bg-purple-800 focus:ring-2 focus:outline-none focus:ring-purple-300
                                                font-medium rounded-lg px-5 py-2.5"
                                            >
                                                <HiOutlineArrowSmLeft className="h-6 w-6 mr-2"/>
                                                Voltar
                                            </a>

                                            <a
                                                href="/pages/projects"
                                                className="
                                                text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-800
                                                focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
                                                text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500
                                                dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 col-span-2"
                                            >
                                                Ver todos os projetos
                                            </a>

                                        </div>

                                    </div>
                                    {/*<div className="flex items-center space-x-4">*/}
                                    {/*    <a*/}
                                    {/*        href={project.url}*/}
                                    {/*        target="_blank"*/}
                                    {/*        rel="noopener noreferrer"*/}
                                    {/*        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"*/}
                                    {/*    >*/}
                                    {/*        Visite o projeto*/}
                                    {/*    </a>*/}
                                    {/*    <a*/}
                                    {/*        href="/"*/}
                                    {/*        className="flex items-center text-white hover:text-gray-300"*/}
                                    {/*    >*/}
                                    {/*        <HiOutlineArrowSmLeft className="h-6 w-6 mr-2"/>*/}
                                    {/*        Voltar*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h2 className="text-white text-center mt-8">
                        Projeto não encontrado
                    </h2>
                )}
            </main>
            <Footer/>
        </div>
    );
};

export default ProjectSelected;