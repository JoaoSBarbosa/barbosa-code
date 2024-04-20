"use client";
import {HeaderNav} from "@/app/components/Sections/header/HeaderNav";
import {ServicesContext} from "@/app/Contexts/ServicesContext";
import {Introduction} from "@/app/components/Sections/main/Introduction";
import {LatestProjects} from "@/app/components/Projects/LatestProjectContainer/LatestProjects";
import {ProjectsData} from "@/app/list/projects/projectsData";
import {DataProfessionalProjects} from "@/app/list/projects/dataProfessionalProjects";
import styles from "@/app/components/Projects/LatestProjectContainer/styles.module.css";
import Footer from "@/app/components/Sections/footer";
import {useEffect, useState} from "react";
import {PrimeReactProvider} from "primereact/api";
import {ProfessionalProjects} from "@/app/components/Projects/professionalProjects";
import {Services} from "@/app/components/services";
import {Experiencece} from "@/app/components/Sections/experience";

const Page = () => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;

        const visibilityThreshold = 0.8;


    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    return (
        <PrimeReactProvider>
            <ServicesContext>
                <main>
                    <HeaderNav/>
                    <Introduction/>
                    <LatestProjects/>
                    <Services/>
                    <div id="experience">
                        <Experiencece/>
                    </div>
                    <ProfessionalProjects/>

                    <Footer/>
                </main>
            </ServicesContext>
        </PrimeReactProvider>

    )
}
export default Page;