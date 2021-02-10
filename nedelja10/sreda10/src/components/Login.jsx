import {  useState } from "react"
import {  useHistory } from "react-router"
import { getUsers } from './service'
const Login = ({ setLoggedin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    return (
        <div>
            <h3>Login</h3>
            <input type="text" placeholder="username..." onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => {
                getUsers().then(res => {
                    let korisnik = res.data.find(el => el.username === username && el.password === password)
                    if (korisnik) {
                        setLoggedin(korisnik)
                        history.push('/quotes')
                    }
                    else {
                        window.alert('Neispravni podaci')
                    }

                })
            }}>LogIn</button>
            <button onClick={() => history.push('/register')}>SignUp</button>
        </div>
    )
}

export default Login