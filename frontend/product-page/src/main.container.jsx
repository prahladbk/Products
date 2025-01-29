import React from "react";
import NavBar from "./components/nav.component";
import CardComponent from "./components/card.component";
import "./App.css";
import AlertDialog from "./components/form.component";

function MainContainer() {
  return (
    <div>
      <NavBar />
      <div className="card-main">
        <CardComponent />
      </div>
    </div>
  );
}

export default MainContainer;
