import { Link } from 'react-router-dom';

const Blog = () => {
    const blogSection=[
    {
        id: 1,
        title: "The Importance of Staying Hydrated",
        description: "Discover how proper hydration can improve your health and well-being.",
        image: "/Assets/personDrinking.jpg", 
        link: "/blog/hydration",
      },
      {
        id: 2,
        title: "Eco-Friendly Water Packaging",
        description: "Learn how we are reducing plastic waste with sustainable packaging.",
        image: "/Assets/packaging.jpg",
        link: "/blog/eco-packaging",
      },
      {
        id: 3,
        title: "Why Choose Woter?",
        description: "Explore the benefits of choosing Woter for your hydration needs.",
        image: "/Assets/Bkground.webp",
        link: "/blog/choose-woter",
      },
    ];
    return (
        <div className="">
          <h2 className="pb-2 text-center justify-center text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-[#3E6A7E]">Our Blog</h2>
          <hr className='w-[5%] border-t-4 mx-auto border-[#3E6A7E] mt-2'/>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-14">
             {blogSection.map((blog) => (
               <div key={blog.id} className="bg-white shadow rounded-xl overflow-hidden">
                 <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                 <div className="p-4">
                     <h3 className="text-lg font-bold">{blog.title}</h3>
                     <p className="text-gray-600 mt-2">{blog.description}</p>
                     <div className='flex'> 
                          <Link to="/delivery">
                              <button className="px-3 py-2  text-[11px] lg:text-sm text-[#3E6A7E] rounded-xl bg-transparent font-bold hover:bg-[#97D1E3]
                                 transition duration-300 border-2 border-[#3E6A7E] my-4">
                                 Read more
                              </button>
                            </Link>
                      </div>
                    </div>
                </div>
             ))}
         </div>
     </div>
      );
}
 
export default Blog;