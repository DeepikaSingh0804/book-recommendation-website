   import { useNavigate } from "react-router-dom"
 
 
 export function RelativityBook () {

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
    <img src="https://m.media-amazon.com/images/I/81Y-PQhFjuL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Relativity</h2>
    <h3 className="text-center lg:text-start mt-1">By Albert Einstein</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
        Are you ready to delve into one of the most groundbreaking scientific treatises of all time? Albert Einstein's Relativity offers an unparalleled exploration of the principles that have revolutionized our understanding of the universe. This seminal work is a cornerstone for anyone passionate about conceptual physics and the theory of relativity.
        Here’s Why You Need This Classic:
        Master the Fundamentals of Physics: Einstein’s Relativity is obviously a foundational text in science for anyone who wants to improve their conceptual physics, calculus core principles, or their scientific thinking in general. It offers deep insights into the theory of relativity, making complex concepts accessible and understandable. Whether you’re a student of university physics or an enthusiast, this book is an essential resource for scientific minds.
        Explore Advanced Topics: This treatise delves into sophisticated subjects that fall under the special theory of relativity, such as time dilation and simultaneity, or the general theory, such as the curvature of space time, the equivalence principle, or geodesics. Whether you enjoy studying quantum physics problems, classical mechanics such as the three body problem, you will find this book to be a great addition to your scientific knowledge.

    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={sciencebook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }