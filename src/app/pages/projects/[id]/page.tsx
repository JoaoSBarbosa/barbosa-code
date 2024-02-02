import {ProjectsDataPros} from "@/app/type/projectsDataPros";
import {HeaderNav} from "@/app/components/header/HeaderNav";
import {ProjectsData} from "@/app/list/projects/projectsData";
// import styles from "./styles.module.css";
import styles from "../../../globalStyles/projects.module.css";
import {Card} from 'flowbite-react';
import {
    colorOptions,
    ExternalNavButton,
    LinkButton,
    LinkButtonBorder,
    NavButton
} from "@/app/components/utils/buttons/NavButton";
import {ProfessionalProjects} from "@/app/components/utils/carousel/ProfessionalProjectsCarousel";
import {DataProfessionalProjects} from "@/app/list/projects/dataProfessionalProjects";
import {HiOutlineArrowSmLeft} from "react-icons/hi";
import React from "react";
import Footer from "@/app/pages/footer/page";

type Props = {
    params: {
        id: number;
    };
};
const Page = ({params}: Props) => {
    // Convertendo params.id para número
    const projectId = Number(params.id);

    // Encontrar o projeto com o ID correspondente
    const project: ProjectsDataPros | undefined = ProjectsData.find(
        (p) => p.id === projectId
    );


    return (
        <>
            <HeaderNav/>
            <div>

                {project ? (
                    <div className={`${styles.projectContainer} bg-gray-700`}>
                        {/*<div*/}
                        {/*    className={`${styles.projectContainerButton} max-w-screen-xl mx-auto flex items-start sm:items-center py-2 my-4  w-full`}>*/}
                        {/*    <NavButton href={"/."} value={"Voltar"}>*/}
                        {/*        <HiOutlineArrowSmLeft className="h-6 w-6"/>*/}
                        {/*    </NavButton>*/}

                        {/*</div>*/}
                        <div className={`${styles.projectContent} max-w-screen-xl mx-auto`}>


                            <div className={styles.projectImageContainer}>
                                <img src={`/img/projects/${project.coverImage}`} alt={project.title}/>
                            </div>


                            <div className={styles.projectDetails}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className={styles.projectTechnologies}>
                                    <p>Tecnologias:</p>
                                    <ul>
                                        {project.technologies.map((tech, index) => (
                                            <li key={index}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div
                                    className={`${styles.projectContainerButton} max-w-screen-xl mx-auto flex items-start sm:items-center py-2 my-4  w-full`}>

                                    <ExternalNavButton
                                        width={"maxContent"}
                                        href={project?.url}
                                        value="Visite o projeto"
                                    />
                                    <NavButton
                                        textColor={"#fff"}
                                        href={"/."}
                                        value={"Voltar"}
                                    >
                                        <HiOutlineArrowSmLeft className="h-6 w-6"/>
                                    </NavButton>
                                </div>
                            </div>
                        </div>


                    </div>
                    // <div className={`${styles.projectContainer} bg-gray-700`}>
                    //     <div className={`${styles.projectContent} max-w-screen-xl mx-auto`}>
                    //         <Card className="w-full" imgSrc={`/img/${project.coverImage}`} horizontal>
                    //             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    //                 {project.title}
                    //             </h5>
                    //             <p className="font-normal text-gray-700 dark:text-gray-400">
                    //                 {project.description}
                    //             </p>
                    //
                    //         </Card>
                    //     </div>
                    // </div>
                ) : (
                    <h2>Projeto não encontrado</h2>
                )}
            </div>
            <Footer/>
        </>
    );
};


// const Page = ({ params }: Props) => {
//     // Encontrar o projeto com o ID correspondente
//     const project: ProjectsDataPros | undefined = projectsData.find(
//         (p) => p.id === params.id
//     );
//
//     console.log("Teste");
//     console.log('Project ID:', params.id);
//     console.log('Found Project:', project);
//
//     return (
//         <>
//             <HeaderNav />
//             <div>
//                 {project ? (
//                     <>
//                         <h2>{project.title}</h2>
//                         <p>{project.description}</p>
//                         {/* Adicione outros elementos conforme necessário */}
//                     </>
//                 ) : (
//                     <h2>Projeto não encontrado</h2>
//                 )}
//             </div>
//         </>
//     );
// };

export default Page;
