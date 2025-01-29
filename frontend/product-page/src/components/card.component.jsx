import React from "react";
import "../App.css";

function CardComponent({item}) {
  const handleDelete =(id)=>{
    console.log(id);
    
  }
  const handleUpdate =(id)=>{
    console.log(id);
    
  }
  return (
    
    <div className="card">
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
        <button class="button del" onClick={()=>handleDelete(item.id)
        }>Delete</button>
        <br></br>
        <button class="button up" onClick={()=>handleUpdate}>Update</button>
      </div>
    </div>
  );
}

export default CardComponent;
