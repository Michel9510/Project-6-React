import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>

      <nav className='nav'>
        {/* <Link to="/">Home</Link> */}
        <Link className='link' to="/anime-1">Bleach</Link>
        <Link className='link' to="/anime-2">Black Glover</Link>
        <Link className='link' to="/anime-3">Dragon Ball Z</Link>
        <Link className='link' to="/anime-4">One Piece</Link>
        <Link className='link' to="/anime-5">Hunter x Hunter</Link>
      </nav>
    </header>
  )
}

export default Navbar;