// ## Prodavnica
// 1. Korisnik unosi username i password i na klik Login dugmeta se kreira objekat klase Kupac.
// Klasa kupac sadrzi ime ,sifru i korpu .
// Div korpa se prikazuje tek kada se korisnik ulogovao.
// 2. Na stranici su sve vreme izlistani svi dostupni proizvodi iz niza proizvoda kreiranih klasom Proizvod
// jedan proizvod treba da sadrzi naziv , cenu , dostupnu kolicinu 
// proizvod moze biti prehrambeni ili bela tehnika
// ako je bela tehnika ima i garanciju
// ako je prehrambeni ima rok trajanja
// 3. Korisnik moze da doda proizvod u korpu , ako unese kolicinu manju od dostupne kolicine ispisati poruku o gresci 
// Proizvod iz korpe moze da se obrise klikom na dugme Obrisi iz korpe
// 4. Ako je korisnik admin moze da doda nov proizvod


class Kupac {
    ime
    sifra
    korpa
    admin
    constructor(name, pass, admin) {
       this.ime = name
       this.sifra = pass
       this.korpa = []
       this.admin = admin
    }
 }
 
 class Proizvod {
 
    naziv
    cena
    kolicina
    godine
    kategorija
    constructor(desc, price, q, year, categ) {
       this.naziv = desc
       this.cena = price
       this.kolicina = q
       this.godine = year
       this.kategorija = categ
    }
 }
 
 
 let regUser = [new Kupac('Ana', '123'), new Kupac('pera', 'p'), new Kupac('Milan', '555', true)]
 
 let proizvodi = [new Proizvod('Mleko', 100, 10, 4, "f"), new Proizvod('Frizider', 1000, 5, 6, "t")]
 console.log(regUser)
 console.log(proizvodi)
 
 
 const forma = document.querySelector('#form')
 const inputName = document.querySelector('#username')
 const inputPass = document.querySelector('#password')
 const divkorpa = document.querySelector('.korpa')
 const naslov = document.querySelector('#product')
 
 let logIn = []
 
 
 proizvodi.forEach(el => {
    const divProizvod = document.createElement('div')
    const pNaziv = document.createElement('p')
    pNaziv.textContent = `Naziv: ${el.naziv}`
    const pCena = document.createElement('p')
    pCena.textContent = `Cena: ${el.cena}`
    const pQ = document.createElement('p')
    pQ.textContent = `Dostupna kolicina: ${el.kolicina}`
    const inputKolicina = document.createElement('input')
    inputKolicina.type = "number"
    const addBt = document.createElement('button')
    addBt.textContent = "Dodaj u korpu"
    naslov.appendChild(divProizvod)
    divProizvod.append(pNaziv, pCena, pQ)
    if (el.kategorija == "f") {
       const pKategF = document.createElement('p')
       pKategF.textContent = `Rok trajanja : ${el.godine} meseci`
       divProizvod.append(pKategF)
 
    }
    if (el.kategorija == "t") {
       const pKateg = document.createElement('p')
       pKateg.textContent = `Garancija : ${el.godine} godina`
       divProizvod.append(pKateg)
    }
 
    divProizvod.append(inputKolicina, addBt)
    let brFood = 0
    let brTehn = 0
    addBt.addEventListener('click', () => {
       if (logIn.length == 0) {
          window.alert("unesite ime i sifru")
          return
       }
 
       if (el.kategorija = 'f') {
          brFood = brFood + Number(inputKolicina.value)
          if (brFood > el.kolicina) {
             brFood = brFood - Number(inputKolicina.value)
             return window.alert('nema dovoljno artikala na stanju')
 
          }
       }
       if (el.kategorija = 't') {
          brTehn = brTehn + Number(inputKolicina.value)
          if (brTehn > el.kolicina) {
             brTehn = brTehn - Number(inputKolicina.value)
             return window.alert('nema dovoljno artikala na stanju')
          }
       }
       console.log(regUser[regUser.findIndex(el => el.ime == logIn[0].ime)])
       var item = {
          Naziv: el.naziv,
          Cena: el.cena * Number(inputKolicina.value),
          Kolicina: Number(inputKolicina.value)
       }
       regUser[regUser.findIndex(el => el.ime == logIn[0].ime)].korpa.push(item)
 
       const divK = document.createElement('div')
 
 
       const p1 = document.createElement('p')
       p1.innerHTML = `Naziv: ${el.naziv}`
       const p2 = document.createElement('p')
       p2.innerHTML = `Cena: ${el.cena * Number(inputKolicina.value)}`
       const p3 = document.createElement('p')
       p3.innerHTML = `Kolicina: ${Number(inputKolicina.value)}`
       const delBt = document.createElement('button')
       delBt.textContent = "Obrisi"
       divK.append(p1, p2, p3, delBt)
       divkorpa.append(divK)
       inputKolicina.value = 0;
 
       delBt.addEventListener('click', () => {
          delBt.parentElement.remove()
          let index = regUser.findIndex(el => el.ime == logIn[0].ime)
          let index1 =regUser[index].korpa.indexOf(item)
          brFood= brFood - Number(regUser[index].korpa[index1].kolicina)
          regUser[index].korpa.splice(index1, 1)
          
       })
    })
 })
 function isAdmin(user) {
    regUser.forEach(el => {
       if (user.ime == el.ime && user.sifra == el.sifra) {
          console.log(el.admin)
          return el.admin
       }
 
    })
 }
 
 const isValidKupac = kupac => {
 
    return regUser.some(k => k.ime == kupac.ime && k.sifra == kupac.sifra)
 }
 divkorpa.innerHTML = ""
 
 forma.addEventListener('click', (e) => {
    e.preventDefault()
 
    divkorpa.innerHTML = ""
    let k = new Kupac(inputName.value, inputPass.value)
 
    console.log(isAdmin(k))
 
    let log = k
    logIn.splice(0, 1)
    logIn.push(log)
    if (isValidKupac(k)) {
 
       let korpa = document.createElement('div')
       let h3 = document.createElement('h3')
       h3.innerHTML = `Vasa korpa : ${k.ime}`
       korpa.append(h3)
       divkorpa.append(korpa)
 
    } else {
       console.log("niste registrovani korisnik");
    }
    console.log(k);
    console.log(logIn)
 })
 
 
 
 
 