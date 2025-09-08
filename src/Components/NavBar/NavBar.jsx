import logo from "../../assets/logo.png"
import { useState } from "react"
import { Menu, X} from "lucide-react"
import { navItems } from "../../Const/index.jsx"

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="sticky top-0 z-50 w-full py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto ">
                <div className="flex items-center justify-between">

                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                        <span className="text-xl trackinh-tight">VirtualR</span>
                    </div>

                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}><a href={item.href}>{item.label}</a></li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex justify-center space-x-4">
                        <a className="py-2 px-3 border rounded-md" href="#">Sign In</a>
                        <a className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" href="#">Create an Account</a>
                    </div>

                    <div className="lg:hidden md:flex  justify-end ">
                        <button className="cursor-pointer" onClick={toggleMenu}>
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="lg:hidden fixed mt-2 right-0  z-20 bg-neutral-900 w-full p-12 flex flex-col items-center justify-center">
                        <ul>
                            {navItems.map((item, index) => (
                                <li className="py-4" key={index}><a href={item.href}>{item.label}</a></li>
                            ))}
                        </ul>
                        <div className=" py-2 lg:hidden flex space-x-6 items-centerjustify-center">
                            <a className="py-2 px-3 border rounded-md" href="#">Sign In</a>
                            <a className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" href="#">Create an Account</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar
