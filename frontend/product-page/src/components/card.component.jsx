import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import AlertDialog from "./form.component";

function CardComponent({item,setPdt}) {

  const [open,setOpen] = useState(false)
  const [initial,setInitial] =useState();
  const handleDelete =(id)=>{
    console.log(id);
    axios.delete(`http://localhost:5500/api/products/${id}`)
    axios
      .get("http://localhost:5500/api/products")
      .then((response) => setPdt(response.data.data))
      .catch((error) => console.error(error));
  }
  const handleUpdate =(id)=>{
    console.log(id);
    setInitial(item)
    setOpen(true)
  }
  return (
    
    <div className="card">
      <AlertDialog initial={initial} open={open} setOpen={setOpen}/>
        {/* <div className="image"> */}
      <img
        src={item?.image}
        alt="img"
      />
      {/* </div> */}
      <div className="card-container">
        <h4>
          <b>{item?.name}</b>
        <p>{`$${item.price}`}</p>
        </h4>
        <br></br>
        <button class="button del" onClick={()=>handleDelete(item._id)
        }>Delete</button>
        <br></br>
        <button class="button up" onClick={()=>handleUpdate(item._id)}>Update</button>
      </div>
    </div>
  );
}

export default CardComponent;
