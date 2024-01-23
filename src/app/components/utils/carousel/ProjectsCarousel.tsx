

    import { Carousel } from 'flowbite-react';
    import Link from 'next/link';
    import { DataProfessionalProjectsProps } from '@/app/list/projects/dataProfessionalProjects';
    import {CarouselTheme} from "@/app/components/Theme/CarouselTheme";
    import styles from "@/app/components/Projects/LatestProjectContainer/styles.module.css";
    import {LinkButton, LinkButtonBorder} from "@/app/components/utils/buttons/NavButton";

    type ProfessionalProjectsProps = {
        projectsData: DataProfessionalProjectsProps[];
        projectId: number;
        carroselTitle:string;
    };

    export const ProjectsCarousel = ({ projectsData, projectId,carroselTitle }: ProfessionalProjectsProps) => {
        const firstProject = projectsData[projectId];

        if (!firstProject) {
            // Trate o caso em que não há projetos na lista
            return null;
        }

        const { coverImage, title } = firstProject;

        return (
            <article className=" flex-1 bg-black  rounded-md p-2" style={{height:"440px"}}>

                <h2 className={" text-1xl text-gray-400"}>{carroselTitle}</h2>
                <Carousel pauseOnHover theme={CarouselTheme}>
                    {coverImage.map((image, index) => (
                        <img key={index} src={`/img/projects/${image}`} alt={title} height={300} className="object-cover  h-80" />
                    ))}
                </Carousel>
                {/*<Link href={`/projects/${projectId}`}>Confira</Link>*/}
                <div className={"max-w-screen-xl mx-auto"}>
                    <LinkButtonBorder href={`/professionalProjects/${projectId}`} value={"Mais detalhes"}/>
                </div>
            </article>
        );
    };

