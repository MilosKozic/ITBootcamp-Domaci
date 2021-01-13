import service from './service.js'
import { count } from './service.js'

const inputDesc = document.createElement('input')
const insert = document.createElement('button')
insert.textContent = "insert"
const done = document.createElement('select')
const opt = document.createElement('option')
const opt1 = document.createElement('option')
opt.value = `${true}`
opt.textContent = "done"
opt1.value = `${false}`
opt1.textContent = "not done"
done.append(opt1, opt)
document.body.append(inputDesc, done, insert,)

service.data.forEach(el => {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const delBt = document.createElement('button')
    const chgBt = document.createElement('button')
    delBt.textContent = "delete"
    chgBt.textContent = "change description"
    if (el.done == false) {
        p.style.color = "red";
        p.innerHTML = el.desc
    }
    else {
        p.style.color = "black";
        p.innerHTML = el.desc
    }
    div.append(p, delBt, chgBt)
    document.body.append(div)
    delBt.addEventListener('click', () => {
        delBt.parentElement.remove()
        service.deleteById(el.id)
    })
    chgBt.addEventListener('click', () => { // biramo status iz selecta, done or not done, i na dugme change description menjamo status datog item-a
        if (done.value == "false") {
            p.style.color = "red";
            p.innerHTML = el.desc
            let newItem = {
                desc: el.desc,
                done: false
            }
            service.changeById(el.id, newItem)
        }
        else {
            p.style.color = "black";
            p.innerHTML = el.desc
            let newItem = {
                desc: el.desc,
                done: true
            }
            service.changeById(el.id, newItem)
        }
    })
})


insert.addEventListener('click', () => {
    let id = count

    const div = document.createElement('div')
    const p = document.createElement('p')
    const delBt = document.createElement('button')
    const chgBt = document.createElement('button')
    delBt.textContent = "delete"
    chgBt.textContent = "change description"
    if (done.value == "false") {
        p.style.color = "red";
        p.innerHTML = inputDesc.value
        var item = {
            desc: inputDesc.value,
            done: false
        }
        service.add(item)
    }
    else {
        p.style.color = "black";
        p.innerHTML = inputDesc.value
        var item = {
            desc: inputDesc.value,
            done: true
        }
        service.add(item)
    }

    div.append(p, delBt, chgBt)
    document.body.append(div)


    delBt.addEventListener('click', () => {
        delBt.parentElement.remove()
        service.deleteById(id)
        console.log(service.data)
    })

    chgBt.addEventListener('click', () => {
        if (done.value == "false") {
            p.style.color = "red";
            p.innerHTML = item.desc
            let newItem = {
                desc: item.desc,
                done: false
            }
            service.changeById(id, newItem)
        }
        else {
            p.style.color = "black";
            p.innerHTML = item.desc
            let newItem = {
                desc: item.desc,
                done: true
            }
            service.changeById(id, newItem)
        }
    })
    console.log(service.data)

    inputDesc.value = ""
})


