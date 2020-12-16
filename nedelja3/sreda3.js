//1. Написати функцију која за параметар прима број сати (0-24) и у зависности од доба дана исписује поруке: Добро јутро , Добар дан или Добро вече.

function isPartOfDay(h){
    if(h >= 4 && h <=11) return "Dobro jutro"
    if(h > 11 && h <= 19) return "Dobar dan"
    if((h > 19 && h <= 24) || (h>=0 && h <4 ))    return "Dobro Vece"
    return "Broj sati moze biti izmedju 0 i 24"
}
console.log(isPartOfDay(12));

// ispisuje vrednosti a ne vraca =>
{    
    function isPartOfDay(h){
        if(h >= 4 && h <=11) console.log("Dobro jutro")
        if(h > 11 && h <= 19) console.log("Dobar dan")
        if((h > 19 && h <= 24) || (h>=0 && h <4 ))    console.log("Dobro vece")
        
    }  
    isPartOfDay(20)
    isPartOfDay(5)
}
console.log("------------------------------------------")

//2. Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)

function pizzaPricecm2(r,p) {
   return  p /( Math.PI * (r**2))
}

console.log(pizzaPricecm2(16,1000));