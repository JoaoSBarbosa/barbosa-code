import {HeaderNav} from "@/app/components/header/HeaderNav";
import {MobileContext} from "@/app/Contexts/MobileContext";
import {Introduction} from "@/app/components/main/Introduction";
import {ThreeLatestProjects} from "@/app/components/Projects/LatestProjectContainer/ThreeLatestProjects";

const Page = () => {
    return (
        <MobileContext>
            <div>
                <HeaderNav/>
                <Introduction/>
                <ThreeLatestProjects/>
            </div>
        </MobileContext>
    )
}
export default Page;