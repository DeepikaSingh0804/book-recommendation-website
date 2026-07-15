   import { useNavigate } from "react-router-dom"
 
 
 export function BeyondThoughtsBook() {

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
    <img src="https://m.media-amazon.com/images/I/61hW3lXthqL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Beyond Thoughts</h2>
    <h3 className="text-center lg:text-start mt-1">By Joseph Nguyen</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
  ‘Beyond Thoughts’ is a poetry collection that explores the root cause of anxiety, depression, guilt, shame, negative thinking, and emotional suffering to help you heal. This book will take you on a beautiful journey of self-discovery, self- love, happiness, hope, and deep healing to help you find inner peace in a simple, yet profound way. Here’s what you’ll discover:  How to let go of negative thinking, anxiety, guilt, and shame  How to hold space for yourself and all emotions so that you are less affected by them  How to heal from the past and let go of the fear of the future  How to end the vicious cycle of self-judgment  How to love yourself and others unconditionally  How to find yourself and discover who you truly are  How to let go of self-limiting beliefs  How to find happiness and peace in the present moment no matter what you are going through  How to trust yourself and develop strength, confidence, and courage in yourself again  How to become conscious of the subconscious, so that it stops controlling you and you can finally be liberated  How to not only be okay in the unknown, but to thrive in it to create an abundant life filled with love and joy There is something within you that is greater than everything you’ve ever been through. 




    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={poetrybook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }