"use client"
import styles from "./styles.module.css"
import {CardServices} from "@/app/components/utils/cards/cardServices";
import {CardTechs} from "@/app/components/utils/cards/cardTechs";
import {useContext, useEffect, useState} from "react";
import {CreateContext} from "@/app/Contexts/ServicesContext";

export const Services = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    const minWidthToShowImage: number= 530;
    useEffect(() => {
        const handleResize =()=>{
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize',handleResize);

        handleResize();

        return()=>{
            window.removeEventListener('resize',handleResize)
        }
    }, []);
    const createContext = useContext(CreateContext);
    const shouldApplyGradientAndShadow = createContext?.isSelectionTech && createContext?.selectedTech === "ui";
    const boxStyles = "border-double border-2 border-purple-500 shadow-md shadow-purple-500/50";
    const handleWhatTypeTechSelected=(tech: string)=>{
        return createContext?.isSelectionTech && createContext?.selectedTech === tech;
    }
    return (
        <article className={`${styles.servicesContainerBg}`}>
            <div className={`max-w-screen-xl mx-auto text-white ${styles.servicesContainer} ${styles.servicesContainerGrid}`}>
                <div className={`${styles.servicesContent}`}>
                    <div className={`${styles.servicesContentText}`}>
                        <h2 className={`${styles.servicesTitle}`}>Serviços</h2>
                        <p>
                            Na minha trajetória profissional, destaco a versatilidade e proficiência em
                            diversas áreas-chave. Cada projeto não é apenas uma execução técnica, mas
                            uma oportunidade de moldar uma experiência única. Confira as principais
                            áreas em que atuo e como elas se entrelaçam para criar soluções inovadoras.
                        </p>
                    </div>
                    <div className={`grid grid-cols-2 gap-2 mt-5 ${styles.servicesContainerCard}`}>

                        <CardServices
                            cardClasses={handleWhatTypeTechSelected("ui")? boxStyles:""}
                            titleCard={"UI DESIGN"}
                            descriptionCard={"" +
                                "Conhecimentos básico em UI Design, focando em interfaces simples " +
                                "e intuitivas." +
                                "Valorizo clareza e usabilidade."}
                        />

                        <CardServices
                            cardClasses={handleWhatTypeTechSelected("frontend")? boxStyles:""}
                            titleCard={"FRONT-END"}
                            descriptionCard={"" +
                                "Desenvolvo layouts profissionais e totalmente responsivos. " +
                                "Cada linha de código" +
                                "é uma expressão do meu compromisso com a excelência."}
                        />

                        <CardServices
                            cardClasses={handleWhatTypeTechSelected("banco")? boxStyles:""}
                            titleCard={"BANCO DE DADOS"}
                            descriptionCard={"" +
                                "Forte compreensão em SQL, garantindo que os dados " +
                                "não sejam apenas armazenados," +
                                "mas organizados com lógica."}
                        />
                        <CardServices
                            cardClasses={handleWhatTypeTechSelected("beckend")? boxStyles:""}
                            titleCard={"BACKEND"}
                            descriptionCard={"No desenvolvimento do Back-End, " +
                                "adoto uma abordagem estruturada. Uso camadas " +
                                "como services, repositories, controllers e " +
                                "entities para criar sistemas robustos"}
                        />

                    </div>

                </div>

                {windowWidth > minWidthToShowImage &&(
                    <div className={`${styles.servicesContentImage}`}>
                        <CardTechs/>
                    </div>
                )}


            </div>
        </article>
    )
}