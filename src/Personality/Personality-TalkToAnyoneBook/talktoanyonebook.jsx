
   import { useNavigate } from "react-router-dom"
 
 
 export function TalkToAnyoneBook () {

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
    <img src="https://m.media-amazon.com/images/I/61B0Z0Buu6L._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">How To Talk To Anyone</h2>
    <h3 className="text-center lg:text-start mt-1">By Leil Lowndes</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
    Some of us are not born with an innate ability to navigate social settings with the
    ease of a social butterfly. Thankfully, this book and others like them can serve as
    a guidebook on how to improve in this area and to make it more enjoyable. As
    with all books I read on understanding people, I read it with this lens: How does
    this help me understand myself and others better so that I can fulfill Jesus’
    command to love others as myself? You see, nobody gets to the top alone. Over the years people who seem to “have it all” have captured the hearts and conquered the minds of hundreds of others
    who helped boost them, rung by rung, to the top of whatever corporate or social
    ladder they chose. 
    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={personalitybook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }