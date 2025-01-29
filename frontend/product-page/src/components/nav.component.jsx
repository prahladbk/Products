import React from "react";
import "../App.css";
import AlertDialog from "./form.component";

function NavBar() {
  return (
    <div className="nav">
      <p>Product Page</p>
      {/* <button
        className="addBtn button up"
        onClick={() => {
          console.log("Btn clicked.");
        }}
      >
        + Add Product
      </button> */}
      <AlertDialog/>
    </div>
  );
}

export default NavBar;
