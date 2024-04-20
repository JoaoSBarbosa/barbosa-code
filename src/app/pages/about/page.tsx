
'use client';
import {HeaderNav} from "@/app/components/Sections/header/HeaderNav";
import Footer from "../../components/Sections/footer";
import styles from "./styles.module.css"
import {ProfileHeader} from "@/app/components/about/profileHeader";
import {ProfileAbout} from "@/app/components/about/profileAbout";
import {ProfileSkill} from "@/app/components/about/profileSkill";
import {ProfileSchool} from "@/app/components/about/profileSchool";
import {ProfileBanner} from "@/app/components/about/profileBanner";

const AboutMe = () => {
    return (
        <>
            <HeaderNav/>
            <section className={`${styles.aboutContainer}`}>
                <div className={"max-w-screen-xl mx-auto py-16"}>
                    <ProfileHeader/>
                    <ProfileAbout/>
                    <ProfileSkill/>
                    <ProfileSchool/>
                    <ProfileBanner/>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default AboutMe;

