import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Products, Cart, Checkout, Footer } from './components';

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [infodata, setInfodata] = useState([]);
  const [footer, setFooter] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {

    const BASE_URL = 'http://localhost:1337/products'; fetch(BASE_URL, { 
        method: 'get' // opcional 
})
        .then(function(response) { 
          response.json().then(function(data){
            setProducts(data);
            });
          })
 
        .catch(function(err) { console.error(err); });         
          };

         
  const fetchInfo = async () => {
    const BASE_URL = await 'http://localhost:1337/pages'; 
    await fetch(BASE_URL, { 
        method: 'get' // opcional 
})
        .then(function(response) { 
          response.json().then(function(data){
            const info = {
              title: data[0].title,
              logo: data[0].logo,
              footer: data[0].footer
            };
            setInfodata(info);
          });
        })
        .catch(function(err) { console.error(err); });         
        };



  const fetchFooter = async () => {
      const BASE_URL = await 'http://localhost:1337/footers'; 
      await fetch(BASE_URL, { 
          method: 'get' // opcional 
  })
          .then(function(response) { 
            response.json().then(function(data){
              const footer = {
                line1: data[0].line1,
                line2: data[0].line2,
                line3: data[0].line3
              };
              setFooter(footer);
              console.log('footer====>', footer.line1)
            });
          })
          .catch(function(err) { console.error(err); });         
          };
            

  useEffect(() => {
    fetchProducts();
    fetchInfo();
    fetchFooter();

  }, []);




  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar infodata={infodata} />
        <Switch>
          <Route exact path="/">
            <Products products={products}  />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart}  />
          </Route>
          <Route path="/checkout" exact>
            {/* <Checkout cart={cart} order={order} onCaptureCheckout={} error={errorMessage} /> */}
          </Route>
        </Switch>
      </div>
        <Footer footer={footer}/>
    </Router>
  );
};

export default App;
