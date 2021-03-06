import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Container, Typography, Button, Grid, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';



import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = () => {

  const classes = useStyles();

  const cartData = useSelector(state => state.data);
  

  const [totalPrice, setTotalPrice] = useState(0);
  
  const handleTotalPrice = () => {
    
    let count = 0
    {
      cartData.map((cartData) => (
        count = (count + cartData.price * cartData.purchase) || ''
        ))
      }
      setTotalPrice(count)
  }

  useEffect(() => {
    handleTotalPrice();
  }, []);


  useEffect(() => {
    handleTotalPrice();
  }, [cartData]);


  const renderEmptyCart = () => (
    <div>
      <Typography className={classes.emptyCart} variant="subtitle1" >You have no items in your shopping cart,
        <Link className={classes.link} to="/"> start adding some</Link>!
      </Typography>
    </div>
  );

  const renderCart = () => (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={2} >
        <Grid item xs={4} sm={3}>
          <Typography className={classes.paper}>Item</Typography>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Typography className={classes.paper}>Quant</Typography>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Typography className={classes.paper}>Total</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={12} >

        <Grid item xs={12}>
          {cartData.map((cartData) => (
            <Grid key={cartData.id} >
                <CartItem item={cartData}  />
            </Grid>
          ))}

        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.subtotal} variant="body1" textAlign="right">
            Subtotal: {totalPrice.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </Typography>
        </Grid>
      </Grid>


      <Grid container className={classes.buttonContainer} spacing={1} >

        <Grid item xs={12} sm={6} lg={4}>
            <Button className={classes.buttonCart} component={ Link } to="/" variant="contained">Voltar para loja</Button>
        </Grid>
        {/* <Grid item xs={12} sm={4} lg={4}>
          <Button className={classes.buttonCart} variant="contained" color="secondary">Esvaziar carrinho</Button>
        </Grid> */}
        <Grid item xs={12} sm={6} lg={4}>
          <Button className={classes.buttonCart} component={ Link } to="/checkout" variant="contained" color="primary">Ir para checkOut</Button>
        </Grid>

      </Grid>
    </main>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h5" gutterBottom>Your Shopping Cart</Typography>
      <div>
        {cartData.length === 0 ? renderEmptyCart() : renderCart()}
        
      </div>
    </Container>
  );
};

export default Cart;
