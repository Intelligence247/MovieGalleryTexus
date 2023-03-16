import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useState } from "react";

const App = () => {
  const [searchResults, setSearchResults] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchResults(searchTerm);
  };


  return (
    <div className="body">
      <Header onSearch={handleSearch}  />
      <Main searchResults={searchResults} />
    </div>
  );
};

export default App;

// https://www.figma.com/file/jhFRdFIdHpRxsDznNXtpXw/Watchlist-Creator?node-id=2%3A17
