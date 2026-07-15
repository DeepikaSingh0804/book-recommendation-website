   import { useNavigate } from "react-router-dom"
 
 
 export function CuriosityBook () {

      const navigate = useNavigate()

    function sciencebook () {
        navigate("/collections/science")
    }




    return <div>

 <div className="w-full h-full mt-35 md:mt-40 xl:mt-30">

  <div>
    <div className="lg:m-10 p-5">
        <h1 className="p-3 lg:p-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center underline underline-offset-4 font-bold">About This Book</h1>
    </div>
 </div>



 <div className="rounded-xl m-1 lg:m-10 grid lg:grid-cols-2 gap-10 lg:gap-20 xl:gap-40 mt-5 lg:mt-20 p-5">

      
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/818NZb3TAxL._AC_UY436_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Curiosity</h2>
    <h3 className="text-center lg:text-start mt-1">By National council of educational research and training </h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
    The textbook covers core science topics across physics, chemistry, and biology, including crop production and management, microorganisms, materials, force and pressure, friction, sound, chemical effects of electric current, light, cells, reproduction, health, resources, and environmental conservation. With clear explanations, diagrams, activities, experiments, and real-life examples, Curiosity helps students develop analytical thinking and a strong scientific foundation.
    Designed for both classroom instruction and independent study, the book promotes conceptual clarity, problem-solving skills, and scientific temper. It is widely prescribed in CBSE and other NCERT-aligned schools across India.

    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={sciencebook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }