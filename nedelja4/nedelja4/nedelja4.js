let pokenomOne = {
  ime: "Leonardo",
  vrsta: "Blue",
  sposobnost: ["Letenje", "Nightvision"],
  karakteristike: {
    napad: 91,
    odbrana: 86,
    brzina: 66
  }
}
let pokenomTwo = {
  ime: "Rafaelo",
  vrsta: "Red",
  sposobnost: ["Fire", "Stelt"],
  karakteristike: {
    napad: 95,
    odbrana: 79,
    brzina: 56
  }
}
let pokenomThree = {
  ime: "Michelangelo",
  vrsta: "Yellow",
  sposobnost: ["Fun", "Invisible"],
  karakteristike: {
    napad: 71,
    odbrana: 74,
    brzina: 96
  }
}
let pokenomFour = {
  ime: "Donatelo",
  vrsta: "Violet",
  sposobnost: ["Smart", "Camouflage"],
  karakteristike: {
    napad: 81,
    odbrana: 87,
    brzina: 55
  }
}
let pokemon = [pokenomOne, pokenomTwo, pokenomThree, pokenomFour]

function isStrongest(arr) {
  let strongest = arr.sort((a, b) => b.karakteristike.napad - a.karakteristike.napad)
  return strongest[0] // or strongest[0].ime    if we want just name
}
console.log(isStrongest(pokemon))

const divWrapper = document.createElement('div')
divWrapper.className = 'wrapper'
const btnPokemon = document.createElement('button')
btnPokemon.textContent = "Prikazi pokemone"
btnPokemon.id = 'prikaz'
const btnStrongP = document.createElement('button')
btnStrongP.textContent = "Prikazi najjaceg pokemona"
btnStrongP.id = 'pobednik'
const body = document.querySelector("body")
body.appendChild(divWrapper)
divWrapper.appendChild(btnPokemon)
divWrapper.appendChild(btnStrongP)

btnPokemon.addEventListener('click', () => {

  pokemon.forEach(el => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const pctr = document.createElement('img');
    div.appendChild(p);
    div.appendChild(pctr);
    body.appendChild(div)
    p.innerHTML = el.ime + ": " + el.vrsta + ", Sposobnosti: " + el.sposobnost + ", Napad: " + el.karakteristike.napad
    pctr.src = `./${el.ime}.jpg`
  })
})


btnStrongP.addEventListener('click', () => {
  const divS = document.createElement('div')
  const pS = document.createElement('p')
  const pctrS = document.createElement('img')
  body.appendChild(divS)
  divS.appendChild(pS)
  divS.appendChild(pctrS)
  let strongest = isStrongest(pokemon)

  pS.textContent = strongest.ime + ": " + strongest.vrsta + ", Sposobnosti: " + strongest.sposobnost + ", Napad: " + strongest.karakteristike.napad
  pctrS.src = `./${strongest.ime}.jpg`


})
