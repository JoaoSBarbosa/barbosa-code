// import {HeaderNav} from "@/app/components/header/HeaderNav";
// import Footer from "@/app/pages/footer/page";
// import {Tabs} from 'flowbite-react';
// import {HiAdjustments, HiClipboardList, HiUserCircle} from 'react-icons/hi';
// import {MdDashboard} from 'react-icons/md';
//
// const AboutMe = () => {
//     return (
//         <>
//             <HeaderNav/>
//
//             <div className="container mx-auto p-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div className="mb-8 md:mb-0">
//                         <img
//                             className="rounded-md shadow-lg"
//                             src="img/barbosa.png"
//                             alt="Foto do perfil"
//                         />
//                     </div>
//
//                     <div>
//                         <Tabs aria-label="Full width tabs" style="fullWidth">
//                             <Tabs.Item active title="Perfil" icon={HiUserCircle}>
//
//                                 <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
//                                 <p className="mb-4">
//                                     Sou um programador júnior apaixonado por desenvolvimento de
//                                     software. Tenho especial interesse em tecnologia, ficção
//                                     científica, medieval e terror. Além disso, sou entusiasta de jogos
//                                     RPG e aventura.
//                                 </p>
//
//                                 <p className="mb-4">
//                                     Gosto de ouvir música, fazer pesquisas e, claro, programar. Atualmente,
//                                     trabalho na Fanstore, onde desenvolvo projetos em JavaScript,
//                                     React, HTML e CSS, incluindo páginas web e componentes em
//                                     WordPress.
//                                 </p>
//
//                                 <p className="mb-4">
//                                     Sou organizado, responsável e me adapto facilmente a mudanças. Meu
//                                     objetivo é agregar valor e fazer a diferença nos projetos em que
//                                     trabalho.
//                                 </p>
//
//                                 <p className="mb-8">
//                                     Estou aberto a novos desafios e oportunidades de crescimento.
//                                     Entre em contato comigo!
//                                 </p>
//
//                                 <div className="flex flex-col md:flex-row items-start md:items-center">
//                                     <div className="md:mr-4 mb-2">
//                                         <strong>Idade:</strong> 30 anos
//                                     </div>
//                                     <div className="md:mr-4 mb-2">
//                                         <strong>Endereço:</strong> Itaquaquecetuba - São Paulo/SP
//                                     </div>
//                                     <div className="md:mr-4 mb-2">
//                                         <strong>Nacionalidade:</strong> Brasileiro
//                                     </div>
//                                     <div className="md:mr-4 mb-2">
//                                         <strong>Inglês:</strong> Técnico
//                                     </div>
//                                 </div>
//
//                                 <div className="mt-4">
//                                     <strong>Email:</strong> contato.jsbarbosa@gmail.com
//                                 </div>
//                                 <div className="mt-2">
//                                     <strong>Telefone:</strong> 11 9 99453-7464
//                                 </div>
//
//                             </Tabs.Item>
//
//                             <Tabs.Item title="Dashboard" icon={MdDashboard}>
//                                 This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
//                                 Clicking another tab will toggle the visibility of this one for the next. The tab
//                                 JavaScript swaps classes to
//                                 control the content visibility and styling.
//                             </Tabs.Item>
//                         </Tabs>
//                     </div>
//                 </div>
//             </div>
//
//             <Footer/>
//         </>
//     );
// };
//
// export default AboutMe;
'use client';
import {HeaderNav} from "@/app/components/header/HeaderNav";
import Footer from "@/app/pages/footer/page";
import {Card, Carousel, Tabs} from 'flowbite-react';
import {HiAdjustments, HiClipboardList, HiUserCircle} from 'react-icons/hi';
import styles from "./styles.module.css"
import {black} from "kleur/colors";
import {TabsTheme} from "@/app/components/Theme/TabsTheme";
import {CardTheme} from "@/app/components/Theme/CardTheme";
import {CarouselTheme} from "@/app/components/Theme/CarouselTheme";

const AboutMe = () => {
    return (
        <>
            <HeaderNav/>

            <section className={`${styles.aboutContainer}`}>
                <div className={"container mx-auto p-8"}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                        <div className="mb-8 md:mb-0 ">
                            <img
                                className="rounded-md shadow-lg"
                                src="../img/barbosa.png"
                                alt="Foto do perfil"
                            />
                        </div>

                        <div className={""}>
                            <Tabs aria-label="Full width tabs" style="fullWidth" theme={TabsTheme}>
                                <Tabs.Item
                                    active
                                    title="Perfil"
                                    icon={HiUserCircle}
                                >
                                    <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
                                    <p className="mb-4">
                                        Sou um programador júnior apaixonado por desenvolvimento de
                                        software. Tenho especial interesse em tecnologia, ficção
                                        científica, medieval e terror. Além disso, sou entusiasta de jogos
                                        RPG e aventura.
                                    </p>

                                    <p className="mb-4">
                                        Gosto de ouvir música, fazer pesquisas e, claro, programar. Atualmente,
                                        trabalho na Fanstore, onde desenvolvo projetos em JavaScript,
                                        React, HTML e CSS, incluindo páginas web e componentes em
                                        WordPress.
                                    </p>

                                    <p className="mb-4">
                                        Sou organizado, responsável e me adapto facilmente a mudanças. Meu
                                        objetivo é agregar valor e fazer a diferença nos projetos em que
                                        trabalho.
                                    </p>

                                    <p className="mb-8">
                                        Estou aberto a novos desafios e oportunidades de crescimento.
                                        Entre em contato comigo!
                                    </p>

                                    <div className="flex flex-col md:flex-row text-white items-start md:items-center">
                                        <div className="md:mr-4 mb-2">
                                            <strong>Idade:</strong> 30 anos
                                        </div>
                                        <div className="md:mr-4 mb-2">
                                            <strong>Endereço:</strong> Itaquaquecetuba - São Paulo/SP
                                        </div>
                                        <div className="md:mr-4 mb-2">
                                            <strong>Nacionalidade:</strong> Brasileiro
                                        </div>
                                        <div className="md:mr-4 mb-2">
                                            <strong>Inglês:</strong> Técnico
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <strong>Email:</strong> contato.jsbarbosa@gmail.com
                                    </div>
                                    <div className="mt-2">
                                        <strong>Telefone:</strong> 11 9 99453-7464
                                    </div>
                                </Tabs.Item>

                                <Tabs.Item
                                    title="Habilidades"
                                    icon={HiAdjustments}
                                >
                                    <h1 className="text-3xl font-bold mb-4">Habilidades</h1>
                                    <p className="mb-4">
                                        <strong>Desenvolvimento Frontend:</strong> React, JavaScript, Tailwind CSS,
                                        HTML,
                                        CSS
                                    </p>
                                    <p className="mb-4">
                                        <strong>Desenvolvimento Backend:</strong> Node.js, Express, Banco de Dados
                                    </p>
                                    <p className="mb-4">
                                        <strong>Linguagens:</strong> JavaScript, SQL
                                    </p>
                                    {/* ... Outras habilidades ... */}
                                </Tabs.Item>

                                <Tabs.Item
                                    title="Formações"
                                    icon={HiClipboardList}
                                >
                                    <h1 className="text-3xl font-bold mb-4">Formações</h1>


                                    {/*<Card className="max-w-sm"*/}
                                    {/*      imgSrc="https://uploaddeimagens.com.br/images/004/723/235/full/sistema-html-para-design-de-colagem-de-sites.jpg?1706233101"*/}
                                    {/*      horizontal>*/}
                                    {/*    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">*/}
                                    {/*        Análise e Desenvolvimento de Sistemas (UNINTER)*/}
                                    {/*    </h5>*/}

                                    {/*    <p className="font-normal text-gray-700 dark:text-gray-400">*/}
                                    {/*        Here are the biggest enterprise technology acquisitions of 2021 so far, in*/}
                                    {/*        reverse chronological order.*/}
                                    {/*    </p>*/}
                                    {/*</Card>*/}




                                            <Card className="max-w-sm  border"
                                                  imgSrc="../img/uninter-logo.svg"
                                                  horizontal theme={CardTheme}>
                                                <div className="p-6">
                                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                        Análise e Desenvolvimento de Sistemas
                                                    </h5>

                                                    <div className="mt-4 text-gray-500 dark:text-gray-400">
                                                        <p>
                                                            <strong>
                                                                Instituição:
                                                            </strong>
                                                            <a
                                                                href={"https://www.uninter.com/"}
                                                                target={"_blank"}>
                                                                 UNINTER
                                                            </a>
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                Carga Horária Total:
                                                            </strong>
                                                            2145
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                Tipo:
                                                            </strong>
                                                            Tecnólogo
                                                        </p>
                                                    </div>
                                                </div>
                                            </Card>



                                </Tabs.Item>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default AboutMe;

