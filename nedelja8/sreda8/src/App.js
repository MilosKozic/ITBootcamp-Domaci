
import React, { useState } from 'react'
import {ShoopingList} from './Components/components'

const App = () => {
  let ime = "Milos"

  //setArr, nije morao biti koristen, cisto sam zbog prakse koristio
  const [arr, setArrr] = useState([
    { id:"200x",
      naziv: "Tv 32''",
      cena: 100
    },
    {
      id:"256y",
      naziv: "Phone X5",
      cena: 150
    },
    {
      id:"140c",
      naziv: "Fridge WAN2288",
      cena: 200
    }
  ]);

  return (
    <div>
      <ShoopingList name={ime} arr={arr}/>
     
    </div>
  )
}


export default App