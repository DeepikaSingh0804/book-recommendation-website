   import { useNavigate } from "react-router-dom"
 
 
 export function ClockScience () {

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
    <img src="https://m.media-amazon.com/images/I/61dDDCydtDL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">1'O Clock Science</h2>
    <h3 className="text-center lg:text-start mt-1">By Kriti Sharma</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
    Science 1 o'Clock Class 10th with 3D Diagrams | Revise instantly with Tables, Flowcharts and illustrations. : KRITI SHARMA: desertcart.in: Books Review: Easy way to study - Excellent Review: Best For Understanding Concepts in playful Manner💫💯 - I bought this new science book at 10 o’clock, and it is truly amazing. 🌟 The concepts are explained in a very playful and engaging manner, which makes learning fun and easy to understand. It is perfect for Class 10 revision, as it simplifies even complex topics clearly. One of the best features is the 3D structures included, like the heart and brain, which help in visual learning and better concept clarity. 🧠❤️ Overall, this book makes science interesting and enjoyable. Really amazing and totally worth it! 📘✨Special thanks to Kriti Ma’am for recommending this wonderful book and making science so interesting and easy to understand. Your guidance truly made a difference! 🌟📘
    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={sciencebook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }