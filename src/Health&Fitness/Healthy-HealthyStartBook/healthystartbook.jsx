   import { useNavigate } from "react-router-dom"
 
 
 export function HealthyStart() {

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
    <img src="https://m.media-amazon.com/images/I/61ktQGv1ENL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Healthy Start</h2>
    <h3 className="text-center lg:text-start mt-1">By Dr. Imran Patel</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
 As an MD in Pediatrics, I have witnessed firsthand, the challenges parents face in today's world. Navigating the complexities of childcare can feel like finding your way through a maze without a map. This book is specifically crafted to empower mothers-whether they are planning to have a child, currently with a child, or have recently become parents-to navigate this life-changing journey with knowledge and confidence. My aim is to provide a pediatrician's prescription in its simplest form, offering comprehensive answers to all your parenting questions in one accessible resource. By bridging the gap between accurate medical information and modern parenting needs, it seeks to simplify the process and cast away the anxieties caused by advice coming in from all directions.

    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={healthbook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }