import {HeaderNav} from "@/app/components/header/HeaderNav";
import {MobileContext} from "@/app/Contexts/MobileContext";

const Page = () => {
    return (
        <MobileContext>
            <div>
                <HeaderNav/>
                Olá, mundo
            </div>
        </MobileContext>
    )
}
export default Page;