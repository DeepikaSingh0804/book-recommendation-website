   import { useNavigate } from "react-router-dom"
 
 
 export function TriveniBook() {

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
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGMFlTrrauoNXWCIknv9M-aHYqFGqEJCHL-g&s" className="w-110 h-130 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Triveni</h2>
    <h3 className="text-center lg:text-start mt-1">By Gulzar</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
   In Triveni are birds perched on branches, moonstruck musings, a house of straws, walking roses and unbridled desires of the heart. The poems are inhabited by lost lovers, unreturned books and bloodsucking rumours. A poetic form unique to Gulzar, Triveni is a confluence of three of India’s majestic rivers―the golden-hued Ganges, the deep green Yamuna and a third, the mythical one that lies beneath the former two, the Saraswati.
   A form Gulzar began experimenting with in the 1960s, Triveni comes close to several classical Japanese forms of poetry such as the Haiku, Senryu and Tanka. The closest Indian forms to Triveni are the doha and shayari. In this stunning translation by Neha R. Krishna, Triveni have been transcreated as tanka and are ladled with musicality, breaking away from the charm of rhyme and metre. This collection, too, is a confluence or sangam of forms and nothing short of a gift from one of India’s most beloved poets.



    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={poetrybook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }