'use client';

import {Card} from 'flowbite-react';
import {useContext} from "react";
import {CreateContext} from "@/app/Contexts/ServicesContext";

type CardServicesProps = {
    titleCard: string;
    descriptionCard: string;
    cardClasses?: string; // Nova propriedade para classes do Card
}
export const CardServices = ({titleCard, descriptionCard,cardClasses}: CardServicesProps) => {

    const createContext = useContext(CreateContext);


    return (
        <Card className={` bg-black border-double border-2 border-transparent ${cardClasses}`} style={{minWidth: "280px"}}>
            <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                {titleCard}
            </h5>
            <p className="font-normal text-gray-500 dark:text-gray-400">
                {descriptionCard}
            </p>
        </Card>


    );


}