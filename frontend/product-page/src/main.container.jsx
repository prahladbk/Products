import React, { useEffect, useState } from "react";
import NavBar from "./components/nav.component";
import CardComponent from "./components/card.component";
import "./App.css";
import axios from "axios";

function MainContainer() {
  const [pdt, setPdt] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5500/api/products")
      .then((response) => setPdt(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="card-main">
        {pdt.map((item)=>
        
        <CardComponent item = {item}/>
      )

        }
      </div>
    </div>
  );
}

export default MainContainer;
