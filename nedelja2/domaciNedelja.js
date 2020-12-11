// zadatak1.js

// Сачувати у променљиве цену и пречник пице
// Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
// Исписати тај резултат у конзолу
{
    let p = 1000                                  //cena pizze
    let d = 32                                    //precnik kruga (tj pizze) u cm
    let povrsina = Math.PI * (d ** 2) / 4
    let pcm2 = p / povrsina                       // cena po cm kvadratnom /price per cm2
    console.log(pcm2);
}
console.log("------------------");
// zadatak2.js
// За првих 100 бројева исписати:

// FizzBuzz ако је број дељив и са 3 и са 5
// Fizz ако је број дељив само са 3
// Buzz ако је број дељив само са 5
// Број ако није дељив ни са 3 ни са 5
// (1,2,Fizz,4,Buzz,...)
{
    let x
    for (x = 1; x <= 100; x++) {
        if (x % 3 == 0 && x % 5 == 0) {
            console.log("FizzBuzz")
        }
        else {
            if (x % 3 == 0) {
                console.log("Fizz")
            }
            else {
                if (x % 5 == 0) {
                    console.log("Buzz")
                }

                else {
                    console.log(x)
                }
            }
        }

    }
}
console.log("----------------------");
// zadatak3.js
// Исписати Марио пирамиду одређене висине:
// За n = 5

// #
// ##
// ###
// ####
// #####
{
    let n = 5
    let red = "#"
    for (x = 1; x < n + 1 ; x++) {
        
        console.log(red.repeat(x))  
    }
}
console.log("-------------------------")
// zadatak4.js

// Исписати Марио пирамиду одређене висине:
// За n = 5

//     #
//    ## 
//   ###
//  ####   
// #####

{
    let n = 5
    let red = "#"
    let blank = " "
    for (x = 1; x < n + 1 ; x++) {
        
        console.log(blank.repeat(n - x) + red.repeat(x))  
    }
}
console.log("-----------------")

//zadatak5.js
// Исписати Марио пирамиду одређене висине:
// За n = 5

//     # #
//    ## ##
//   ### ###
//  #### ####  
// ##### #####
{
    let n = 5
    let red = "#"
    let blank = " "
    for (x = 1; x < n + 1 ; x++) {
        
        console.log((blank.repeat(n - x) + red.repeat(x)) + " " +(red.repeat(x))   )
    }
}