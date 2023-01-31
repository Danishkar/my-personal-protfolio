import ProjectsList from "./ProjectList";


const Project = () => {
    return ( 
        <div className="bg-gray-100 pb-10">
            <h1 className="text-[1.7rem] font-bold uppercase text-center mb-4 pt-16">
                Projects
            <div className="border-4 border-yellow -mt-[22px] w-[150px] mr-auto ml-auto"></div>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <ProjectsList />
                <ProjectsList />
                <ProjectsList />
                <ProjectsList />
            </div>
        </div>
     );
}
 
export default Project;