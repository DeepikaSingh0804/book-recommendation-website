import { useNavigate } from "react-router-dom"

 export function CrimeBook () {


 const navigate = useNavigate()


 function genrespage () {
  navigate("/genres")
 }






    return <div>
    <div className="text-2xl bg-white h-full w-full mt-20 p-5">

  <div>
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-center mt-5 sm:mt-7 md:mt-8 lg:mt-10">The best crime fiction books of all time...</h1>
        <p className="mt-7 text-xl font-light text-center mr-5 ml-5 lg:mr-40 lg:ml-40 xl:mr-60 xl:ml-60">From gentle detective stories to gritty true-to-life cases, our edit of the most exciting crime fiction will have you turning the pages late into the night.</p>
 </div>

 <div>
  <img src="https://www.novelsuspects.com/wp-content/uploads/2020/09/8-Books-That-Explore-Family-and-Crime.png" className="w-full p-1 lg:p-5 mt-15 lg:mt-5"/>
 </div>

 <div>
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-15 p-2 w-full">Crime / Thriller / Mystery</h2>

  <div className="xl:mr-15 xl:ml-15">

  <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-20 lg:mt-30 gap-10 lg:gap-40">
  <div className="flex items-center justify-center lg:justify-start lg:items-start">
    <img src="https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-285/edition/9781035046683.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Cut Throat Trial</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">The Secret Barrister</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">When an elderly teacher is murdered on New Year's Eve, the prosecution of three seventeen-year-old boys for the crime becomes the biggest trial of the year. Each boy denies it. Each points the finger at the other two – the 'cut-throat defence'. Each has their own barrister whose only job is to persuade the jury of the innocence of their client. But one of them must be guilty. And they’re up against a prosecutor who needs to win the case, no matter the cost.</p>
    </div>

  </div>



 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div className="">
      <h3 className="md:font-bold underline text-xl lg:text-2xl  text-center lg:text-start">This House of Burning Bones</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Stuart MacBride</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">It’s not going well for Aberdeen's NE Division: half the force is off sick, all leave has been cancelled, someone has firebombed a hotel full of migrants and there’s a massive protest march happening this Saturday. With officers dropping like flies, Detective Inspector Logan McRae has to kick off a major murder investigation with a skeleton staff of misfits, idiots and malingerers until the top brass can arrange back-up from other divisions. But, as bad as everything seems, things are about to get much, much worse.</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-285/edition/9781035064878.jpg" className="w-80 object-cover"/>
    </div>
  </div> 



    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-285/edition/9781035043095.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Killing Stones</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Ann Cleeves</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Coming in October: a new standalone novel featuring Detective Jimmy Perez, last seen in Wild Fire, the final book in Ann Cleeves’ bestselling Shetland series. When a violent storm descends upon Orkney, the body of Archie Stout is left in its wake. An unusual murder weapon, a Neolithic stone bearing ancient inscriptions, is found discarded nearby. Detective Jimmy Perez, no stranger to the complexity of human nature and the darkness it can harbour, is soon on the scene. He counted Archie as a childhood friend, so this case is more personal than most. Here, in these ancient lands where history runs deep, Perez must discern the truth from legend before a desperate killer strikes again . . .</p>
    </div>

  </div>




 <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Hawk Is Dead</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline">Peter James</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Roy Grace would never have believed that a murder investigation would take him into Buckingham Palace. Her Majesty, Queen Camilla, is aboard the Royal Train heading to a charity event in Sussex when disaster strikes – the train is derailed, and a trusted aide is killed by a sniper. Grace alone is not convinced The Queen was the intended target – but no-one else agrees. Fighting against the scepticism of his colleagues and the Palace itself, Grace pursues his own investigation. But when there is a second murder, the stakes rise even higher, and Grace is at risk of being embroiled in a very public catastrophe – and in mortal danger.</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-285/edition/9781529090062.jpg" className="w-80 object-cover"/>
    </div>
  </div> 




 
    <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-285/edition/9781035021772.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Antique Hunter's: Death on the Red Sea</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> C L Miller</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">The follow up to The Antique Hunter's Guide to Murder takes us on a glamorous antiques cruise sailing toward the Red Sea in Jordan on the hunt for a stolen painting. The chase soon turns deadly when the newly established Lockwood Antique Hunter’s Agency learn that the enigmatic and dangerous art trafficker named The Collector could be on board. But on a ship full of antiques enthusiasts – plus some unexpected familiar faces – will Freya and Carole be able to discover The Collector’s identity and stop his murderous plans before the ship docks?</p>
    </div>

  </div>



  <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">One Wrong Turn</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> C. M. Ewan</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Abi and Ben's late-night drive home takes a terrifying twist when they encounter a stranded family on a dark, isolated road. Despite Abi's instincts telling her to keep driving, she hesitates when she sees a mother with a baby. Against her better judgment, they offer the strangers a lift. But soon, Abi and Ben realize that this might be the worst mistake they’ve ever made. As tension mounts, they’re plunged into a nightmarish scenario with dangerous consequences. This is the latest heart-pounding thriller from C. M. Ewan for fans of gripping, high-stakes suspense.</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-285/edition/9781035042944.jpg" className="w-80 object-cover"/>
    </div>
  </div> 


     <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-285/edition/9781035038879.jpg" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Darling Girls</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Sally Hepworth</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">Jessica, Norah, and Alicia were always told how fortunate they were – rescued from family tragedies and raised by a loving foster mother on the idyllic Wild Meadows estate. But their childhood wasn’t as perfect as it seemed. When a body is discovered beneath their former home, the sisters are thrust into the spotlight as key witnesses. Returning to Wild Meadows, they must confront their pasts and the dark secrets that could implicate them. Are they innocent victims or prime suspects? Full of twists, Darling Girls is a darkly comic and thrilling page-turner from Sally Hepworth.</p>
    </div>

  </div>



    <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">Good Bad Girl</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Alice Feeney</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">In a tale of intertwining crimes, a baby's abduction two decades ago connects to a murder in a care home. Unravelling the truth rests on the shoulders of a complex yet intriguing character, the 'good bad girl.' Edith, determined to escape her nursing home, forms a bond with Patience, a caretaker harbouring secrets. Meanwhile, Edith's daughter Clio remains distant, and a looming presence approaches Clio's doorstep with ill intentions. With mistrust brewing, the women must navigate a web of suspects, murders, and a singular victim, unearthing the fates of the vanished baby, the grieving mother, and the ties that bind them all.</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-285/edition/9781529090284.jpg" className="w-80 object-cover"/>
    </div>
  </div> 



       <div className="m-4 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 gap-10 lg:gap-40">
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://ik.imagekit.io/panmac/tr:w-740,pr-true,f-auto//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/c18c75aa-e1d6-496c-9a09-83a4bd907bd9/81N-xC3Se6L.jpg?w=540&h=830&auto=format&bg=%23efefef&fit=crop" className="w-80 object-cover"/>
    </div>
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Decagon House Murders</h3>
      <h5 className="text-sm mt-2 text-center lg:text-start gap-1">by <span className="underline"> Yukito Ayatsuji</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">A Japanese cult classic, Ayatsuji's murder mystery puzzle will delight fans of classic whodunnits. Tsunojima is a desolate, rocky island known for a series of gruesome and unsolved murders – the perfect choice for the K-University Mystery Club's annual trip. But after a club member turns up dead, the Mystery Club realise they might have taken on more than their amateur sleuthing skills can handle. Will any of the survivors deduce the murderer's horrific plan before it's too late?</p>
    </div>

  </div>



     <div className="m-0 lg:m-15 grid lg:grid-cols-2 mt-30 lg:mt-40 lg:gap-20 xl:gap-60 w-full">
    
    <div>
      <h3 className="md:font-bold underline text-xl lg:text-2xl text-center lg:text-start">The Shape of Water</h3>
      <h5 className="text-sm mt-2 flex justify-center items-center lg:justify-start gap-1">by <span className="underline">Andrea Camilleri</span></h5>
      <p className="mt-7 text-lg lg:text-xl text-justify ml-5 mr-5  md:ml-15 md:mr-15 lg:mr-0 lg:ml-0">Escape the winter chill and step into the sun-soaked Sicilian setting of Andrea Camilleri’s brilliantly witty Inspector Montalbano series. The Shape of Water introduces Camilleri’s beloved sleuth as he investigates the mysterious death of a respected and brilliant engineer, whose unexpected death his colleagues are all too ready to declare as due to natural causes. With its corrupt politicians, red herrings and the island’s ever-present mobsters, The Shape of Water is escapist crime writing at its page-turning best.</p>
    </div>

    <div className="mt-15 lg:mt-0  flex items-center justify-center lg:items-start">
    <img src="https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-285/edition/9781529042023.jpg" className="w-80 object-cover"/>
    </div>
  </div> 

 </div>


 <button onClick={genrespage} className="bg-black text-white block mx-auto p-2.5 rounded-full mt-30 hover:cursor-pointer hover:scale-105 transition-transform duration-300 text-xl font-serif">Genres Page</button>


 </div>
     
   </div>
      
    </div>
 }