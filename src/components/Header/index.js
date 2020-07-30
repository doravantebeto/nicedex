import React from 'react';
import { Link } from 'react-router-dom'

const Header = () =>
  <header>

    <h1>Nicedex</h1>

    <nav>
      <Link to="/">
        <button>Pokédex</button>
      </Link>

      <Link to="/favorites">
        <button>Favorites</button>
      </Link>
    </nav>
  </header>

export default Header;