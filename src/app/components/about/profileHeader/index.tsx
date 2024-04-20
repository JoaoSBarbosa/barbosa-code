import {LayoutAbout} from "../layoutAbout";

export const  ProfileHeader=()=>{
    return(
        <LayoutAbout>

            <div className={`flex sm:justify-center sm:p-5 lg:justify-c gap-4`}>

                <div className={"bg-purple-600 rounded-full"}>
                    <img
                        className="rounded-md w-80"
                        src="../img/barbosa.gif"
                        alt="Foto do perfil"
                    />
                </div>
                <div className={"mx-1"}>
                    <h2 className={"text-5xl"}>Olá ! Sou o João</h2>
                    <h3 className={"text-2xl break-words mt-10"}>Desenvolvedor fullstack dedicado ao desenvolvimento de soluções que fazem a diferença.</h3>
                </div>
            </div>
        </LayoutAbout>

    )
}