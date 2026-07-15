   import { useNavigate } from "react-router-dom"
 
 
 export function YuktahaarBook() {

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
    <img src="https://m.media-amazon.com/images/I/81sPnpzx0SL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Yuktahaar The Belly And Brain Diet</h2>
    <h3 className="text-center lg:text-start mt-1">By Munmun Ganeriwal</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
   Discover 'Yuktahaar: The Belly and Brain Diet', a comprehensive guide published by Penguin that offers a transformative 10-week programme focused on weight management and metabolic health. This book presents a unique approach that connects digestive wellness with cognitive function, helping readers understand the intricate relationship between what we eat and how it affects both our body and mind. The programme is designed to help you reset your metabolism while working towards your weight loss goals through sustainable methods. Written by Munmun Ganeriwal with a foreword by Taapsee Pannu, this book provides practical insights into achieving holistic health through proper nutrition and lifestyle modifications. Whether you're struggling with weight issues or seeking to optimise your overall wellbeing, this book offers structured guidance to help you achieve your health goals through a balanced, sustainable approach.
    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={healthbook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }