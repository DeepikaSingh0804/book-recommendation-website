   import { useNavigate } from "react-router-dom"
 
 
 export function BrahmanBook () {

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
    <img src="https://m.media-amazon.com/images/I/71KmEPey0hL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Brahman All This Whatsoever That Moves</h2>
    <h3 className="text-center lg:text-start mt-1">Krishnamurthy Ramakrishnan</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
       Tired of the Big Bang Theory? Brahman: All This Whatsoever That Moves presents a revolutionary new Cosmology that fundamentally re-imagines the universe. Challenging the idea of creation erupting from nothing, this bold work bridges Astrophysics, Quantum Physics, and ancient Upanishadic Philosophy to propose a cosmos guided by Consciousness and cyclical balance.
       What if creation was never an event, but a remembrance? The book proposes a cyclic universe throbbing with the rhythm of stillness and motion, operating as a self-adjusting, self-balancing field of intelligence—the Phoenix Universe—guided not by randomness but by coherence and equilibrium.
       Blending profound Vedic insights with the precision of modern physics, the book introduces the groundbreaking Principle of Natural Adjustment—a unifying framework explaining why mass, energy, and consciousness exhibit order across all scales. Witness a radical reframing of reality: Gravity is redefined as grace, Energy as intention, Prāṇa as the first breath of neutral hydrogen, and Karma as the informational memory that sustains cosmic continuity.



    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={sciencebook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }