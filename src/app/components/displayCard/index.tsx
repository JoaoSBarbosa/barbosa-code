// import React from "react";
// import {ProjectsDataPros} from "@/app/type/projectsDataPros";
// import {TechnologiesIconsData} from "@/app/list/technologies/technologiesIconsData";
// import styles from "./DisplayCard.module.css"
// type DisplayCardProps = {
//     project: ProjectsDataPros;
//     width?: string | number;
//     pathImage?: string;
//     height?: string | number;
// };
// export const DisplayCard = ({
//                                 project,
//                                 height,
//                                 width,
//                                 pathImage,
//                                 ...res
//                             }: DisplayCardProps) => {
//     const {title, coverImage, technologies} = project;
//
//     const techIcons = TechnologiesIconsData;
//     return (
//         <div
//             className={`${styles.container} bg-white shadow-lg overflow-hidden relative rounded-md border-2 border-purple-600 lg:border-none lg:rounded-none `}
//             style={{height: height ? height : 500, }}
//             // style={{ height: height ? height : 500 }}
//         >
//             <div className="relative h-3/4 border border-red-400">
//                 <img
//                     src={`../img/${pathImage}/${coverImage}`}
//                     alt={title}
//                     className="w-full h-full object-cover"
//                 />
//             </div>
//             <div className="p-4 bg-gray-200">
//                 <h2 className="text-lg font-semibold mb-2">{title}</h2>
//                 <div className="flex items-center justify-around flex-wrap">
//                     {technologies.map((tech, index) => (
//                         <div key={index} className="flex flex-row items-center my-2">
//                             {techIcons.map(
//                                 (icon) =>
//                                     icon.technology === tech && (
//                                         <img
//                                             key={icon.id}
//                                             src={`${icon.uraImage}`}
//                                             alt={tech}
//                                             // className="w-6 h-6 mr-2 object-cover"
//                                             // style={{fill: icon.color}}
//                                             // className="w-full h-full object-cover" // Usando object-cover para manter proporções da imagem
//                                             // style={{ objectFit: "cover" }}
//                                         />
//                                     )
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

import React from "react";
import { ProjectsDataPros } from "@/app/type/projectsDataPros";
import { TechnologiesIconsData } from "@/app/list/technologies/technologiesIconsData";
import styles from "./DisplayCard.module.css";

type DisplayCardProps = {
    project: ProjectsDataPros;
    width?: string | number;
    pathImage?: string;
};

export const DisplayCard = ({ project, width, pathImage, ...res }: DisplayCardProps) => {
    const { title, coverImage, technologies } = project;
    const techIcons = TechnologiesIconsData;


    return (
        <div
            className={`${styles.container} bg-white shadow-lg overflow-hidden relative rounded-md border-2 border-gray-600 lg:border-none lg:rounded-none`}

        >
            <div className="relative h-3/4">
                <img
                    src={`../img/${pathImage}/${coverImage}`}
                    alt={title}
                    className="w-full h-full object-cover"
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="p-4 bg-gray-200 h-1/4">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <div className="flex items-center justify-around flex-wrap h-full">
                    {technologies.map((tech, index) => (
                        <div key={index} className="flex flex-row items-center my-2">
                            {techIcons.map(
                                (icon) =>
                                    icon.technology === tech && (
                                        <img
                                            key={icon.id}
                                            src={`${icon.uraImage}`}
                                            alt={tech}
                                            className="w-6 h-6 mr-2"
                                        />
                                    )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};