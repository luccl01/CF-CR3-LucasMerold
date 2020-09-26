console.log ("hello from the browser")
var name = document.getElementById("namevalue").value
var age = document.getElementById("agevalue").value
var horsePower = document.getElementById("horsevalue").value
var country = document.getElementById("select").value
console.log (age)
var multiply = 1
var add = 0
var austria = document.getElementById("country1").value
var hungary =document.getElementById("country2").value
var greece =document.getElementById("country3").value
var insurance = Number(horsePower) * multiply / Number(age) + add
var result = document.getElementById("result").innerHTML = name +`your insurance costs `+ insurance 
var calculator = document.getElementById("button")
calculator.addEventListener('click', calculate, false)


// console.log (result)
console.log (age)
console.log (horsePower)
console.log (country)
console.log (multiply)
console.log (add)


function calculate(){
    var name = document.getElementById("namevalue").value
    var age = document.getElementById("agevalue").value
    var horsePower = document.getElementById("horsevalue").value
    var insurance = Number(horsePower) * multiply / Number(age) + add
    var result = document.getElementById("result").innerHTML = name +` your insurance costs `+ insurance
    var austria = document.getElementById("country1").value
    var hungary =document.getElementById("country2").value
    var greece =document.getElementById("country3").value
    var name = document.getElementById("namevalue").value
    var country = document.getElementById("select").value


if (country == austria){
    multiply = 100 
    add = 50 
}
else if (country == hungary){
    multiply = 120
    add = 100
}
else if (country == greece){
    multiply = 150 
    add = 50 
    age = Number(age) +3
}
console.log (result)
console.log (age)
console.log (horsePower)
console.log (country)
console.log (multiply)
console.log (add)
console.log (insurance)
var insurance = Number(horsePower) * multiply / Number(age) + add
document.getElementById("result").innerHTML = name +` your insurance costs `+ insurance.toFixed(2) +"€"
}