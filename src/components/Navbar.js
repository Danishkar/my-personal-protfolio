const Navbar = () => {
    return ( 
        <div className="flex p-[15px] bg-bg-slate-50 font-bold justify-center">
            <h1 className="flex-1 text-xl cursor-pointer">Danishkar S</h1>
            <ul className="hidden md:flex">
                <li className="flex-1 mr-[4rem] cursor-pointer">
                    <a href="/" className="text-center transition-colors duration-400 hover:text-yellow">
                        Home
                    </a>
                </li>
                <li className="flex-1 mr-[4rem] cursor-pointer">
                    <a href="/" className="text-center transition-colors duration-400 hover:text-yellow">
                        About
                    </a>
                </li>
                <li className="flex-1 mr-[4rem] cursor-pointer">
                    <a href="/" className="text-center transition-colors duration-400 hover:text-yellow">
                        Projects
                    </a>
                </li>
                <li className="flex-1 mr-[3rem] cursor-pointer">
                    <a href="/" className="text-center transition-colors duration-400 hover:text-yellow">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
     );
}
 
export default Navbar;