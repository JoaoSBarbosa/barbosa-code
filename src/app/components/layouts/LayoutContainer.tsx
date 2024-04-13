import styles from "@/app/components/layouts/Layouts.module.css";
import {ReactNode} from "react";
import Footer from "@/app/components/Sections/footer/page";

interface LayoutContainerProps {
    title: string;
    children: ReactNode,
    id?: string,
}

export const LayoutContainer = ({id, children, title}: LayoutContainerProps) => {
    return (
        <>
            <section className={`${styles.container}`} id={id}>
                <h2 className={`${styles.title} max-w-screen-xl mx-auto text-gray-400`}>{title}</h2>
                {children}
            </section>

        </>
    )
}