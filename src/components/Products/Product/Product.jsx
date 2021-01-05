import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';

const Product = ({ product }) => {

  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch({
      type: 'ADD_PRODUCT',
      name: product.name,
      price: product.price,
      item: item,
    })
  }



  const classes = useStyles();
  
  const [item, setItem] = useState(0);
  const [open, setOpen] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleProductAdd = () => {
    if (product.quantity > item)
      setItem(item + 1)
    else
      setOpen(true);
  }

  const handleProductRemove = () => {
    if (item !== 0)
      setItem(item - 1)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  return (
    
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image} title={product.name} />
      <CardContent>
          <div className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                  {product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </Typography>
          </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add item" onClick={handleProductAdd}>
            <AddCircleOutlineIcon />
          </IconButton>
          <Typography component="h2">
            {item}
          </Typography>
          <IconButton aria-label="Remove item" onClick={handleProductRemove} >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <IconButton aria-label="Add to Cart" onClick={onAddToCart}>
            <AddShoppingCart />
          </IconButton>
      </CardActions>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
        <Alert onClose={handleClose} severity="error"  >
          Atingiu a quantidade máxima deste item em estoque.
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default Product;

