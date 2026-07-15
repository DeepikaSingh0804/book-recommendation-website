   import { useNavigate } from "react-router-dom"
 
 
 export function MotherhoodBook() {

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
    <img src="https://m.media-amazon.com/images/I/81DYiQ3CwtL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Best Guide On Garbh Sanskar</h2>
    <h3 className="text-center lg:text-start mt-1">By Dr. Rohit Dhingra</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
 Very useful tool for couples planning to conceive & includes each nitty-gritty on pregnancy. The book guides you through topics like diet, lifestyle tips, Ayurvedic medicines, natural effective remedies, delicious healthy recipes, water birthing & home births, pregnancy myths, high risk pregnancies, pregnancy medication and resources as well as tips for a healthier mind. <br/>

 <p className="font-bold">The book would take you through:- </p>

① Month-wise suggestions on Diet & Lifestyle <br/>

② Take your Nutritional supplements through diet<br/>

③ Garbhsanskar (Indian Practices+Modern Science)<br/>

④ Father’s role during pregnancy <br/>

 <p className="font-bold">Delivery readiness:-</p>

① Know all about 18 Delivery positions <br/>

② What to put in your delivery day kit <br/>

③ What are the signs of labour & how to find comfort in labour

 <p className="font-bold">Post Delivery care:- </p>

★ Diet & lifestyle upto 6 months after delivery <br/>

★ Guide book on Baby care & Breastfeeding <br/>

★ Recipes of all types of food items to be taken <br/>

A pregnancy book which appeals equally to both mothers & fathers especially if you are a first time parent. Pregnancy resources which tackles issues ranging from birthing options to prenatal screening of pregnancy bump & talking to the baby in the womb book.

The author has taken care to not share usual medical and entertaining information. He being a male supports pregnant women to practice motherhood with choice. He throughout the book instigates fathers to embrace fatherhood through seeking their well-defined role in their pregnancy journey.
    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={healthbook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }