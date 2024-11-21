import Footer from "./Footer";
import Navbar from "./Navbar";
import { FaWater, FaRecycle, FaSmile } from "react-icons/fa";

const About = () => {
    return ( 
        <section className='bg-gradient-to-b from-[#97D1E3] via-[#f5f5f5] to-white h-auto '>
            <div className="bg-gradient-to-b from-black to-[#3E6A7E]  ">
                <Navbar/>
          </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 h-auto lg:px-40 md:px-10 sm:px-6 px-6 lg:py-20 md:py-10 sm:py-6 py-6 ">
                <div className=' flex-1 bg-inherit flex items-center justify-center'> 
                    <img src='Assets/woter_and_cup.png' alt='Product' className='w-full '/>
                </div>
                <div className='flex-1  bg-inherit flex  text-justify items-center justify-center text-[#3E6A7E]'>
                    <div className='flex flex-col font-poppins gap-4 '>
                        <div className='pb-4  text-2xl md:text-3xl lg:text-4xl text-left font-extrabold leading-tight'>
                           <h1>WOTER TABLE WATER</h1> 
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
                        <p>
                        Our company is built on values of sustainability, quality, and integrity.
                         We work tirelessly to ensure that our products meet the highest standards, and we are passionate about making clean, refreshing water accessible to everyone.
                          As a part of the Woter family, you can trust that you're choosing a product that is not only good for you but also good for the planet.
                        </p>
                        <p>
                         With Woter, every sip is a step towards a healthier, more vibrant you. 
                         Whether you're at home, work, or on the go, we’re here to keep you refreshed, replenished, and ready for whatever the day brings.
                        </p>
                        
                    </div>
                </div>
            </div>
           
            <div
  className="bg-cover h-[500px] sm:h-[400px] xs:h-[300px]"
  style={{ backgroundImage: "url('/Assets/Choose.jpg')" }}
>
  <div className="m-0 p-0 h-full bg-black bg-opacity-80 flex justify-center items-center">
    <div className="text-[#97D1E3] w-full h-auto lg:px-40 md:px-10 sm:px-6 px-4 lg:py-20 md:py-10 sm:py-6 py-4">
  
      <div className="pb-10 text-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
        <h1>WHY CHOOSE WOTER</h1>
        <hr className="w-[10%] border-t-4 mx-auto border-[#97D1E3] mt-2" />
      </div>

      <div className="flex flex-col font-poppins gap-4 text-center px-4 sm:px-10 md:px-20 lg:px-40">
        <p className="text-sm sm:text-base md:text-lg">
          At Woter, we believe that hydration is the cornerstone of a healthy lifestyle.
          That's why our table water is crafted to deliver unmatched purity, freshness, and quality.
          Every bottle undergoes rigorous filtration and testing to ensure it's free from impurities, providing you with water that's safe and refreshing.
          Whether you're enjoying a meal, staying active, or simply relaxing, Woter is your perfect companion for all occasions.
          Its crisp, clean taste sets it apart, offering hydration you can feel good about.
          Choose Woter Table Water—not just for refreshment, but for the trust and care we pour into every drop.
        </p>
      </div>
    </div>
  </div>
</div>


<div className="flex flex-col h-auto sm:h-auto justify-center items-center text-[#3E6A7E] lg:px-40 md:px-10 sm:px-6 px-6 lg:py-20 md:py-10 sm:py-6 py-4">
  
  <div className="pb-20 text-center justify-center items-center">
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">Our Core Values</h1>
    <hr className="w-[20%] border-t-4 mx-auto border-[#3E6A7E] mt-2" />
  </div>
  
  <div className="flex flex-wrap justify-center gap-12 lg:flex-row flex-col">
    <div className="flex flex-col gap-4 text-justify justify-center items-center max-w-[300px]">
      <div className="flex flex-row space-x-2">
        <FaWater className="text-2xl" />
        <h4 className="font-playfair text-[#3E6A7E] font-extrabold text-center text-lg md:text-xl lg:text-2xl">
          Purity
        </h4>
      </div>
      <p className="text-sm md:text-base text-center">
        We ensure our water is of the highest quality, free from impurities for your health and safety.
      </p>
    </div>
    
    <div className="flex flex-col gap-4 text-justify justify-center items-center max-w-[300px]">
      <div className="flex flex-row space-x-2">
        <FaRecycle className="text-2xl" />
        <h4 className="font-playfair text-[#3E6A7E] font-extrabold text-center text-lg md:text-xl lg:text-2xl">
          Sustainability
        </h4>
      </div>
      <p className="text-sm md:text-base text-center">
        Our eco-friendly practices help preserve the environment and reduce waste for a better future.
      </p>
    </div>
    {/* Customer Satisfaction */}
    <div className="flex flex-col gap-4 text-justify justify-center items-center max-w-[300px]">
      <div className="flex flex-row space-x-2">
        <FaSmile className="text-2xl" />
        <h4 className="font-playfair text-[#3E6A7E] font-extrabold text-center text-lg md:text-xl lg:text-2xl">
          Customer Satisfaction
        </h4>
      </div>
      <p className="text-sm md:text-base text-center">
        We prioritize your hydration needs with excellent service and quality you can trust.
      </p>
    </div>
  </div>
</div>

           <Footer/>
        </section>
     );
}
 
export default About;