import React from "react";
import Card from "./Card";
import "./Main.css";
import { useEffect, useState } from "react";

const API_URL = "https://www.omdbapi.com/?apikey=ca21ac3d";

const Main = ({ searchResults }) => {
  const [contentArr, setContentArr] = useState([]);

  const fetchApidata = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Response === "True") {
      setContentArr(data.Search);
    } else {
      setContentArr([]);
    }

  };

  useEffect(() => {
    if (searchResults) {
      fetchApidata(searchResults);
    } else {
      fetchApidata("Black Panther")
    }
  }, [searchResults]);

  return (
    <main>
      {contentArr.map((content) => (
        <Card
          img={content.Poster}
          title={content.Title}
          period={content.Year}
          type={content.Type}
        />
      ))}
    </main>
  );
};


export default Main;
