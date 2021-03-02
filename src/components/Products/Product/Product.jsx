import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';

import { Card, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


import useStyles from './styles';



const Product = ({ product }) => {
  
  const cartData = useSelector(state => state.data);
  
  const dispatch = useDispatch();

  const onAddToCart = () => {

      dispatch({
  
        type: 'ADD_PRODUCT',
        id: product.id,
        name: product.name,
        price: product.price,
        purchase: 1,
        quantity: product.quantity
      })


    }


  const classes = useStyles();


  const [item, setItem] = useState(0);
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const [openRemoveZeroItens, setOpenRemoveZeroItens] = useState(false);

  const [disableAddtoCart, setDisableAddtoCart] = useState(false);
  const [disableRemovetoCart, setDisableRemovetoCart] = useState(false);
  const [disableAddtoShop, setDisableAddtoShop] = useState(true);


  const timeInfo = 2000;



  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleAddtoShop = () => {
  
    setDisableAddtoShop(true);
    setOpenSuccess(true)

    onAddToCart();

}


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setOpenSuccess(false);
    setOpenRemove(false);
    setOpenRemoveZeroItens(false);
  };

  const interval = () => {
    setTimeout(function () { 
      setDisableRemovetoCart(false)
      setDisableAddtoCart(false)
      setDisableAddtoShop(false);

    }, 1000);
  }

  const intervalDisableCart = () => {
    setTimeout(function () { 
      setDisableRemovetoCart(false)
      setDisableAddtoCart(true)
      setDisableAddtoShop(true);

    }, 1000);
  }
  
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>

        <Button disabled={false} aria-label="Add to Cart" onClick={handleAddtoShop}
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<AddShoppingCart />}
      >
        Adicionar
      </Button>
      </CardActions>

      <Snackbar open={open} autoHideDuration={timeInfo} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="warning"  >
          Atingiu a quantidade máxima em estoque
        </Alert>
      </Snackbar>
      <Snackbar open={openRemoveZeroItens} autoHideDuration={timeInfo} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="error"  >
          Nenhum itens no carrinho
        </Alert>
      </Snackbar>

      <Snackbar open={openSuccess} autoHideDuration={timeInfo} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="success"  >
          Adicionado com sucesso !
        </Alert>
      </Snackbar>
      <Snackbar open={openRemove} autoHideDuration={timeInfo} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="info"  >
          Produto removido !
        </Alert>
      </Snackbar>



      
    </Card>
  );
};

export default Product;

