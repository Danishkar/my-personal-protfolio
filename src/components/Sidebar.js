import facebook from "../images/facebook.svg";
import github from "../images/github.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";

const Sidebar = () => {
    return ( 
        <div className="hidden rounded-r-lg bg-white absolute top-[30%] lg:flex flex-col gap-y-5 p-6">
            <img className="w-10 h-10 hover:border-2 border-transparent" src={facebook} alt="Facebook" />
            <img className="w-10 h-10 hover:border-2 border-transparent" src={github} alt="Github" />
            <img className="w-10 h-10 hover:border-2 border-transparent" src={linkedin} alt="linkedin" />
            <img className="w-10 h-10 hover:border-2 border-transparent" src={twitter} alt="Twitter" />
            <img className="w-10 h-10 hover:border-2 border-transparent" src={instagram} alt="Instagram" />
        </div>
     );
}
 
export default Sidebar;