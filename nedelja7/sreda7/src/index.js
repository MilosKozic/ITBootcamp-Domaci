import axios from 'axios'

const divSel = document.createElement('div')
const app = document.querySelector('#app')
const headerTxt = document.createElement('header')
const h4 = document.createElement('h4')
headerTxt.appendChild(h4)

axios.get('https://api.spacexdata.com/v3')
      .then(res=> {
          console.log(res.data)
          h4.innerHTML=`Naziv kompanije:  ${res.data.organization} <br><hr>`
      })


const select =  document.createElement('select')
const opt1 = document.createElement('option')
opt1.value ='Launch'
opt1.textContent ='Launch'
const opt2 = document.createElement('option')
opt2.textContent = 'Ships'
opt2.value = 'Ships'
select.append(opt1,opt2)

const chBt=  document.createElement('button')
chBt.textContent='Insert'

divSel.append(headerTxt,select,chBt)

const divList = document.createElement('div')

app.append(divSel,divList)

chBt.addEventListener('click',()=>{
    divList.innerHTML=''



 if(select.value == 'Ships'){
    const addToDom = (ship) => {
        // const img = document.createElement('img')
        const name = document.createElement('p')
        // img.width = 100;
        // img.height = 100;
        name.innerHTML =`Naziv broda: "${ship.ship_name}"`
        // img.alt=ship.ship_name
        // img.src = ship.image ? ship.image : 'https://via.placeholder.com/100'
        divList.append(name)
    }
    axios.get("https://api.spacexdata.com/v3/ships")
        .then(res => {
            console.log(res)
            res.data.forEach(ship => addToDom(ship))
        }) 
 }

 if(select.value=='Launch'){

    const addLaunch = (launch) => {
        // if(launch.links.mission_patch_small) return // Не приказујемо ништа о лансирању које нема слику
        const missName = document.createElement('p')
        missName.textContent=`Naziv misije: "${launch.mission_name}"`
        // img.width = 100;
        // img.height = 100;
        // img.src = launch.links.mission_patch_small ? launch.links.mission_patch_small : 'https://via.placeholder.com/100' // Не приказујемо слику, али не дирамо остатак информација о лансирању
        divList.appendChild(missName)
    }
    // https://api.spacexdata.com/v3/launches
    axios.get('https://api.spacexdata.com/v3/launches')
         .then(res => {
            console.log(res.data[0].mission_name)
            res.data.forEach(launch => addLaunch(launch))
         })
 }
})