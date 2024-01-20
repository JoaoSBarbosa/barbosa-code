import {HeaderNav} from "@/app/components/header/HeaderNav";
import {ServicesContext} from "@/app/Contexts/ServicesContext";
import {Introduction} from "@/app/components/main/Introduction";
import {ThreeLatestProjects} from "@/app/components/Projects/LatestProjectContainer/ThreeLatestProjects";
import {Services} from "@/app/components/services";

const Page = () => {
    return (
        <ServicesContext>
            <div>
                <HeaderNav/>
                <Introduction/>
                <ThreeLatestProjects/>
                <Services/>
            </div>
        </ServicesContext>
    )
}
export default Page;