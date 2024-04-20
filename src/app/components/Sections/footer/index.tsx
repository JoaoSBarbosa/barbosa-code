"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={`${styles.footerBg} py-12`}>

            <div className={`${styles.footerContainer} max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8`}>
                <div>
                    <Link href="/">
                        <img src="/logo.svg" className="mr-3 h-20 sm:h-20" alt="Logo"/>
                    </Link>
                    <p className="text-gray-400 mt-4">
                        Desenvolvedor Front-end apaixonado por criar experiências incríveis na web.
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
                    <ul className="text-gray-400">
                        <li className="mb-2">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/pages/about">Sobre Mim</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/pages/projects">Projetos</Link>
                        </li>
                        <li>
                            <Link href="/pages/contact">Contato</Link>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.footerContact}`}>
                    <h3 className="text-white font-bold mb-4">Contato</h3>
                    <ul className={`${styles.footerContactList}`}>
                        <li className="mb-2">
                            <a href="tel:+5511994537464">11 99453-7464</a>
                        </li>
                        <li>
                            <a href="mailto:contato.jsbarbosa@gmail.com?subject=Oportunidade Profissional&body=Olá%20João,%0D%0A%0D%0AEstou%20interessado%20em%20discutir%20uma%20oportunidade%20profissional%20.%20Vamos%20conversar!%0D%0A%0D%0AAtenciosamente,%0D%0ASeu%20Nome">
                                contato.jsbarbosa@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4">Siga-me</h3>
                    <div className="flex gap-4">
                        <a href="#" target={'_blank'} className="text-gray-400 hover:text-white transition-colors">
                            <FaFacebookF/>
                        </a>

                        <a href="#" title={"Clique para redirecionar"} target={'_blank'} className="text-gray-400 hover:text-white transition-colors">
                            <FaInstagram/>
                        </a>
                        <a href="https://www.linkedin.com/in/devjbarbosa/" target={'_blank'} className="text-gray-400 hover:text-white transition-colors">
                            <FaLinkedinIn/>
                        </a>
                        <a href="https://github.com/JoaoSBarbosa" target={'_blank'} className="text-gray-400 hover:text-white transition-colors">
                            <FaGithub/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8">
                <p className="text-center text-gray-400">
                    &copy; {new Date().getFullYear()} Barbosa Code - Todos os direitos reservados.
                </p>
                <p className={`text-center text-gray-400 ${styles.credits}`}>
                    Desenvolvido por <a href="https://www.linkedin.com/in/devjbarbosa/" target={'_blank'}>João Barbosa</a>
                </p>
            </div>

        </footer>
    );
};

export default Footer;