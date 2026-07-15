 import {useNavigate} from "react-router-dom";


 export function Home () {
  const navigate = useNavigate()


  function browseCard () {
    const card = document.getElementById("browse")?.scrollIntoView({
        behavior : "smooth",
    });
  }


  function anticipatedbbooks () {
    navigate("/collections/anticipated-books")
  }

    function classicbooks () {
    navigate("/collections/classic-books")
  }

    function trendingbooks () {
    navigate("/collections/trending-books")
  }

    function browsebooks () {
    navigate("/collections/browse-books")
  }


  function healthbooks () {
    navigate("/collections/health-fitness")
  }


  function poetrybooks () {
    navigate("/collections/poetry")
  }

  function sciencebooks () {
    navigate("/collections/science")
  }


  function personalitybooks () {
    navigate("/collections/personality")
  }









    return <div>
        <div className="text-xl sm:text-2xl bg-white h-full w-full mt-24 sm:mt-28 md:mt-35">

        <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif px-4 py-2 md:p-6">“Discover Your Next Favorite Book”</h1>
            <p className=" font-extralight font-serif mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">Read, explore, and fall in love with stories across every mood.</p>
            </div>

        <div className="mx-4 sm:mx-10 md:mx-16 lg:mx-20">
            <img src="https://app.onemaker.io/_next/image?url=https%3A%2F%2Fd39j4kfu1lbz9u.cloudfront.net%2Ffinal-results%2F11062024524900%2Fthumbnail%2Fgirl-reading-a-book-cat-on-window-sill-raining-outside-16-9_v1720703885792.jpeg&w=3840&q=100" className="w-full mt-10 sm:mt-12 md:mt-16 rounded-sm object-cover"/>

   </div>

   <div className="flex justify-center items-center">
   <button onClick={browseCard} className="bg-black text-white rounded-full p-3 mt-10 hover:cursor-pointer text-xl">
   Browse Books
   </button>

 
  </div>


  
  <div id="browse" className="mt-20 scroll-mt-32 rounded-l-2xl rounded-t-2xl min-h-162.5">
    <h2 className="p-4 sm:p-5 md:p-7 text-2xl sm:text-3xl md:text-4xl ml-2 sm:ml-4 md:ml-5 text-black font-serif underline underline-offset-5 rounded-lg italic font-extrabold">Browse Books</h2>

    <div className="mr-5 ml-5 mt-8 bg-gray-100 rounded-lg">

    <div className="overflow-x-auto scroll-smooth md:scroll-auto no-scrollbar">

    <div className="flex gap-5 p-7 w-max">

    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR13L2_ehOE53Xj7XUOxCB9BcFc8jdxPtSqx6pWFZYTN6Oi0k6cWcNTkj2Dgl2K0lLW93Gi3RhWOcd1CNQbNUDWM_NCU9PboQ" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">THE GIRL ON THE TRAIN</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Ruskin Bond</p>
    </div>

    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://firebasestorage.googleapis.com/v0/b/rmab-react.appspot.com/o/covers%2FXKTvR1Ulx52uImvG3nEP%2Fmedium.jpeg?alt=media" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">THE CENTAURI DEVICE</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By M. John Harrison</p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://firebasestorage.googleapis.com/v0/b/rmab-react.appspot.com/o/covers%2FaHfp5SKqTBx7xNLZBprl%2Fmedium.jpeg?alt=media" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">THE DANCING FACE</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Mike Phillips</p>
    </div>



    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://firebasestorage.googleapis.com/v0/b/rmab-react.appspot.com/o/covers%2FjgK4RmoemZSh5wnx3hTE%2Fmedium.jpeg?alt=media" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">THE STAND</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Stephen King</p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://firebasestorage.googleapis.com/v0/b/rmab-react.appspot.com/o/covers%2FCwgjCRz4dPYTouSzS86B%2Fmedium.jpeg?alt=media" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">REFLECTION</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Elizabeth Lim</p>
    </div>


      <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61SjNB8P5yL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">THE LITTLE PRINCE</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Antoine de Saint-Exupéry </p>
    </div>



      <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/712bIHFJvmL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">WAS I EVER ENOUGH?</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Yash Ranjit Jain </p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/61FhJphSdSL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">Think And Grow Rich</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Napoleon Hill</p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/81i60E24kBL._SY522_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">THE MENU OF HAPPINESS: TUCK INTO THE UPLIFTING AND MOVING JAPANESE BESTSELLER PERFECT FOR FOOD LOVERS</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Hisashi Kashiwai</p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/91lA++g4NAL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">Purnam - Stories & Wisdom of the Feminine Divine</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Abhishek Singh </p>
    </div>

   </div>

  

   </div>

   </div>

   <button onClick={browsebooks} className=" text-xl p-2 m-3 w-40 bg-pink-600 text-white rounded-lg mt-5 mx-auto block hover:cursor-pointer hover:scale-105 transition-transform duration-300">View All</button>

  </div>


  <div className="mt-10  w-full">
    <div>
       <h3 className="font-serif text-center text-4xl font-extrabold p-4">“Stories Begin Here”...</h3>
       <p className="mb-5 font-extralight text-center">Open a book. Open a world.</p>
        <img src="https://assets.penguinrandomhouse.com/wp-content/uploads/2016/01/11104627/21Books-PRH_site_1200x628-839x439.jpg" className="w-full h-auto rounded-lg p-3 md:p-5"/>
    </div>
  </div>




  <div  className="mt-20 scroll-mt-32 rounded-l-2xl rounded-t-2xl min-h-162.5">
    <h2 className="p-4 sm:p-5 md:p-7 text-2xl sm:text-3xl md:text-4xl ml-2 sm:ml-4 md:ml-5  text-black font-serif underline underline-offset-5 rounded-lg italic font-extrabold">Trending Books</h2>

    <div className="mr-5 ml-5 mt-8 bg-gray-100 rounded-lg">

    <div className="overflow-x-auto scroll-smooth md:scroll-auto no-scrollbar">

    <div className="flex gap-5 p-7 w-max">

    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/817HaeblezL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">ATOMIC HABITS</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By James Clear </p>
    </div>

    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71kwpNlZc3L._SY522_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">THE MAHABHARATA IN RHYME</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Sia Gupta </p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71IEUDALDML._SL1000_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif ">AKBAR AND BIRBAL</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Wonder House Books</p>
    </div>



    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/81QKLuNf1hL._SL1500_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">365 TALES FROM INDIAN MYTHOLOGY</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Om Books Editorial Team</p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/714Kf2vwfdL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">POLLYANNA</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Eleanor H. Porter </p>
    </div>


      <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71RatA+9EzL._AC_UL640_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">YOU ARE BORN TO BLOSSOM</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By DR APJ ABDUL KALAM </p>
    </div>



      <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/A1NQCPdK9UL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">MAHAGATHA: 100 TALES FROM THE PURANAS</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Satyarth Nayak  </p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/81Vj1bEo6xS._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">THE ORIGIN OF SPECIES</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Charles Darwin </p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/81JCkTl-gEL._SL1500_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">
   THE KAMOGAWA FOOD DETECTIVES</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Hisashi Kashiwai</p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71dNsRuYL7L._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">YOU ONLY LIVE ONCE</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Stuti Changle  </p>
    </div>

   </div>

   </div>

   </div>


   <button onClick={trendingbooks} className=" text-xl p-2 m-3 w-40 bg-pink-600 text-white rounded-lg mt-5 mx-auto block hover:cursor-pointer hover:scale-105 transition-transform duration-300">View All</button>

  </div>





    <div className="mt-15 scroll-mt-32 rounded-l-2xl rounded-t-2xl min-h-162.5">
    <h2 className="p-4 sm:p-5 md:p-7 text-2xl sm:text-3xl md:text-4xl ml-2 sm:ml-4 md:ml-5  text-black font-serif underline underline-offset-5 rounded-lg italic font-extrabold">Classic Stories</h2>

    <div className="mr-5 ml-5 mt-8 bg-gray-100 rounded-lg">

    <div className="overflow-x-auto scroll-smooth md:scroll-auto no-scrollbar">

    <div className="flex gap-5 p-7 w-max">

    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://downloads.booktime.org/covers/en/92594890_en.webp?v=66283bc4b9fde17d60845308eac198b0" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">ALICE’S ADVENTURES IN WONDERLAND</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Lewis Carroll </p>
    </div>

    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://downloads.booktime.org/covers/en/53851012_en.webp?v=r977f774bce8f45af5cab9565712d3dc" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">PETER PAN</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By J. M. Barrie</p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://downloads.booktime.org/covers/en/71240347_en.webp?v=r977f774bce8f45af5cab9565712d3dc" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">THE JUNGLE BOOK</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Rudyard Kipling</p>
    </div>



    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://downloads.booktime.org/covers/en/86742870_en.webp?v=r977f774bce8f45af5cab9565712d3dc" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">HEIDI</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Johanna Spyri</p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://downloads.booktime.org/covers/en/91715670_en.webp?v=r977f774bce8f45af5cab9565712d3dc" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">PINOCCHIO</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Carlo Collodi </p>
    </div>


      <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://downloads.booktime.org/covers/en/41324597_en.webp?v=93fdbdf4c9d9506b51fc0315b6881e94" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">THE SECRET GARDEN</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Frances Hodgson Burnett</p>
    </div>



      <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/81cZ8qD+ADL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">TALES FROM THE PANCHATANTRA: CLASSIC INDIAN STORIES</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Vishnu Sharma </p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/81BTywAQChL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">VIKRAM AND BETAAL (ILLUSTRATED)</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Maple Press  </p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/71iMwLs5ZkL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">
   CHILDREN CLASSICS – DRACULA</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Bram Stoker </p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://m.media-amazon.com/images/I/81dewiBSCXL._AC_UY436_FMwebp_QL65_.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">DIARY OF A WIMPY KID (BOOK 1)</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Jeff Kinney and Dapo Adeola</p>
    </div>

   </div>

   </div>

   </div>


   <button onClick={classicbooks} className=" text-xl p-2 m-3 w-40 bg-pink-600 text-white rounded-lg mt-5 mx-auto block hover:cursor-pointer hover:scale-105 transition-transform duration-300">View All</button>

  </div>




     <div className="mt-15 scroll-mt-32 rounded-l-2xl rounded-t-2xl min-h-162.5">
    <h2 className="p-4 sm:p-5 md:p-7 text-2xl sm:text-3xl md:text-4xl ml-2 sm:ml-4 md:ml-5  text-black font-serif underline underline-offset-5 rounded-lg italic font-extrabold">Most Anticipated Books
 </h2>
 <p className="text-base tracking-widest font-light italic ml-12">Countdown to your next obsession.</p>

    <div className="mr-5 ml-5 mt-8 bg-gray-100 rounded-lg">

    <div className="overflow-x-auto scroll-smooth md:scroll-auto no-scrollbar">

    <div className="flex gap-5 p-7 w-max">

    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://www.crossword.in/cdn/shop/files/TooGoodToBeTrueHBedition.jpg?v=1769233813" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">TOO GOOD TO BE TRUE</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Prajakta Koli </p>
    </div>

    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://cdn.penguin.co.in/wp-content/uploads/2026/03/9780670099832.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">WINNING PEOPLE WITHOUT LOSING YOURSELF </p>
   <p className="text-sm ml-5 font-light text-white mt-2">By J. M. Barrie</p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://www.crossword.in/cdn/shop/files/81r-29aK4yL._SL1500.jpg?v=1767333022" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">TWO CAN PLAY</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Ali Hazelwood</p>
    </div>



    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://www.crossword.in/cdn/shop/files/AllThisLight_F.jpg?v=1769157523" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">ALL THIS LIGHT</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Ashish Bagrecha</p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://cdn.penguin.co.in/wp-content/uploads/2026/02/9780143429371.jpg" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif">HALF OF FOREVER</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Ravinder Singh </p>
    </div>


      <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://www.crossword.in/cdn/shop/files/91pfUq9H2DL._SL1500.jpg?v=1767333031" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">HOT CHOCOLATE ON THURSDAY</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Michiko Aoyama</p>
    </div>



      <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://www.crossword.in/cdn/shop/files/81RyXZxUanL._SL1500.jpg?v=1766293824" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">BLOOD & ROSES VOLUME 1</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Callie Hart</p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://www.crossword.in/cdn/shop/files/81ooN5Zz_KL._SL1500.jpg?v=1767778133" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">THE SUPREME GIFT</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Paulo Coelho </p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://www.crossword.in/cdn/shop/files/71mJQtwNibL._SL1500.jpg?v=1767786494" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">
  HOOKED</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Asako Yuzuki</p>
    </div>


    <div className="w-70 h-90 border bg-gray-900 rounded-xl hover:scale-105 transition-transform duration-300">
   <div className="border-2 w-60 h-60 m-5 rounded-md">
    <img src="https://www.crossword.in/cdn/shop/files/81AWcSLd_dL._SL1500.jpg?v=1763453021" className="h-full w-full rounded-sm"/>
   </div>
   <p className="text-base font-bold ml-5 text-white font-serif line-clamp-1">BEFORE I KNEW I LOVED YOU</p>
   <p className="text-sm ml-5 font-light text-white mt-2">By Toshikazu Kawaguchi</p>
    </div>

   </div>

   </div>

   </div>

   <button onClick={anticipatedbbooks} className=" text-xl p-2 m-3 w-40 bg-pink-600 text-white rounded-lg mt-5 mx-auto block hover:cursor-pointer hover:scale-105 transition-transform duration-300">View All</button>

  </div>





  <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10">
    <div>
      <div className="flex flex-col sm:flex-col md:flex-row md:flex-wrap justify-center items-center gap-10 mt-10">


    <div onClick={healthbooks} className="mt-20 hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
      <img src="https://99bookstores.com/cdn/shop/collections/healthcare.png?v=1716733010" className="w-52 sm:w-60 lg:w-72 rounded-full" />
      <div  className="flex gap-2 items-center justify-center mt-5">
      <p>Health & Fitness</p>
      <svg className="w-7 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"/></svg>
      </div>
    </div>



    <div onClick={poetrybooks}  className="mt-20 hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
   <img src="https://99bookstores.com/cdn/shop/collections/manuscript.png?v=1715856771" className="w-52 sm:w-60 lg:w-72 rounded-full"/>
     <div className="flex gap-2 items-center justify-center mt-5">
      <p>Poetry</p>
      <svg className="w-7 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"/></svg>
      </div>
    </div>



    <div onClick={sciencebooks} className="mt-20 hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
   <img src="https://99bookstores.com/cdn/shop/collections/atom.png?v=1698305404" className="w-52 sm:w-60 lg:w-72 rounded-full"/>
     <div className="flex items-center justify-center gap-2 mt-5">
      <p className="text-center">Science</p>
      <svg className="w-7 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"/></svg>
      </div>
    </div>



      <div onClick={personalitybooks}  className="mt-20 hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
   <img src="https://99bookstores.com/cdn/shop/collections/personality.png?v=1717148594" className="w-52 sm:w-60 lg:w-72 rounded-full"/>
     <div className="flex items-center justify-center gap-2 mt-5">
      <p className="text-center">Personality</p>
      <svg className="w-7 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"/></svg>
      </div>
    </div>


      </div>
    </div>
  </div>










        </div>
    </div>
 }