import {LayoutAbout} from "../layoutAbout";

export const ProfileAbout = () => {
    return (
        <LayoutAbout title={"Sobre mim"}>
            <div className={"grid sm:grid-cols-1 lg:grid-cols-2 gap-10 p-2"}>
                <div className={"flex-1 "}>
                    <p className={"text-2xl text-justify"}>
                        Sou um programador júnior apaixonado por desenvolvimento de software. Tenho especial interesse
                        em
                        tecnologia, ficção científica, medieval e terror. Além disso, sou entusiasta de jogos RPG e
                        aventura.
                        Gosto de ouvir música, fazer pesquisas e, claro, programar. Atualmente, trabalho na Angulo
                        Sistemas,
                        onde
                        desenvolvo projetos em
                        <strong> Java </strong> com
                        <strong> Spring </strong>, no backend, e
                        <strong> React </strong> com <strong> Next </strong>, no frontend.
                        Sou organizado, responsável e me adapto facilmente a mudanças. Meu objetivo é agregar valor e
                        fazer
                        a
                        diferença nos projetos em que trabalho.
                        Estou aberto a novos desafios e oportunidades de crescimento. Entre em contato comigo!
                    </p>
                </div>
                <div className={"flex-1 bg-gray-950"}>
                    <img src="/img/animation2.gif" alt=""/>
                </div>
            </div>

        </LayoutAbout>
    )
}