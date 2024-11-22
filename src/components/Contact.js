import Navbar from "./Navbar";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,FaRegClock } from "react-icons/fa";
import { MdLocationSearching } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp,  FaLinkedin  } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import Footer from "./Footer";




const Contact = () => {
    return ( 
        <section className='bg-gradient-to-b from-[#97D1E3] via-[#f5f5f5] to-white h-auto font-poppins'>
            <div className="bg-gradient-to-b from-black to-[#3E6A7E]  ">
                <Navbar/>
          </div>
          <div className="text-[#3E6A7E] h-auto  lg:px-40 md:px-10 sm:px-6 px-6 py-20 sm:py-40">
             <div className='pb-6 text-center justify-center text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight'>
                 <h1>GET IN TOUCH</h1>
                 <hr className='w-[10%] border-t-4 mx-auto border-[#3E6A7E] mt-2'/>
             </div>
             <div className="flex flex-col lg:flex-row gap-6 lg:py-20 md:py-10 sm:py-6 py-6 ">
                  <div className="flex-1 flex flex-col  items-center "> 
                     <FaPhoneAlt className= "  text-2xl" />
                     <div className="text-center">
                          <h4 className='font-playfair  font-bold t text-sm  md:text-md lg:text-lg pb-2'>Telephone</h4>
                          <p className=" text-sm">+234 9087456920</p>
                     </div>
                  </div>
                  <div className="flex-1 flex flex-col  items-center ">
                     <FaEnvelope className= ' text-2xl' />
                     <div className="text-center">
                         <h4 className='font-playfair  font-bold text-sm  md:text-md lg:text-lg pb-2'>Email us</h4>
                         <p className="text-sm">contact@woter.com</p>
                     </div> 
                  </div>
                  <div className="flex-1 flex flex-col  items-center "> 
                     <FaMapMarkerAlt className="  text-2xl" />
                      <div className="text-center">
                          <h4 className='font-playfair  font-bold text-sm  md:text-md lg:text-lg pb-2'>Location</h4>
                          <p className="text-sm">123 Woter Street, Aqua City, H2O</p>
                      </div>
                  </div>
                  <div className="flex-1 flex flex-col  items-center "> 
                     < FaRegClock className= ' text-2xl' />
                     <div className="text-center">
                         <h4 className='font-playfair  font-bold text-sm  md:text-md lg:text-lg pb-2'>Business Hours</h4>
                         <p className="text-sm">Mon - Sat</p>
                         <p className="text-sm">9am - 5pm</p>
                     </div>
                  </div>
             </div>

             <div className="flex flex-col lg:flex-row gap-8  lg:py-20 md:py-10 sm:py-6 py-6 ">
                 {/* Map Section */}
                 <div className="flex-1  rounded-md overflow-hidden">
                     <h4 className='font-playfair text-[#3E6A7E] font-extrabold text-left text-lg md:text-xl lg:text-2xl pb-4'>How to find us</h4>
                     <div className="pb-6 h-[350px]">
                         <iframe
                              title="map"
                              className="w-full h-full"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509428!2d144.95373531531715!3d-37.81720997975139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b8d8c3a95b37!2sMelbourne%20Central%20Shopping%20Centre!5e0!3m2!1sen!2sau!4v1614914249410!5m2!1sen!2sau"
                              allowFullScreen=""
                              loading="lazy"
                         ></iframe>
                     </div>
                      <div className="flex flex-col md:justify-center gap-4">
                         <h4 className=' text-[#3E6A7E] font-extrabold text-left text-sm font-poppins pt-4 pb-2'>BRANCH OFFICES</h4>
                           <div className="flex items-center space-x-4">
                             < MdLocationSearching className=" text-[#3E6A7E]  text-2xl" />
                             <div>
                                 <h4 className='font-playfair text-[#3E6A7E]  text-left text-sm  md:text-md lg:text-lg pb-2'>Lagos Area Office</h4>
                                 <p className="text-[#3E6A7E] text-sm font-bold">123 Woter Street, Aqua City, H2O</p>
                               </div>
                          </div>
                          <div className="flex items-center space-x-4">
                             < MdLocationSearching className=" text-[#3E6A7E]  text-2xl" />
                             <div>
                                 <h4 className='font-playfair text-[#3E6A7E]  text-left text-sm  md:text-md lg:text-lg pb-2'>Abuja Area Office</h4>
                                 <p className="text-[#3E6A7E] text-sm font-bold">123 Woter Street, Aqua City, H2O</p>
                               </div>
                          </div>
                          <div className="flex items-center space-x-4">
                             < MdLocationSearching className=" text-[#3E6A7E]  text-2xl" />
                             <div>
                                 <h4 className='font-playfair text-[#3E6A7E]  text-left text-sm  md:text-md lg:text-lg pb-2'>Onitsha Area Office</h4>
                                 <p className="text-[#3E6A7E] text-sm font-bold">123 Woter Street, Aqua City, H2O</p>
                               </div>
                          </div>
                      </div>
                    </div>
                      
                   {/* Form Section */}
                  <div className="flex-1">
                        <h4 className='font-playfair text-[#3E6A7E] font-extrabold text-justify text-lg md:text-xl lg:text-2xl pb-6'>How can we help you?</h4>
                        <p> 
                         We’re here to assist with any questions or concerns you may have!
                         Whether it’s about our products, delivery services, or partnership opportunities, feel free to reach out. 
                         Fill out the form below, or contact us directly via email or telephone. 
                         Our team is ready to respond promptly and provide the support you need!
                        </p>
                        <form className="flex flex-col gap-8 pt-10">
                            <input
                             required
                              type="text"
                              placeholder="Your Name"
                              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E6A7E]"
                            />
                           <input
                             required
                             type="email"
                             placeholder="Your Email"
                             className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E6A7E]"
                           />
                           <textarea
                              required
                              placeholder="Your Message"
                              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E6A7E] h-52 resize-none"
                          ></textarea>
                          <button
                             type="submit"
                             className="bg-[#3E6A7E] text-white py-2 rounded-md hover:bg-[#97D1E3] transition-300 w-1/5 mt-4"
                              >
                              Send 
                          </button>
                      </form>
                 </div>
             </div>

             <div className="flex flex-col sm:flex-row justify-center items-start space-x-8 sm:space-x-8 mt-8 text-[#3E6A7E] lg:py-20 md:py-10 sm:py-6 py-6">
                  <h4 className='text-[#3E6A7E] font-extrabold text-left text-sm font-poppins   sm:mb-0 mb-4'>Stay Social, Stay Connected</h4>
                  <div className="flex flex-wrap  space-x-4 ">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl lg:text-4xl hover:text-blue-500 transition-all duration-300">
                          <FaFacebook />
                      </a>
                       <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl lg:text-4xl hover:text-pink-700 transition-all duration-300">
                          <FaInstagram />
                      </a>
                      <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl lg:text-4xl hover:text-green-700 transition-all duration-300">
                         <FaWhatsapp />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="lg:text-4xl md:text-3xl hover:text-black transition-all duration-300">
                           <FontAwesomeIcon icon={faXTwitter} size="x" />
                       </a>
                       <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className=" lg:text-4xl md:text-3xl text-2xl hover:text-blue-500 transition-all duration-300">
                         <FaLinkedin />
                      </a>
                 </div>
               </div>
         </div>
         <div>
            <Footer/>
         </div>
      </section>
     );

}
 
export default Contact;