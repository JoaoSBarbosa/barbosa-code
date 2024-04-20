import {LayoutAbout} from "@/app/components/about/layoutAbout";
import {Card} from "@/app/components/card/Card";

export const ProfileSchool = () =>{
    return (
        <LayoutAbout title={"Formação"}>
            <div className={`grid sm:grid-cols-1 lg:grid-cols-2 sm:justify-center sm:p-5 lg:justify-center gap-10`}>
                <Card
                    levelTraining="Tecnólogo"
                    trainingCourse={" Análise e Desenvolvimento de Sistemas"}
                    trainingInstitution={"UNINTER"}
                />
                <Card
                    levelTraining="Técnico"
                    trainingCourse={"Tecnico em Desenvolvimento de Sistemas"}
                    trainingInstitution={"Etec"}
                />
            </div>
        </LayoutAbout>
    );
}