import {HeaderNav} from "@/app/components/header/HeaderNav";
import {ProjectsData} from "@/app/list/projects/projectsData";
import Link from "next/link";
import {
    BackgroundColors,
    LatestProjectCard, PaddingSize,
    TextColors
} from "@/app/components/ProjectCard/LatestProjectCard/LatestProjectCard";
import styles from "./styles.module.css";

const Page = () => {
    return (
        <>
            <HeaderNav/>
            <article className={`${styles.projectMain} `}>
                <div className={`${styles.projectListContainer} `}>
                    <h2 className={`${styles.lastProjectTitle} max-w-screen-xl mx-auto`}>Todos os projetos</h2>

                    <ul className={`${styles.projectListContent}`}>
                        {ProjectsData.map((project) => (
                            <Link href={`/projects/${project.id}`}>
                                <li key={project.id} >
                                    <LatestProjectCard
                                        project={project}
                                        backgroundColor={BackgroundColors.BLACK}
                                        textColor={TextColors.WHITE}
                                        paddingSize={PaddingSize.p15}

                                    />
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>


            </article>
        </>

    )
}

export default Page;