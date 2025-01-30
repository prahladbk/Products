import React, { useState } from "react";
import "../App.css";
import AlertDialog from "./form.component";
import Button from '@mui/material/Button';

function NavBar() {

  const [open,setOpen]= useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
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
      <Button variant="contained" onClick={handleClickOpen}>
        + Add Product
      </Button>
      <AlertDialog open ={open} setOpen={setOpen}/>
    </div>
  );
}

export default NavBar;
