import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import { animePics } from "./animePics"
import Navbar from "./Components/Navbar.jsx";
import "./App.css";
import Anime from "./components/Anime.jsx";

function App() {

  const [animes, setAnimes] = useState([])

  let getAnimes = async () => {
    let data = await axios("https://anime-facts-rest-api.herokuapp.com/api/v1/")
    localStorage.setItem('animes', JSON.stringify(data.data))
    setAnimes(data.data)
  }

  useEffect(() => {
    getAnimes()
  }, [])


  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<h2>Cat Facts!</h2>} /> */}
        <Route path="/anime-fact-1" element={<Anime index={0} animes={animes} animePic={animePics[0]} num={1} />} />
        <Route path="/anime-fact-2" element={<Anime index={1} animes={animes} animePic={animePics[1]} num={2} />} />
        <Route path="/anime-fact-3" element={<Anime index={2} animes={animes} animePic={animePics[2]} num={3} />} />
        <Route path="/anime-fact-4" element={<Anime index={3} animes={animes} animePic={animePics[3]} num={4} />} />
        <Route path="/anime-fact-5" element={<Anime index={4} animes={animes} animePic={animePics[4]} num={5} />} />
      </Routes>
    </div>
  );
}


export default App;