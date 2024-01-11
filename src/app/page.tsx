import {HeaderNav} from "@/app/components/header/HeaderNav";
import {MobileContext} from "@/app/Contexts/MobileContext";
import {Introduction} from "@/app/components/main/Introduction";

const Page = () => {
    return (
        <MobileContext>
            <div>
                <HeaderNav/>
               <Introduction/>
            </div>
        </MobileContext>
    )
}
export default Page;