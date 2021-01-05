import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';



 const Cart = () =>   {

  const [empty, setEmpty] = useState(false);


  const classes = useStyles();

   const cartData =  useSelector(state => state.data)


  const renderEmptyCart = () => (
    <Typography className = {classes.emptyCart} variant="subtitle1" >You have no items in your shopping cart,
      <Link className={classes.link} to="/"> start adding some</Link>!
    </Typography>
  );

  const renderCart = () => (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container direction="column" justify="center" >
        {cartData.map((cartData) => (
          <Grid key={cartData.id} >
            <CartItem cart={cartData}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
  
    
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart</Typography>
      { empty ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
