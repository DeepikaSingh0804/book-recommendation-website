 
 import { useNavigate } from "react-router-dom"


 export function DontBelieveBook () {

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
    <img src="https://m.media-amazon.com/images/I/715qi-cIbML._SL1500_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Don't Believe Everything You Think</h2>
    <h3 className="text-center lg:text-start mt-1">By Joseph Nguyen</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
        The root cause of all psychological and emotional suffering and how to end it How to become unaffected by negative thoughts and feelings How to experience unconditional love, peace, and joy in the present, no matter your external circumstances How to instantly create a new experience of life if you don’t like the one you’re in right now How to break free from negative thought loops How to let go of anxiety, self-doubt, self-sabotage, and self-destructive habits How to effortlessly create from a state of abundance, flow, and ease How to develop the superpower of being okay with uncertainty How to access your intuition and inner wisdom beyond the limitations of thinking.

    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={personalitybook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300 ">Browse Books</button>
 </div>

 </div>





    </div>
 }