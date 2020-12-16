// Написати функцију која исписује све елементе низа који су дељиви са 5
let arr = [1,2,3,4,5,10,15,23,1,5]

function divisiblebyFive(arr) {
    let i = ""
    for(let x = 0; x< arr.length; x++){
        if(arr[x]%5==0){
            i = i + arr[x] + " "
            
        }
    }
    console.log(i)
}

divisiblebyFive(arr)    

// i promenljiva je dodata samo iz razloga da bi bilo 'pisanje u redu', 
//bez nje bih  cons.log stavio unutar petlje da //ispisuje broj po broj

console.log("-----------------")

// 2.Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
// Уноси се колико пице поједете на месечном нивоу, и колико година имате (Рачуна се да је довољно достављати до стоте године)

function lifeSupply(numPerMonth, age) {
    return numPerMonth * 12 * (100 - age)
}
console.log(lifeSupply(10,26))
console.log(lifeSupply(8,34))