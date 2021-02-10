import {  useState } from 'react'
import {postQuotes} from './service'

const CreateQuote =({setQuotes})=>{
    const[text,setText]=useState('')
    const[author,setAuthor]=useState('')
 return(
     <div>
     <h3>CreateQuote:</h3>
     <input value={text} placeholder="tekst citata.." onChange={(e)=>{
         setText(e.target.value)
     }}/>
     <input value={author} placeholder="autor...." onChange={(e)=>{
         setAuthor(e.target.value)
     }}/>
     <button onClick={()=>{
         let qoute={
             text:text,
             author:author
         }
         postQuotes(qoute).then(res=>{
             setQuotes(prev=>[...prev,res.data])
         })
         setText('')
         setAuthor('')
     }}>Add quote</button>
    
     </div>
 )
}

export default CreateQuote