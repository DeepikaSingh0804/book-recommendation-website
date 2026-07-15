 import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiMenu, FiX, FiGrid, FiBookOpen, FiUsers, FiInfo, FiUserPlus, FiHome,  FiSearch  } from "react-icons/fi";

 export function Header(){
     const navigate = useNavigate()

     const [menuOpen, setMenuOpen] = useState(false);
     const [showIcon, setShowIcon] = useState(false)

 function homePage() {
    navigate("/")
 }

  function genresPage() {
     navigate("/genres")
  }

  function author () {
    navigate("/authors")
  }

    function about () {
    navigate("/about")
  }


    function signup () {
    navigate("/auth/signup")
  }


      function login () {
    navigate("/auth/login")
  }










  
 function searchBtn() {
  // const inputValue = document.getElementById("search").value.trim().toLowerCase();
   const input = document.getElementById("search");
  const inputValue = input.value.trim().toLowerCase();

  const routes = {
    crime : "/genres/crimebooks",
    crimebooks : "/genres/crimebooks",
    romantic : "/genres/romantic-books",
    romanticbooks : "/genres/romantic-books",
    horror : "/genres/horror-books",
    horrorbooks : "/genres/horror-books",
    thriller : "/genres/thriller-books",
    thrillerbooks : "/genres/thriller-books",
    fantacy : "/genres/fantacy-books",
    fantacybooks : "/genres/fantacy-books",
    adventure : "/genres/adventure-books",
    adventurebooks : "/genres/adventure-books",
    fairy : "/genres/fairy-tale-books",
    fairytales : "/genres/fairy-tale-books",
    fairytalesbooks : "/genres/fairy-tale-books",
    science : "/genres/science-fiction-books",
    sciencefiction : "/genres/science-fiction-books",
    sciencefictionbooks : "/genres/science-fiction-books",
    women : "/genres/women-fiction-books",
    womenfiction : "/genres/women-fiction-books",
    womenfictionbooks : "/genres/women-fiction-books",
    shortstory : "/genres/short-stories-books",
    shortstories : "/genres/short-stories-books",
    shortstoriesbooks : "/genres/short-stories-books",
    war : "/genres/war-books",
    warbooks : "/genres/war-books",
    autobiography : "/genres/autobiography-books",
    autobiographybooks : "/genres/autobiography-books",
    essay : "/genres/essay-books",
    essaybooks : "/genres/essay-books",
    selfhelp : "/genres/self-help-books",
    selfhelpbooks : "/genres/self-help-books",
    poetry : "/genres/poetry-books",
    poetrybooks : "/genres/poetry-books",
    action : "/genres/action-books",
    actionbooks : "/genres/action-books",
    spiritual : "/genres/spiritual-books",
    spiritualbooks : "/genres/spiritual-books",
    mythological : "/genres/mythological-books",
    mythologicalbooks : "/genres/mythological-books",
    sanatan : "/genres/sanatan-books",
    sanatanbooks : "/genres/sanatan-books",
    comedy : "/genres/comedy-books",
    comedybooks : "/genres/comedy-books",
  }

  if(routes[inputValue]){
    navigate(routes[inputValue])
    input.value = ""
  }else {
     alert("No matching category found 😅");
   }

  // if (inputValue === "crimebooks" || inputValue === "crime") {
  //   // Navigate to crime books landing page
  //   // window.location.href = "/genres/crimebooks"; 
  //   navigate("/genres/crimebooks")
  // } else {
  //   alert("No matching category found 😅");
  // }

 }







 
return <div>
<div className="fixed top-0 left-0 z-50 w-full bg-[#020617] border-b border-slate-800 shadow-lg">
    <div className="max-w-7xl mx-auto px-4">

      <div className="flex items-center justify-between h-16">

        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            src="https://media.istockphoto.com/id/1299822999/vector/book-lover-hand-drawn-lettering-heart-signs-and-open-book-doodle-style-elements-flat-vector.jpg?s=612x612&w=0&k=20&c=B5kXCP6gcmXOrfrvLBc6S4112FmRyWe-nwd5IPm3mtw="
            alt="Book Lovers"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
        </div>

        {/* Search */}
        <div className="block relative">
          <input
            id="search"
            type="search"
            placeholder="Search"
            className="w-50 sm:w-56 md:w-64 lg:w-72 pl-4 pr-20 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-blue-500 outline-none"
          />

          <button
            type="button"
            onClick={searchBtn}
            className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white text-sm mt-0.5"
          >
            Search
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-white font-medium">
          <div onClick={homePage} className="cursor-pointer hover:text-blue-400 transition">
            Home
          </div>

          <div onClick={genresPage} className="cursor-pointer hover:text-blue-400 transition">
            Genres
          </div>

          <div onClick={author} className="cursor-pointer hover:text-blue-400 transition">
            Authors
          </div>

          <div onClick={about} className="cursor-pointer hover:text-blue-400 transition">
            About
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-3 mr-8">
          <button
            onClick={login}
            className="text-white hover:text-blue-400 transition"
          >
            Login
          </button>

          <button
            onClick={signup}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white"
          >
            Signup
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden text-white text-3xl cursor-pointer relative right-5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-4 py-4 text-white border-t border-slate-800">

          <div onClick={homePage} className="cursor-pointer hover:text-blue-400">
            Home
          </div>

          <div onClick={genresPage} className="cursor-pointer hover:text-blue-400">
            Genres
          </div>

          <div onClick={author} className="cursor-pointer hover:text-blue-400">
            Authors
          </div>

          <div onClick={about} className="cursor-pointer hover:text-blue-400">
            About
          </div>

          <div onClick={login} className="cursor-pointer hover:text-blue-400">
            Login
          </div>

          <div onClick={signup} className="cursor-pointer hover:text-blue-400">
            Signup
          </div>

        </div>
      )}

    </div>
  </div>
    </div>
 }