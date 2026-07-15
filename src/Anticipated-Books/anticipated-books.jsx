import { useNavigate } from "react-router-dom"


 export function Anticipated () {

  const navigate = useNavigate()

  function homepage () {
    navigate("/")
  }




    return <div>


       <div className="text-2xl bg-white h-full w-full mt-20 p-5">

  <div className="bg-pink-300 p-5 rounded-4xl m-1 border md:mt-12 xl:mt-5 flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-center mt-5 sm:mt-7 md:mt-8 lg:mt-10">Most Anticipated Books...</h1>
        <p className="mt-7 text-2xl  text-center mr-10 ml-10 lg:mr-60 lg:ml-60">Countdown to your next obsession.</p>
 </div>

 <div>
  <img src="https://images.gr-assets.com/misc/1766018675-1766018675_goodreads_misc.png" className="w-full p-1 lg:p-5 mt-15 lg:mt-5 rounded-3xl lg:rounded-4xl"/>
 </div>

 <div>
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-15 ml-10 p-2 w-full italic text-pink-700 underline decoration-pink-700">Anticipated Books</h2>

  <div className="xl:mr-15 xl:ml-15">

  <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-20 lg:mt-30 gap-10 lg:gap-40">
  <div className="flex items-center justify-center lg:justify-start lg:items-start">
    <img src="https://www.crossword.in/cdn/shop/files/TooGoodToBeTrueHBedition.jpg?v=1769233813" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Too Good To Be True</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Prajakta Koli</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Avani, a romance-loving law student and part-time bookstore employee, has made peace with the idea that real life doesn’t offer swoon-worthy, slow-burn romances like her beloved novels. Until Aman walks in. He’s practically book boyfriend material — handsome, accomplished, and uncannily attuned to her every word. As sparks fly, so do the doubts. Avani finds herself second-guessing everything — is this real, or just too good to be true?</p>
    </div>

  </div>



 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div className="">
      <h3 className="md:font-bold underline text-xl lg:text-2xl  text-center lg:text-start">Winning People Without Losing Yourself</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Ankur Warikoo</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5   md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">
Growing up, I believed life was about skills and degrees.
Until I entered the real world and realized something uncomfortable.
My skills mattered far less than my ability to deal with people.
Somewhere along the way, I was simply tired.
Of trying to make it work with people.
I was struggling to answer: How do you deal
with people without losing yourself?
Most books teach you how to manage your
mind. Very few teach you how to navigate other humans. This one does.</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://cdn.penguin.co.in/wp-content/uploads/2026/03/9780670099832.jpg" className="w-80 object-cover"/>
    </div>
  </div> 



    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://www.crossword.in/cdn/shop/files/81r-29aK4yL._SL1500.jpg?v=1767333022" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Two Can Play</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Ali Hazelwood</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Viola Bowen has the chance of a lifetime: to design a video game based on her all-time favorite book series. The only problem? Her colead is Jesse F-ing Andrews, aka her archnemesis. Jesse has made it abundantly clear over the years that he wants nothing to do with her–and Viola has no idea why.

  When their bosses insist a wintery retreat is the perfect team-building exercise, Viola can’t think of anything worse. Being freezing cold in a remote mountain lodge knowing Jesse is right next door? No, thank you.

   But as the snow piles on, Viola discovers there’s more to Jesse than she knew, and heat builds in more ways than one.</p>
    </div>

  </div>




 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">All This Light</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Ashish Bagrecha</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">In a world where darkness creeps into every corner of our lives, I am writing about light-not because it’s always visible, but because we desperately need it. In a society that’s losing hope, I am striking matches in the dark to show that light still matters, that it’s still worth searching for. They say we’re lost in the shadows, but this book is proof that light isn’t just a distant dream-it’s the spark that keeps us going.
      So here it is-my flashlight in your hands, a reminder that all this light” is exactly what we need to find our way back to ourselves.</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://www.crossword.in/cdn/shop/files/AllThisLight_F.jpg?v=1769157523" className="w-80 object-cover"/>
    </div>
  </div> 




 
    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://cdn.penguin.co.in/wp-content/uploads/2026/02/9780143429371.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Half Of Forever</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Ravinder Singh</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">We spend our lives searching for forever
 believing it must arrive whole and uninterrupted . . .

 But what if forever is not measured in time, but in depth? What if forever is not always something we arrive at, but something we get to touch?

 A few chance meetings draw Ravin and Heer into each other’s orbits. What begins as an unplanned crossing of lives slowly grows into something neither of them intended. However, they must now decide what the future holds for them—because love, this time, comes at a heavy cost.</p>
    </div>

  </div>



  <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Hot Chocolate On Thursday</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Michiko Aoyama</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Across a bridge in a quiet neighborhood in Tokyo, a seasonal cherry blossom sits on the river. Nearby is the Marble Cafe, where a woman writes in a notebook and a young waiter prepares her favorite hot drink. Both wonder about each other and about the other lives of the clientele who frequent this charming little cafe behind the trees...</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://www.crossword.in/cdn/shop/files/91pfUq9H2DL._SL1500.jpg?v=1767333031" className="w-80 object-cover"/>
    </div>
  </div> 


     <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://www.crossword.in/cdn/shop/files/81RyXZxUanL._SL1500.jpg?v=1766293824" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Blood & Roses Volume 1</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Callie Hart</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">As one of Seattle's most dangerous, feared men, Zeth Mayfair always carried out the jobs he was sent on without a second thought. Drugs? Guns? Dirty money? All fair game. But even his warped moral code has its limits. When Zeth's employer decides buying and selling kidnapped women is a lucrative sideline, Zeth's usually uncomplicated life suddenly becomes very complicated indeed. And his biggest complication goes by the name of Sloane Romera.</p>
    </div>

  </div>



    <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Supreme Gift</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Paulo Coelho</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Contrary to what we are used to hearing, the greatest treasure in the spiritual life is not faith, but love. No matter what your religious beliefs are, this feeling is, without doubt, the most rewarding way to live. In The Supreme Gift, Paulo Coelho adapts Henry Drummond’s text, offering a real and powerful message that will help us incorporate love into our daily life and experience all its transformational power in our lives.</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://www.crossword.in/cdn/shop/files/81ooN5Zz_KL._SL1500.jpg?v=1767778133" className="w-80 object-cover"/>
    </div>
  </div> 



       <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://www.crossword.in/cdn/shop/files/71mJQtwNibL._SL1500.jpg?v=1767786494" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Hooked</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Asako Yuzuki</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Eriko's life appears perfect – devoted parents, pristine apartment and a high-flying job in the seafood division of one of Japan's largest trading companies. Her latest project, to reintroduce the controversial Nile perch fish into the Japanese market, is characteristically ambitious. But beneath her flawless surface she is wracked by loneliness.
      Eriko becomes fascinated with a popular blog written by a housewife, Shōko. Shōko’s posts about eating convenience-store food and her untidy home are the opposite of the typical Japanese housewife’s manicured lifestyle. When Eriko tracks Shōko down at her favourite restaurant and befriends her, Shōko is at first charmed by her new companion. But soon Eriko's obsession with Shōko begins to spiral out of control, threatening her carefully laid plans. How far will she go to hold on to the best friend she’s ever had?

</p>
    </div>

  </div>



     <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Before I Knew I Loved You</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Toshikazu Kawaguchi</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">The man who waited for a reply from his girlfriend, and never heard from her
    - The woman anxious to travel ahead to know what her future holds
    - The student who travels back to meet his father again, who passed away many years before.

     Yet the same rules always apply – you must return before the coffee gets cold. And while it does, memories are revisited, people are changed forever, and the enduring power of love transcends the boundaries of time.</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://www.crossword.in/cdn/shop/files/81AWcSLd_dL._SL1500.jpg?v=1763453021" className="w-80 object-cover"/>
    </div>
  </div> 

 </div>


 <div className="mt-25 p-10">
  <button onClick={homepage} className="bg-pink-600 block mx-auto p-3 rounded-full text-pink-50 hover: cursor-pointer text-xl hover:bg-amber-950">Home Page</button>
 </div>


 </div>
     
   </div>
    </div>
 }