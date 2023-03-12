import React from 'react'

const Header = () => {
  return (
    <header>
    <div className="find">
        <h1>Find your film</h1>
        <p>My Watchlist</p>
        </div>

        <div className="inputs">
          <img src="/media/serchicon.png" alt="" />
          <input type="text" placeholder="Input something to search..."/>
          <button>Search</button>
        </div>

        <div className="saka"></div>
        </header>
  )
}

export default Header