import { useState } from "react"
import { useNavigate } from "react-router-dom"
 import axios from "axios"

 
//  async function login (email, password) {
//   const res = await fetch("http://localhost:3000/signin", {
//      method : "POST",
//      headers : {"Content-Type" : "application/json"},
//      credentials : "include",
//      body : JSON.stringify({email, password})
//   })
//   return res.json()
//  }


 async function login (email, password) {
  const res = await axios.post("http://localhost:3000/login", {
     email,
     password
  },
  { withCredentials: true }
)
  return res.data
 }
 
 
 
 
 export function Login () {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  async function handleSubmit (e) {
    e.preventDefault()

    try{

    const data = await login(
       email,
       password
    )

    console.log(data)

    if(data.message === "Login successful"){
       navigate("/")
    }else{
      alert(data.message || "login failed")
    }
  } catch(err){
      console.log("ERROR:", err.response?.data)
      alert(err.response?.data?.message || "Login Failed")
  }

  }






   return <div>


   <div className="mt-40  border-2 border-black w-110 p-5 place-self-center rounded-2xl">
      
  <div>
    <h1 className="text-4xl font-bold text-center">Log in</h1>

   <div>
    <form className="mt-10">

          <label htmlFor="email" className="text-xl ml-5">Email :</label> <br/>
        <input type="email" id="emailid" placeholder="abc@gmail.com" onChange={e => setEmail(e.target.value)} className="border-2 border-black p-1.5 w-90 mt-3 rounded-md ml-5"/>
           <br/> <br/>

         <label htmlFor="password" className="text-xl ml-5">Password :</label> <br/>
        <input type="password" id="password" placeholder="Dee123 or 12345" onChange={e => setPassword(e.target.value)} className="border-2 border-black p-1.5 w-90 mt-3 rounded-md ml-5"/>

    </form>
  
     <div className="place-self-center">
    <button type="submit" onClick={handleSubmit} className="mt-10 bg-black text-white p-2.5 rounded-2xl text-xl hover:cursor-pointer">Submit</button>
    </div>
   </div>

  </div>



  </div>



    </div>



    // </div>
 }