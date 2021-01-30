import React, { useState } from 'react'
import { v1 as uuidv1 } from 'uuid'
console.log(uuidv1())

//radi na oba nacina, i sa arr(niz objekata) i sa niz(obican niz), pa sam ostavio niz sa objektima zakomentarisan
//ali oba nacina funkcionisu, s tim sto sam ostavio nacin koji mi je bio jednostavniji za rad i citkiji kod
//takodje mislim da bi za rezultat mogla da se koristi fja eval(niz.join('')) koja bi pretvorila string u mat operaciju

const App = () => {
  const [value, setValue] = useState(0)
  const [result, setResult] = useState(0)
  const [arr, setArr] = useState([{}])
  const [niz,setNiz]= useState([])

  return (
    <div >
      <Form value={value} setValue={setValue} setResult={setResult} result={result} arr={arr} setArr={setArr} niz={niz} setNiz={setNiz} />
      <Ispis arr={arr} niz={niz} />
    </div>
  )
}

const Form = ({ value, setValue, result, setResult, arr, setArr,niz,setNiz }) => {

  return (
    <>
      <input value={result} readOnly />
      <input type="number"  placeholder="enter number" onChange={(e) => setValue(Number(e.target.value))} />
      <button onClick={() => {
        setResult(result + value)
        // setArr([...arr, { vrednost: value, tip: '+', id: uuidv1() }])
        setNiz([...niz,"+",value]) 
      }} >+</button>
      <button onClick={() => {
        setResult(result - value)
        // setArr([...arr, { vrednost: value, tip: '-', id: uuidv1() }])
        setNiz([...niz,'-',value])
      }}>-</button>
      <button onClick={() => {
        setResult(result * value)
        // setArr([...arr, { vrednost: value, tip: '*', id: uuidv1() }])
        setNiz([...niz,'*',value])
      }}>*</button>
      <button onClick={() => {
        setResult(result / value)
        // setArr([...arr, { vrednost: value, tip: '/' , id:uuidv1()}])
        setNiz([...niz,'/',value])
      }}>/</button>
      <button onClick={() => {
        setResult(0)
        setValue(0)
        // setArr([])
        setNiz([])
      }}>clear</button>

    </>
  )
}
const Ispis = ({ arr,niz }) => {

  return (
    <>
      {/* <p >{arr.map(el => <span key={uuidv1()}>{el.tip}{el.vrednost}</span>)}  </p> */}
      <p>{niz.join("")}</p>
    
    </>
  )
}

export default App