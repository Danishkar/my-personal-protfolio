import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Myskills from "../components/Myskills";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const Main = () => {
    return ( 
        <div className="main h-[2000px]">
            <Navbar />
            <Hero />
            <About />
            <Myskills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
 
export default Main;