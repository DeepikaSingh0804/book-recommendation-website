   import { useNavigate } from "react-router-dom"
 
 
 export function AttitudeIsEverything () {

      const navigate = useNavigate()

    function personalitybook () {
        navigate("/collections/personality")
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
    <img src="https://m.media-amazon.com/images/I/61go3pwTLYL._AC_UY436_FMwebp_QL65_.jpg" className="w-110 p-2 lg:p-5"/>
  </div>
  <div className="lg:p-5">
    <h2 className="text-3xl font-bold underline underline-offset-3 text-center lg:text-start">Attitude Is Everything</h2>
    <h3 className="text-center lg:text-start mt-1">By Jeff Keller</h3>
    <p className="mt-10 text-xl text-justify font-stretch-120% font-serif mr-3 ml-3 sm:mr-10 sm:ml-10 lg:mr-0 lg:ml-0">
        Do you dread going to work? Do you feel tired, unhappy, weighed down? Have you given up on your dreams? The road to a happier, more successful life starts with your attitude-and your attitude is within your control. Whether your outlook is negative, positive or somewhere in between, Jeff Keller, motivational speaker and coach, will show you how to take control and unleash your hidden potential through three powerful steps: -THINK! Success begins in the mind. The power of attitude can change your destiny. -SPEAK! Watch your words. How you speak can propel you towards your goals. -ACT! Don't sit back. Take active steps to turn your dreams into reality. Soon, you will be energized and see new possibilities. You will be able to counter adversities and develop talents unique to you. Your relationships will improve, both at work and in your personal life. All you need is this step-by-step programme to change your attitude and your life!

    </p>
  </div>


 </div>


 <div className="p-20">
    <button onClick={personalitybook} className="bg-black text-white p-4 rounded-full block mx-auto text-xl  hover:cursor-pointer hover:scale-105 transition-transform duration-300">Browse Books</button>
 </div>

 </div>





    </div>
 }