// Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)
// Име
// Врста
// Способности (низ способности покемона)
// Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))
// Даље, направити низ од ових објеката

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
    vrsta: "Blue",
    sposobnost: ["Fire", "Stelt"],
    karakteristike: {
        napad: 95,
        odbrana: 79,
        brzina: 56
    }
}
let pokenomThree = {
    ime: "Michelangelo",
    vrsta: "Blue",
    sposobnost: ["Fun", "Invisible"],
    karakteristike: {
        napad: 71,
        odbrana: 74,
        brzina: 96
    }
}
let pokenomFour = {
    ime: "Donatelo",
    vrsta: "Blue",
    sposobnost: ["Smart", "Camouflage"],
    karakteristike: {
        napad: 81,
        odbrana: 87,
        brzina: 55
    }
}
// Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

let pokemon = [pokenomOne, pokenomTwo, pokenomThree, pokenomFour]

function nizSposobnosti(arr) {
    let tmp = []
    for (i = 0; i < arr.length; i++) {
        tmp.push(arr[i].sposobnost)
    }
    return tmp.flat()  //ako sklonimo flat, stavice 4 niza u okviru jednog 
}

console.log(nizSposobnosti(pokemon))

// Сортирати покемоне по брзини, растуће.
function sortiraj(arr) {
    let tmp = []
    for (i = 0; i < arr.length; i++) {

        tmp.push(arr[i].karakteristike.brzina)
    }
    tmp.sort((a, b) => a - b)

    let pokSort = []
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (tmp[i] == arr[j].karakteristike.brzina) pokSort.push(arr[j].ime)// ako sklonimo .ime izbacuje ceo objekat
        }
    }
    return pokSort
}
console.log(sortiraj(pokemon))

//  jednostavniji nacin
 console.log(pokemon.sort((a, b) => a.karakteristike.brzina - b.karakteristike.brzina));


