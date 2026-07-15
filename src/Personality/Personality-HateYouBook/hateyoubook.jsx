
   import { useNavigate } from "react-router-dom"
 
 
 export function HateYouBook () {

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
    <img src="https://m.media-amazon.com/images/I/71LhPllVUPL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">I Hate You-Dont't Leave Me</h2>
    <h3 className="text-center lg:text-start mt-1">By Jerold J. Kreisman and Hal Straus</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
"AM I LOSING MY MIND?"

People with Borderline Personality Disorder experience such violent and frightening mood swings that they often fear for their sanity. They can be euphoric one moment, despairing and depressed the next. There are an estimated 10 million sufferers of BPD living in America today—each displaying remarkably similar symptoms:

<div>
● a shaky sense of identity
</div>
<div>
● sudden violent outbursts
</div>
<div>
● oversensitivity to real or imagined rejection
</div>
<div>
● brief, turbulent love affairs
</div>
<div>
● frequent periods of intense depression
</div>
<div>
● eating disorders, drug abuse, and other self-destructive tendencies
</div>
<div>
● an irrational fear of abandonment and an inability to be alone
</div>

For years BPD was difficult to describe, diagnose, and treat. But now, for the first time, Dr. Jerold J. Kreisman and health writer Hal Straus offer much-needed professional advice, helping victims and their families to understand and cope with this troubling,shockingly widespread affliction.

    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={personalitybook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }