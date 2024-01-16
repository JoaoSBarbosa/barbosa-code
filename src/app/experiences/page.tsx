import {HeaderNav} from "@/app/components/header/HeaderNav";
import {MobileContext} from "@/app/Contexts/MobileContext";

const Page=()=>{
    return(
        <MobileContext>
            <HeaderNav/>
            <h1>Projetos profisionais</h1>
        </MobileContext>

    )
}

export default Page;