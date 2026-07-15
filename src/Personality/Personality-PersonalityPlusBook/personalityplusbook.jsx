
   import { useNavigate } from "react-router-dom"
 
 
 export function PersonalityPlusBook () {

      const navigate = useNavigate()

    function personalitybook () {
        navigate("/collections/personality")
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
    <img src="https://m.media-amazon.com/images/I/61AGe6JdfwL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Personality Plus</h2>
    <h3 className="text-center lg:text-start mt-1">By Florence Littauer</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
      Each of the following statements relates to one of the four basic personality types: Melancholy, Phlegmatic, Sanguine, and Choleric. Which do you relate to most? - I am well organised and keep everything in its proper place. - I find it hard to express excitement, even about something that's really important to me. - Sometimes I forget where I parked the car. - I get annoyed when my employees don't follow my instructions to the letter. In this revised and expanded edition, Florence Littauer provides valuable insight into your God-given personality and reveals how your unique blend of traits affects your emotions, work performance, and relationships. She also provides keys to understanding those around you. You will discover how to accept - and even enjoy - the traits that make each of us so different. Personality Plus is the tool you need to change your life for the better.

    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={personalitybook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }