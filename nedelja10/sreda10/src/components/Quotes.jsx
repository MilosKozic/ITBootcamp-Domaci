import { useEffect } from "react"
import { useHistory } from "react-router"
import {getQuotes} from './service'

const Quotes = ({ quotes, loggedin,setQuotes }) => {
  
    let history = useHistory()
    loggedin ? history.push('/quotes') : history.push('/login')

    useEffect(() => {
        getQuotes().then(res => {
            setQuotes(res.data)
        })
    }, [])
  
    return (
        <>
           
            <hr/>
            <h3>Citati:</h3>
            <hr />
            {quotes?.map(quote => < Quote key={quote.id} quote={quote} />)}
        </>
    )
}

const Quote = ({ quote }) => {
    return (
        <>
            <p>Citat: "{quote.text}"</p>
            <p style={{ fontWeight: "bold" }}>Autor:  {quote.author}</p>
            <hr />
        </>
    )
}
export default Quotes