import React, {useState, useEffect} from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import List from "./List";

function App() {
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true
  });

  useEffect(() => {
    async function loadDogs() {
      const res = await axios.get("http://localhost:3000/dogs")
      setDogs({
        data: res.data,
        isLoading: False
      })
      loadDogs();
    }
  },[]);

  return (
    <div>
      <h1>Hello Friend!</h1>
      <BrowserRouter>
      <NavBar dogs={dogs.data} />
      <div className="container">
        <List dogs={dogs.data} />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
