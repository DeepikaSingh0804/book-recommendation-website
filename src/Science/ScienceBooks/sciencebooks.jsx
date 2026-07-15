 import {useNavigate} from "react-router-dom"


 export function ScienceBook () {

  const navigate = useNavigate()

 function browsehome () {
  navigate("/")
 }


  function brahmanbook () {
   navigate("/collections/science/Brahman-All-This-Whatsoever-That-Moves")
  }


 function relativitybook () {
   navigate("/collections/science/Relativity")
  }


   function spacebook () {
   navigate("/collections/science/Space-Encyclopedia")
  }


 function futurebook () {
   navigate("/collections/science/Future-Science-And-Technology")
  }


   function universebook () {
   navigate("/collections/science/I-Am-The-Universe")
  }

     function universebook () {
   navigate("/collections/science/I-Am-The-Universe")
  }


 function ncertbook () {
    navigate("/collections/science/Ncert-Class-8-Curiosity")
 }


 function knowledgeencyclopediabook () {
   navigate("/collections/science/Knowledge-Encyclopedia-Space")
 }


  function socialsciencebook () {
   navigate("/collections/science/Ncert-Social-Science")
 }


   function sciencerichbook () {
   navigate("/collections/science/The-Science-OF-Getting-Rich")
 }


 function mythstosciencebook () {
   navigate("/collections/science/From-Myths-To-Science")
 }


  function clocksciencebook () {
   navigate("/collections/science/1-O-Clock-Science")
 }


   function plantpathologybook () {
   navigate("/collections/science/Plant-Pathology")
 }











    return <div>
        

    <div className="w-full h-full mt-25 md:mt-35 xl:mt-25">

      <div className="mt-20">

      <div className="bg-gray-200 p-10 sm:p-5 md:p-10 lg:p-15 border">
        <h2 className="p-3 font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-5xl  text-black font-serif underline underline-offset-5 rounded-lg italic text-center">Science Books
 </h2>

    {/* <h2 className="p-3 font-bold text-xl ml-8 text-black font-serif rounded-lg italic text-center">“Turn Curiosity into Clarity”
 </h2> */}
 <p className="text-lg tracking-widest font-light italic text-center">
 "Smart reads for thinkers, explorers, and future innovators."</p>

 </div>


  

  <div className="m-4">
  <img src="https://assets.penguinrandomhouse.com/wp-content/uploads/2018/10/15204450/1200x628-science.jpg" className="mt-10 lg:h-150 w-full rounded-4xl"/>
  </div>

 



    <div className="md:mr-10 md:ml-10 mt-8 bg-gray-100 rounded-lg">

    {/* <div className="overflow-x-auto scroll-smooth md:scroll-auto no-scrollbar"> */}

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 p-7 justify-items-center">

    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71KmEPey0hL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">BRAHMAN ALL THIS WHATSOEVER THAT MOVES</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Krishnamurthy Ramakrishnan</p>

     <div>
      <button onClick={brahmanbook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>

    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/81Y-PQhFjuL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-4  text-white font-serif line-clamp-1">RELATIVITY</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Albert Einstein </p>

   <div>
      <button onClick={relativitybook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71NGK8HznhL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">SPACE ENCYCLOPEDIA</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Om Books Editorial Team </p>

        <div>
      <button onClick={spacebook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>



    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61ok2B7A5wL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">FUTURE SCIENCE & TECHNOLOGY</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Wonder House Books  </p>

        <div>
      <button onClick={futurebook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71KOQiL3e1L._AC_UY436_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">I AM THE UNIVERSE</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Srijan Pal Singh </p>

        <div>
      <button onClick={universebook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/818NZb3TAxL._AC_UY436_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">NCERT CLASS 8 CURIOSITY</p>
   <p className="text-sm ml-5 font-light text-white mt-2 line-clamp-1">By National council of educational research and training  </p>

        <div>
      <button onClick={ncertbook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>



      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/91LeXqXlihL._AC_UY436_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">KNOWLEDGE ENCYCLOPEDIA – SPACE</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Wonder House Books </p>

        <div>
      <button onClick={knowledgeencyclopediabook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/910nyN9wYSL._AC_UY436_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">DISHA 360 SOCIAL SCIENCE CLASS 10 NCERT SIMPLIFIED</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By  Kriti Sharma </p>

        <div>
      <button onClick={socialsciencebook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/81LzH2OsA-L._AC_UY436_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">
  THE SCIENCE OF GETTING RICH WITH THE SCIENCE OF BEING GREAT</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Wallace D. Wattles </p>

        <div>
      <button onClick={sciencerichbook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/7135tsvGziL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">FROM MYTHS TO SCIENCE: THE EVOLVING STORY OF THE UNIVERSE</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Gauhar Raza </p>

        <div>
      <button onClick={mythstosciencebook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61dDDCydtDL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">SCIENCE 1 O'CLOCK CLASS 10TH WITH 3D DIAGRAMS</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By KRITI SHARMA </p>

   <div>
      <button onClick={clocksciencebook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>



      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71ZLhe53HnL._AC_UL640_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">PLANT PATHOLOGY, 3RD EDN</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By R.S. Mehrotra and Ashok Aggarwal</p>

   <div>
      <button onClick={plantpathologybook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>

   </div>

   </div>

  <div className="p-5">
      <button onClick={browsehome} className=" text-xl p-2  m-3 w-40 bg-gray-500 text-white rounded-lg mt-5 mx-auto block hover:cursor-pointer hover:scale-105 transition-transform duration-300 hover:bg-gray-700">Browse Books</button>
</div>
   </div>

  {/* </div> */}



        </div>






    </div>
 }