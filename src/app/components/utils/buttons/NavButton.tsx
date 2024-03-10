import React, {ReactNode} from 'react';
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
    openInNewTab?: boolean;
    children?: ReactNode;
    width?: string | number;
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
export const width = {}
export const NavButton = ({
                              href,
                              value,
                              children,
                              width,
                              bgColor = '',
                              textColor = '',
                              openInNewTab = false
                          }: NavButtonProps) => {
    // const colorStyle = bgColor && textColor ? {background: bgColor, color: textColor} : {};

    return (
        <Link href={href}
              className={`${styles.about} hover:brightness-125 uppercase max-h-max font-bold  hover:text-white`}
              style={
                  {
                      background: bgColor
                          ? bgColor
                          : "linear-gradient(#694DF8, #411DB9)",
                      color: textColor ? textColor : "#1A0033",
                      width: width?width:"max-content"
                  }
              }>
            {children}
            {value}
        </Link>
    );
};

export const ExternalNavButton = ({href, value, bgColor = '', textColor = '', width}: NavButtonProps) => {
    const colorStyle = bgColor && textColor ? {background: bgColor, color: textColor} : {};

    return (
        <a href={href}
           target={"_blank"}
           className={
               `${styles.externalNavButton}
            uppercase
            inline-block
            max-h-max
            font-bold
            hover:text-white`
           } style={{background: bgColor ? bgColor : "linear-gradient(#694DF8, #411DB9)",width: width?width:"max-content"}}>

            {value}
        </a>
    );
};
type LinkButtonProps = {
    href: string;
    value: string;
    bgColor?: string;
    marginColor?: string;
    textColor?: string;
    openInNewTab?: boolean;
    children?: ReactNode
};
export const LinkButton = ({href, value, children, marginColor = '', textColor = ''}: LinkButtonProps) => {
    const colorStyle = marginColor && textColor ? {color: textColor} : {};

    return (
        <Button outline gradientDuoTone="purpleToIndigo" theme={ButtonsTheme} className={"hover:text-white  "}
                color={"indigo"}>
            <Link href={href} className={"flex items-center gap-2 text-2xl"}>
                {children &&
                    children
                }

                {value}
                {!children &&
                    <HiOutlineArrowRight className="h-6 w-6"/>
                }

            </Link>
        </Button>

    );
};

type LinkButtonBorderProps = {
    href: string;
    value: string;
    children?: ReactNode
}
export const LinkButtonBorder = ({href, value, children}: LinkButtonBorderProps) => {

    return (
        <div className={`${styles.linkButtonBorder}`}>
            <Link href={href} className={"flex items-center gap-2 text-2xl"}>
                {value}
                <HiOutlineArrowRight className="h-6 w-6"/>
            </Link>
        </div>

    );
};