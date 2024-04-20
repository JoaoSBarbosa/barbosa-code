import React from 'react';
import {ProjectsDataPros} from "@/app/type/projectsDataPros";
import {TechnologiesIconsData} from "@/app/list/technologies/technologiesIconsData";

type DisplayCardProps = {
    project: ProjectsDataPros;
    width?: string | number;
    height?: string | number;

}
export const DisplayCard = ({project, height, width}: DisplayCardProps) => {
    const {title, coverImage, technologies} = project;

    const techIcons = TechnologiesIconsData;
    return (
        <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden relative`}
            style={{height: height ? height : 500, width: width ? width : 400}}
        >
            <div className="relative h-3/4">
                <img
                    src={`../img/projects/${coverImage}`}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 bg-gray-200">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <div className="flex items-center justify-around flex-wrap">
                    {technologies.map((tech, index) => (
                        <div key={index} className="flex flex-row items-center my-2">
                            {techIcons.map((icon) => (
                                icon.technology === tech && (
                                    <img
                                        key={icon.id}
                                        src={`${icon.uraImage}`}
                                        alt={tech}
                                        className="w-6 h-6 mr-2"
                                        style={{fill: icon.color}}
                                    />
                                )
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
