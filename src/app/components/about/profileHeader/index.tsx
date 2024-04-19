import {LayoutAbout} from "@/app/components/about/layoutAbout";
import {TechnologiesData} from "@/app/list/technologies/technologiesData";

export const ProfileHeader = () => {
    return (
        <LayoutAbout>

            <div className={`grid sm:grid-cols-1 lg:grid-cols-2 sm:justify-center sm:p-5 lg:justify-center gap-10`}>

                <div className={" flex items-center justify-center"}>
                    <figure
                        className={"bg-purple-600 w-max flex items-center justify-center rounded-full overflow-hidden"}>
                        <img
                            style={{width: "500px"}}
                            className="block"
                            src="../img/barbosa.gif"
                            alt="Foto do perfil"
                        />
                    </figure>

                </div>
                <div className={"mx-1 flex flex-col gap-10 items-start"}>
                    <h2 className={"text-5xl"}>Olá ! Sou o João</h2>
                    <p className={"text-2xl break-words mt-10"}>
                        Desenvolvedor fullstack utilizando as linguagens Java, Javascript e blibiotecas e framework
                        Spring e Nextjs, para o desenvolvimento
                        e manutenção de páginas web, sistemas e componentes de interface em WordPress. Atuando em
                        projetos de e-commerce.
                    </p>
                    <div
                        className="flex flex-wrap w-full items-center justify-around">
                        {TechnologiesData.map((tech) => (
                            <img src={tech.uraImage} alt={tech.technology} className={"w-10"}/>
                        ))}
                    </div>
                </div>
            </div>

        </LayoutAbout>

    )
}