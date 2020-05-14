import React from 'react';
import {BrowserRouter,Switch, Route} from "react-router-dom"
import Products from "./pages/Products"
import Homepage from "./pages/Homepage"
import './App.css';

const App=() =>(

    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Homepage}/>
      <Route path="/products" component={Products}/>
      </Switch>
    </BrowserRouter>
)
 

export default App;


//  <Route path="/products/:id"  component={productsDetail}/>