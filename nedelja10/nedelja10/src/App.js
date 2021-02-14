import { useState, useEffect } from "react"
import Home from './Home'
import Categories from './Categories'
import {Category} from './Categories'

import {getAllProducts} from './service'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const App = () => {

    const [products,setProducts]=useState([])
    useEffect(()=>{
        getAllProducts().then(res => setProducts(res.data))
    },[])

    return (
       <Router>
           <Link to="/">Home</Link>
           <span>   -----    </span>
           <Link to="/categories" >Categories</Link>
           <Switch>
               <Route  exact path="/">
                   <Home products={products}/>
               </Route>
               <Route exact path='/categories'>
                   <Categories products={products}/>
               </Route>
               <Route exact path='/categories/:category'>
                        <Category products={products}/>
                    </Route>           
           </Switch>
       </Router>
    )
}
export default App

