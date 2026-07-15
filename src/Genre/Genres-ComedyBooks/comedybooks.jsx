import { useNavigate } from "react-router-dom"

 export function ComedyBook () {


 const navigate = useNavigate()


 function genrespage () {
  navigate("/genres")
 }






    return <div>
    <div className="text-2xl bg-white h-full w-full mt-20 p-5">

  
  <div className="bg-[#A6D6D6] text-gray-900 p-5 rounded-4xl m-1 border md:mt-12 xl:mt-5 flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-center mt-5 sm:mt-7 md:mt-8 lg:mt-10">Laugh Out Loud...</h1>
        <p className="mt-7 text-2xl font-light text-center mr-5 ml-5 lg:mr-60 lg:ml-60">Stories that bring smiles, giggles, and endless laughter.</p>
 </div>

 <div>
  <img src="https://hips.hearstapps.com/esquireuk.cdnds.net/17/32/1600x800/landscape-1502123493-funniest-books.png?resize=640:*"  className="w-full p-1 lg:p-5 mt-15 lg:mt-5 rounded-3xl lg:rounded-4xl"/>
 </div>

 <div>
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-15 md:ml-10 p-2 w-full underline underline-offset-4 italic text-[#73C7C7]">Comedy Stories</h2>

  <div className="xl:mr-15 xl:ml-15">

  <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-20 lg:mt-30 gap-10 lg:gap-40">
  <div className="flex items-center justify-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71sSQxj8WnL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Idiot </h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">  Fyodor Dostoevsky </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Taken to be an idiot, the naïve Prince Myshkin visits his distant relative General Yepanchin and hopes to charm him, his wife and his three daughters, but his life changes drastically after he stumbles upon a photograph of Nastasya Filippovna. Deeply infatuated with her, he finds himself caught in a love triangle, which leads him into a web of blackmail, betrayal and finally, murder. Inspired by Christ’s suffering, Dostoyevsky portrays the Russian Holy Fool’s purity as of a ‘truly beautiful soul’ and navigates through the perils that innocence and goodness face in a corrupt world. The Idiot has been titled a classic beyond the temporal and spatial bounds.


</p>
    </div>

  </div>



 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div className="">
      <h3 className="md:font-bold underline text-xl lg:text-2xl  text-center lg:text-start">Bell the Bell Jar</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">  Sylvia Plath  </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">To the person in the bell jar, blank and stopped as a dead baby, the world itself is a bad dream.
      In the hauntingly beautiful pages of The Bell Jar, Sylvia Plath takes us on a gripping journey into the fragile psyche of Esther Greenwood. Set against the backdrop of 1950s America, this semiautobiographical novel explores the stifling expectations placed upon women and the suffocating grasp of societal norms. As Esther grapples with her ambitions, desires and mental health, she finds herself trapped in a metaphorical bell jar—an oppressive glass enclosure that isolates her from the world.
      Plath’s evocative prose and poignant portrayal of Esther’s descent into madness make The Bell Jar a timeless masterpiece that shines a searing light on the complexities of the human psyche and the unrelenting quest for self-identity.


</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/61TJkUouMWL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 



    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/61r5UIpZUrL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Misadventures of Detective Ghanshyam</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">  Abhishek Singh  </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Imagine a young, silly and goofier version of Sherlock Holmes. Now make him a teenager. That's Ghanshyam. His arch-nemesis? His own younger sister, Tanu. She is equal parts mischievous and clever, with a dash of Komolika-style drama.
      Set in a quintessential middle-class Indian household, Detective Ghanshyam is a lighthearted, humorous tale of sibling rivalry, full of wit, eccentric adventures and relatable family chaos.
 </p>
    </div>

  </div>




 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Three Men In A Boat </h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Jerome K. Jerome   </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Embark on a side-splitting journey along the River Thames with Three Men In A Boat by Jerome K. Jerome. Join three bumbling friends as they navigate mishaps, comedic situations, and eccentric characters in this timeless and uproarious classic.
      A hilarious river adventure!

 * Jerome K. Jerome's uproarious tale of a boating expedition
 * Hilarious misadventures and comic escapades along the River Thames
 * Memorable characters and witty observations that will leave you in stitches
 * A humorous and lighthearted read for fans of classic comedy
 * A delightful blend of satire, wit, and picturesque descriptions


</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71X34c-QNNL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 




 
    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71ZQ0kNk3PL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Comedy in Khakee</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Comedy in Khakee </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Welcome to the land of Khakee, where common sense sometimes goes on vacation, and chaos runs the show!
      From eccentric DIGs who turn inspections into fun rituals to a Commissioner doing squats in dhoti for better digestion, police stations are never short of action.
      When a 'bomb' turns out to be the abandoned work of a thief, it's not the bag that explodes - it's the author, with laughter!
      When faced with a ferocious dog, the officer's strategy of dodging furniture ends in a classic comedy of errors - and a few bite marks.
      Written from years of experience, Comedy in Khakee is a unique insight into the daily experiences of a police officer. Light-hearted and engaging, it provides a much-needed break from the often serious nature of law enforcement, mixing it with humour. A refreshing take that reminds readers that even in the toughest jobs, there's always room for a good laugh.


</p>
    </div>

  </div>



  <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">A MAN CALLED OVE </h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">  Fredrik Backman (Author), Henning Koch (Translator)  </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">The million-copy bestselling phenomenon: a funny, moving, uplifting tale of love and community that will leave you with a spring in your step.
      'Warm, funny, and almost unbearably moving' Daily Mail
      'Delightful . . . the perfect holiday read'
       Evening Standard
       Ove is almost certainly the grumpiest man you will ever meet. He thinks himself surrounded by idiots - joggers, neighbours who can't reverse a trailer properly and shop assistants who talk in code. 
       But isn't it rare, these days, to find such old-fashioned clarity of belief and deed? Such unswerving conviction about what the world should be, and a lifelong dedication to making it just so?
       In the end, you will see, there is something about Ove that is quite irresistible . . .
       'Hilarious and heart-breaking'
        Stylist
       'Rescued all those men who constantly mean to read novels but never get round to it'
       Spectator Books of the Year
</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81g2oEdeGTL._SY522_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 


     <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71baLm1F++L._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Temporary Roomie</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Sarah Adams   </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Jessica has landed into Drew’s spare bedroom because her house is being renovated. It’s like being your greatest rival’s temporary roommate.
      Can she play nice with her enemy? Or is it time for sweet sweet revenge!
      Drew is a doctor who has mastered the art of hiding his true thoughts and feelings. He lets Jessica – his sister’s best friend – move in to his house, even though she is his arch nemesis.
      Will he accept his true feelings for her? Or will their past come between them?
      Will The Temporary Roomie find a permanent place in the other’s heart? This romantic comedy will surely make you laugh out loud and fall in love again.</p>
    </div>

  </div>



    <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Comedy of Errors</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> William Shakespeare   </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">
         The Comedy of Errors (Pocket Classic) by William Shakespeare is a delightful and farcical play that will leave you in stitches. Immerse yourself in this tale of mistaken identities, hilarious misunderstandings, and uproarious situations, beautifully presented in a convenient pocket-sized edition.

Experience Shakespeare's comedic genius and razor-sharp wit.
Engage with the uproarious mix-ups and confusion caused by two sets of identical twins.
Delight in the clever wordplay, slapstick humor, and comedic timing.
Reflect on the themes of identity, family, and the absurdity of life's mishaps.
This pocket-sized edition is perfect for on-the-go reading and a must-have for Shakespeare enthusiasts and fans of lighthearted entertainment.

 </p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71ihjcxoP0L._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 



       <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71kXMBKI8OL._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Funny Story </h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Emily Henry  </span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">IDaphne always loved the way Peter told their story. That is until it became the prologue to his actual love story with his childhood bestie, Petra.

Which is how Daphne ends up rooming with her total opposite and the only person who could possibly understand her predicament: Petra's ex, Miles.

As expected, it’s not a match made in heaven – that is until one night, while tossing back tequilas, they form a plan.

And if it involves posting deliberately misleading photos of their adventures together, well, who could blame them?

But it’s all just for show, of course.

Because there’s no way Daphne would start her new chapter by falling in love with her ex-fiancé’s new fiancée’s ex . . . right?




  </p>
    </div>

  </div>



     <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">This is Going to Hurt: Now a major BBC comedy-drama</h3>
      <h5 className="text-sm mt-2 flex justify-center items-center lg:justify-start gap-1">by <span className="underline">Adam Kay</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Now a new BBC series from Sister Pictures (Broadchurch, Flowers, Chernobyl) and AMC (The Walking Dead), and starring multi-award-winning actor Ben Whishaw. The multi-million copy bestseller and Book of the Year at The National Book Awards. ‘Painfully funny. The pain and the funniness somehow add up to something entirely good, entirely noble and entirely loveable.' - Stephen Fry Welcome to the life of a junior doctor: 97-hour weeks, life and death decisions, a constant tsunami of bodily fluids, and the hospital parking meter earns more than you. Scribbled in secret after endless days, sleepless nights and missed weekends, Adam Kay's This is Going to Hurt provides a no-holds-barred account of his time on the NHS front line. Hilarious, horrifying and heartbreaking, this diary is everything you wanted to know – and more than a few things you didn't – about life on and off the hospital ward. Sunday Times Number One Bestseller for over eight months and winner of a record FOUR National Book Awards: Book of the Year, Non-Fiction Book of the Year, New Writer of the Year and Zoe Ball Book Club Book of the Year. This edition includes an exclusive preface, extra diary entries and an afterword by the author.
 </p>
    </div>

    <div className="mt-15 lg:mt-0 flex items-center justify-center lg:items-start">
    <img src="https://m.media-amazon.com/images/I/81pdgVBQE1L._AC_UY436_FMwebp_QL65_.jpg" className="w-80 object-cover"/>
    </div>
  </div> 

 </div>


 <button onClick={genrespage} className="bg-[#A6D6D6] text-gray-900 block mx-auto p-2.5 rounded-full mt-30 hover:cursor-pointer hover:scale-105 transition-transform duration-300 text-xl font-serif">Genres Page</button>
 </div>



     
   </div>
      
    </div>
 }