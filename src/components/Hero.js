import Background from "../images/bg-img.jpg";
import Sidebar from "./Sidebar";
import 'animate.css';

const Hero = () => {
    return ( 
        <div className="relative">
            <img className="opacity-30 h-[93vh] w-full" src={Background} alt="" />
            <div className="absolute top-[1%] uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

                <h1 className="relative text-[3rem] font-bold text-center animate__animated animate__zoomInDown">Hey, I'm Danishkar Sivalingam</h1>
                <h3 className="relative text-[1rem] font-medium text-center text-gray-800 mt-4">
                    Full Stack Web Developer | MERN
                </h3>
                <div className="relative flex items-center justify-center">
                    <button className="mt-8 bg-yellow hover:opacity-75 text-gray-800 font-bold px-4 rounded inline-flex items-center w-42 h-14">
                    <span className="text-[1.25rem]">Download CV</span>
                    <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    </button>
                </div>
                
                
            </div>

            <div className="hidden md:block absolute bottom-[10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className='scrolldown' style={{color: "yellow"}}>
                    <div className="chevrons animate__animated animate__slideInDown animate__infinite">
                        <div className='chevrondown'></div>
                        <div className='chevrondown'></div>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
     );
}
 
export default Hero;