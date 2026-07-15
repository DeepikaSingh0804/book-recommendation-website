   import { useNavigate } from "react-router-dom"
 
 
 export function MorningThoughtBook() {

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
    <img src="https://m.media-amazon.com/images/I/51JhtbaW1IL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">A Morning Thought My Coffee Brought</h2>
    <h3 className="text-center lg:text-start mt-1">By Paechu</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
    A little book of tender poems.
   If you've ever loved, been heartbroken, carried old wounds, or struggled with the pain, especially the one you caused yourself, this book is for you.
   Divided into three chapters, this book captures how some mornings wake you with love and hope, while others ache with heartbreak and trauma, and then there are mornings of strength that remind you of who you are.
   This beautiful pocket-size book is easy to carry and perfect for reading anywhere - in cafés, on walks, while traveling, or back home in your warm bed. It could be an ideal gift for yourself or your loved ones.




    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={poetrybook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }