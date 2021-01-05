import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';


const CartItem = ({cart}) => {

  const [open, setOpen] = useState(false);

  
  const classes = useStyles();
  

    return (

      <Card className="cart-item">
        <CardMedia alt={cart.name} className={classes.media} />
        <CardContent className={classes.cardContent}>
        <Typography variant="subtitle1">{cart.item}</Typography>

          <Typography variant="subtitle1">{cart.name}</Typography>
          <Typography variant="subtitle1">{cart.price}</Typography>

        </CardContent>
      </Card>
    );
  }


export default CartItem;

