import React, {useState} from 'react';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {LayoutAbout} from "@/app/components/about/layoutAbout";

interface Social {
    id: number;
    title: string;
    href: string;
    target: string;
    icon: React.ElementType;
}

const socials: Social[] = [
    {id: 1, title: "Github", href: "https://github.com/JoaoSBarbosa", target: "_blank", icon: FaGithub},
    {id: 2, title: "Linkedin", href: "https://www.linkedin.com/in/devjbarbosa/", target: "_blank", icon: FaLinkedin},
    {id: 3, title: "Instagram", href: "https://instagram.com/jsbarbosadev", target: "_blank", icon: FaInstagram},
];

export const ProfileBanner: React.FC = () => {
    const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

    return (
        <LayoutAbout title={"Redes Sociais"}>
            <div className={`relative`}>
                <img src="/img/animation4.gif" alt="animação gif jovem programando"/>

                <div className={"absolute flex flex-col gap-10 top-5"}>
                    {socials.map((social) => (
                        <div className={"flex items-center"} key={social.id}>
                            <a
                                href={social.href}
                                target={social.target}
                                className={"mr-4"}
                                onMouseEnter={() => setHoveredIcon(social.id)}
                                onMouseLeave={() => setHoveredIcon(null)}
                            >
                                {React.createElement(social.icon, {
                                    size: window.innerWidth > 600 ? 50 : 35,
                                    className: "cursor-pointer",
                                    title: social.title
                                })}
                            </a>
                            {hoveredIcon === social.id && <span
                                className={"transition bg-white text-black rounded-r-lg p-2"}>{social.title} - {social.href}</span>}
                        </div>
                    ))}
                </div>
            </div>
            <div className={"bg-gray-950 py-6"}>
                <div className={"max-w-4xl mx-auto"}>
                    <h3 className={"text-xl lg:text-2xl font-semibold text-center mb-4"}>Créditos dos Gifs</h3>
                    <div className={"flex flex-col p-1.5 md:flex-row justify-center items-center space-y-4 md:space-y-0"}>

                        <p className={"text-xs lg:text-lg"}>
                            Os gif utilizados foram criados por
                            <a
                                href="https://www.deviantart.com/watch/kirokaze/deviations"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={"text-blue-500 underline mx-1"}
                            >
                                kirokaze
                            </a>.
                            Confira o trabalho dele no
                            <a
                                href="https://www.deviantart.com/watch/eiskalterengel18/deviations"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={"text-blue-500 underline"}>
                                DeviantArt
                            </a>.
                        </p>

                    </div>
                </div>
            </div>
        </LayoutAbout>
    );
}
