import {useNavigate} from "react-router-dom"

 export function PoetryBook () {

 const navigate = useNavigate()

 function browsehome () {
  navigate("/")
 }


 function ninetysevenpoem () {
   navigate("/collections/poetry/Ninety-Seven-Poems")
 }


 function thesunbook () {
   navigate("/collections/poetry/The-Sun-And-Her-Flowers")
 }


 function theessentialrumibook () {
   navigate("/collections/poetry/The-Essential-Rumi")
 }


 function trivenibook () {
   navigate("/collections/poetry/Triveni")
 }


 function lvoebook () {
   navigate("/collections/poetry/Lvoe")
 }


 function selectedpoems () {
   navigate("/collections/poetry/Selected-Poems")
 }


 function beyondthoughts () {
   navigate("/collections/poetry/Beyond-Thoughts")
 }


 function onehundredbook () {
   navigate("/collections/poetry/One-Hundred-Poems-OF-Kabir")
 }


  function morningthought () {
   navigate("/collections/poetry/A-Morning-Thought-My-Coffee-Brought")
 }


   function greatestpoetry () {
   navigate("/collections/poetry/Greatest-Poetry-Ever-Written")
 }



  function leavesofgrass () {
   navigate("/collections/poetry/Leaves-OF-Grass")
  }



    function homebook () {
   navigate("/collections/poetry/Home")
  }










      return <div>
            <div className="w-full h-full mt-25 md:mt-35 xl:mt-25">

      <div className="mt-20">
      <div className="bg-purple-200 p-10 sm:p-5 md:p-10 lg:p-15 border">
    <h2 className="p-3 font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-serif underline underline-offset-5 rounded-lg italic text-center">Poetry Books
 </h2>
 <p className="text-lg tracking-widest font-light italic text-center">
 "In the quiet of the night, dreams whisper louder than the stars."</p>

 </div>


  

  <div className="m-4">
  <img src="https://cdn.penguin.co.in/wp-content/uploads/2024/02/DurjoyAudioBlogH-800x433.png" className="mt-10 lg:h-150 w-full rounded-4xl"/>
  </div>

 



    <div className="md:mr-10 md:ml-10 mt-8 bg-gray-100 rounded-lg">

    {/* <div className="overflow-x-auto scroll-smooth md:scroll-auto no-scrollbar"> */}

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 p-7 justify-items-center">

    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/51vhh9-mFJL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">NINETY-SEVEN POEMS</p>
   <p className="text-sm ml-5 font-light text-white mt-2">Terribly Tiny Tales </p>

      <div>
      <button onClick={ninetysevenpoem} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>

    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://cdn.shopify.com/s/files/1/0648/3066/9017/products/crosswordonline-books-default-title-the-sun-and-her-flowers-paperback-rupi-kaur-40421776818393_360x.jpg?v=1746645616" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-4  text-white font-serif line-clamp-1">THE SUN AND HER FLOWERS </p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Rupi Kaur </p>

       <div>
      <button onClick={thesunbook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://cdn.shopify.com/s/files/1/0648/3066/9017/products/crosswordonline-books-default-title-the-essential-rumi-paperback-barks-coleman-40421736972505_360x.jpg?v=1746635410" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">THE ESSENTIAL RUMI</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Coleman Barks</p>

       <div>
      <button onClick={theessentialrumibook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>



    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGMFlTrrauoNXWCIknv9M-aHYqFGqEJCHL-g&s" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">TRIVENI</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Gulzar </p>

       <div>
      <button onClick={trivenibook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://cdn.shopify.com/s/files/1/0648/3066/9017/products/hachette-uk-books-default-title-lvoe-poems-epigrams-aphorisms-hardcover-atticus-40372324925657_360x.jpg?v=1760792628" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">LVOE</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By DAtticus</p>

       <div>
      <button onClick={lvoebook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/81V8GnD8GmL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">SELECTED POEMS (PB)</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By  Gulzar Pavan Kvarma </p>

       <div>
      <button onClick={selectedpoems} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>



      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61hW3lXthqL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">BEYOND THOUGHTS</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Joseph Nguyen </p>

       <div>
      <button onClick={beyondthoughts} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71Bqb2mKNoL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">ONE HUNDRED POEMS OF KABIR</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Translated by Rabindranath Tagore </p>

       <div>
      <button onClick={onehundredbook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/51JhtbaW1IL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">
  A MORNING THOUGHT MY COFFEE BROUGHT</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Paechu </p>

       <div>
      <button onClick={morningthought} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


    <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61xjURomnxL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">GREATEST POETRY EVER WRITTEN</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Grapevine</p>

       <div>
      <button onClick={greatestpoetry} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>


      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71eUg2xH3JL._AC_UY436_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">LEAVES OF GRASS : SIMPLICITY IN POETRY</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Walt Whitman </p>

       <div>
      <button onClick={leavesofgrass} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>



      <div className="bg-grey-500 w-70 h-100 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71VaJK2UcjL._AC_UY436_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">HOME: POEMS TO HEAL YOUR HEARTBREAK</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Whitney Hanson</p>

       <div>
      <button onClick={homebook} className="bg-orange-200 mt-3 block mx-auto p-2 rounded-full hover:cursor-pointer font-serif">View Book</button>
   </div>
    </div>

   </div>

   </div>

  <div className="p-5">
      <button onClick={browsehome} className=" text-xl p-2  m-3 w-40 bg-pink-700 text-white rounded-lg mt-5 mx-auto block hover:cursor-pointer hover:scale-105 transition-transform duration-300 hover:bg-pink-500">Browse Books</button>
</div>
   </div>

  {/* </div> */}



        </div>
    </div>
 }