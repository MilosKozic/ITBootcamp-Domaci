const buttonOrder = document.createElement('button');
buttonOrder.textContent="ORDER"
const buttonOrder2 = document.createElement('button');
buttonOrder2.textContent="ORDER"
const buttonOrderNow = document.createElement('button');
buttonOrderNow.textContent="ORDER NOW"
const buttonOrderNow2 = document.createElement('button');
buttonOrderNow2.textContent="ORDER NOW"

const body = document.querySelector('body')
body.appendChild(buttonOrder)
body.appendChild(buttonOrder2)
body.appendChild(buttonOrderNow)
body.appendChild(buttonOrderNow2)

let count = 0

buttonOrder.addEventListener('click',()=>{
    count++
})

buttonOrder2.addEventListener('click',()=>{
    count++
})

buttonOrderNow.addEventListener('click',()=>{
    let p = document.createElement('p')
    body.appendChild(p)
    if(count==0) {
        window.alert("You didnt chose any pizza yet!!") 
         return}
    p.innerText= `You ordered ${count} pizza's! \n ${new Date()}`
    count=0
})

buttonOrderNow2.addEventListener('click',()=>{
    let p = document.createElement('p')
    body.appendChild(p)
    if(count==0) {
        window.alert("You didnt chose any pizza yet!!") 
        return}
   p.innerText= `You ordered ${count} pizza's! \n ${new Date()}`
    count=0
})