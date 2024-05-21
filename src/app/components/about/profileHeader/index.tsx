import { LayoutAbout } from "../layoutAbout";
import { TechnologiesData } from "@/app/list/technologies/technologiesData";
import styles from "./ProfileHeader.module.css";

export const ProfileHeader = () => {
  return (
    <LayoutAbout>
      <div className={`flex gap-10 flex-col md:flex-row `}>
        <div className={"flex  items-center justify-center  md:w-3/12"}>
          <figure
            className={
              "bg-purple-600  flex items-center w-full max-w-96 justify-center rounded-full overflow-hidden"
            }
          >
            <img
              className={`block ${styles.image}`}
              src="../img/barbosa.gif"
              alt="Foto do perfil"
            />
          </figure>
        </div>

        <div className={"mx-1 md:w-9/12 flex flex-col gap-10 items-start"}>
          <h2 className={"text-5xl"}>Olá ! Sou o João</h2>
          <p className={"text-2xl break-words mt-10"}>
            Desenvolvedor fullstack utilizando as linguagens Java, Javascript e
            blibiotecas e framework Spring e Nextjs, para o desenvolvimento e
            manutenção de páginas web, sistemas e componentes de interface em
            WordPress. Atuando em projetos de e-commerce.
          </p>
          <div className="flex  box-border flex-wrap gap-10 lg:gap-5 w-full items-center justify-start">
            {TechnologiesData.map((tech, index) => (
              <img
                key={index}
                src={tech.uraImage}
                alt={tech.technology}
                className="w-8"
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutAbout>
  );
};
