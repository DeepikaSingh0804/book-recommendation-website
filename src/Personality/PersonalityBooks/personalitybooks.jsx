  import { useNavigate } from "react-router-dom"



 export function PersonalityBook () {

 const navigate = useNavigate()

 function browsehome () {
  navigate("/")
 }


 function dontbelievebook () {
   navigate("/collections/personality/Dont-Believe-Everything-You-Think")
 }

 function attitudebook () {
   navigate("/collections/personality/Attitude-Is-Everything")
 }

 function peoplemagnetbook () {
   navigate("/collections/personality/How-To-Become-A-People-Magnet")
 }

  function subconciousbook () {
   navigate("/collections/personality/The-Power-Of-Subconcious-Mind")
 }


  function youcanbook () {
   navigate("/collections/personality/You-Can")
 }



  function mountainbook () {
   navigate("/collections/personality/The-Mountain-Is-You")
 }


   function personalityplusbook () {
   navigate("/collections/personality/Personality-Plus")
 }



   function practicingmindbook () {
   navigate("/collections/personality/The-Practicing-Mind")
 }



   function artofdealingbook () {
   navigate("/collections/personality/The-Art-OF-Dealing-With-People")
 }



    function greatestleaderbook () {
   navigate("/collections/personality/World-Greatest-Leaders")
 }


     function talktoanyonebook () {
   navigate("/collections/personality/How-To-Talk-To-Anyone")
 }



     function hateyoubook () {
   navigate("/collections/personality/I-Hate-You-Dont-Leave-Me")
 }








 return <div>
        

       <div className="w-full h-full mt-25 md:mt-35 xl:mt-25">

      <div className="mt-20">

      <div className="bg-orange-100 p-10 sm:p-5 md:p-10 lg:p-15 border">
        <h2 className="p-3 font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-serif underline underline-offset-5 rounded-lg italic text-center">Personality Books
 </h2>

    {/* <h2 className="p-3 font-bold text-xl ml-8 text-black font-serif rounded-lg italic text-center">“Turn Curiosity into Clarity”
 </h2> */}
 <p className="text-lg tracking-widest font-light italic text-center">
 "Build Better Habits. Build a Better You."</p>

 </div>


  

  <div className="m-4">
  <img src="https://www.crystalknows.com/hubfs/shiromani-kant-mo3FOTG62ao-unsplash-1.jpeg" className="mt-10 h-40 lg:h-150 w-full rounded-4xl"/>
  </div>

 



    <div className="md:mr-10 md:ml-10 mt-8 bg-gray-100 rounded-lg">

    {/* <div className="overflow-x-auto scroll-smooth md:scroll-auto no-scrollbar"> */}

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 p-7 justify-items-center ">

    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/715qi-cIbML._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">DON'T BELIEVE EVERYTHING YOU THINK (ENGLISH)</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Joseph Nguyen</p>

   <div>
      <button onClick={dontbelievebook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>

    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61go3pwTLYL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-4  text-white font-serif line-clamp-1">ATTITUDE IS EVERYTHING CHANGE YOUR ATTITUDE CHANGE YOUR LIFE!</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Jeff Keller </p>

      <div>
      <button onClick={attitudebook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61qbaX6wnbL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">HOW TO BECOME A PEOPLE MAGNET</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Marc Reklau </p>

   <div>
      <button onClick={peoplemagnetbook} className="bg-orange-200 font-serif mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer">View Book</button>
   </div>
    </div>



    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">THE POWER OF YOUR SUBCONSCIOUS MIND</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Joseph Murphy </p>

      <div>
      <button onClick={subconciousbook} className="bg-orange-200 font-serif mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/81T05w0B3lL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">YOU CAN</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By George Matthew Adams</p>

        <div>
      <button onClick={youcanbook} className="bg-orange-200 font-serif mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer">View Book</button>
   </div>
    </div>


      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61xivWmExiL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">THE MOUNTAIN IS YOU</p>
   <p className="text-sm ml-5 font-light text-white mt-2 line-clamp-1">By Brianna Wiest </p>

        <div>
      <button onClick={mountainbook} className="bg-orange-200 font-serif mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer">View Book</button>
   </div>
    </div>



      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61AGe6JdfwL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">PERSONALITY PLUS
</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Florence Littauer </p>

        <div>
      <button onClick={personalityplusbook} className="bg-orange-200 font-serif mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61mXX3Ov97L._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">THE PRACTICING MIND</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Thomas M. Sterner  </p>

        <div>
      <button onClick={practicingmindbook} className="bg-orange-200 font-serif mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/617sk-xWNSL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">
  THE ART OF DEALING WITH PEOPLE</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Les Giblin </p>

        <div>
      <button onClick={artofdealingbook} className="bg-orange-200 font-serif mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71MHjHxMPVL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">WORLD'S GREATEST LEADERS</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Wonder House Books </p>

        <div>
      <button onClick={greatestleaderbook} className="bg-orange-200 font-serif mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer">View Book</button>
   </div>
    </div>


      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61B0Z0Buu6L._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">HOW TO TALK TO ANYONE
   </p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Leil Lowndes </p>

        <div>
      <button onClick={talktoanyonebook} className="bg-orange-200 font-serif mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer">View Book</button>
   </div>
    </div>



      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71LhPllVUPL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">I HATE YOU--DON'T LEAVE ME</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Jerold J. Kreisman and Hal Straus</p>

        <div>
      <button onClick={hateyoubook} className="bg-orange-200 font-serif mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer">View Book</button>
   </div>
    </div>

   </div>

   </div>

  <div className="p-5">
      <button onClick={browsehome} className=" text-xl p-2  m-3 w-40 bg-orange-300 text-black rounded-lg mt-5 mx-auto block hover:cursor-pointer hover:scale-105 transition-transform duration-300 hover:bg-orange-400">Browse Books</button>
</div>
   </div>

  {/* </div> */}



        </div>



    </div>
 }