import styles from "./Layouts.module.css";
import Link from "next/link";
import {LatestProjectCard} from "@/app/components/ProjectCard/LatestProjectCard/LatestProjectCard";
import {LinkButton} from "@/app/components/utils/buttons/NavButton";
import {ReactNode} from "react";

interface ContainerLayoutProps {
    title: string;
    children: ReactNode,
    id?: string,
}
export const ContainerLayout=({title, id, children}:ContainerLayoutProps)=> {
    return (
        <section className={`${styles.container}`} id={id ? id : ''}>
            <h2 className={`${styles.title} max-w-screen-xl mx-auto text-gray-400`}>{title}</h2>

            {children}

        </section>
    )
}