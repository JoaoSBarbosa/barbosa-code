"use client";
import {HeaderNav} from "@/app/components/header/HeaderNav";
import {ServicesContext} from "@/app/Contexts/ServicesContext";
import {Introduction} from "@/app/components/main/Introduction";
import {ThreeLatestProjects} from "@/app/components/Projects/LatestProjectContainer/ThreeLatestProjects";
import {Services} from "@/app/components/services";
import {ProjectsData} from "@/app/list/projects/projectsData";
import {DataProfessionalProjects} from "@/app/list/projects/dataProfessionalProjects";
import {ProfessionalProjects} from "@/app/components/utils/carousel/ProfessionalProjectsCarousel";
import styles from "@/app/components/Projects/LatestProjectContainer/styles.module.css";
import Footer from "@/app/pages/footer/page";
import {useEffect, useState} from "react";
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
        <ServicesContext>
            <div >
                <HeaderNav/>
                <Introduction/>
                <ThreeLatestProjects projectsData={ProjectsData} title={"últimos projetos"} hrefUri={"projects"}/>
                <Services/>

                <div className={`max-w-screen-xl mx-auto my-48`}>
                    <h2 className={`${styles.lastProjectTitle} max-w-screen-xl mx-auto text-gray-800 my-20`}>
                        Projetos Profissionais
                    </h2>

                    <div className="grid gap-32 p-6 grid-cols-1 md:grid-cols-2">
                        {/*<ProfessionalProjects*/}
                        {/*    carroselTitle={"BeerFantose"}*/}
                        {/*    projectId={0}*/}
                        {/*    projectsData={DataProfessionalProjects}*/}
                        {/*/>*/}
                        {/*<ProfessionalProjects*/}
                        {/*    carroselTitle={"B2BeerFantose"}*/}
                        {/*    projectId={1}*/}
                        {/*    projectsData={DataProfessionalProjects}*/}
                        {/*/>*/}
                    </div>
                </div>

                <Footer/>
            </div>
        </ServicesContext>
    )
}
export default Page;