import {LayoutAbout} from "@/app/components/about/layoutAbout";
import {Accordion} from "@/app/components/Accordion";
import {CaretDown, CaretUp} from "@phosphor-icons/react";
import {Card} from "flowbite-react";

export const ProfileSchool = () =>{
    const STATUS: string = "cursando"
    return (
        <LayoutAbout title={"Formação"}>
            <div className={`grid sm:grid-cols-1 lg:grid-cols-2 sm:justify-center sm:p-5 lg:justify-center gap-10`}>
                <Card className="w-full" imgSrc="/img/uninter-logo.svg" horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Tecnologia em Análise e Desenvolvimento de Sistemas
                    </h5>

                    <ul>
                        <li className={"flex gap-1 items-center"}>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Duração:</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">2 anos e 6 meses</p>
                        </li>

                        <li className={"flex gap-1 items-center"}>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Status:</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">{STATUS}</p>
                        </li>
                    </ul>
                </Card>

                <Card className="w-max" imgSrc="/img/cps-logo.svg" horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Tecnico em Desenvolvimento de Sistemas
                    </h5>

                    <ul>
                        <li className={"flex gap-1 items-center"}>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Duração:</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">1 ano e 6 meses</p>
                        </li>
                    </ul>
                </Card>
            </div>
        </LayoutAbout>
    );
}