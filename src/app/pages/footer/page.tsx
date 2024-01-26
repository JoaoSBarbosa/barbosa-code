import styles from "./styles.module.css"
import {Navbar} from "flowbite-react";
import Link from "next/link";
import React from "react";
const Footer =()=>{
    return(
        <footer className={`${styles.footerBg}`}>
            <div className={`${styles.footerContainer} max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3`}>

                <div>
                    <Link href="/">
                        <img src="/logo.svg" className="mr-3 h-20 sm:h-20" alt="Logo"/>
                    </Link>
                </div>
                <div className={`${styles.footerContact}`}>
                    <h3>Contato</h3>
                    <ul className={`${styles.footerContactList}`}>
                        <li>
                            <a href={"tel:+5511994537464"}>
                                11 99453-7464
                            </a>
                        </li>
                        <li>
                            <a href={"mailto:contato.jsbarbosa@gmail.com?subject=Oportunidade Profissional&body=Olá%20João,%0D%0A%0D%0AEstou%20interessado%20em%20discutir%20uma%20oportunidade%20profissional%20.%20Vamos%20conversar!%0D%0A%0D%0AAtenciosamente,%0D%0ASeu%20Nome"}>
                                Entre em Contato: contato.jsbarbosa@gmail.com
                            </a>

                        </li>
                    </ul>
                </div>
                <div className={`${styles.footerContact}`}>
                    <h3>Contato</h3>
                </div>

            </div>
        </footer>
    )
}

export default Footer;