   import { useNavigate } from "react-router-dom"
 
 
 export function TheSunBook() {

      const navigate = useNavigate()

    function poetrybook () {
        navigate("/collections/poetry")
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
    <img src="https://cdn.shopify.com/s/files/1/0648/3066/9017/products/crosswordonline-books-default-title-the-sun-and-her-flowers-paperback-rupi-kaur-40421776818393_360x.jpg?v=1746645616" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">The Sun And Her Flowers</h2>
    <h3 className="text-center lg:text-start mt-1">By Rupi Kaur</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
    “i hardened under the last loss. it took something human out of me. i used to be so deeply emotional i’d crumble on demand. but now the water has made its exit. of course i care about the ones around me. i’m just struggling to show it. a wall is getting in the way. i used to dream of being so strong nothing could shake me. now. i am. so strong. that nothing shakes me. and all i dream is to soften.”
   ― Rupi Kaur, The Sun and Her Flowers



    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={poetrybook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }