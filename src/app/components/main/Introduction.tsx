"use client"
import Link from "next/link";
import "@/app/components/main/styles.module.css";
import {inspect} from "util";
import styles from './styles.module.css';
import {colorOptions, NavButton} from "@/app/components/utils/buttons/NavButton";
import {useEffect, useState} from "react";

export const Introduction = () => {
    const [title, setTitle] = useState('');


    useEffect(() => {
        const titleText = 'Olá, eu sou o João Barbosa';
        let index = 0;

        const handleTypingEffect = () => {
            if (index <= titleText.length) {
                setTitle(titleText.slice(0, index));
                index += 1;
            }
        };

        // Verifica se a largura da tela é igual ou menor a 1200px
        const isMobile = window.matchMedia('(max-width: 1200px)').matches;

        // Adiciona o efeito da máquina de escrever somente se for um dispositivo móvel
        if (isMobile) {
            const intervalId = setInterval(handleTypingEffect, 100);
            return () => clearInterval(intervalId);
        } else {
            // Se não for um dispositivo móvel, exibe o texto imediatamente
            setTitle(titleText);
        }
    }, []);

    return (
        <main className={`${styles.introductionContainer}`}>

            <div
                className={`${styles.introduction} text-white max-w-screen-xl mx-auto`}>
                <div className={`${styles.introductionContent}`}>
                    <h1>
                        {/*Olá, eu sou João Barbosa*/}
                        {title}
                        <span className={"text-customPurple rounded"}>.</span>
                    </h1>
                    <p className={""}>
                        Desenvolvedor Full Stack Júnior apaixonado por criar soluções web inovadoras.
                        Minhas habilidades abrangem o uso de tecnologias como Java, Spring, SQL,
                        JavaScript e React. Estou comprometido em oferecer resultados excepcionais
                        enquanto continuo a aprimorar minhas habilidades no desenvolvimento de software.
                    </p>


                    <NavButton
                        href="/pages/about"
                        value="Mais sobre mim"
                    />


                </div>
                <div className={`${styles.introductionImage}`}>
                    <img
                        src={"/img/barbosa.png"}
                        width={500}
                        className={`${styles.image}`}
                        alt={"João Barbosa, desenvolvedor Full Stack Júnior, sorrindo com óculos de grau e camiseta social."}/>
                </div>
            </div>
        </main>
    )
}