   import { useNavigate } from "react-router-dom"
 
 
 export function EasyHealthyBook() {

      const navigate = useNavigate()

    function healthbook () {
        navigate("/collections/health-fitness")
    }




    return <div>

 <div className="w-full h-full mt-30 md:mt-40 xl:mt-30">

  <div>
    <div className="lg:m-10 p-5">
        <h1 className="p-3 lg:p-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold underline underline-offset-4">About This Book</h1>
    </div>
 </div>



 <div className="rounded-xl m-1 lg:m-10 grid lg:grid-cols-2 gap-10 lg:gap-20 xl:gap-40 mt-5 lg:mt-20 p-5">

      
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/61N+HZqYxbL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">It's Easy To Be Healthy</h2>
    <h3 className="text-center lg:text-start mt-1">By  Malaika Arora</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
 One question has followed Malaika Arora in her three decades in the entertainment 'How do you do it all?'

 Whether it's staying fit, managing a packed schedule, or showing up with energy and poise, people are always curious about her so-called 'secrets'. But she was not born with glowing skin, perfect hair and boundless energy. According to Malaika, what sets her apart is consistency not luck. Over the years, she has tried countless workout routines, diets, skincare products, and holistic therapies. Some worked, others didn't. Through it all, what stayed with her was the discipline to show up every single day.

 After years of trial and error, Malaika found a way of living that works for her. It's Easy to Be Healthy has it all down in one place-from the elixirs and health shots she swears by to the little habits and rituals that make a big difference. Whether you're looking for beauty tips, wellness rituals, or just a little inspiration to take better care of yourself, this is the book for you.


    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={healthbook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }