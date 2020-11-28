var kittens = ["Milo", "Otis", "Garfield"]; 
var kitten = ["Ralph"];
var newArray;
// Add your functions and code here
function destructivelyAppendKitten(name){
  newArray = kittens.concat(kitten);
  return newArray;
}
console.log(destructivelyAppendKitten(newArray));
