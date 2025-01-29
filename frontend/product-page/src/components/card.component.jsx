import React from "react";
import "../App.css";

function CardComponent() {
  return (
    <div className="card">
        {/* <div className="image"> */}
      <img
        src="https://images.unsplash.com/photo-1736580602800-0d455b2d4b49?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="img"
      />
      {/* </div> */}
      <div className="card-container">
        <h4>
          <b>Iphone</b>
        <p>$1999</p>
        </h4>
        <br></br>
        <button class="button del">Delete</button>
        <br></br>
        <button class="button up">Update</button>
      </div>
    </div>
  );
}

export default CardComponent;
