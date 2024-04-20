import {HeaderNav} from "@/app/components/Sections/header/HeaderNav";
import {ProjectsData} from "@/app/list/projects/projectsData";
import Link from "next/link";
import {
    BackgroundColors,
    LatestProjectCard, PaddingSize,
    TextColors
} from "@/app/components/ProjectCard/LatestProjectCard/LatestProjectCard";
import styles from "./styles.module.css";
import Footer from "@/app/components/Sections/footer";
import {DisplayCard} from "@/app/components/displayCard";

const Page = () => {
    return (
        <>
            <HeaderNav/>
            <article className={`${styles.projectMain} p-10`}>
                <div className={`${styles.projectListContainer} max-w-screen-2xl mx-auto border border-amber-100`}>
                    <h2 className={`${styles.lastProjectTitle}  text-gray-400`}>Todos os projetos</h2>


                    <ul className={`grid grid-cols-4 gap-4 p-5 border border-amber-100`}>
                        {ProjectsData.map((project, index) => (

                            <Link href={`/pages/projects/${project.id}`} className={"block w-max"}>
                                <li key={project.id} className={""}>
                                    <DisplayCard project={project} height={400} width={300}/>
                                </li>
                            </Link>


                        ))}
                    </ul>
                </div>
            </article>
            <Footer/>
        </>

    )
}

export default Page;