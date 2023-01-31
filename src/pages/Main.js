import About from "../components/About";
import Hero from "../components/Hero";
import Myskills from "../components/Myskills";
import Navbar from "../components/Navbar";

const Main = () => {
    return ( 
        <div className="main h-[2000px]">
            <Navbar />
            <Hero />
            <About />
            <Myskills /> 
        </div>
    );
}
 
export default Main;