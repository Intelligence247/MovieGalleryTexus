import React, { useState } from "react";
import "./Header.css";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <header>
      <div className="find">
        <h1>Find your film</h1>
        <p>My Watchlist</p>
      </div>

      <div className="inputs">
        <img src="/media/serchicon.png" alt="" />
        <input
          type="text"
          placeholder="Input something to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="saka"></div>
    </header>
  );
};

export default Header;
