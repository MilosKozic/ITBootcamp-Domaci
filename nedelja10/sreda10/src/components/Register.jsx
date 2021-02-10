import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { postUsers, getUsers } from "./service.js"

const Register = () => {
    return (
        <div>
            <h3>Register</h3>
            <Form />
        </div>
    )
}
const Form = () => {
    let history=useHistory()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [regusers, setRegusers] = useState([])
    var paswd=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/

    useEffect(() => {
    
    }, [])

    return (
        <>
            <input value={name} placeholder="username..." type="text" onChange={(e) => {
                 setName(e.target.value)
            }} />
            <input value={email} placeholder="email...." type="email" onChange={(e) => {
                setEmail(e.target.value)
            }} />
            <input value={password} placeholder="password....." type="password" onChange={(e) => {
                setPassword(e.target.value)
            }} />

            <button onClick={() => {
                    getUsers().then(res => {
                        setRegusers(res.data)
                    })
                let user = {
                    username: name,
                    email: email,
                    password: password
                }
                if(name.length<4) return window.alert('ime je previse kratko')
                if(password.length<9 || !password.match(paswd) ) return window.alert('Sifra mora sadrzati izmedju 8 i 15 karaktera i minimum jedno malo slovo, jedno veliko slovo, jedan broj i jedan specijalan karakter')
                if(!email.includes('@'&&'.')) return window.alert('Email nije u ispravnom formatu')
                let maybeUser = regusers.find(el => el.username === user.username || el.email === user.email)                
                {
                    maybeUser ?
                        window.alert("Postoji vec registrovan korisnik sa datim podacima!")
                        :
                        postUsers(user).then(res=>{
                            setRegusers(prev=>[...prev,res.data])
                        })
                }
                setEmail('')
                setName('')
                setPassword('')
            }}>Submit</button>

            <button onClick={()=> history.push('/login')}>Login</button>
            
        </>
    )
}

export default Register