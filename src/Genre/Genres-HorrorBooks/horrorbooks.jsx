import { useNavigate } from "react-router-dom"

 export function HorrorBook () {


 const navigate = useNavigate()


 function genrespage () {
  navigate("/genres")
 }






    return <div>
    <div className="text-2xl bg-white h-full w-full mt-20 p-5">

  
  <div className="bg-[#4A0000] text-white p-5 rounded-4xl m-1 border md:mt-12 xl:mt-5 flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-center mt-5 sm:mt-7 md:mt-8 lg:mt-10">Where Shadows Tell Stories...</h1>
        <p className="mt-7 text-2xl font-light text-center mr-5 ml-5 lg:mr-60 lg:ml-60">Explore chilling tales and mysterious worlds beyond imagination.</p>
 </div>

 <div>
  <img src="https://assets.penguinrandomhouse.com/wp-content/uploads/2025/06/07140951/New_Horror_Picks_HP_1200x628.jpg" className="w-full p-1 lg:p-5 mt-15 lg:mt-5 rounded-3xl lg:rounded-4xl"/>
 </div>

 <div>
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-15 ml-10 p-2 w-full underline underline-offset-4 italic text-[#4A0000]">Horror Stories</h2>

  <div className="xl:mr-15 xl:ml-15">

  <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-20 lg:mt-30 gap-10 lg:gap-40">
  <div className="flex items-center justify-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71iJ+R+RnvS._SY522_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">50 World’s Greatest Horror Stories</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Various (Author)</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Whether serving as cautionary tales or stories that appease the listeners thirst of the unknown, the macabre, and even the grotesque, horror fiction has been around for a long time. From stories concocted around mythical figures and legends, to those about imagined monsters under the bed and in the dark, here is a must-have edition to make your nights a little scarier. Fifty of the worlds spookiest, spine-chilling stories have been amassed in this anthology, stories about ghosts, spirits, monsters, and the undead. Read on if you have the courage, but do so at your own peril.</p>
    </div>

  </div>



 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div className="">
      <h3 className="md:font-bold underline text-xl lg:text-2xl  text-center lg:text-start">Ghosts of The Silent Hills: Stories based on true hauntings</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Anita Krishan  </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">The hills are surrounded by dense, menacing forests, enveloped in a deadly silence, where you never know what lurks in the cold, dark nights. You may come across a beautiful woman in white, who haunts the lonely pathways or you may hear screams of people who died in accidents. Ghosts of the Silent Hills is a collection of horror stories that will make your nights a little scarier, encompassing the very best spine-chilling stories based on true hauntings.</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81zKpTU9gRL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 



    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81b1PP4RK1L._SY522_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">That Night: Four Friends. Twenty Years. One Haunting Secret.</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Nidhi Upadhyay </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Natasha, Riya, Anjali and Katherine were best friends in college - each different from the other yet inseparable - until that night.
      It was the night that began with a bottle of whisky and a game of Ouija but ended with the death of Sania, their unlikeable hostel mate. The friends vowed never to discuss that fateful night, a pact that had kept their friendship and guilt dormant for the last twenty years.
      But now, someone has begun to mess with them, threatening to reveal the truth that only Sania knew. Is it a hacker playing on their guilt or has Sania's ghost really returned to avenge her death?
      As the faceless enemy closes in on them, the friends come together once again to recount what really happened that night. But when the story is retold by each of them, the pieces don't fit. Because none of them is telling the whole truth . . .
      That Night is a dark, twisted tale of friendship and betrayal that draws you in and confounds you at every turn.</p>
    </div>

  </div>




 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Wind on Haunted Hill</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Ruskin Bond </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">He's 33. She's 21.
  A gorgeous full-colour chapter book, ideal for young readers (ages 6 and up) with its large font, eye-catching illustrations and easy language
 Perfect book to read along with and also as a read-it-yourself
 A beautiful introduction to the works of Ruskin Bond for children
 The wild wind pushes open windows, chokes chimneys and blows away clothes as it huffs and puffs over the village by Haunted Hill, where Usha, Suresh and Binya live. It's even more mighty the day Usha is on her way back from the bazaar. A deep rumble echoes down the slope and a sudden flash of lightning lights up the valley as fat drops come raining down.
 In search of shelter, Usha rushes into the ruins on Haunted Hill, grim and creepy against the dark sky. Inside, the tin roof groans, strange shadows are thrown against the walls and little Usha shivers with fear. For she isn't alone.
 A gritty, hair-raising story about friendship, courage and survival, this stunning edition will introduce another lot of young readers to the magic of Ruskin Bond's craft.
 Other popular books in the series include The Cherry Tree, Ranji the Music Maker, Earthquake and The Day Grandfather Tickled a Tiger.</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/91TBcPLZqJL._SY522_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 




 
    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71qUi9YdG8L._AC_UY436_FMwebp_QL65_.jpg" className="w-80 h-100 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Canterville Ghost</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Oscar Wilde  </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0"> The Canterville Ghost by Oscar Wilde is a clever and charming story that brings together humor, mystery, and a touch of the supernatural. When an American family moves into a grand English mansion, they discover it's haunted by the ghost of Sir Simon—a spirit more frustrated than frightening. Instead of running away, the family refuses to be scared, leading to a funny and heartwarming tale about redemption, understanding, and letting go.
      Blending classic ghost story elements with Wilde’s signature wit, The Canterville Ghost offers a light and entertaining take on the horror genre. Whether you're looking for a spooky read for younger readers or a timeless classic novel to revisit, this book is a great pick for all ages.

</p>
    </div>

  </div>



  <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Blood Magic: A Short Horror Story </h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Domino Finn</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">When they found the first body, no one batted an eye.
   That was par for the course in Skid Row. But something with these deaths was off. They were made to look like ritualistic suicides, like something supernatural. But I knew better. Besides, I don't believe in magic.
   My name is Rick Danvers and I'm an undercover detective with Robbery Homicide. I've been embedded in this slum for a week now, and before the night is over, I'm gonna get to the bottom of the Skid Row Suicides.</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/815R+21dQBL._SY522_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 


     <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/811hMYMKOzL._SY522_.jpg" className="w-80 h-100 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Ghosts in the Dark Silence</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Anita Krishan </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">When you hear things in the dark
  silence of the night, you know what
  it means—they are watching you.
  The moment you are vulnerable,
  that’s when they will strike.
  Why, you ask? Because you are alive.
  From the author of the bestselling Ghosts of the Silent Hills, comes another collection of chilling horror stories based on true events. Encased in Ghosts in the Dark Silence are five stories that will petrify even the bravest of the brave. Some stories are gruesome and bizarre, others softly creep up on you and pull you in.
  The beautiful dream-house of a newly-wed couple slowly turns into their worst nightmare, malevolent spirits prance around to prey on the living, naïve youngsters are lured into the world of tantriks and black magic, and even simple games turn out to be dangerous and life-threatening.
  What will become of the people in these stories? They can pray. They can run. They can fight. But do they stand a chance against something that’s not even of this world?</p>
    </div>

  </div>



    <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Dracula</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Bram Stoker </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">This is a beautiful hardbound edition of Dracula that comes with gilded edges and elegantly designed endpapers. Dracula is an epistolary novel, written as a collection of realistic but completely fictional diary entries, telegrams, letters, ship’s logs, and newspaper clippings, all of which add a level of detailed realism to Stoker’s story. At the time of its publication, Dracula was considered a ‘straightforward horror novel’ based on imaginary creations of supernatural life. Dracula has been assigned to many literary genres including vampire literature, horror fiction, the gothic novel, and invasion literature. The novel touches on themes such as the role of women in Victorian culture, sexual conventions, immigration, colonialism, and post-colonialism. Although Stoker did not invent the vampire, he defined its modern form through this novel.</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81lwyMHysFL._SY522_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 



       <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71koanqFexL._SY522_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Canterville Ghost</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Oscar Wilde </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">The Canterville Ghost is a classic tale by Oscar Wilde, first published in 1887. A delightful read for all ages, the story follows the Otis family as they move into Canterville Chase, a haunted mansion in England, and encounter the mischievous ghost that haunts the house. This charming tale offers a unique blend of wit, satire, and heartfelt moments.

 Blends comedy and the supernatural in a unique way.
 An engaging story of a ghost's attempts to scare new residents.
 Witty and satirical commentary on societal norms and expectations.
 Features vividly drawn and memorable characters.
 A must-read for fans of Wilde’s works and lovers of classic literature. </p>
    </div>

  </div>



     <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Haunting of Delhi City</h3>
      <h5 className="text-sm mt-2 flex justify-center items-center lg:justify-start gap-1">by <span className="underline"> Jatin Bhasin</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">You know Delhi for its rich cultural tapestry, history and monuments. You love it for its food--kebabs, chole-kulche, golgappe and chaat.
      But do you know about the dark shadows that lurk in its all-too-familiar haunts--the arcades of Connaught Place, the gullies of Mehrauli, the lawns of Lutyens' Delhi, or the pillars and arches of the tombs in Hauz Khas?
     The stories in The Haunting of Delhi City are set in a Delhi we think we know well, but don't. This is a Delhi that reveals the presence of the supernatural at every corner-ghosts as real to us in stories as they are in our imagination. Exquisitely chilling, each of these tales holds a piece of the city and its people-especially the ghosts.
     Oh, these are just stories, you say. But are they?
     Come, have a read ... if you dare.</p>
    </div>

    <div className="mt-15 lg:mt-0 flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81ggXazp+-L._SL1500_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 

 </div>


 <button onClick={genrespage} className="bg-[#4A0000] text-white block mx-auto p-2.5 rounded-full mt-30 hover:cursor-pointer hover:scale-105 transition-transform duration-300 text-xl font-serif">Genres Page</button>


 </div>



     
   </div>
      
    </div>
 }