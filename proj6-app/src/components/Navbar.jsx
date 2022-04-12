import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>

      <nav className='nav'>
        {/* <Link to="/">Home</Link> */}
        <Link className='link' to="/anime-fact-1">Anime1</Link>
        <Link className='link' to="/anime-fact-2">Anime2</Link>
        <Link className='link' to="/anime-fact-3">Anime3</Link>
        <Link className='link' to="/anime-fact-4">Anime4</Link>
        <Link className='link' to="/anime-fact-5">Anime5</Link>
      </nav>
    </header>
  )
}

export default Navbar;