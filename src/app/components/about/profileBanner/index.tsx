import React, {useState} from 'react';
import {LayoutAbout} from "../layoutAbout";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import styles from './ProfileBanner.module.css';

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

        <div className={`${styles.container}`}>
            <div className={" flex flex-col gap-10 top-5"}>
                {socials.map((social) => (
                    <div className={"flex items-center"} key={social.id}>
                        <a
                            href={social.href}
                            target={social.target}
                            className={"mr-4 p-2"}
                            onMouseEnter={() => setHoveredIcon(social.id)}
                            onMouseLeave={() => setHoveredIcon(null)}
                        >
                            {React.createElement(social.icon, {
                                size: 35,
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

    </LayoutAbout>



    );
}
