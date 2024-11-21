import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return ( 
        <nav className="py-4 flex items-center w-full justify-between relative  lg:px-40 md:px-10 sm:px-6 px-6"  >
                        <div className="container flex justify-between items-center ">
                            <div className="text-white text-2xl font-bold flex gap-2">
                                <img src='./Assets/logo.png' alt='Logo' className='w-1/4' />
                            </div>
                            <div className="hidden md:flex gap-10 active:text-red items-center justify-end font-poppins">
                               <Link className="text-[#97D1E3] text-sm font-semibold transition-colors duration-300 hover:text-white" to="/">Home</Link>
                               <Link className="text-[#97D1E3]  text-sm font-semibold transition-colors duration-300 hover:text-white" to="/about">About</Link>
                               <Link className="text-[#97D1E3]  text-sm font-semibold transition-colors duration-300 hover:text-white" to="/product">Products</Link>
                               <Link className="text-[#97D1E3]  text-sm font-semibold transition-colors duration-300 hover:text-white" to="/delivery">Delivery</Link>
                               <Link className="text-[#97D1E3]  text-sm font-semibold transition-colors duration-300 hover:text-white" to="/blog">Blog</Link>
                               <Link className="text-[#97D1E3]  text-sm font-semibold transition-colors duration-300 hover:text-white" to="/contact">Contact</Link>
                          </div>
                          <button
                             onClick={() => setIsOpen(!isOpen)}
                             className="md:hidden text-[#97D1E3] focus:outline-none"
                    >
                               {/* Hamburger Icon */}
                              <svg
                                 className="w-6 h-6"
                                 fill="none"
                                 stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                                 >
                                 <path
                                     strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                     d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                                    />
                               </svg>
                          </button>
                     </div>
                     {isOpen && (
                          <div className="md:hidden absolute top-20 left-1/2 right-0 bg-black opacity-90 mt-4 space-y-2 py-4 flex flex-col items-center z-10 delay-150 font-poppins">
                             <Link className="text-[#97D1E3]  text-sm font-semibold transition-colors duration-300 hover:text-white" to="/">Home</Link>
                             <Link className="text-[#97D1E3]  text-sm font-semibold transition-colors duration-300 hover:text-white" to="/about">About</Link>
                             <Link className="text-[#97D1E3]  text-sm font-semibold transition-colors duration-300 hover:text-white" to="/product">Products</Link>
                             <Link className="text-[#97D1E3]  text-sm font-semibold transition-colors duration-300 hover:text-white" to="/delivery">Delivery</Link>
                             <Link className="text-[#97D1E3]  text-sm font-semibold transition-colors duration-300 hover:text-white" to="/contact">Contact</Link>
                           </div>
                       )}
                    </nav>
     );
}
 
export default Navbar;