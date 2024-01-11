"use client"
import Link from "next/link";
import "@/app/components/main/styles.module.css";
import {inspect} from "util";
import styles from './styles.module.css';
import {colorOptions, NavButton} from "@/app/components/utils/buttons/NavButton";
import {useEffect, useState} from "react";

export const Introduction = () => {
    const [isTyping, setIsTyping] = useState(false);
    const [title, setTitle] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        // Ativar a máquina de escrever após o componente ser montado
        setIsTyping(true);
    }, []);

    useEffect(() => {
        const titleText = 'Olá, eu sou João Barbosa';
        let index = 0;

        const intervalId = setInterval(() => {
            if (index <= titleText.length) {
                // Exibir as letras gradualmente
                setTitle(titleText.slice(0, index));
                index += 1;
            } else {
                // Alternar o estado para mostrar/ocultar o cursor piscante
                setShowCursor((prev) => !prev);
            }
        }, 100); // Ajuste o valor do intervalo conforme necessário
    }, []);

    return (
        <main className={"introduction-container bg-black"}>

            <div className={`${styles.introduction}  text-white max-w-screen-xl mx-auto`}>
                <div className={`${styles.introductionContent}`}>
                    {/*<h1 className={"text-4xl font-bold"}>*/}
                    {/*    {isTyping && 'Olá, eu sou João Barbosa'}*/}
                    {/*    <span className={"text-customPurple"}>.</span>*/}
                    {/*</h1>*/}
                    <h1 className={"text-4xl font-bold"}>
                        {title}
                        {isTyping && showCursor && <span className={"text-customPurple"}>.</span>}
                    </h1>
                    <p>
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
                        src={"/img/jb.png"}
                        width={500}
                        className={`${styles.image}`}
                        alt={"João Barbosa, desenvolvedor Full Stack Júnior, sorrindo com óculos de grau e camiseta social."}/>
                </div>
            </div>
        </main>
    )
}