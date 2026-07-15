 import {useNavigate} from "react-router-dom"


 export function Genres () {
 const navigate = useNavigate()

   function browsing () {
   navigate("/")
  }

  function crimebook () {
    navigate("/genres/crimebooks")
  }



  function romanticbook () {
    navigate("/genres/romantic-books")
  }


  function horrorbook () {
    navigate("/genres/horror-books")
  }


    function thrillerbook () {
    navigate("/genres/thriller-books")
  }


    function fantacybook () {
    navigate("/genres/fantacy-books")
  }


  function adventurebook () {
    navigate("/genres/adventure-books")
  }


  function fairytalesbook () {
    navigate("/genres/fairy-tale-books")
  }

  function sciencefictionbook () {
    navigate("/genres/science-fiction-books")
  }

  function womenfictionbook () {
    navigate("/genres/women-fiction-books")
  }

  function shortstoriesbook () {
    navigate("/genres/short-stories-books")
  }


  function warbook () {
    navigate("/genres/war-books")
  }

  function autobiographybook () {
    navigate("/genres/autobiography-books")
  }

  function essaybook () {
    navigate("/genres/essay-books")
  }


 function selfhelpbook () {
    navigate("/genres/self-help-books")
  }

 function poetrybook () {
    navigate("/genres/poetry-books")
  }


  function actionbook () {
    navigate("/genres/action-books")
  }


  function spiritualbook () {
    navigate("/genres/spiritual-books")
  }


  function mythologicalbook () {
    navigate("/genres/mythological-books")
  }


  function sanatanbook () {
    navigate("/genres/sanatan-books")
  }



  function comedybook () {
    navigate("/genres/comedy-books")
  }


















    return <div>
  
   <div className=" bg-white h-full w-full mt-30">


      {/* <h1 className="text-center mr-40 ml-40 font-extrabold text-3xl/10 p-10 font-serif text-pink-700">From thrilling mysteries and magical adventures to peaceful reflections and emotional love stories, discover books that speak to your heart and expand your imagination.</h1> */}

      <div className="text-center max-w-4xl mx-auto py-20 px-4">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight 
                 bg-linear-to-r from-pink-500 via-purple-500 to-sky-400 
                 text-transparent bg-clip-text">
    Explore Our Genres
  </h1>

  <p className="mt-6 mr-5 ml-5 sm:mr-10 sm:ml-10 md:mr-0 md:ml-0 text-base sm:text-lg md:text-xl leading-relaxed text-gray-400">
    From thrilling mysteries and magical adventures to peaceful reflections and emotional love stories, 
    discover books that speak to your heart and expand your imagination.
  </p>
</div>

 <div className="mt-5 flex justify-center items-center gap-6">

   <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-center lg:justify-evenly items-center gap-4 text-2xl">

  <div onClick={crimebook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://i.pinimg.com/1200x/fe/8b/44/fe8b4466141ecb7a7135c2012a2ebcb7.jpg" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">Crime</p>
  </div>

    <div onClick={romanticbook}  className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://rukminim2.flixcart.com/image/480/640/l1tmf0w0/poster/v/k/s/small-poster-digital-painting-love-art-paper-wall-poster-300-gsm-original-imagdazek8mh3bjd.jpeg?q=90" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">Romantic</p>
  </div>

    <div onClick={horrorbook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://m.media-amazon.com/images/I/61RfFHvIc1L._AC_UF894,1000_QL80_.jpg" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">Horror</p>
  </div>

    <div onClick={thrillerbook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScWxyjuOCpuYRkra4Sj9kGSRBKy8Ui6Q4RzA&s" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">Thriller</p>
  </div>

     <div onClick={fantacybook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://i.pinimg.com/736x/5a/95/ca/5a95ca02bd3f9bc1424f5739b6c87fce.jpg" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p  className=" text-white text-center">Fantacy</p>
  </div>






  <div onClick={adventurebook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://img.freepik.com/premium-photo/young-traveler-exploring-world-concept-mixed-media_926199-4204488.jpg?semt=ais_hybrid&w=740&q=80" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">Adventure</p>
  </div>

    <div onClick={fairytalesbook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://img-v3.deepdreamgenerator.com/1426118/md_ipclok_bcff480ea21eef582c0b30c39a79242cdb3e17e3.jpg" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">Fairy Tales</p>
  </div>

    <div onClick={sciencefictionbook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://img.freepik.com/free-photo/robot-human-silhouettes_23-2150042392.jpg?semt=ais_hybrid&w=740&q=80" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">Science fiction</p>
  </div>

    <div onClick={womenfictionbook} className="border-2 border-black rounded-sm bg-[#0F172A] 
    w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://rukminim2.flixcart.com/image/480/640/juk4gi80/poster/t/t/6/large-newposter8801-painting-of-indian-village-ladies-poster-original-imaf5th7rhxezygk.jpeg?q=90" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">Women’s fiction</p>
  </div>

     <div onClick={shortstoriesbook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://cdn.exoticindia.com/images/products/original/books-2019-013/nat926.jpg" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p  className=" text-white text-center">Short stories</p>
  </div>






  <div onClick={warbook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://postergroup.com/cdn/shop/collections/wwi-original-vintage-posters.png?v=1693587159" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">War</p>
  </div>

    <div onClick={autobiographybook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://www.slj.com/binaries/content/gallery/Jlibrary/2024/07/2407-pb-biography-f.jpg" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">Autobiography</p>
  </div>

    <div onClick={essaybook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://img.freepik.com/premium-vector/pencil-copybook-education-student-kid-study-hand-drawn-flat-stylish-cartoon-sticker_730620-441198.jpg" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">Essay</p>
  </div>

    <div onClick={selfhelpbook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://gipshospital.com/img/detail-85.jpg" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">Self-help</p>
  </div>

     <div onClick={poetrybook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://img.freepik.com/premium-vector/poetry-book-ink-pen-vector-illustration_1091672-6.jpg" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p  className=" text-white text-center">Poetry</p>
  </div>







    <div onClick={actionbook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://img.freepik.com/premium-photo/create-action-movie-poster-background_1061150-3642.jpg" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">Action</p>
  </div>

    <div onClick={spiritualbook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://i.etsystatic.com/25704731/r/il/511590/2838480847/il_570xN.2838480847_d7ac.jpg" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">Spiritual</p>
  </div>

    <div onClick={mythologicalbook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://bookkish.com/cdn/shop/files/ZGK4KnJ_1024x1024.jpg?v=1692014340" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">Mythological</p>
  </div>

    <div onClick={sanatanbook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://thumbs.dreamstime.com/b/illustration-hindu-sage-rishi-wise-mascot-rsi-402650989.jpg" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p className="text-white text-center">Sanatan</p>
  </div>

     <div onClick={comedybook} className="border-2 border-black rounded-sm bg-[#0F172A] w-full sm:w-64 md:w-68 lg:w-70 h-auto lg:h-65 p-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
    <img src="https://static01.nyt.com/images/2015/12/06/books/review/1206-BKS-Humor/1206-BKS-Humor-superJumbo-v2.jpg" className="w-full h-48 sm:h-52 object-cover rounded"/>
    <p  className=" text-white text-center">Comedy</p>
  </div>


 </div>





 </div>

<div className="mt-16 md:mt-15 py-12 md:py-16 text-center bg-white">
  <p className="mx-auto text-base md:text-xl italic text-gray-700 mr-5 ml-5 sm:mr-10 sm:ml-10 md:mr-0 md:ml-0">
    Your bookshelf is about to get better. Start exploring and fall in love with reading again.
  </p>

  <button onClick={browsing} className="mt-15 px-5 md:px-7 py-2.5 rounded-full bg-black text-white hover:bg-gray-800 transition shadow-md">
    Browse Books
  </button>
</div>




   </div>


    </div>
 }