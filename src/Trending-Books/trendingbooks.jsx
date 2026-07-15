 import { useNavigate } from "react-router-dom"


 export function TrendingBooks () {

  const navigate = useNavigate()

  function homepage () {
    navigate("/")
  }




    return <div>


       <div className="text-2xl bg-white h-full w-full mt-20 p-5">

  <div className="bg-[#ECFFDC] p-5 rounded-4xl m-1 border md:mt-12 xl:mt-5 flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-center mt-5 sm:mt-7 md:mt-8 lg:mt-10">The Trending Books...</h1>
        <p className="mt-7 text-2xl  text-center mr-10 ml-10 lg:mr-60 lg:ml-60">“If you don’t like to read, you haven’t found the right book.”</p>
 </div>

 <div>
  <img src="https://images.gr-assets.com/misc/1638473665-1638473665_goodreads_misc.jpg" className="w-full p-1 lg:p-5 mt-15 lg:mt-5 rounded-3xl lg:rounded-4xl"/>
 </div>

 <div>
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-15 ml-10 p-2 w-full italic text-[#808000] underline decoration-[#808000]">Trending Books</h2>

  <div className="xl:mr-15 xl:ml-15">

  <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-20 lg:mt-30 gap-10 lg:gap-40">
  <div className="flex items-center justify-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/817HaeblezL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Atomic Habits</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">James Clear</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">If you’re having trouble changing your habits, the problem isn’t you. The problem is your system.
      Bad habits repeat themselves not because you don’t want to change but because you have the wrong system for change. This is one of the core philosophies of Atomic Habits: You do not rise to the level of your goals. You fall to the level of your systems. In this book, you’ll get a proven plan that can take you to new heights.
      James Clear, one of the world’s leading experts on habit formation, is known for his ability to distill complex topics into simple behaviors that can be easily applied to daily life and work. Here, he draws on the most proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible.

</p>
    </div>

  </div>



 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div className="">
      <h3 className="md:font-bold underline text-xl lg:text-2xl  text-center lg:text-start">The Mahabharata in Rhyme</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Sia Gupta</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">
  For the first time, the timeless Indian epic, the Mahabharata, has been re-told entirely in verse by 10-year-old Sia Gupta. In under 1, 000 couplets, this young poetess has captured the unfolding of the battle between the Pandavas and the Kauravas for the throne of Hastinapur. From the birth of Bhishma, to the war that had no winners, Sia delves deep into the events, the characters and the moral dilemmas they face. With consummate skill, she recasts this tale of love and hate, truth and deceit, intrigue and war, life and death. Focussing on the ideals of dharma, duty and sacrifice, these verses show that the Mahabharata remains relevant even in the 21st century. </p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71kwpNlZc3L._SY522_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 



    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start"> 
    <img src="https://m.media-amazon.com/images/I/71IEUDALDML._SL1000_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Akbar & Birbal</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Wonder House Books</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">The Stories Of ‘Akbar And Birbal’ Are The Most Cherished Folklores Of India That Have Been Passed From One Generation To Another, Enthralling Both Young And Adult Readers. This Book Is A Beautifully Illustrated Compilation Of Several Tales Of Wit And Wisdom, Built Upon The Themes Of Loyalty And Friendship.Birbal, an advisor in the court of King Akbar, handles various tricky situations faced by his ruler using his sharp intellect and humour.The friendship between Emperor Akbar and his minister Birbal created history and some delightful stories! The tales of Akbar and Birbal have been passed on from generation to generation, enthralling young and old listeners alike. </p>
    </div>

  </div>




 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">365 Tales From Indian Mythology</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Om Books Editorial Team</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Indian Mythology is a Treasure Trove of Fascinating Stories that Blend Adventure, Wisdom, and Spirituality. 365 Ganesh Kathayein Opens the Doors to This Magical World, Introducing Children to the Timeless Tales of Lord Ganesha—India’s Most Beloved Deity. Each Story is Crafted to be Short, Engaging, and Filled with Values That are as Relevant Today as They Were in Ancient Times. the Episodic Nature of the Book Makes It Easy for Young Readers to Enjoy One Story a Day, Sparking Curiosity and Love for Indian Culture and Literature.
      This Beautifully Illustrated Collection is More Than Just a Storybook - It’s a Gentle Guide into the Rich Traditions of the Puranas and Indian Heritage. </p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81QKLuNf1hL._SL1500_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 




 
    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/714Kf2vwfdL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Pollyanna</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Eleanor H. Porter</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">"Pollyanna," a novel by Eleanor H. Porter published in 1913, tells the story of an optimistic orphaned girl who comes to live with her austere Aunt Polly Harrington. The narrative revolves around Pollyanna's unyielding cheerfulness and her creation of the "Glad Game," a practice of finding something to be glad about in any situation. Despite Aunt Polly's disapproval and a challenging living environment in an uncomfortable attic room, Pollyanna's bright spirit gradually wins over the hearts of those around her, including the reclusive gentleman John Pendleton and various townsfolk.</p>
    </div>

  </div>



  <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">You Are Born To Blossom</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">DR APJ ABDUL KALAM</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Dr. Kalam writes, “We live in a terror-induced era. There are people who believe they will earn an honored place in paradise by sacrificing themselves for a dream. Where does this strange notion, paradise, come from? Is not the Earth an abode bestowed upon mankind? Is not every human being born destined to blossom in this very life? This book does not provide the answer. Instead of providing such answers, it asks a question — Why not? Are not all buds destined to blossom?”. This book calls for learning at every stage of life and celebrates teachers. “What soil is to life on the earth, teachers are to society. </p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71RatA+9EzL._AC_UL640_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 


     <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/A1NQCPdK9UL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Mahagatha: 100 Tales From The Puranas</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Satyarth Nayak</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Do you know the story where Brahma and Vishnu race against each other or where Shiva battles Krishna? Where Indra attempts foeticide or where Rama punishes a Shudra? Do you know about Maya Sita or Narada’s monkey face? Or why Surya falls from the sky or why Chandra commits adultery?
      The Puranas of Hinduism are a universe of wisdom, embodying a fundamental quest for answers that makes them forever relevant. Now, for the first time, 100 of the greatest mythological tales from these ancient texts have been handpicked and compiled into an epic illustrated edition. Besides popular legends of devas, asuras, sages and kings, Satyarth Nayak has dug up lesser-known stories, like the one where Vishnu is beheaded or where Saraswati curses Lakshmi or where Harishchandra tricks Varuna.Nayak also recounts these 100 tales in a unique chronological format, beginning with Creation in Satya Yuga and ending with the advent of Kali Yuga.
 </p>
    </div>

  </div>



    <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Origin OF Species</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Charles Darwin</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Any variation which is not inherited is unimportant for us. But the number and diversity of inheritable deviations of structure, both those of slight and those of considerable physiological importance, is endless. Dr. Prosper Lucas’s treatise, in two large volumes, is the fullest and the best on this subject. No breeder doubts how strong is the tendency to inheritance: like produces like is his fundamental belief: doubts have been thrown on this principle by theoretical writers alone. </p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81Vj1bEo6xS._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 



       <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81JCkTl-gEL._SL1500_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Kamogawa Food Detectives</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Hisashi Kashiwai</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">The Kamogawa Food Detectives by Hisashi Kashiwai (and translated from the Japanese by Jesse Kirkwood) tells the story of Nagare and Koishi, a father-daughter duo running a tucked-away restaurant in Kyoto. When the right customer finds them, they transform from mere chefs to “food detectives,” helping their clients find a lost or forgotten dish from their past through a combination of research and deduction. And in doing so, they see how each person has a story to tell, and a future ahead full of possibilities.

</p>
    </div>

  </div>



     <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl flex justify-center items-center lg:justify-start">You Only Live Once</h3>
      <h5 className="text-sm mt-2 flex justify-center items-center lg:justify-start gap-1">by <span className="underline">Stuti Changle</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">What if you ran away from your life today?

Twenty years later, three people are looking for you.
One is dying to meet you again.
The other wishes you had never met them.
The third wishes they could have met you at least once.
You are one person. Aren’t you? But you are not the same person to each of them.
Find the answers about your own life in this story about searching for love and discovering yourself. Join a broken but rising YouTube star Alara, a struggling but hopeful stand-up comedian Aarav, and a zany but zen beach shack owner Ricky. Together, take the journey to seek the truth behind the famous singer Elisha’s disappearance somewhere by the deep sea in Goa.
Will you be able to find Elisha? Or will you end up finding yourself?</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71dNsRuYL7L._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 

 </div>


 <div className="mt-25 p-10">
  <button onClick={homepage} className="bg-[#808000] block mx-auto p-3 rounded-full text-pink-50 hover: cursor-pointer text-xl hover:bg-amber-950">Home Page</button>
 </div>


 </div>
     
   </div>
    </div>
 }