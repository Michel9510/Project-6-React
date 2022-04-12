import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>

      <nav className='nav'>
        {/* <Link to="/">Home</Link> */}
        <Link className='link' to="/anime-1">Anime1</Link>
        <Link className='link' to="/anime-2">Anime2</Link>
        <Link className='link' to="/anime-3">Anime3</Link>
        <Link className='link' to="/anime-4">Anime4</Link>
        <Link className='link' to="/anime-5">Anime5</Link>
      </nav>
    </header>
  )
}

export default Navbar;