   import { useNavigate } from "react-router-dom"
 
 
 export function SelectedPoemsBook() {

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
    <img src="https://m.media-amazon.com/images/I/81V8GnD8GmL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Selected Poems</h2>
    <h3 className="text-center lg:text-start mt-1">By Gulzar Pavan Kvarma</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
  Gulzar, one of India’s finest film-makers and lyricists and has always been a poet at heart. His oeuvre is steeped in a poetic sensibility, marked by a lyricism rare in the world of Hindi cinema. Today, Gulzar is regarded as one of India’s foremost Urdu poets, unparalleled in his exploration of human relationships and the insight and sensitivity with which he addresses the many facets of daily life. The sophistication and cadences of Gulzar’s work come alive in this bilingual edition of some of his best poetry, sensitively translated by Pavan K. Varma.




    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={poetrybook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }