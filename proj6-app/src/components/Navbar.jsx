import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>

      <nav className='nav'>
        {/* <Link to="/">Home</Link> */}
        <Link className='link' to="/anime-fact-1">Anime Fact 1</Link>
        <Link className='link' to="/anime-fact-2">Anime Fact 2</Link>
        <Link className='link' to="/anime-fact-3">Anime Fact 3</Link>
        <Link className='link' to="/anime-fact-4">Anime Fact 4</Link>
        <Link className='link' to="/anime-fact-5">Anime Fact 5</Link>
      </nav>
    </header>
  )
}

export default Navbar;