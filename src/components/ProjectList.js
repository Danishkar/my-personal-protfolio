import project1 from "../images/project1.jpg";
import view from "../images/view.svg";

const ProjectsList = () => {
    return (   
        <div className="text-center p-4 ml-auto mr-auto mt-2">
            <img className="w-[370px] h-[250px]" src={project1} alt="project" />
            <h2 className="">Kutto</h2>
            <h3>A web application for adopting stray animals.</h3>
            <button className="mt-8 bg-yellow hover:opacity-75 
            text-gray-800 font-bold px-4 rounded inline-flex 
            justify-center items-center w-36 h-12"
            >
            <span className="text-[1.25rem]">View</span>
            <img src={view} alt="" className="w-6 h-6 ml-2 mt-1"/>
            </button>
        </div>
     );
}
 
export default ProjectsList;
