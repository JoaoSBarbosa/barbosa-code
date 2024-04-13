"use client"
import Link from 'next/link';
import React, {useState} from 'react';
import styles from "./styles.module.css"


const navMenu = [
    {id: '1', href: "/", label: "Home"},
    {id: '2', href: "../#experience", label: "Experiências"},
    {id: '3', href: "/pages/projects", label: "Projetos pessoais"},
    {id: '4', href: "../#professionalProjects", label: "Projetos Profissionais"},
    {id: '5', href: "/pages/about", label: "Sobre mim"},
]
export const HeaderNav = () => {

    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <header className={`${styles.headerContainer}`}>

            <div className={`flex justify-between items-center w-full p-4 `}>
                <Link id={"logo"} href={"/"}>
                    <img src="/logo.svg" className="mr-3 h-20 sm:h-20" alt="Logo"/>
                </Link>
                <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
                    <button className={`${styles.btnMobile}`}>
                        <span className={`${styles.hamburger}`} onClick={() => setIsActive(!isActive)}>

                        </span>
                    </button>
                    <ul className={`text-white flex items-center gap-5 ${styles.menu}`}>
                        {navMenu.map((menu) => (
                            <li id={menu.id} className={"text-xl p-2 cursor-pointer"}>
                                <Link href={menu.href}>{menu.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>

        </header>
    );
};



