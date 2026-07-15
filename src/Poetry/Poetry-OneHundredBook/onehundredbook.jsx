   import { useNavigate } from "react-router-dom"
 
 
 export function OneHundredBook() {

      const navigate = useNavigate()

    function poetrybook () {
        navigate("/collections/poetry")
    }




    return <div>

 <div className="w-full h-full mt-35 md:mt-40 xl:mt-30">

  <div>
    <div className="lg:m-10 p-5">
        <h1 className="p-3 lg:p-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center underline underline-offset-4 font-bold">About This Book</h1>
    </div>
 </div>



 <div className="rounded-xl m-1 lg:m-10 grid lg:grid-cols-2 gap-10 lg:gap-20 xl:gap-40 mt-5 lg:mt-20 p-5">

      
  <div className="flex justify-center items-center lg:justify-start lg:items-start">
    <img src="https://m.media-amazon.com/images/I/71Bqb2mKNoL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">One Hundred Poems OF Kabir</h2>
    <h3 className="text-center lg:text-start mt-1">Translated by Rabindranath Tagore</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
    Kabīr was a mystic poet and saint of India, whose writings have greatly influenced the Bhakti movement. The name Kabir comes from Arabic al-Kabīr which means "The Great" – the 37th name of God in Islam. Kabir's legacy is today carried forward by the Kabir panth ("Path of Kabir"), a religious community that recognises him as its founder and is one of the Sant Mat sects. Its members, known as Kabir panthis, are estimated to be around 9.6 million. They are spread over north and central India, as well as dispersed with the Indian diaspora across the world, up from 843,171 in the 1901 census.[5] His writings include Bijak, Sakhi Granth, Kabir Granthawali and Anurag Sagar.
    According to one traditional version of his parentage, Kabir was born to a Brahmin widow at Lahartara near Kashi (modern day Varanasi). The widow abandoned Kabir to escape dishonour associated with births outside marriage. He was brought up in a family of poor Muslim weavers Niru and Nima. They could not afford formal education for Kabir and initiated him into their trade of weaving.According to American Indologist Wendy Doniger, Kabir was born into a Muslim family and "all these stories attempt to drag Kabir back over the line from Muslim to Hindu".Kabir's family is believed to have lived in the locality of Kabir Chaura in Varanasi. Kabīr maṭha (कबीरमठ), a maṭha located in the back alleys of Kabir Chaura, celebrates his life and times.




    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={poetrybook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }