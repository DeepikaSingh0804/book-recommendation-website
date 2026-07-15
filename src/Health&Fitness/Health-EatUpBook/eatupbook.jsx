   import { useNavigate } from "react-router-dom"
 
 
 export function EatUpBook() {

      const navigate = useNavigate()

    function healthbook () {
        navigate("/collections/health-fitness")
    }




    return <div>

 <div className="w-full h-full mt-30 md:mt-40 xl:mt-30">

  <div>
    <div className="lg:m-10 p-5">
        <h1 className="p-3 lg:p-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold underline underline-offset-4">About This Book</h1>
    </div>
 </div>



 <div className="rounded-xl m-1 lg:m-10 grid lg:grid-cols-2 gap-10 lg:gap-20 xl:gap-40 mt-5 lg:mt-20 p-5">

      
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71MIYBOvphL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Eat Up, Clean Up</h2>
    <h3 className="text-center lg:text-start mt-1">By Manjari Chandra</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
 Today, everyone is an expert on losing weight and eating right. Foods fall in and out of trend faster than shoes. In this cacophony of voices, it is relatively easy to Hop from one crash diet to another in our never-ending obsession with being thin. Our compromises with food have left us prone to a wide range of lifestyle-induced diseases. Whether it is pcos or hypertension or cancer, these are all a direct result of our way of living and eating. Since there are no apparent symptoms, we ignore, overlook, and carry on—on caffeine and packaged pasta. But what we don’t realise is that the mysteries of a healthy and fit body lie in our traditional meals and cooking methods rather than the next crazy diet fad on social media. A book on nutrition, health, and disease reversal, eat up, clean up uses stories of people around you, people you know, to hammer home a critical point: small changes give you significant results. This book attempts to make you think long and hard about your dietary choices and how you perceive health and well-being. It doesn't speak of any wonder foods or supplements that will magically make you Fitter and your body more robust, rather it’ll urge you to cook your own food the way it was done in the good old days... Since there aren't any shortcuts to health.

    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={healthbook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }