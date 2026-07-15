
 import { useState } from "react"
 import { useNavigate } from "react-router-dom"
 import axios from "axios"


//  async function signup (firstname, lastname, email, password) {
//     const res = await fetch("http://localhost:3000/signup", {
//        method : "POST",
//        headers : {"Content-Type" : "application/json"},
//        credentials : "include",
//        body : JSON.stringify({firstname, lastname, email, password})
//     })
//     return res.json()
//  }


  async function signup (firstname, lastname, email, password) {
  const res = await axios.post("http://localhost:3000/signup", {
    firstname, 
    lastname,
     email,
     password
  },
  { withCredentials: true }
)
  return res.data
 }
 
 
 
 
 
 
 
 export function Signup() {

  const navigate = useNavigate()

   const [firstname, setFirstname] = useState("")
   const [lastname, setLastname] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")


  async function handleSignup (e) {
    e.preventDefault()

    if(!email.includes("@") || !email.includes(".")){
      alert("Please enter a valid Gmail id")
      return
    } 



    try{

   const data = await signup (
      firstname,
      lastname,
      email,
      password
    )

  console.log(data)

  navigate("/auth/login")

  } catch(err){
      console.log("ERROR:", err.response?.data)
      alert(err.response?.data?.message || "Signup failed")
  }

   }






    return <div>


  <div className="mt-40  border-2 border-black w-110 p-5 place-self-center rounded-2xl">
      
  <div>
    <h1 className="text-4xl font-bold text-center">Sign up </h1>

   {/* <div> */}

     <form className="mt-10" onSubmit={handleSignup}>

        <label htmlFor="firstname" className="text-xl ml-5">First Name :</label> <br/>
        <input type="text" required id="firstname" placeholder="Deepika" onChange={(e) => setFirstname(e.target.value)} className="border-2 border-black p-1.5 w-90 mt-3 rounded-md ml-5"/>
         <br/> <br/>

        <label htmlFor="lastname" className="text-xl ml-5">Last Name :</label> <br/>
        <input type="text" required id="lastname" placeholder="Singh" onChange={(e) => setLastname(e.target.value)} className="border-2 border-black p-1.5 w-90 mt-3 rounded-md ml-5"/>
         <br/> <br/>

          <label htmlFor="email" className="text-xl ml-5">Email :</label> <br/>
        <input type="email" required id="emailid" placeholder="abc@gmail.com" onChange={(e) => setEmail(e.target.value)}  className="border-2 border-black p-1.5 w-90 mt-3 rounded-md ml-5"/>
           <br/> <br/>

         <label htmlFor="password" className="text-xl ml-5">Password :</label> <br/>
        <input type="text" required id="password" placeholder="Dee123 or 12345" onChange={(e) => setPassword(e.target.value)} className="border-2 border-black p-1.5 w-90 mt-3 rounded-md ml-5"/>

    {/* </form> */}
  
     <div className="place-self-center">
    <button type="submit" className="mt-10 bg-black text-white p-2.5 rounded-2xl text-xl hover:cursor-pointer">Submit</button>
    </div>


      </form>
   </div>

  </div>
 {/* </div> */}

  

    </div>
 }