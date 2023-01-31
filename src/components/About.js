import myImage from "../images/my-image.jpeg";
import email from "../images/email.svg";
import 'animate.css';
const About = () => {
    return ( 
        <div className="bg-gray-100 pb-10">
            <h1 className="text-[1.7rem] font-bold uppercase text-center mb-4 pt-16">
                About Me
            <div className="border-4 border-yellow -mt-[22px] w-[150px] mr-auto ml-auto"></div>
            </h1>
            <div className="lg:grid grid-flow-row-dense grid-cols-3">
                <div className="col-span-2 p-8 pl-20 pr-20 lg:pl-44">
                    <h4 className="">
                    I am a creative Full-Stack Web Developer. I am a highly coordinated, 
                    committed and diplomatic software engineer with a defined capacity to 
                    operate and execute any specific role on schedule.
                    </h4>
                    <h4 className="mt-4">
                        I am able to communicate with a vast variety of individuals easily, 
                        with outstanding organizational skills. I see that I will bring my 
                        skills and expertise into practice in a full-time role in the industry, 
                        which will directly support the activities of the businesses I am 
                        involved in.
                    </h4>
                    <h4 className="mt-4">
                        I have the potential to build original conceptions and insights and solve 
                        a great many problems, guided by my intuitive and optimistic approach to 
                        problem solving. In algorithms as in business scenarios, I am able to 
                        apply my problems solving skills.
                    </h4>
                    <h4 className="mt-4">
                        Furthermore, I can easily and effectively understand the intensifying 
                        principles and help others to develop with great self encouragement. 
                        Therefore, I guess I am able to handle a lot of teams.
                    </h4>
                    
                </div>
                <div className="w-64 mr-auto ml-auto border-4 border-yellow p-2 h-78 overflow-hidden">
                    <img className="max-w-[100%] h-[100%]" src={myImage} alt=""/>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="mt-8 bg-yellow hover:opacity-75 
                text-gray-800 font-bold px-4 rounded inline-flex 
                justify-center items-center w-44 h-14"
                >
                <span className="text-[1.25rem]">Contact</span>
                <img src={email} alt="" className="w-6 h-6 ml-2"/>
                </button>
            </div>
            
        </div>
        
     );
}
 
export default About;

