 import {useNavigate} from "react-router-dom"


 export function HealthBook () {


  const navigate = useNavigate()

  function browsehome () {
    navigate("/")
  }


  function hundredbook () {
   navigate("/collections/health-fitness/100-Best-Health-Foods")
  }


   function easyhealthybook () {
   navigate("/collections/health-fitness/Its-Easy-To-Be-Healthy")
  }


     function eatupbook () {
   navigate("/collections/health-fitness/Eat-Up-Clean-Up")
  }


 function healthymindbook () {
   navigate("/collections/health-fitness/Healthy-Mind-Happy-You")
  }


 function healthystart () {
   navigate("/collections/health-fitness/Healthy-Start")
  }


  function germsbook () {
   navigate("/collections/health-fitness/Germs-Are-Not-For-Sharing")
  }


 function motherhoodbook () {
   navigate("/collections/health-fitness/Beginning-OF-Motherhood")
  }


 function yuktahaarbook () {
   navigate("/collections/health-fitness/Yuktahaar-The-Belly-And-Brain-Diet")
  }


 function commonsensebook () {
   navigate("/collections/health-fitness/The-Commonsense-Diet")
  }


 function satvikbook () {
   navigate("/collections/health-fitness/Sattvik-Cooking")
  }


 function healthyheart () {
   navigate("/collections/health-fitness/The-Healthy-Heart-Blueprint")
  }


 function everydayayurveda () {
   navigate("/collections/health-fitness/Everyday-Ayurveda")
  }









    return <div>
            <div className="w-full h-full mt-25 md:mt-35 xl:mt-25">

      <div className="mt-20">
      <div className="bg-green-200 p-7 sm:p-5 md:p-10 lg:p-15 border ">
    <h2 className="p-3 font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-5xl  text-black font-serif underline underline-offset-5 rounded-lg italic text-center">Health & Fitness Books
 </h2>
 <p className="text-lg tracking-widest font-light italic mt-2 text-center">
 "Your body can do anything. It's your mind you need to convince."</p>

 </div>


  {/* <div>
  <img src="https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/images/panoramic/3MentalHealthBooks_516207_bj1oh2.jpg" className=" mt-10 h-150 sm:w-2xl md:w-4xl lg:w-7xl sm:ml-0 md:ml-10 lg:ml-20"/>
  </div> */}



    <div className="md:mr-10 md:ml-10 mt-8 bg-gray-100 rounded-lg">

    {/* <div className="overflow-x-auto scroll-smooth md:scroll-auto no-scrollbar"> */}

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-7 justify-items-center">

    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61z3Aj8svoL._AC_UF1000,1000_QL80_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">100 BEST HEALTH FOODS</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Parragon Books </p>


        <div>
      <button onClick={hundredbook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>

    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61N+HZqYxbL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">IT’S EASY TO BE HEALTHY: MALAIKA’S GUIDE TO LIVING A GOOD LIFE </p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Malaika Arora </p>

          <div>
      <button onClick={easyhealthybook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71MIYBOvphL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">EAT UP, CLEAN UP: YOUR PERSONAL JOURNEY TO A HEALTHY LIFE</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Manjari Chandra</p>

          <div>
      <button onClick={eatupbook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>



    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/81lRHF31obL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">HEALTHY MIND, HAPPY YOU: HOW TO TAKE CARE OF YOUR MENTAL HEALTH</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Dr Emily Macdonagh </p>

          <div>
      <button onClick={healthymindbook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61ktQGv1ENL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">HEALTHY START</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Dr. Imran Patel  </p>

          <div>
      <button onClick={healthystart} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/81YYh4tAe9L._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">GERMS ARE NOT FOR SHARING BOARD</p>
   <p className="text-sm ml-5 font-light text-white mt-2 line-clamp-1">By Elizabeth Verdick and Marieka Heinlen</p>

          <div>
      <button onClick={germsbook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>



      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/81DYiQ3CwtL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">BEST GUIDE ON GARBH SANSKAR</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Dr. Rohit Dhingra </p>

          <div>
      <button onClick={motherhoodbook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/81sPnpzx0SL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">YUKTAHAAR: THE BELLY AND BRAIN DIETT</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Munmun Ganeriwal  </p>

          <div>
      <button onClick={yuktahaarbook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71Vm0TWo3GL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">
  THE COMMONSENSE DIET: STOP OVERTHINKING START EATING</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Rujuta Diwekar </p>

          <div>
      <button onClick={commonsensebook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/712sX3am2eL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">SATTVIK COOKING: MODERN AVATARS OF VEDIC FOODS
 SATTVIK COOKING: MODERN AVATARS OF VEDIC FOODS</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Hansaji J. Yogendra </p>

          <div>
      <button onClick={satvikbook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61dS8d1QzgL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">THE HEALTHY HEART BLUEPRINT</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Dr. Jitesh Arora  </p>

          <div>
      <button onClick={healthyheart} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>



      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/814DJT4lL9S._AC_UY436_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">EVERYDAY AYURVEDA-BPB</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Bhaswati Bhattacharya  </p>

          <div>
      <button onClick={everydayayurveda} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>

   </div>

   </div>

  <div className="p-5">
      <button onClick={browsehome} className=" text-xl p-2  m-3 w-40 bg-green-800 text-white rounded-lg mt-5 mx-auto block hover:cursor-pointer hover:scale-105 transition-transform duration-300 hover:bg-green-950">Browse Books</button>
</div>
   </div>

  {/* </div> */}



        </div>
    </div>
 }