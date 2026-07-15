import { useNavigate } from "react-router-dom"

 export function ShortStoriesBook () {


 const navigate = useNavigate()


 function genrespage () {
  navigate("/genres")
 }






    return <div>
    <div className="text-2xl bg-white h-full w-full mt-20 p-5">

  
  <div className="bg-[#7469B6] text-gray-200 p-5 rounded-4xl m-1 border md:mt-12 xl:mt-5 flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-center mt-5 sm:mt-7 md:mt-8 lg:mt-10">Quick Reads...</h1>
        <p className="mt-7 text-2xl font-light text-center mr-5 ml-5 lg:mr-60 lg:ml-60">Bite-sized stories packed with imagination and emotion.</p>
 </div>

 <div>
  <img src="https://img.buzzfeed.com/buzzfeed-static/static/2020-04/29/23/asset/0b4004e46777/sub-buzz-138-1588204021-1.jpg" className="w-full p-1 lg:p-5 mt-15 lg:mt-5 rounded-3xl lg:rounded-4xl"/>
 </div>

 <div>
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-15 md:ml-10 p-2 w-full underline underline-offset-4 italic text-[#7469B6]">Short Stories</h2>

  <div className="xl:mr-15 xl:ml-15">

  <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-20 lg:mt-30 gap-10 lg:gap-40">
  <div className="flex items-center justify-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71qHV6Acj+L._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Black Beauty</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Wonder House Books</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">A jet-black young Colt, black beauty, spends his early years in a copy meadow growing up with a gentle master, a strong mother and an ideal upbringing. Through the years, he changes hands with different masters—some rough, some kind, some indifferent. Black beauty experiences throughout his life give him lessons on real friendship, loss, hardship and human nature. Gallop with black beauty as he grows into a worn yet mature and handsome, dutiful and loyal old horse.
</p>
    </div>

  </div>



 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div className="">
      <h3 className="md:font-bold underline text-xl lg:text-2xl  text-center lg:text-start">Collected Short Stories</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Satyajit Ray </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Best known for his immensely popular Feluda mysteries and the adventures of Professor Shonku, Satyajit Ray was also one of the most skilful short-story writers of his generation. Ray's short stories often explore the macabre and the supernatural, and are marked by the sharp characterization and trademark wit that distinguish his films. This collection brings together Ray's best short stories, including timeless gems such as 'Khagam', 'Indigo', 'Fritz', 'Bhuto', 'The Pterodactyl's Egg', 'Big Bill', 'Patol Babu, Film Star' and 'The Hungry Septopus', which readers of all ages will enjoy.
</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81Ueoqp763L._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 



    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81l8pRWthbL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Premchand</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Premchand</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Premchand was one of the greatest literary figures of modern Hindi literature and wrote over 250 short stories, a dozen novels and two plays. Premchand, whose literary career started as a freelancer in Urdu, was the first Hindi author to introduce realism in his writings. He pioneered the new art form of fiction with a social purpose. He wrote of the life around him and made his readers aware of the problems of the urban middle-class and the country's villages. He depicted variousÂ realistic issues of the day such as communalism, corruption, debt, poverty, colonialism etc. in his stories.
 </p>
    </div>

  </div>




 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Rabindranath Tagore</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Rabindranath Tagore</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Love does not claim possession, but gives freedom. ?  Regarded as the inventor of modern Bengali short stories, Rabindranath Tagore is well-known for his remarkable contributions in Indian as well as world literature. Beautifully depicting the essence of human relationships, Tagore?s stories are set in rural Bengali villages which further emanate the spirit of the wider Indian culture.   Richly wrapped in vivacity and spontaneity, Selected Short Stories of Rabindranath Tagore presents the readers with varied aspects of Tagore?s writing. From foregrounding the evils of social crimes to the mysticism of native Indian surroundings, this book stores a casket of experiences and pleasing tales for all the readers to explore!
</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/61j3WLZx1LL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 




 
    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81-Y2qizxxS._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Greatest Short Stories of Anton Chekhov</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Anton Chekhov and Translated By Constance Garnett </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">“Life is a vexatious trap; when a thinking man reaches maturity and attains to full consciousness he cannot help feeling that he is in a trap from which there is no escape.” one of the greatest Russian short story writers and an exemplary playwright, Anton Chekhov penned down some of the finest short stories and plays in literature. His works continue to be translated into various languages across the world. This edition brings together his early short stories along with the outstanding short fiction written in his later years. It includes ‘the death of a government Clerk,’ ‘The Huntsman,’ ‘Oh! The public,’ ‘anyuta,’ ‘misery,’ ‘The lottery ticket,’ ‘a dreary story,’ ‘peasant wives,’ ‘The lady with the dog,’ and his last completed story, ‘betrothed.’ An editorial note precedes each work.

</p>
    </div>

  </div>



  <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Grandma's Bag Of Stories</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Sudha Murty </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Memories of a grandparent spinning tales around animals and mysterious characters have kept many of us rapt till date. Sudha Murty's Grandma's Bag of Stories is simply delightful. The story starts with Anand, Krishna, Raghu and Meena arriving at their grandparents' house in Shiggaon. Overjoyed Ajji and Ajja(Grandmother and grandfather in Kannada) get the house ready, while Ajji prepares delicious snacks for children. Finally, times comes when everyone gathers around Ajji, as she opens her big bag of stories. She tells stories of kings and cheats, princesses and onions, monkeys and mice and scorpions and hidden treasures.
Though unlikely in combination, stories makes perfect sense when Grandma is the one narrating them.



</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81ExT8sUebL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 


     <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71QvsoE08CL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Greatest Short Stories of Dostoevsky </h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Fyodor Dostoevsky </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Step into Dostoevsky's realm of Love, Morality, and Existentialism.
      Peep into the intricacies of the human mind, exploring themes of guilt, existentialism, and the inner struggles faced by the characters.
      The stories explore the nature of faith and redemption to examine societal norms and the role of free will.
      A springboard for deep philosophical contemplation of questions about the nature of human existence, morality, and the nature of good and evil.
      Masterfully crafted narratives to evoke deep emotions and capture the complexities of human relationships.
      Features Dostoevsky's finest masterpieces.</p>
    </div>

  </div>



    <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Diary of a Young Girl</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Anne Frank</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">The Diary of A Young Girl deserves a read by everyone who has ever questioned mental strength of humans and also by those who cannot come to terms with the cruelties that could be inflicted by humans upon fellow humans. The first entry in the diary is on June 12, 1942 by Anne Frank, who had received it as a birthday present and the entries in the diary end abruptly on 1 August, 1944. The Underlying Themes Anne Frank and her family lived a peaceful life in Frankfurt, Germany but they had to escape to Amsterdam with fellow Jews and go into hiding, as the Nazis took over Europe. Anne writes in her diary the tribulations her family had to face living in hiding, because they knew if caught, they would have to suffer horribly. The sufferance of the Jews during the Holocaust is known to all; yet a thirteen year old feeling the impact of intolerance and racism makes readers realise how profound the impacts of the World War II was. What is most captivating is that amidst the terror and the fear, Anne manages to remain a cheerful girl full of life, who loved to talk and observe. </p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81lZ-9E4F-S._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 



       <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81SPtu1+26L._AC_UY436_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Short Stories from Shiv Mahapuran</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Swati Kaushik</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Discover the divine wisdom of Bhagwan Shiv through a collection of captivating short stories adapted from the sacred Shiv Mahapuran! This book brings to life the legendary tales of Shiva, his divine powers, and the profound lessons hidden within the sacred text.
      From the descent of the holy Ganga to the birth of Lord Ganesha, each story unfolds with valuable teachings on courage, devotion, wisdom, and strength. Readers will journey alongside Devi Parvati, Lord Kartikeya, Bhagwan Vishnu, and other revered deities, uncovering timeless moral lessons through engaging storytelling.

  </p>
    </div>

  </div>



     <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Short scam stories for seniors</h3>
      <h5 className="text-sm mt-2 flex justify-center items-center lg:justify-start gap-1">by <span className="underline"> Sam CASTELLA </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Scams don’t always arrive through a screen. Sometimes they knock on the door, call the house phone, sit across the table, or show up disguised as help, love, or opportunity.

Short Scam Stories for Seniors pulls back the curtain on 500 real-world scams of all kinds—not just digital fraud, but phone scams, mail scams, in-person cons, investment traps, medical fraud, fake charities, home repair tricks, romance scams, and everyday deceptions that have cost seniors trust, time, and money.</p>
    </div>

    <div className="mt-15 lg:mt-0 flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71-z8vsrBmL._AC_UY436_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 

 </div>


 <button onClick={genrespage} className="bg-[#7469B6] text-white block mx-auto p-2.5 rounded-full mt-30 hover:cursor-pointer hover:scale-105 transition-transform duration-300 text-xl font-serif">Genres Page</button>
 </div>



     
   </div>
      
    </div>
 }