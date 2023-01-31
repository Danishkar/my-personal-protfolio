import "animate.css";


import react from "../images/react1.svg";
import javascript from "../images/javascript.svg";
import html from "../images/html.svg";
import css from "../images/css.svg";
import bootstrap from "../images/bootstrap.svg";
import tailwind from "../images/tailwind.svg";
import materialUi from "../images/materialUi.svg";
import nodejs from "../images/nodejs.svg";
import expressjs from "../images/expressjs.svg";
import mongoDb from "../images/mongodb.svg";
import sql from "../images/sql.svg";
import sqlite from "../images/sqlite.svg";
import java from "../images/java.svg";
import python from "../images/python.svg";

const Technicalskill = ()=>{
    const frontendWeb = [{
        name:"React",
        href:react
    },{
        name:"JavaScript",
        href:javascript
    },{
        name:"HTML",
        href:html
    },{
        name:"CSS",
        href:css
    },{
        name:"Bootstrap",
        href:bootstrap
    },{
        name:"Tailwind",
        href:tailwind
    },{
        name:"Material UI",
        href:materialUi
    }]
    const backend = [{
        name:"Node.js",
        href:nodejs
    },{
        name:"Express.js",
        href:expressjs
    }]
    const databases = [{
        name:"MongoDB",
        href:mongoDb
    },{
        name:"SQL",
        href:sql
    },{
        name:"SQLite",
        href:sqlite
    }]
    const otherLang = [{
        name:"Java",
        href:java
    },{
        name:"Python",
        href:python
    }]
    return(
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 p-8 pl-16 lg:pl-44 text-center">
            <h1 className="text-[1.5rem] font-semibold text-left col-span-3 mb-6">
                Technical skills
                <div className="border-4 border-yellow -mt-[20px] w-[160px]"></div>
            </h1>
            <h1 className="text-[1.2rem] font-semibold text-left col-span-3 lg:col-span-4 uppercase">
                Frontend web
            </h1>
            {frontendWeb.map((item, index) =>{
                return(
                    <div className="flex items-center gap-2 p-3 font-bold text-[15px] lg:text-[20px] w-34" key={index}>
                        <img className="w-6 h-6 lg:w-8 lg:h-8 animate__animated animate__shakeX animate__slow animate__infinite" 
                        src={item.href} alt=""
                        />
                        {item.name}
                    </div>
                )
            })}
            
            <h1 className="text-[1.2rem] font-semibold text-left col-span-3 lg:col-span-4 uppercase">
                Backend
            </h1>
            {backend.map((item, index)=>{
                    return(
                    <div className="flex items-center gap-2 p-3 font-bold text-[15px] lg:text-[20px] w-34" key={index}>
                        <img className="w-6 h-6 lg:w-8 lg:h-8  animate__animated animate__shakeX animate__slow animate__infinite" 
                        src={item.href} alt=""
                        />
                        {item.name}
                    </div>
                ) 
                })
            }
            <h1 className="text-[1.2rem] font-semibold text-left col-span-3 lg:col-span-4 uppercase">
                Databases
            </h1>
            {databases.map((item, index)=>{
                    return(
                    <div className="flex items-center gap-2 p-3 font-bold text-[15px] lg:text-[20px] w-34" key={index}>
                        <img className="w-6 h-6 lg:w-8 lg:h-8  animate__animated animate__shakeX animate__slow animate__infinite" 
                        src={item.href} alt=""
                        />
                        {item.name}
                    </div>
                ) 
                })
            }
            <h1 className="text-[1.2rem] font-semibold text-left col-span-3 lg:col-span-4 uppercase">
                Other Languages
            </h1>
            {otherLang.map((item, index)=>{
                    return(
                    <div className="flex items-center gap-2 p-3 font-bold text-[15px] lg:text-[20px] w-34" key={index}>
                        <img className="w-6 h-6 lg:w-8 lg:h-8  animate__animated animate__shakeX animate__slow animate__infinite" 
                        src={item.href} alt=""
                        />
                        {item.name}
                    </div>
                ) 
                })
            }
        </div>
    )
};
export default Technicalskill;