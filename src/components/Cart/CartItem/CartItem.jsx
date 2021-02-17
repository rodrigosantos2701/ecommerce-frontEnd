import React, { useState } from 'react';
import { useDispatch } from 'react-redux';



import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, IconButton, Button, Divider } from '@material-ui/core';
import { AddShoppingitem } from '@material-ui/icons';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';




function preventDefault(event) {
  event.preventDefault();
}  



const CartItem = ({ item }) => {
  
  const dispatch = useDispatch();
  
  
  const onRemoveToCart = () => {
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: item.id
    })
  }

  const classes = useStyles();


  return (
    <>
      <Grid container spacing={1} >

        <Grid item xs={4} sm={3}>
          <Paper elevation={0} className={classes.paper}>
            <Typography >{item.name}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={3} sm={3} >
          <Paper elevation={0} className={classes.paper}>
            <Typography >{item.quantity}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={3} sm={3} >
          <Paper elevation={0} className={classes.paper}>
            <Typography >{(item.price*item.quantity).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</Typography>
          </Paper>
        </Grid>

        <Grid item className={classes.buttons} xs={2} sm={3} >
          
          <IconButton aria-label="delete" onClick={onRemoveToCart}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />


    </>
  );
}


export default CartItem;

