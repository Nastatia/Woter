import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";

const Footer = () => {
    return ( 
        <footer className="h-auto bg-gradient-to-b from-black to-[#3E6A7E] lg:px-40 md:px-10 sm:px-6 px-6 lg:pt-20 md:pt-10 sm:pt-6 pt-6">
             <div className="flex flex-col lg:flex-row gap-6 ">
                <div className='flex-1'>
                  <h4 className='font-playfair text-[#97D1E3]  font-extrabold text-left text-sm md:text-md lg:text-lg pb-2'>Connect with us</h4>
                 <div className="flex  space-x-4 mt-8">
                          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=" text-[#97D1E3]  text-2xl  hover:text-blue-500">
                             <FaFacebook />
                           </a>
                           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className=" text-[#97D1E3] text-2xl  hover:text-pink-700">
                                <FaInstagram />
                          </a>
                          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className=" text-[#97D1E3] text-2xl  hover:text-green-700">
                             <FaWhatsapp />
                           </a>
                           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" text-[#97D1E3] text-2xl  hover:text-black">
                             <FontAwesomeIcon icon={faXTwitter}  />
                          </a>
                 </div>
                </div>
                <div className='flex-1'>
                   <h4 className='font-playfair text-[#97D1E3]  font-extrabold text-left text-sm md:text-md lg:text-lg pb-4'>Cookies</h4>
                   <h4 className='font-playfair text-[#97D1E3]  font-extrabold text-left text-sm md:text-md lg:text-lg pb-4'>Privacy</h4>
                   <h4 className='font-playfair text-[#97D1E3]  font-extrabold text-left text-sm md:text-md lg:text-lg pb-4'>Terms and Condition</h4>
                </div>
                <div className='flex-1'>
                <h4 className='font-playfair text-[#97D1E3]  font-extrabold text-left text-sm md:text-md lg:text-lg pb-4'>Contact us</h4>
                  <div className="flex flex-col md:justify-center gap-4">
                     <div className="flex items-center space-x-4">
                         <FaMapMarkerAlt className=" text-[#97D1E3]  text-2xl" />
                          <div>
                             <h4 className='font-playfair text-[#97D1E3]  font-bold text-left text-sm  md:text-md lg:text-lg pb-2'>Location</h4>
                             <p className="text-[#97D1E3] text-sm">123 Woter Street, Aqua City, H2O</p>
                          </div>
                      </div>
                      <div className="flex items-center space-x-4">
                         <FaPhoneAlt className= "text-[#97D1E3]  text-2xl" />
                         <div>
                            <h4 className='font-playfair text-[#97D1E3]  font-bold text-left text-sm  md:text-md lg:text-lg pb-2'>Telephone</h4>
                             <p className="text-[#97D1E3] text-sm">+234 9087456920</p>
                         </div>
                     </div>
                     <div className="flex items-center space-x-4">
                          <FaEnvelope className= 'text-[#97D1E3]  text-2xl' />
                          <div>
                             <h4 className='font-playfair text-[#97D1E3]  font-bold text-left text-sm  md:text-md lg:text-lg pb-2'>Email us</h4>
                              <p className="text-[#97D1E3] text-sm">contact@woter.com</p>
                         </div>
                     </div>
                 </div>
               </div>
                
             </div>
             <div className="pt-12 pb-2 text-center">
                  <p className="text-[#97D1E3] text-sm">Copyright ©2024 All rights reserved</p>
               </div>
            </footer>
     );
}
 
export default Footer;