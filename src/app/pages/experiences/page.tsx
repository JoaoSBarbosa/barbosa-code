import {HeaderNav} from "@/app/components/header/HeaderNav";
import {ServicesContext} from "@/app/Contexts/ServicesContext";
import Footer from "@/app/pages/footer/page";

const Page=()=>{
    return(
        <ServicesContext>
            <HeaderNav/>
            <h1>Projetos profisionais</h1>
            <Footer/>
        </ServicesContext>

    )
}

export default Page;