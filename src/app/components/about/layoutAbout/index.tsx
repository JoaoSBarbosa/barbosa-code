import {ReactNode} from "react";
import styles from "./LayoutAbout.module.css";

type LayoutAboutProps = {
    children: ReactNode;
    title?: string
}
export const LayoutAbout = ({children, title}: LayoutAboutProps) => {
    return (
        <div className={"max-w-screen-lg"}>
            {title &&
                <h2 className={`${styles.layoutTitle}`}>{title}</h2>

            }
            {children}

        </div>
    )
}