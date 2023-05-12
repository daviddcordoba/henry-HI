import React from 'react';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';

const NavBar = ({onSearch}) => {
  return (
    <div>
      <SearchBar onSearch={onSearch}></SearchBar>
      <button>
        <Link to={'/about'}>About</Link>
      </button>
      <button>
        <Link to={'/home'}>Home</Link>
      </button>
      <button>
        <Link to={'/favorites'}>Favorites</Link>
      </button>
      </div>
  )
}

export default NavBar;
