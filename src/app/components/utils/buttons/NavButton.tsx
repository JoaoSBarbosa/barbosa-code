import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import {Button} from "flowbite-react";
import {ButtonsTheme} from "@/app/components/Theme/ButtonsTheme";
import {HiOutlineArrowRight} from "react-icons/hi";

type NavButtonProps = {
    href: string;
    value: string;
    bgColor?: string;
    marginColor?: string;
    textColor?: string;
    openInNewTab?:boolean;
};

export const colorOptions = {
    RED: {
        background: 'linear-gradient(#FF0000, #FF3333)',
        text: '#FFFFFF',
    },
    BLUE: {
        background: 'linear-gradient(#0000FF, #3333FF)',
        text: '#FFFFFF',
    },
};

export const NavButton = ({ href, value, bgColor = '', textColor = '', openInNewTab = false }: NavButtonProps) => {
    const colorStyle = bgColor && textColor ? {background: bgColor, color: textColor} : {};

    return (
        <Link href={href}
              className={
                  `${styles.about}
            uppercase
            inline-block
            max-h-max
            max-w-max
            font-bold
            hover:text-white`
              } style={colorStyle}>
            {value}
        </Link>
    );
};

export const ExternalNavButton = ({ href, value, bgColor = '', textColor = ''}: NavButtonProps) => {
    const colorStyle = bgColor && textColor ? {background: bgColor, color: textColor} : {};

    return (
        <a href={href}
           target={"_blank"}
              className={
                  `${styles.about}
            uppercase
            inline-block
            max-h-max
            max-w-max
            font-bold
            hover:text-white`
              } style={colorStyle}>
            {value}
        </a>
    );
};
export const LinkButton = ({href, value, marginColor = '', textColor = ''}: NavButtonProps) => {
    const colorStyle = marginColor && textColor ? {border: `2px solid ${marginColor}`, color: textColor} : {};

    return (
        <Button outline gradientDuoTone="purpleToIndigo" theme={ButtonsTheme} className={"hover:text-white "} color={"indigo"}>
            <Link href={href} className={"flex items-center gap-2 text-2xl"}>
                {value}
                <HiOutlineArrowRight className="h-6 w-6" />
            </Link>
        </Button>

    );
};

type LinkButtonBorderProps ={
    href: string;
    value: string;
}
export const LinkButtonBorder = ({href, value}:LinkButtonBorderProps) => {

    return (
        <div className={`${styles.linkButtonBorder}`}>
            <Link href={href} className={"flex items-center gap-2 text-2xl"}>
                {value}
                <HiOutlineArrowRight className="h-6 w-6" />
            </Link>
        </div>

    );
};