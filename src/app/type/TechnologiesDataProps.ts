// export type TechnologiesDataProps= {
//     id: number,
//     technology:string,
//     uraImage: string,
//     hardSkill:string[],
//     color:string
// }
export type TechnologiesDataProps = {
    id: number;
    technology: string;
    uraImage: string;
    hardSkill: { skill: string; area: string; description?: string }[];
    color: string;
};
