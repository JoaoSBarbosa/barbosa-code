"use client"
import Logo from 'next/image';
import Link from 'next/link';
import React, {useContext, useEffect, useState} from 'react';
import './styles/Header.css';
import {Navbar} from 'flowbite-react';
import {NavBarCustomTema} from "@/app/components/Temas/NavBarCustomTema";

export const HeaderNav = () => {
    return (
        <header className={'header-bg bg-black'}>
            <Navbar fluid rounded className={"bg-black max-w-screen-xl mx-auto"} theme={NavBarCustomTema}>

                <Navbar.Brand as={Link} href="/">
                    <img src="/logo.svg" className="mr-3 h-20 sm:h-20" alt="Logo"/>
                </Navbar.Brand>

                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link as={Link} href="/pages/experiences">
                        Experiências
                    </Navbar.Link>
                    <Navbar.Link href="/pages/projects">
                        Projetos
                    </Navbar.Link>
                    <Navbar.Link href="/pages/about">
                        Sobre mim
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};
