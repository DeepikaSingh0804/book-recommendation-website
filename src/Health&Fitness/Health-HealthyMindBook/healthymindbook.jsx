   import { useNavigate } from "react-router-dom"
 
 
 export function HealthyMind() {

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
    <img src="https://m.media-amazon.com/images/I/81lRHF31obL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Healthy Mind Happy You</h2>
    <h3 className="text-center lg:text-start mt-1">By Dr Emily Macdonagh</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
 Healthy mind, happy you! This reassuring, fact-packed book for girls and boys is all about how to maintain good mental health while growing up.
 Dr Emily MacDonagh, a practising NHS doctor and OK! magazine’s popular Health and Parenting Columnist, talks about anxiety and mental health in a simple and friendly way.
 Topics
 What is anxiety, and how can you manage it? Why do people have low mood and depression? How to understand and express your emotions Plus, expert tips and practical information on self-esteem, the physical changes of puberty, resilience, and lots more. Mother of two and step-mother to teenagers, Dr Emily lives with her husband Peter Andre and children in Surrey.

    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={healthbook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }