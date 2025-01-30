import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import "../App.css"
import axios from 'axios';

export default function AlertDialog({initial,open,setOpen,setPdt}) {
  // const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [img, setImg] = React.useState("");

  React.useEffect(()=>{
    if(initial){
      setImg(initial.image)
      setName(initial.name)
      setPrice(initial.price)
    }
  },[initial])

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(initial){
      axios.put(`http://localhost:5500/api/products/${initial._id}`,{
        name:name,
        image:img,
        price:price
      }).then(response => {
        axios
      .get("http://localhost:5500/api/products")
      .then((response) => setPdt(response.data.data))
      .catch((error) => console.error(error));
      })
      .catch(error => {
        // Handle errors
      });
    }
    else{
    axios.post("http://localhost:5500/api/products",{
      name:name,
      image:img,
      price:price
    }).then(response => {
      axios
    .get("http://localhost:5500/api/products")
    .then((response) => setPdt(response.data.data))
    .catch((error) => console.error(error));
    })
    .catch(error => {
      // Handle errors
    });
  }
  
    setOpen(false);
    
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* <Button variant="contained" onClick={handleClickOpen}>
        + Add Product
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add product details"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
      <label>Enter Product name  :  
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br></br>
      <br></br>
      <label>Enter Product Image:  
        <input 
          type="text" 
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
      </label>
      <br></br>
      <br></br>
      <label>Enter Product Price      :  
        <input 
          type="text" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <br></br>
      <input className="sbmt" type="submit" />
    </form>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </React.Fragment>
  );
}