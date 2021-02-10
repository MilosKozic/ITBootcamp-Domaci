import { useState, useEffect } from "react"
import CreateQuote from "./components/CreateQuote"
import Home from "./components/Home"
import Login from "./components/Login"
import Quotes from "./components/Quotes"
import Register from "./components/Register"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const App = () => {


    const [quotes, setQuotes] = useState([])
    const [loggedin, setLoggedin] = useState()
    console.log(quotes)
    console.log(loggedin)


    return (
        <Router>
            <nav>
                <Link style={{ padding: 5 }} to="/">Home</Link>
                <Link style={{ padding: 5 }} to="/quotes">Quotes</Link>
                <Link style={{ padding: 5 }} to="/createquote">CreateQuote</Link>
                {loggedin ?
                    <><span>     {loggedin.username.toUpperCase()}</span><span></span>
                        <button onClick={() => {
                            setLoggedin(false)
                        }}> LogOut</button>
                    </>
                    :
                    <>
                        <Link style={{ padding: 5 }} to="/login">Login</Link>
                        <Link style={{ padding: 5 }} to="/register">Register</Link>
                    </>
                }
            </nav>
            <Switch>
                <Route path="/login">
                    <Login setLoggedin={setLoggedin} />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/quotes">
                    <Quotes quotes={quotes} loggedin={loggedin} setQuotes={setQuotes} />
                </Route>
                <Route path="/createquote">
                    <CreateQuote setQuotes={setQuotes} />
                </Route>
                <Route path="/">
                    <Home loggedin={loggedin} />
                </Route>
            </Switch>
        </Router>
    )
}
export default App

