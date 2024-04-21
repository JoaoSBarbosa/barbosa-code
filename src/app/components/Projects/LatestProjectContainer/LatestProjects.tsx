import { LatestProjectCard } from "@/app/components/ProjectCard/LatestProjectCard/LatestProjectCard";
import styles from "./styles.module.css";
import Link from "next/link";
import {
  LinkButton,
  NavButton,
} from "@/app/components/utils/buttons/NavButton";
import { ProjectsDataPros } from "@/app/type/projectsDataPros";
import { ContainerLayout } from "@/app/components/layouts/Layouts";
import { DisplayCard } from "@/app/components/displayCard";
import { ProjectsData } from "@/app/list/projects/projectsData";
import { useEffect, useState } from "react";

//últimos projetos
export const LatestProjects = () => {
  const [lastThreeProjects, setLastThreeProjects] = useState<
    ProjectsDataPros[]
  >([]);
  useEffect(() => {
    setLastThreeProjects(ProjectsData.slice(-3));
  }, []);

  // const lastThreeProjects = ProjectsData.slice(-3);
  return (
    <ContainerLayout title={"últimos projetos"}>
      <ul className={`${styles.projectListContent}`}>
        {lastThreeProjects.map((project, index) => (
          // <div className={"flex p-0  lg:p-1 border border-green-800"}>
            <Link href={`/pages/projects/${project.id}`} className={"lg:border border-gray-900"}>
              <li key={project.id}>
                <DisplayCard project={project} pathImage={'projects'}/>
              </li>
            </Link>
          // </div>
        ))}
      </ul>

      <div className={"max-w-screen-xl mx-auto mt-5 px-5"}>
        <LinkButton href={`pages/projects`} value={"Ver todos"} />
      </div>
    </ContainerLayout>
  );
};
