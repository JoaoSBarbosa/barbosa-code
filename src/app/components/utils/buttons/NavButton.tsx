import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

type NavButtonProps = {
    href: string;
    value: string;
    bgColor?: string;
    textColor?: string;
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

export const NavButton = ({href, value, bgColor = '', textColor = ''}: NavButtonProps) => {
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
