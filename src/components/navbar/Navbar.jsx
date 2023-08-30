
import logo from '../../assets/images/logo.png'
const Navbar = () => {
    return (
        <>
            <nav className="navbar-nav ease-linear duration-300 bg-primary py-[27px] w-full">
            <div className="max-w-container mx-auto">
                <div className="md:flex md:items-center mx-5">
                    <div className="">
                    <a href="#"><img src={logo}alt="logo"/></a>
                    </div>
                    <div className="ml-auto">
                        <ul className="md:flex">
                            <li><a className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white mr-[47px]"
                                    href="#">Home</a></li>
                            <li><a className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white mr-[47px]"
                                    href="#">About</a></li>
                            <li><a className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white mr-[47px]"
                                    href="#">Services</a></li>
                            <li><a className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white mr-[47px]"
                                    href="#">Gallery</a></li>
                            <li><a className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white mr-[47px]"
                                    href="#">Blog</a></li>
                        </ul>
                    </div>
                    <button
                        className="bg-transparent  hover:bg-white  hover:text-primary duration-700 py-3 px-8 border-2 border-white font-pops text-white text-base font-semibold">CONTACT</button>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;