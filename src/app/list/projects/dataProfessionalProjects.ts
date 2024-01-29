import {ProjectsDataPros} from "@/app/type/projectsDataPros";

export type DataProfessionalProjectsProps = {
    id: number,
    title: string;
    coverImage: string[];
    description: string;
    technologies: string[];
    url: string;
}
export const DataProfessionalProjects: DataProfessionalProjectsProps[] = [
    {
        id: 0,
        title: 'BeerFanstore',
        coverImage: ["job1-0.jpg","job1-1.jpg","job1-2.jpg","job1-3.jpg"],
        description: 'E-commerce B2C com nicho voltado para os fãs de cerveja. Site oficial de brands AMBEV',
        technologies: ['WordPress', 'CSS', 'JavaScript'],
        url: 'https://beerfanstore.com.br/',
    },
    {
        id: 1,
        title: 'B2BeerFanstore',
        coverImage: ['job2-0.jpg','job2-1.jpg','job2-2.jpg','job2-3.jpg'],
        description: 'Plataforma de E-commerce B2B de demandas corporativas e merchandising com nicho voltado para os fãs de cerveja.',
        technologies: ['WordPress','Elementor', 'CSS', 'JavaScript'],
        url: 'https://b2beerfanstore.com.br/',
    },
];