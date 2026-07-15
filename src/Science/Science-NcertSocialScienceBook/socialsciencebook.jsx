   import { useNavigate } from "react-router-dom"
 
 
 export function SocialScienceBook () {

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
    <img src="https://m.media-amazon.com/images/I/910nyN9wYSL._AC_UY436_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Social Science</h2>
    <h3 className="text-center lg:text-start mt-1">By Kriti Sharma</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
     The First edition of the new Book by author of the Bestselling , Score 100 Kriti Sharma Series for Class 10, "360 Social Science Class 10 NCERT Simplified" , is a one-of-its-kind book to condense the entire CBSE NCERT Class 10 Social Science syllabus into one single, well-structured study material.
     It is a unique 4-colou r book to cover all essential topics for the CBSE NCERT Class 10 Social Science Exams.
     The Salient Features of the Book are:
    ✍ The Book is divided into 4 Sections - History, Political Science, Geography and Economics which are further divided into 21 Chapters.
    ✍ Comprehensive Chapter-wise Theory well supported by definitions, facts, figures, of infographics, tables, charts, and maps.
   ✍ Covers questions of the NCERT Textbook with their detailed explanations.
   ✍ Covers all types of Objective & Subjective questions like Very Short Answer, Short Answer, Long Answer, Image/ Case/ Extract Based Questions etc. for practice
   ✍ The Book includes Fully Solved Previous Years questions from 2014 to 2025 and Sample Question Papers provided by CBSE.
   ✍ In every part of the Practice Exercises, a lot of Competency based Questions are provided based on CBSE requirements.
   ✍ 2 Sample Question Papers are provided as a QR link, exactly based on the latest syllabus and pattern of examination.
   ✍ At the end of each Chapter, there is an Assessment Test to check the learning of the students.
   

    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={sciencebook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }