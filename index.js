// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const cat = [...cats];
    cat.push("Broom");
    return cat;
}
function prependCat(name){
    const cat = [...cats];
    cat.unshift("Arnold");
    return cat;
}
function removeLastCat(){
    const cat = [...cats];
    cat.pop();
    return cat;
}
function removeFirstCat(){
    const cat = [...cats];
    cat.shift();
    return cat;
}



// function appendKitten(name){
//   var newArray = kittens.slice();
//   // or ES6 way
//   // var newArray = [...kittens];
//   newArray.push(name)
//   return newArray
// }