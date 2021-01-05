import React, { useState, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';

import { store } from './store';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Products, Cart, Footer } from './components';

const App = () => {
  const [products, setProducts] = useState([]);
  const [infodata, setInfodata] = useState([]);
  const [footer, setFooter] = useState([]);
  
  const [cart, setCart] = useState([]);
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
            });
          })
          .catch(function(err) { console.error(err); });         
        };
            



  useEffect(() => {
    fetchProducts();
    fetchInfo();
    fetchFooter();

  }, []);




  return (
    <Router>
      <Provider store={store}>
              <div style={{ display: 'flex' }}>
                <CssBaseline />

                <Navbar infodata={infodata} />

                <Switch>
                  <Route exact path="/">
                    <Products products={products}  />
                  </Route>

                  <Route exact path="/cart">
                    <Cart />
                  </Route>

                  <Route path="/checkout" exact>
                  </Route>
                </Switch>
              </div>
                <Footer footer={footer}/>
      </Provider>
    </Router>
  );
};

export default App;
