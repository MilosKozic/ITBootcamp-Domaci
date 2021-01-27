import React from 'react'

export const ShoopingList = ({ name, arr }) => {
    return (< div>
        <h1 >Shooping list for: {name}</h1>
        {arr.map(el =><ShoopingItem key={el.id} item={el} />)}
    </div>

    )
}

const ShoopingItem = ({ item }) => {
    return (
        <div> Naziv: {item.naziv}<br/> Cena: {item.cena} rsd<hr/></div>     
    )
}