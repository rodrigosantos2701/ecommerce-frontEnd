import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'


import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Products, Cart, Footer, CheckOut } from './components';

const App = () => {


  const [products, setProducts] = useState([]);
  const [infodata, setInfodata] = useState([]);
  const [footer, setFooter] = useState([]);


  const fetchProducts = async () => {

    const BASE_URL = 'http://localhost:1337/products'; fetch(BASE_URL, {
      method: 'get' // opcional 
    })
      .then(function (response) {
        response.json().then(function (data) {
          setProducts(data);
        });
      })

      .catch(function (err) { console.error(err); });
  };

  const fetchInfo = async () => {
    const BASE_URL = await 'http://localhost:1337/pages';
    await fetch(BASE_URL, {
      method: 'get' // opcional 
    })
      .then(function (response) {
        response.json().then(function (data) {
          const info = {
            title: data[0].title,
            logo: data[0].logo,
            footer: data[0].footer
          };
          setInfodata(info);
        });
      })
      .catch(function (err) { console.error(err); });
  };

  const fetchFooter = async () => {
    const BASE_URL = await 'http://localhost:1337/footers';
    await fetch(BASE_URL, {
      method: 'get' // opcional 
    })
      .then(function (response) {
        response.json().then(function (data) {
          const footer = {
            line1: data[0].line1,
            line2: data[0].line2,
            line3: data[0].line3
          };
          setFooter(footer);
        });
      })
      .catch(function (err) { console.error(err); });
  };


  useEffect(() => {
    fetchProducts();
    fetchInfo();
    fetchFooter();
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />

        <Navbar infodata={infodata} />

        <Switch>
          <Route exact path="/">
            <Products products={products}/>
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route path="/checkout" exact>
            <CheckOut />
          </Route>
        </Switch>
      </div>
      <div style={{marginTop: '3%'}}>
        <Footer footer={footer} />
      </div>
    </Router>
  );
};

export default App;
