import {LayoutAbout} from "@/app/components/about/layoutAbout";

export const ProfileAbout = () => {
    return (
        <LayoutAbout title={"Sobre mim"}>
            <p className={"text-justify"}>
                Sou um programador júnior apaixonado por desenvolvimento de software. Tenho especial interesse em
                tecnologia, ficção científica, medieval e terror. Além disso, sou entusiasta de jogos RPG e aventura.
                Gosto de ouvir música, fazer pesquisas e, claro, programar. Atualmente, trabalho na Angulo Sistemas, onde
                desenvolvo projetos em
                <strong>
                    <span className={"text-customPurple"}> Java</span>
                </strong> com
                <strong>
                    <span className={"text-customPurple"}> Spring</span>
                </strong>, no backend, e
                <strong>
                    <span className={"text-customPurple"}> React</span>
                </strong> com
                <strong>
                    <span className={"text-customPurple"}> Next</span>
                </strong>, no frontend.
                Sou organizado, responsável e me adapto facilmente a mudanças. Meu objetivo é agregar valor e fazer a
                diferença nos projetos em que trabalho.
                Estou aberto a novos desafios e oportunidades de crescimento. Entre em contato comigo!
            </p>
        </LayoutAbout>
    )
}