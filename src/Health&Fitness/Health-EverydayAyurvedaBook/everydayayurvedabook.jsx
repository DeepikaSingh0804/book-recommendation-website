   import { useNavigate } from "react-router-dom"
 
 
 export function EverydayAyurvedaBook() {

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
    <img src="https://m.media-amazon.com/images/I/814DJT4lL9S._AC_UY436_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Everyday Ayurveda</h2>
    <h3 className="text-center lg:text-start mt-1">By Bhaswati Bhattacharya</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
   Everyday Ayurveda is the perfect lifestyle guide designed to maximize health, longevity, and happiness the natural way.
   Do you sometimes feel tired, lethargic and spiritless? How can Ayurveda help in a simple, practisable manner?
   Time is scarce and precious in today's world, and we seek solutions that are quick. While allopathic medicine tends to focus on the management of disease, the ancient study of dinacharya provides us with holistic knowledge of preventing disease and eliminating its root cause.
   Taking us through a day in the life of Ayurveda living, Dr Bhaswati Bhattacharya illustrates the core principles of Ayurveda and shows us how to incorporate these in our routine. She explains the logic behind the changes she recommends and how they benefit us. Informative and accessible, Everyday Ayurveda is the perfect lifestyle guide designed to maximize health, longevity and happiness the natural way.

    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={healthbook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }