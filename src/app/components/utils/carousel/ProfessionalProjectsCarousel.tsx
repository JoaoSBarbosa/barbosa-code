import {Carousel, Badge } from 'flowbite-react';
import Link from 'next/link';
import {DataProfessionalProjectsProps} from '@/app/list/projects/dataProfessionalProjects';
import {CarouselTheme} from "@/app/components/Theme/CarouselTheme";
import styles from "@/app/components/Projects/LatestProjectContainer/styles.module.css";
import {LinkButton, LinkButtonBorder} from "@/app/components/utils/buttons/NavButton";

type ProfessionalProjectsProps = {
    projectsData: DataProfessionalProjectsProps[];
    projectId: number;
    carroselTitle: string;
};

export const ProfessionalProjects = ({projectsData, projectId, carroselTitle}: ProfessionalProjectsProps) => {
    const firstProject = projectsData[projectId];

    if (!firstProject) {
        // Trate o caso em que não há projetos na lista
        return null;
    }

    const {coverImage, title} = firstProject;

    return (
        <div className="bg-black relative rounded-md p-1" style={{height: "400px"}}>
            <span className={"absolute z-50 left-1 right-1 text-gray-200 bottom-1 text-1xl p-2 bg-black"}>
                {carroselTitle}
            </span>
            {/*<h2 className={" text-1xl text-gray-400"}>{carroselTitle}</h2>*/}

            <Carousel pauseOnHover theme={CarouselTheme}>
                {coverImage.map((image, index) => (
                    <img
                        key={index}
                        src={`/img/projects/${image}`}
                        alt={title}
                        className="object-cover"
                        style={{height: "100%"}}

                    />
                ))}
            </Carousel>
            {/*<Link href={`/projects/${projectId}`}>Confira</Link>*/}
            <div className={"max-w-screen-xl mt-4 mx-auto"}>
                <LinkButtonBorder href={`/pages/professionalProjects/${projectId}`} value={"Mais detalhes"}/>
            </div>
        </div>
    );
};
