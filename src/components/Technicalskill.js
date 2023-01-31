const Technicalskill = ()=>{
    const frontendWeb = [{
        name:"React"
    },{
        name:"JavaScript"
    },{
        name:"HTML"
    },{
        name:"CSS"
    },{
        name:"Bootstrap"
    },{
        name:"Tailwind"
    },{
        name:"Material UI"
    }]
    return(
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 p-8 pl-20 lg:pl-44 text-center">
            <h1 className="text-[1.5rem] font-semibold text-left col-span-3">
                Technical skills
            </h1>
            <h1 className="text-[1.2rem] font-semibold text-left col-span-3 lg:col-span-4 uppercase">
                Frontend web
            </h1>
            {frontendWeb.map((item, index) =>{
                return(
                    <div>
                        {item.name}
                    </div>
                )
            })}
            <div>
                Tailwind
            </div>
            <div>
                Material UI
            </div>
            <h1 className="text-[1.2rem] font-semibold text-left col-span-3 lg:col-span-4 uppercase">
                Backend
            </h1>
            <div>
                Node.js
            </div>
            <div>
                Express.js
            </div>
            <h1 className="text-[1.2rem] font-semibold text-left col-span-3 lg:col-span-4 uppercase">
                Databases
            </h1>
            <div>
                MongoDB
            </div>
            <div>
                SQL
            </div>
            <div>
                SQLite
            </div>
            <h1 className="text-[1.2rem] font-semibold text-left col-span-3 lg:col-span-4 uppercase">
                Other Languages
            </h1>
            <div>
                Java
            </div>
            <div>
                Python
            </div>
        </div>
    )
};
export default Technicalskill;