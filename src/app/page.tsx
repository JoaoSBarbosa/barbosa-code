import {HeaderNav} from "@/app/components/header/HeaderNav";
import {MobileContext} from "@/app/Contexts/MobileContext";
import {Introduction} from "@/app/components/main/Introduction";
import {ThreeLatestProjects} from "@/app/components/Projects/LatestProjectContainer/ThreeLatestProjects";
import {Services} from "@/app/components/services";

const Page = () => {
    return (
        <MobileContext>
            <div>
                <HeaderNav/>
                <Introduction/>
                <ThreeLatestProjects/>
                <Services/>
            </div>
        </MobileContext>
    )
}
export default Page;