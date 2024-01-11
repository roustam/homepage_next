import TopNavbar from "../components/TopNavbar";
import SiteFooter from "../components/Footer";

export default function Contacts() {
    return (
        <div className="flex min-h-screen w-2/3 flex-col items-center mx-auto">
            <TopNavbar />
            <h1 className="flex w-2/3 flex-col items-center mx-auto">My contacts</h1>
            <SiteFooter /> 
        </div>
    )
}