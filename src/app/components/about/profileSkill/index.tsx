import {LayoutAbout} from "@/app/components/about/layoutAbout";
import {useEffect, useState} from "react";
import {CaretDown, CaretUp} from "@phosphor-icons/react";
import {Accordion} from "@/app/components/Accordion";

interface Icon {
    id: number;
    techName: string;
    path: string;
}


export const ProfileSkill: React.FC = () => {

    const [shadow, setShadow] = useState(false);
    const [showAccordion, setShowAccordion] = useState({
        frontEndTab: true,
        backEndTab: false,
        dataTab: false,
    });

    const toggleAccordion = (tab: keyof typeof showAccordion) => {
        const updatedState = {frontEndTab: false, backEndTab: false, dataTab: false};
        setShowAccordion({...updatedState, [tab]: !showAccordion[tab]});
    };



    const frontendIconsSkill: Icon[] = [
        {id: 1, techName: 'React', path: "/img/icons/react.svg"},
        {id: 2, techName: 'Next.js', path: "/img/icons/nextjs.svg"},
        {id: 3, techName: 'TypeScript', path: "/img/icons/typescript.svg"},
        {id: 4, techName: 'Tailwind CSS', path: "/img/icons/tailwindcss.svg"},
        {id: 5, techName: 'CSS', path: "/img/icons/css.svg"},
        {id: 6, techName: 'Sass', path: "/img/icons/sass.svg"},
        {id: 7, techName: 'Figma', path: "/img/icons/figma.svg"},
    ];

    const backendIconsSkill: Icon[] = [
        {id: 1, techName: 'Java', path: "/img/icons/java.svg"},
        {id: 2, techName: 'Spring', path: "/img/icons/spring.svg"},
    ];

    const dataIconsSkill: Icon[] = [
        {id: 1, techName: 'MySQL', path: "/img/icons/mysql.svg"},
        {id: 2, techName: 'MongoDB', path: "/img/icons/mongodb.svg"},
    ];

    return (
        <LayoutAbout title={"Habilidades"}>
            <div className="border border-purple-900 rounded-lg">
                <Accordion
                    borderT={true}
                    title="Desenvolvimento Frontend"
                    icon={showAccordion.frontEndTab ? <CaretUp size={32}/> : <CaretDown size={32}/>}
                    onClick={() => {
                        toggleAccordion('frontEndTab');
                    }}
                    isOpen={showAccordion.frontEndTab}
                >
                    <div className={"flex flex-col gap-4"}>
                        <p>
                            Implementações de sistemas e sites utilizando React, Next.js, Tailwind CSS, HTML, SCSS e
                            CSS.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            {frontendIconsSkill.map(icon => (
                                <img key={icon.id} src={icon.path} alt={icon.techName} className="h-8"/>
                            ))}
                        </div>
                    </div>
                </Accordion>

                <Accordion
                    title="Desenvolvimento Backend"
                    icon={showAccordion.backEndTab ? <CaretUp size={32}/> : <CaretDown size={32}/>}
                    onClick={() => {
                        toggleAccordion('backEndTab');
                    }}
                    isOpen={showAccordion.backEndTab}
                >
                    <div className={"flex flex-col gap-4"}>
                        <p>
                            Desenvolvimento de APIs e sistemas utilizando Java e Spring Framework.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            {backendIconsSkill.map(icon => (
                                <img key={icon.id} src={icon.path} alt={icon.techName} className="h-8"/>
                            ))}
                        </div>
                    </div>
                </Accordion>

                <Accordion
                    borderB={true}
                    title="Banco de Dados"
                    icon={showAccordion.dataTab ? <CaretUp size={32}/> : <CaretDown size={32}/>}
                    onClick={() => {
                        toggleAccordion('dataTab');
                    }}
                    isOpen={showAccordion.dataTab}
                >
                    <div className={"flex flex-col gap-4"}>
                        <p>
                            Criação de tabelas e relacionamentos, consultas, persistência e revogação utilizando MySQL,
                            MariaDB e
                            MongoDB.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            {dataIconsSkill.map(icon => (
                                <img key={icon.id} src={icon.path} alt={icon.techName} className="h-8"/>
                            ))}
                        </div>
                    </div>
                </Accordion>
            </div>
        </LayoutAbout>
    );
};
