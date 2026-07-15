   import { useNavigate } from "react-router-dom"
 
 
 export function TheEssentialRumi() {

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
    <img src="https://cdn.shopify.com/s/files/1/0648/3066/9017/products/crosswordonline-books-default-title-the-essential-rumi-paperback-barks-coleman-40421736972505_360x.jpg?v=1746635410" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">The Essential Rumi</h2>
    <h3 className="text-center lg:text-start mt-1">By Coleman Barks</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
   Rumi is one of the most popular spiritual poets ever in the world. The Sufi mystic was a 13th century poet, theologian, jurist and Islamic scholar. He has been described as one of the bestselling poets in numerous regions. His poems, mostly written in Persian, have been translated in a number of languages.
   In Essential Rumi, the spiritual and ecstatic poetry by this legendary poet have been comprehensively listed with a new introduction by Coleman Barks. 81 poems that have never been published before are included in this new revised edition of the one-volume edition. Translations of the poems by Coleman Barks, who has taught English and poetry in University of Georgia, have been included in this edition.
   The translations of the poems bring to life the poet?s spiritual essence. The book can make understanding the complex meanings and deeper conjectures of some of Rumi?s poems easy for readers by describing the texts in a lucid fashion.



    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={poetrybook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }