import Footer from "./Footer";
import Navbar from "./Navbar";


const Product = () => {
    return (  
        <section className='bg-gradient-to-b from-[#97D1E3] via-[#f5f5f5] to-white h-auto  '>
            <div className="bg-gradient-to-b from-black to-[#3E6A7E]  ">
                <Navbar/>
          </div>
              <div className='pb-6 text-center text-[#3E6A7E]  justify-center text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight lg:px-40 md:px-10 sm:px-6 px-6 pt-40'>
                 <h1>OUR PRODUCTS</h1>
                 <hr className='w-[10%] border-t-4 mx-auto border-[#3E6A7E] mt-2'/>
              </div>   
              <div className="flex flex-col lg:flex-row gap-6 lg:px-40 md:px-10 sm:px-6 px-6 lg:pt-20 md:pt-10 sm:pt-6 pt-6 pb-20 ">
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
             <div className=' bg-cover  h-[500px] ' style={{ backgroundImage: "url('/Assets/pack.jpg') " }}>
                 <div className='m-0 p-0 h-[500px] bg-black bg-opacity-80  flex justify-center items-center'>
                     <div className="  text-[#97D1E3] h-auto flex flex-col  lg:px-40 md:px-10 sm:px-6 px-6 lg:py-20 md:py-10 sm:py-6 py-6 ">
                         <div className='pb-10 text-center justify-center text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight'>
                             <h4>ELEVATE YOUR HYDRATION WITH WOTER</h4>
                             <hr className='w-[15%] border-t-4 mx-auto border-[#97D1E3] mt-2'/>
                           </div>
                         <div className='pb-10 text-center justify-center max-w-md sm:max-w-md md:max-w-xl mx-auto'>
                            <p>
                             Woter Table Water stands as a symbol of purity, crafted with care to provide you with the cleanest and freshest hydration experience.
                             With every bottle, you’re not just getting water—you’re getting an assurance of quality that meets the highest standards.
                              Filtered and tested to perfection, Woter promises a crisp, refreshing taste that revitalizes you at every sip.
                               Choose Woter for hydration you can trust, day in and day out. 
                             Order now and enjoy the true essence of quality water
                            </p>
                         </div>
                     </div>
                 </div>
             </div>
         <div>
             <Footer/>
         </div>
      </section>
    );
}
 
export default Product;