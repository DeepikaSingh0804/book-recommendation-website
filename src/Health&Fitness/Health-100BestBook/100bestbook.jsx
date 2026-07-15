   import { useNavigate } from "react-router-dom"
 
 
 export function HundredBook() {

      const navigate = useNavigate()

    function healthbook () {
        navigate("/collections/health-fitness")
    }




    return <div>

 <div className="w-full h-full mt-35 md:mt-40 xl:mt-30">

  <div>
    <div className="lg:m-10 p-5">
        <h1 className=" p-3 lg:p-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center underline underline-offset-4 font-bold">About This Book</h1>
    </div>
 </div>



 <div className="rounded-xl m-1 lg:m-10 grid lg:grid-cols-2 gap-10 lg:gap-20 xl:gap-40 mt-5 lg:mt-20 p-5">

      
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/61z3Aj8svoL._AC_UF1000,1000_QL80_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">100 Best Health Foods</h2>
    <h3 className="text-center lg:text-start mt-1">By Parragon Books</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
  Everyone gains from a healthier diet but what foods are the most beneficial? This invaluable book will help you build better eating and cooking habits that focus on a diet rich in the foods your body needs.
  The range of "superfoods" covered includes fruits and vegetables, fish and seafood, and pulses and grains. With fats and information on the nutritional benefits of a hundred of the world's most health-giving foods, plus a hundred delicious recipes—from fruity smoothies and leafy salads, to chunky salsas, and comforting soups—this book will make eating well easy and enjoyable.e or sangam of forms and nothing short of a gift from one of India’s most beloved poets.



    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={healthbook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }