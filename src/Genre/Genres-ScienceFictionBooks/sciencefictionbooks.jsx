import { useNavigate } from "react-router-dom"

 export function ScienceFictionBook () {


 const navigate = useNavigate()


 function genrespage () {
  navigate("/genres")
 }






    return <div>
    <div className="text-2xl bg-white h-full w-full mt-20 p-5">

  
  <div className="bg-[#16476A] text-white p-5 rounded-4xl m-1 border md:mt-12 xl:mt-5 flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-center mt-5 sm:mt-7 md:mt-8 lg:mt-10">Echoes of the Future...</h1>
        <p className="mt-7 text-2xl font-light text-center mr-5 ml-5 lg:mr-60 lg:ml-60">Experience thrilling tales of innovation, space exploration, and cosmic mysteries.</p>
 </div>

 <div>
  <img src="https://www.hiddengemsbooks.com/wp-content/uploads/2019/12/sci-fi.jpg" className="w-full p-1 lg:p-5 mt-15 lg:mt-5 rounded-3xl lg:rounded-4xl"/>
 </div>

 <div>
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-15 md:ml-10 p-2 w-full underline underline-offset-4 italic text-[#16476A]">Science Fiction Stories</h2>

  <div className="xl:mr-15 xl:ml-15">

  <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-20 lg:mt-30 gap-10 lg:gap-40">
  <div className="flex items-center justify-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/61MPEQWEPML._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Time Machine</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> H. G. Wells</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Embark on a captivating adventure with H.G. Wells' The Time Machine. Witness humanity's future, explore the depths of time, and ponder on profound questions. This unabridged edition guarantees an immersive experience.

     A timeless journey through time!

 * Pioneering science fiction classic by H.G. Wells
 * Unforgettable journey through space
 * Encounters with future civilizations
 * Thought-provoking exploration of society and human nature
 * Unabridged edition for an authentic reading experience


</p>
    </div>

  </div>



 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div className="">
      <h3 className="md:font-bold underline text-xl lg:text-2xl  text-center lg:text-start">Project Hail Mary</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Andy Weir</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Ryland Grace is the sole survivor on a desperate, last-chance mission - and if he fails, humanity and the earth itself will perish.
      Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.
      All he knows is that he's been asleep for a very, very long time. And he's just been awakened to find himself millions of miles from home, with nothing but two corpses for company.
      His crewmates dead, his memories fuzzily returning, Ryland realizes that an impossible task now confronts him. Hurtling through space on this tiny ship, it's up to him to puzzle out an impossible scientific mystery-and conquer an extinction-level threat to our species.
      And with the clock ticking down and the nearest human being light-years away, he's got to do it all alone.

Or does he?
</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81Yc3Urj0+L._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 



    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81Y-PQhFjuL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Relativity</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Albert Einstein</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Master the Fundamentals of Physics: Einstein’s Relativity is obviously a foundational text in science for anyone who wants to improve their conceptual physics, calculus core principles, or their scientific thinking in general. It offers deep insights into the theory of relativity, making complex concepts accessible and understandable. Whether you’re a student of university physics or an enthusiast, this book is an essential resource for scientific minds.
 </p>
    </div>

  </div>




 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Dark Matter</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Blake Crouch </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Dark Matter is a relentlessly surprising alternate-universe sci-fi thriller from Blake Crouch. 'Are you happy in your life?' Those are the last words Jason Dessen hears before the masked abductor knocks him unconscious. Before he awakes to find himself strapped to a gurney, surrounded by strangers in hazmat suits. Before the man he's never met smiles down at him and says, 'Welcome back.' In this world he's woken up to, Jason's life is not the one he knows. His wife is not his wife. His son was never born. And Jason is not an ordinary college physics professor, but a celebrated genius who has achieved something remarkable. Something impossible. In this other life, Jason has created a box. Transport into infinite alternate universes – every possible outcome of his life, one behind each door. In this other life, Jason chose a door. And he stole the life he wanted. If Jason Dessen wants his life back, he will have to find it among infinite possibilities. And he will have to battle a terrifying, seemingly unbeatable foe: himself.
</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81kpj1VBV-S._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 




 
    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81DAK5xNjQL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Black Holes: The Reith Lectures</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Stephen Hawking </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">“It is said that fact is sometimes stranger than fiction, and nowhere is that more true than in the case of black holes. Black holes are stranger than anything dreamed up by science fiction writers.”
      In 2016 Professor Stephen Hawking delivered the BBC Reith Lectures on a subject that fascinated him for decades – black holes.
      In these flagship lectures the legendary physicist argued that if we could only understand black holes and how they challenge the very nature of space and time, we could unlock the secrets of the universe.
</p>
    </div>

  </div>



  <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Foundation</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Isaac Asimov</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Foundations is a lasting testament to an extraordinary imagination, one that shaped science fiction as we know it today.The Galactic Empire has prospered for twelve thousand years. Nobody suspects that the heart of the thriving Empire is rotten, until psychohistorian Hari Seldon uses his new science to foresee its terrible fate.Exiled to the desolate planet Terminus, Seldon establishes a colony of the greatest minds in the Empire, a Foundation which holds the key to changing the fate of the galaxy.However, the death throes of the Empire breed hostile new enemies, and the young Foundations fate will be threatened first.

</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81LT+V9G4IL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 


     <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81SfsmpfAJL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Orbital</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Samantha Harvey </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">A team of astronauts in the International Space Station collect meteorological data, conduct scientific experiments and test the limits of the human body. But mostly they observe. Together they watch their silent blue planet, circling it sixteen times, spinning past continents and cycling through seasons, taking in glaciers and deserts, the peaks of mountains and the swells of oceans. Endless shows of spectacular beauty witnessed in a single day.
      Yet although separated from the world they cannot escape its constant pull. News reaches them of the death of a mother, and with it comes thoughts of returning home. They look on as a typhoon gathers over an island and people they love, in awe of its magnificence and fearful of its destruction.
      The fragility of human life fills their conversations, their fears, their dreams. So far from earth, they have never felt more part - or protective - of it. They begin to ask, what is life without earth? What is earth without humanity?</p>
    </div>

  </div>



    <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Journey To The Centre of The Earth</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Jules Verne </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">An epic subterranean adventure!

Jules Verne's captivating tale of exploration and discovery
Unforgettable journey to the depths of the Earth's core
Engaging characters and vivid descriptions bring the underground world to life
A perfect blend of science, adventure, and imagination
A must-read for fans of thrilling escapades and wondrous landscapes</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81SobDzqdkL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 



       <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81X76RHWvFL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Lost World</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Arthur Conan Doyle </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">“So tomorrow we disappear into the unknown. . . It may be our last word to those who are interested in our fate. ” dinosaurs, pterodactyls, ape-men, and other prehistoric creatures still roam among us. This ground-breaking discovery has been made by the notorious Professor George Edward Challenger, who is a brilliant scientist. But this revelation has been subjected to ridicule. In order to believe, people need proof. So, that’s what he will give them. Braving danger and risking his life, Challenger will set foot into the depths of the amazonian plateau of South America. Accompanying him in this extraordinary adventure are his professional rival Professor summerlee, journalist Edward Malone, and Lord John roxton. In the dense foliage of the dark, lost world, will Challenger find the proof he is looking for? And, if he does, will he survive? Arthur Conan Doyle the lost world became an instant success on publication. It is one of the best sci-fi stories ever written and is considered a classic that has set the standard for all fantasy-adventure stories.
</p>
    </div>

  </div>



     <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The War of The Worlds</h3>
      <h5 className="text-sm mt-2 flex justify-center items-center lg:justify-start gap-1">by <span className="underline"> H. G. Wells</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Not all battles are won with weapons.
      Witness an epic battle between humans and extraterrestrial invaders.
      Engage with H.G. Wells' groundbreaking vision of alien technology and warfare.
      Reflect on the profound themes of survival, humanity, and the vulnerability of our civilization.
     Dive into a timeless masterpiece that continues to captivate readers across generations.
     This edition features H.G. Wells' original text, providing an immersive reading experience for fans of science fiction and literary excellence.</p>
    </div>

    <div className="mt-15 lg:mt-0 flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81eLFCP3SvL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 

 </div>


 <button onClick={genrespage} className="bg-[#16476A] text-white block mx-auto p-2.5 rounded-full mt-30 hover:cursor-pointer hover:scale-105 transition-transform duration-300 text-xl font-serif">Genres Page</button>


 </div>



     
   </div>
      
    </div>
 }