import Softskill from "./Softskill";
import Technicalskill from "./Technicalskill";

const Myskills = () => {
    return ( 
        <div>
            <h1 className="text-[1.7rem] font-bold uppercase text-center mb-4 pt-16">
                My Skills
            <div className="border-4 border-yellow -mt-[22px] w-[150px] mr-auto ml-auto"></div>
            </h1>
            <div className="">
                <Technicalskill />
                {/* <Softskill /> */}
            </div>
        </div>
     );
}
 
export default Myskills;