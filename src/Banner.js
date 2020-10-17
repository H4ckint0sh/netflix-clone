import React, { useState, useEffect } from "react";

// components
import requests from "./requests";
import axios from "./axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <header 
      className="banner"
      style={
        
      }
    >
      <div className="banner__content">
        <h1></h1>
      </div>
    </header>
  );
}

export default Banner;
