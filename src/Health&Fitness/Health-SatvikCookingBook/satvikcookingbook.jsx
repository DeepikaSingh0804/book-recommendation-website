   import { useNavigate } from "react-router-dom"
 
 
 export function SatvikBook() {

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
    <img src="https://m.media-amazon.com/images/I/712sX3am2eL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Sattvik Cooking</h2>
    <h3 className="text-center lg:text-start mt-1">By Hansaji J. Yogendra</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
   The oldest yoga institute in the world now brings you the ultimate Sattvik cookbook that will enhance your positivity quotient and become an inseparable part of your life. Ancient Indian texts say that the trigunas—Sattva, Rajas and Tamas—pervade the universe and the human mind. Food that is Sattva is pure, happy, energizing, vitalizing and fulfilling; rajas is stimulating, passionate, ambitious and domineering; and tamas is dull, inactive, heavy and impure. Food influences the mind directly, but the mind can also influence the kind of food you desire. Hence, it’s easy for the mind to spiral in a particular direction. Of the three food spirals, only Sattvik has the power that can propel you to a state of happiness, contentment and full of positive energy. The recipes revealed in this book will help you derive the benefits of Sattvik foods along with them being super tasty. In Sattvik cooking, for example, natural sweeteners are most important as they stimulate vata, the primary dosha that controls the other two doshas—pitta and kapha. The recipes will enable millennials to embrace Sattvik food by infusing them with modern-day cuisines from India and around the world, while also understanding the science behind it. Sattvik Cooking uses humble Indian kitchen ingredients to unleash the mind, body and spiritual powers of ancient Vedic foods. The unique selection of recipes will not only satisfy the palates of all age groups, but will also be hugely beneficial for fitness enthusiasts.
    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={healthbook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }