   import { useNavigate } from "react-router-dom"
 
 
 export function LvoeBook() {

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
    <img src="https://cdn.shopify.com/s/files/1/0648/3066/9017/products/hachette-uk-books-default-title-lvoe-poems-epigrams-aphorisms-hardcover-atticus-40372324925657_360x.jpg?v=1760792628" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Lvoe</h2>
    <h3 className="text-center lg:text-start mt-1">By Datticus</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
  For the first time since he began writing, three-time New York Times bestselling author Atticus is inviting readers to take a look behind the mask as he embarks on a powerful journey inward in search of love, peace, and acceptance.
  Even if you’ve never heard his name, you’ve probably met someone with his words tattooed on their skin or heard them sung at a music concert. Atticus, the young, anonymous poetry superstar, has taken the world by storm with his beautiful poems and powerful, simple themes of love and strength of the human spirit – all while wearing a mask and keeping his identity a secret. 
  His fourth poetry collection, LVOE., is a study into himself. Using his instantly recognizable lyrical style, gorgeous black-and-white illustrations, and relatable themes, Atticus once again dazzles readers, inspiring them to also look within. This giftable collection features all-new poems, each paired with beautiful sketches that bring the words alive from the page.
  An exploration of self-love, meditation, meaning, loss, and romance, LVOE. is a look forward, a look backward, but most importantly a look inward to the often confusing yet hopeful human experience.



    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={poetrybook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }