// zadatak1.js:
// За два броја (а и б) исписати њихов: Збир,разлику,производ,количник,остатак при дељењу,степен (а^b)
{
    let a = 4
    let b = 3
    let razlika = a - b ;
    let zbir = a + b ;
    let proizvod = a * b ;
    let kolicnik = a / b ;
    let ostatak = a % b ;
    let stepen = a ** b ;
    console.log(proizvod);
    console.log(zbir);
    console.log(kolicnik);
    console.log(razlika);
    console.log(ostatak);
    console.log(stepen);
}

// zadatak2.js - Продавница
// Направити променљиву која представља цену производа коју купац жели да купи
// Направити променљиву која представља количину новца коју купац има
// Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
// Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)

{
    let p = 10 // cena proizvoda
    let q = 3 // broj artikala, jednog proizvoda
    let cash = 35  // kolicina novca koju kupac ima
    let cenaProiz = p * q // ukupna cena koju kupac treba da plati
    console.log(cenaProiz);

    if(cash < cenaProiz){
          console.log("Nemate dovoljno novca na racunu. Trenutno stanje: ", cash," rsd");
    }
    else{
          console.log("Uspesno ste obavili kupovinu. Trenutno stanje: ", (cash - cenaProiz));
    }
}
// zadatak3.js
// Направити променљиву која има вредност неког броја (цео број)
// Уколико је број дељив са 3, исписати поруку: Број _ је дељив са 3
// Ако није, Број _ није дељив са 3
{
    let x = 8.6
    let y =Math.round(x); // u slucaju da neko unese decimalnu vrednost broja, zaokruzuje
    //ili ne praviti novu promenljivu, samo u uslovu staviti Math.round(x)
    if(y % 3 == 0)
    {
        console.log("Broj ", y, " je deljiv sa 3")
    }
    else
    {
        console.log("Broj ", y, " nije deljiv sa 3")
    }
}
// zadatak4.js
// Исписати првих 1000 бројева дељивих са 5
{
    let x = 1
    let m = 5 * 1000  
    for (x; x <= m; x++)
    {
       if(x % 5 == 0){
           console.log(x)
       }
    }
}
