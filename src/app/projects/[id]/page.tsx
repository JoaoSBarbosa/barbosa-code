import {ProjectsDataPros} from "@/app/type/projectsDataPros";
import {HeaderNav} from "@/app/components/header/HeaderNav";
import {projectsData} from "@/app/list/projects/projectsData";
import styles from "./styles.module.css";
import {Card} from 'flowbite-react';

type Props = {
    params: {
        id: number;
    };
};
const Page = ({params}: Props) => {
    // Convertendo params.id para número
    const projectId = Number(params.id);

    // Encontrar o projeto com o ID correspondente
    const project: ProjectsDataPros | undefined = projectsData.find(
        (p) => p.id === projectId
    );

    console.log("Teste");
    console.log('Project ID:', projectId);
    console.log('Found Project:', project);

    return (
        <>
            <HeaderNav/>
            <div>
                {project ? (
                    // <div className={`${styles.projectContainer} bg-gray-700`}>
                    //     <div className={`${styles.projectContent} max-w-screen-xl mx-auto`}>
                    //         <div className={styles.projectImageContainer}>
                    //             <img src={`/img/${project.coverImage}`} alt={project.title} />
                    //         </div>
                    //         <div className={styles.projectDetails}>
                    //             <h2>{project.title}</h2>
                    //             <p>{project.description}</p>
                    //             <div className={styles.projectTechnologies}>
                    //                 <p>Technologies:</p>
                    //                 <ul>
                    //                     {project.technologies.map((tech, index) => (
                    //                         <li key={index}>{tech}</li>
                    //                     ))}
                    //                 </ul>
                    //             </div>
                    //             <a href={project.url} target="_blank" rel="noopener noreferrer">
                    //                 Visit Project
                    //             </a>
                    //         </div>
                    //     </div>
                    // </div>
                    <div className={`${styles.projectContainer} bg-gray-700`}>
                        <div className={`${styles.projectContent} max-w-screen-xl mx-auto`}>
                            <Card className="" imgSrc={`/img/${project.coverImage}`} horizontal>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {project.title}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {project.description}
                                </p>

                            </Card>
                        </div>
                    </div>
                ) : (
                    <h2>Projeto não encontrado</h2>
                )}
            </div>
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
