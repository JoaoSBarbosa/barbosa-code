import {HeaderNav} from "@/app/components/header/HeaderNav";
import {ServicesContext} from "@/app/Contexts/ServicesContext";

const Page=()=>{
    return(
        <ServicesContext>
            <HeaderNav/>
            <h1>Projetos profisionais</h1>
        </ServicesContext>

    )
}

export default Page;