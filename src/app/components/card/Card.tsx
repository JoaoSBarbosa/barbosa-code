import {ReactNode} from "react";
import styles from "./Card.module.css";
type CardProps = {
    trainingCourse?: string;
    levelTraining: string;
    trainingInstitution?: string;
    children?: ReactNode,

}

export const Card = ({children, trainingCourse, levelTraining,trainingInstitution}: CardProps) => {
    return (


    <div className={` ${styles.training}`}>
        <span className={` ${styles.levelTraining}`}>{levelTraining}</span>
        <h3 className={`${styles.trainingCourse}`}>
            {trainingCourse}
        </h3>
        {children}
        <span className={`${styles.trainingInstitution}`}>{trainingInstitution}</span>
    </div>
)
}