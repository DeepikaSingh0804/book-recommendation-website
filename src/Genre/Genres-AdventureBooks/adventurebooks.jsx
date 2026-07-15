import { useNavigate } from "react-router-dom"

 export function AdventureBook () {


 const navigate = useNavigate()


 function genrespage () {
  navigate("/genres")
 }






    return <div>
    <div className="text-2xl bg-white h-full w-full mt-20 p-5">

  
  <div className="bg-[#313647] text-white p-5 rounded-4xl m-1 border md:mt-12 xl:mt-5 flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-center mt-5 sm:mt-7 md:mt-8 lg:mt-10">Born to Explore...</h1>
        <p className="mt-7 text-2xl font-light text-center mr-5 ml-5 lg:mr-60 lg:ml-60">Life’s greatest moments happen outside your comfort zone.</p>
 </div>

 <div>
  <img src="https://www.slj.com/binaries/content/gallery/mg-adventure-strip.png" className="w-full p-1 lg:p-5 mt-15 lg:mt-5 rounded-3xl lg:rounded-4xl"/>
 </div>

 <div>
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-15 ml-10 p-2 w-full underline underline-offset-4 italic text-[#313647]">Adventure Stories</h2>

  <div className="xl:mr-15 xl:ml-15">

  <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-20 lg:mt-30 gap-10 lg:gap-40">
  <div className="flex items-center justify-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81GXwxrjO6L._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Treasure Island</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Robert Louis Stevenson</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Embark on a thrilling adventure with Robert Louis Stevenson's "Treasure Island." Join young Jim Hawkins as he sets sail on a quest for buried treasure, encountering dangerous pirates and facing the ultimate test of bravery. A classic tale of excitement and intrigue.</p>
    </div>

  </div>



 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div className="">
      <h3 className="md:font-bold underline text-xl lg:text-2xl  text-center lg:text-start">The Time Machine </h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> H. G. Wells </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Embark on a captivating adventure with H.G. Wells' The Time Machine. Witness humanity's future, explore the depths of time, and ponder on profound questions. This unabridged edition guarantees an immersive experience.
      A timeless journey through time!
      Pioneering science fiction classic by H.G. Wells
      Unforgettable journey through space
      Encounters with future civilizations
      Thought-provoking exploration of society and human nature
  Unabridged edition for an authentic reading experience</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/61MPEQWEPML._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 



    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/6182l8sKd+L._SY522_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Adventures of Sherlock Holmes</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Arthur Conan Doyle</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Suspense, intrigue, and mystery! Twelve stories with twelve different plots make The Adventures of Sherlock Holmes a must read for all those who love detective stories. Set in the backdrop of 19th century England, Sherlock Holmes and his friend Dr. Watson solve some of the most fascinating cases, from jewel robbery to murder. Join Holmes and Watson as they journey across the most puzzling mysteries of their lives.</p>
    </div>

  </div>




 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Kidnapped</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Robert Louis Stevenson </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">David, the rightful successor to his family's wealth, is abducted as a result of a betrayal, and what begins is an adventure that will change his life forever! Amidst shipwrecks and dangerous events, David discovers his own bravery and what it truly means to be good!
      This exciting novel by Robert Louis Stevenson will grip you with its twists and turns, and is a must-have for adventure fiction lovers! More books by Robert Louis Stevenson: Treasure Island, The Strange Case of Dr. Jekyll and Mr. Hyde.</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81fedjK1SML._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 




 
    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81aU9KRdh8L._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Nectar on the Seven Hills - The Pure Seed </h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Prabhu Ram </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0"> Stranded in the treacherous depths of the forests of the Eastern Ghats – a region steeped in ancient lore – amidst a pandemic- triggered lockdown, siblings Magadh, Yukti, and their new friend Rudra race against time to confront and stop an ancient enemy. As one fateful night uncovers many legends with danger lurking in every shadow, will their friendship overcome the malevolent forces at play? Will the journey lead to the discovery of the ‘Pure Seed’? Will General Xilian and his men succeed in their plot to take advantage of the situation?
      The Pure Seed is the first book in the Nectar on the Seven Hills trilogy. In this epic fantasy adventure, Prabhu Ram blends Indian mythology with those of other civilizations while offering a different perspective on historical events. This breathless race against time is an unputdownable, breathtaking read.</p>
    </div>

  </div>



  <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Malgudi Adventures</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Narayan R.K.</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">After the stupendous success of Malgudi Schooldays, R.K. Narayan’s chronicle of the escapades of Swami
and his friends, comes Malgudi Adventures with more delightful stories of the children’s adventures in the magical South Indian small town of Malgudi.
There are the memorable stories of Babu, who, in trying to set up the lights for his sisters’ Navaratri display, manages to plunge the entire household into darkness; of a snake charmer boy who grows up with a monkey named Rama as his companion; and of Raju, who decides to become a guide when a train station is built at Malgudi. Also included are the fascinating stories of Balu, who dumps his father’s accounts ledger
in the gutter; of a little boy who finds himself lost on the streets of Malgudi late one night; of Chandran, who falls head over heels in love on the banks of the Sarayu one evening; and of the hilarious sequence of events that unfolds when Raja the tiger decides to seek refuge in the local school.
Culled from some of Narayan’s greatest novels such as The Man-eater of Malgudi, The Bachelor of Arts, The
English Teacher, The Guide and The Financial Expert, and containing three of his short stories, Malgudi Adventures is a funny, exciting and entertaining book that children of all ages will enjoy.
</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81+VET7F8DL._AC_UY436_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 


     <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71NCH9gTSAL._AC_UY436_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Complete Adventures of Feluda Vol. 1</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Satyajit Ray  </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">This omnibus edition features the ever-popular adventures of Satyajit Ray's enduring creation, the professional sleuth Pradosh C. Mitter (Feluda). In his escapades, Feluda is accompanied by his cousin Topshe and the bumbling crime writer Lalmohan Ganguly (Jatayu). From Jaisalmer to Simla, from the Ellora Caves to Varanasi, the trio traverse fascinating locales to unravel one devious crime after another.</p>
    </div>

  </div>



    <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Dog Who Saved the World</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Ross Welford </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">The astounding new novel from the bestselling and Costa-shortlisted author of time travelling with a hamster, this is a story for everyone of 10 and older who loves adventure, laughs and tears. “One of My Favourite middle-grade writers” Kiran Millwood Hargrave, author of the girl of ink and stars when 12-year-old Georgie makes friends with an eccentric retired scientist, she becomes the test-subject for a thrilling new experiment: a virtual reality, 3D version of the future. Then a deadly virus threatens to wipe out every dog in the country and Georgians beloved dog Mr Mash gets sick. Which is bad – but worse is still to come. As the world is thrown into chaos, Georgie embarks on a desperate quest: to save every dog on Earth and all of humanity without actually leaving the room. An extraordinary quest with the biggest stakes of all and a huge idea at its heart, this is time travel – but not as you know it.</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71+v0H6igPL._AC_UY436_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 



       <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81stPOaLd-S._AC_UY436_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Adventures of Tom Sawyer</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Mark Twain </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">The Adventures of Tom Sawyer by Mark Twain is a timeless literary masterpiece that takes readers on an unforgettable journey through the mischievous and thrilling escapades of Tom Sawyer. Join Tom and his friends as they navigate the Mississippi River, uncover hidden treasures, and find themselves in hilarious and daring situations.
      Explores themes of childhood, friendship, and the joys and challenges of growing up.
      A timeless classic that will entertain and inspire readers of all ages.
      Features memorable characters who bring humor, excitement, and depth to this iconic tale.
      Offers valuable lessons about friendship, courage, and the pursuit of fun in the face of adversity.
      A beloved classic that is a must-have for every bookshelf.
</p>
    </div>

  </div>



     <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Divine Five: Vol-1 Motherland</h3>
      <h5 className="text-sm mt-2 flex justify-center items-center lg:justify-start gap-1">by <span className="underline">Ratikant Behera and Abhishek Krishnan </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Embark on an epic journey as five siblings represent their homeland, Asmaan, in the prestigious Motherland World Championship, blending action, adventure, and thrilling virtual reality.
      Enter the immersive world of superpowers, demons, and challenges, where each sibling hones their skills, unlocking hidden strengths and uncovering ancient teachings in a vibrant realm.
      Join Krishi, Devi, AJ, Hanu, and Saras as they face monstrous challenges, battling fierce enemies and discovering the courage and wisdom they've inherited from their homeland.
      Experience a mind-boggling virtual reality adventure that blurs the line between fantasy and reality, offering vivid storytelling and breathtaking action with each level they traverse.
      Perfect for fans of immersive storytelling, 'Divine Five' is an action-packed, adventure-filled saga combining thrilling role-playing elements and richly developed characters with supernatural abilities.
      Unveil a world filled with ancient powers, demonic forces, and high-stakes challenges where each sibling must navigate their destiny and protect their homeland from destruction.
      First volume in the 'Divine Five' series, this epic tale of fantasy, action, and adventure will captivate readers with its vivid world-building and unforgettable characters.</p>
    </div>

    <div className="mt-15 lg:mt-0 flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81li1ZiZN+L._AC_UY436_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 

 </div>


 <button onClick={genrespage} className="bg-[#313647] text-white block mx-auto p-2.5 rounded-full mt-30 hover:cursor-pointer hover:scale-105 transition-transform duration-300 text-xl font-serif">Genres Page</button>


 </div>



     
   </div>
      
    </div>
 }