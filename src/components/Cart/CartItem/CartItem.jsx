import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


import { Typography, IconButton, Divider } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';


import useStyles from './styles';

const CartItem = ({ item }) => {
  
  const dispatch = useDispatch();

  const onRemoveToCart = () => {
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: item.id
    })
  }

  const handlequantityAdd = () => {
    if (item.quantity > item.purchase){
      addQuantity()
    }
    else {
      setOpen(true)
    }

  }

  const handlequantityRemove = () => {
    if (item.purchase >= 1){
      removeQuantity()
    }
  }


  const addQuantity = () => {
    dispatch({
    
      type: 'ADD_QUANTITY',
      id: item.id,
      purchase: item.purchase + 1,
      name: item.name,
      price: item.price,
      quantity: item.quantity
    })
  }

  const removeQuantity = () => {
    dispatch({

      type: 'REMOVE_QUANTITY',
      id: item.id,
      name: item.name,
      price: item.price,
      purchase: item.purchase - 1,
      quantity: item.quantity

      })
    }
  
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
  

    function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
  

  const classes = useStyles();

  const timeInfo = 2000;
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Grid container spacing={1} >

      <div className={classes.toolbar}  />
      <Grid container spacing={2} style={{display: 'flex', alignItems: 'center'}} >

        <Grid item xs={4} sm={3}>
          <Typography className={classes.paper}>{item.name}</Typography>
        </Grid>
        <Grid item xs={4} sm={3}>
          <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center',padding: 0, margin: 0}} >
              <IconButton style={{display: 'flex', alignItems: 'center'}} aria-label="Add item" onClick={handlequantityAdd}><AddCircleOutlineIcon /></IconButton>
              <Typography style={{display: 'flex', alignItems: 'center'}} >{item.purchase}</Typography>
              <IconButton style={{display: 'flex', alignItems: 'center'}} aria-label="Add item" onClick={handlequantityRemove}><RemoveCircleOutlineIcon /></IconButton>
          </div>

        </Grid>
        <Grid item xs={3} sm={3}>
          <Typography className={classes.paper}>{(item.price*item.purchase).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</Typography>
        </Grid>
        <Grid item className={classes.buttons} xs={1} sm={1} >
            <IconButton aria-label="delete" onClick={onRemoveToCart}>
              <DeleteIcon />
            </IconButton>
        </Grid> 

      </Grid>


      </Grid>
      <Divider className={classes.divider} />

      <Snackbar open={open} autoHideDuration={timeInfo} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="warning"  >
          Atingiu a quantidade máxima em estoque
        </Alert>
      </Snackbar>


    </>
  );
}


export default CartItem;

