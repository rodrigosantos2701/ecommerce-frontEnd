import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';


import useStyles from './styles';

const PrimarySearchAppBar = ({ infodata }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);


  const mobileMenuId = 'primary-search-account-menu-mobile';


  const cartSize =  useSelector(state => state.data);
  

  
  
  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={cartSize.length} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={infodata.logo} alt="alt" height="25px" className={classes.image} /> 
            <Typography dangerouslySetInnerHTML={{ __html: infodata.title }} variant="body1"  component="p" />
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
          <div>
                      <Button 
                          className={classes.buttonCart}
                          component={Link} 
                          to="/cart" 
                          aria-label="Show cart items"
                          color="inherit"
                          variant="contained"
                          color="secondary"
                          // startIcon={<ShoppingCart />}
                      >
                          Ir para carrinho
                      </Button>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={cartSize.length} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
