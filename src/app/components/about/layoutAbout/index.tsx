import {ReactNode} from "react";
import styles from "./LayoutAbout.module.css";

type LayoutAboutProps = {
    children: ReactNode;
    title?: string
}
export const LayoutAbout = ({children, title}: LayoutAboutProps) => {
    return (
        <div className={"max-w-screen-lg mx-auto mb-20"}>
            {title &&
                <h2 className={`${styles.layoutTitle}`}>{title}</h2>

            }
            {children}

        </div>
    )
}