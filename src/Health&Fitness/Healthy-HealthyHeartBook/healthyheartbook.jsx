   import { useNavigate } from "react-router-dom"
 
 
 export function HealthyHeartBook() {

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
    <img src="https://m.media-amazon.com/images/I/61dS8d1QzgL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">The Healthy Heart Blueprint</h2>
    <h3 className="text-center lg:text-start mt-1">By Dr. Jitesh Arora</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
   Are you ready to unlock the secret to a stronger, happier heart? 
   In The Healthy Heart Blueprint, renowned physician Dr. Jitesh Arora reveals a powerful, science-backed roadmap for protecting cardiovascular health―without relying solely on medication. Through small, purposeful changes in diet, exercise, stress management, sleep, and supportive relationships, Dr. Arora shows how you can achieve extraordinary results and reclaim a life of energy, balance, and confidence. Featuring relatable patient stories and easy-to-follow strategies, this accessible guide proves that lifelong vitality is well within your reach. Your healthiest heart awaits―grab this blueprint and begin your transformation today!


    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={healthbook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }