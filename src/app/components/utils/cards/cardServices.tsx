'use client';

import {Card} from 'flowbite-react';

type CardServicesProps = {
    titleCard: string;
    descriptionCard: string;
}
export const CardServices = ({titleCard, descriptionCard}: CardServicesProps) => {


    return (
        <Card className="max-w-sm bg-black">
            <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                {titleCard}
            </h5>
            <p className="font-normal text-gray-500 dark:text-gray-400">
                {descriptionCard}
            </p>
        </Card>
    );


}