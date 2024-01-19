import styles from "./styles.module.css"
import {CardServices} from "@/app/components/utils/cards/cardServices";
import {CardTechs} from "@/app/components/utils/cards/cardTechs";

export const Services = () => {
    return (
        <article className={`${styles.servicesContainerBg}`}>
            <div
                className={
                    `max-w-screen-xl mx-auto text-white
                    ${styles.servicesContainer}
                    ${styles.servicesContainerGrid}
                    `
                }
            >
                <div className={`${styles.servicesContent}`}>
                    <div className={`${styles.servicesContentText}`}>
                        <h2>Serviços</h2>
                        <p>
                            Na minha trajetória profissional, destaco a versatilidade e proficiência em
                            diversas áreas-chave. Cada projeto não é apenas uma execução técnica, mas
                            uma oportunidade de moldar uma experiência única. Confira as principais
                            áreas em que atuo e como elas se entrelaçam para criar soluções inovadoras.
                        </p>
                    </div>
                    <div className={"grid grid-cols-2 gap-2"}>


                        <CardServices
                            titleCard={"UI DESIGN"}
                            descriptionCard={"" +
                                "Conhecimentos básico em UI Design, focando em interfaces simples " +
                                "e intuitivas." +
                                "Valorizo clareza e usabilidade."}
                        />

                        <CardServices
                            titleCard={"FRONT-END"}
                            descriptionCard={"" +
                                "Desenvolvo layouts profissionais e totalmente responsivos. " +
                                "Cada linha de código" +
                                "é uma expressão do meu compromisso com a excelência."}
                        />

                        <CardServices
                            titleCard={"BANCO DE DADOS"}
                            descriptionCard={"" +
                                "Forte compreensão em SQL, garantindo que os dados " +
                                "não sejam apenas armazenados," +
                                "mas organizados com lógica."}
                        />
                        <CardServices
                            titleCard={"BACKEND"}
                            descriptionCard={"No desenvolvimento do Back-End, " +
                                "adoto uma abordagem estruturada. Uso camadas " +
                                "como services, repositories, controllers e " +
                                "entities para criar sistemas robustos"}
                        />


                    </div>

                </div>
                <div className={`${styles.servicesContentImage}`}>

                    <CardTechs/>

                </div>


            </div>
        </article>
    )
}