import { motion } from 'framer-motion';
import Blog from './Blog';
import Footer from '../Footer';
import Navbar from "../Navbar";
import { Link } from 'react-router-dom';

const Home = () => {
    
    const view = {
        backgroundImage:"url('Assets/bkground.webp')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        
    }

    return ( 
        <section>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 2.0 }}
               className="m-0 p-0 h-screen bg-center bg-no-repeat w-full"style={view}>
             
                <div className='m-0 p-0 h-screen bg-black bg-opacity-80 '>
                    <Navbar/>
                    <div className="text-center text-[#97D1E3] justify-center mx-auto py-48 sm:py-48 md:py-48 lg:py-48 font-playfair lg:max-w-5xl 
                          max-w-md sm:max-w-md md:max-w-xl lg:px-40 md:px-10 sm:px-6 px-6 " 
                        >
                      <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                          PURE WATER, PURE LIFE, PURE REFRESHMENT
                       </p>
                       <p className="text-xs sm:text-sm  md:text-base lg:text-lg mt-4">
                         Stay hydrated, Stay healthy, Stay with Woter...
                      </p>
                    </div>

                </div>
            </motion.div>
            <section className='bg-gradient-to-b from-[#97D1E3] via-[#f5f5f5] to-white h-auto'>
                <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 h-auto lg:px-40 md:px-10 sm:px-6 px-6 lg:py-20 md:py-10 sm:py-6 py-6 ">
                    <div className=' w-full md:w-2/3 bg-inherit flex items-center justify-center'>
                        <img src='Assets/woter_and_cup.png' alt='Product' className='w-full '/>
                    </div>
                    <div className='w-full md:w-1/3 bg-inherit flex text-justify items-center justify-center text-[#3E6A7E]'>
                        <div className='flex flex-col font-poppins gap-4'>
                            <div className='pb-4  text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight'>
                               <h1>ABOUT US</h1>
                               <hr className='w-[15%] border-t-4  border-[#3E6A7E] mt-2'/>
                           </div>
                            <p>
                             At Woter, we are dedicated to providing the highest quality bottled water, sourced from the cleanest natural springs.
                             Our mission is simple: to deliver pure, refreshing water that promotes wellness and supports a healthy lifestyle.
                            </p>
                            <p>
                             Founded with a commitment to excellence, Woter ensures that every bottle is crafted with care, offering more than just hydration but a promise of purity.
                             Through state-of-the-art filtration and quality control processes,
                             we make sure that every drop of Woter is free from contaminants and full of the essential minerals your body needs to stay healthy.
                            </p>
                            <Link to="/about">
                              <button className="px-6 py-3 text-[11px] lg:text-sm text-[#3E6A7E] rounded-3xl bg-transparent font-bold hover:bg-[#97D1E3]
                                 transition duration-300 border-2 border-[#3E6A7E] my-4">
                                 READ MORE
                              </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-[#3E6A7E] h-auto  lg:px-40 md:px-10 sm:px-6 px-6 lg:py-20 md:py-10 sm:py-6 py-6 ">
                   <div className='pb-6 text-center justify-center text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight'>
                     <h1>OUR PRODUCTS</h1>
                     <hr className='w-[10%] border-t-4 mx-auto border-[#3E6A7E] mt-2'/>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-6 lg:py-20 md:py-10 sm:py-6 py-6 ">
                    <div className="flex-1  ">
                     <div className='h-auto '>
                         <img src='/Assets/DispenserBottle.jpg' alt='Dispenser bottle' className='h-full w-full rounded'/>
                     </div>
                     <div className='py-8 gap-4 text-justify'>
                         <h4 className='font-playfair text-[#3E6A7E] font-extrabold text-center text-lg md:text-xl lg:text-2xl pb-4'> Dispenser Bottle</h4>
                         <p>
                             Stay refreshed and hydrated with Woter's Dispenser Bottle—your reliable companion for high-quality,
                             purified water, now available in a convenient dispenser format. Whether at home, in the office, or at events,
                             Woter's dispenser bottle provides easy access to fresh water, all day long.
                         </p>
                     </div>
                    </div>
                    <div className="flex-1">
                      <div className='h-auto '>
                         <img src='/Assets/75cl.jpg' alt='75cl' className='h-full w-full rounded' />
                        </div>
                        <div className='py-8 gap-4 text-justify'>
                            <h4 className='font-playfair text-[#3E6A7E] font-extrabold text-center text-lg md:text-xl lg:text-2xl pb-4'> 75cl Bottle Water</h4>
                            <p>
                             A perfect balance of convenience and quality.
                             This sleek, compact bottle is designed to keep you hydrated throughout your day,
                             whether you’re at the gym, at work, or on the go.
                          </p>
                        </div>
                    </div>
                    <div className="flex-1  ">
                     <div className='h-auto '>
                         <img src='/Assets/50cl.jpg' alt='50cl' className='h-full w-full rounded' />
                     </div>
                     <div className='py-8 gap-4 text-justify'>
                            <h4 className='font-playfair text-[#3E6A7E] font-extrabold text-center text-lg md:text-xl lg:text-2xl pb-4'> 50cl Bottle Water</h4>
                            <p>
                             the perfect size for hydration on the go. Whether you're at work, at the gym, or running errands,
                             our 50cl bottle provides just the right amount of pure, clean water to keep you feeling great all day.
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
            <div className=' bg-cover  h-[500px] ' style={{ backgroundImage: "url('/Assets/delivery.jpg')" }}>
                <div className='m-0 p-0 h-[500px] bg-black bg-opacity-80  flex justify-center items-center'>
                  <div className="  text-[#97D1E3] h-auto flex flex-col  lg:px-40 md:px-10 sm:px-6 px-6 lg:py-20 md:py-10 sm:py-6 py-6 ">
                     <div className='pb-10 text-center justify-center text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight'>
                        <h4>OUR DELIVERY SERVICE</h4>
                         <hr className='w-[15%] border-t-4 mx-auto border-[#97D1E3] mt-2'/>
                      </div>
                      <div className='max-w-md sm:max-w-md md:max-w-xl mx-auto  text-center '> 
                        <p>
                         we understand the importance of timely hydration, which is why we pride ourselves on delivering your water with speed and reliability. 
                         Whether it’s for your home, office, or an event, our delivery service is designed to make getting pure, refreshing water as convenient as possible.
                        </p>
                      </div>
                      <div className='flex justify-center items-center py-10'> 
                          <Link to="/delivery">
                              <button className="px-6 py-3  text-[11px] lg:text-sm text-text-[#97D1E3] rounded-3xl bg-transparent font-bold hover:bg-[#3E6A7E]
                                 transition duration-300 border-2 border-[#97D1E3] my-4">
                                 Place Your Order
                              </button>
                            </Link>
                      </div>
                 </div>
                </div>
            </div>
            <div className=' lg:px-40 md:px-10 sm:px-6 px-6 lg:py-20 md:py-10 sm:py-6 py-6 '>
                <Blog/>
            </div>
            <Footer/>
        </section>
     );
}
 
export default Home;