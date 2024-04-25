import { HeaderNav } from "@/app/components/Sections/header/HeaderNav";
import { ProjectsData } from "@/app/list/projects/projectsData";
import Link from "next/link";
import {
  BackgroundColors,
  LatestProjectCard,
  PaddingSize,
  TextColors,
} from "@/app/components/ProjectCard/LatestProjectCard/LatestProjectCard";
import styles from "./styles.module.css";
import Footer from "@/app/components/Sections/footer";
import { DisplayCard } from "@/app/components/displayCard";

const Page = () => {
  return (
    <>
      <HeaderNav />
      <article className={`${styles.projectMain} p-2 lg:p-10`}>
        <div
          className={`${styles.projectListContainer} max-w-screen-2xl mx-auto`}
        >
          <h2 className={`${styles.lastProjectTitle}  text-gray-400 text-sm`}>
            Todos os projetos
          </h2>

          <ul className={`flex flex-wrap gap-10 p-5 border border-red-400 ${styles.ulContainer}`}>
            {ProjectsData.map((project, index) => (
              <Link
                href={`/pages/projects/${project.id}`}
                className={`block max-w-full lg:w-max ${styles.linkContainer}`}
              >
                <li key={project.id} className={`max-w-full ${styles.containerLi}`}>
                  <DisplayCard project={project}  pathImage={'projects'}/>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default Page;
