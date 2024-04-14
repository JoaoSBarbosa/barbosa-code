import {LayoutAbout} from "@/app/components/about/layoutAbout";

export const  ProfileHeader=()=>{
    return(
        <LayoutAbout>

            <div className={`flex flex-wrap  gap-4`}>

                <div className={"bg-purple-600 rounded-full"}>
                    <img
                        className="rounded-md w-80"
                        src="../img/barbosa.gif"
                        alt="Foto do perfil"
                    />
                </div>
                <div>
                    <h2 className={"text-6xl"}>Olá ! Sou o João</h2>
                </div>
            </div>
        </LayoutAbout>

    )
}