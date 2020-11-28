var kittens = ["Milo", "Otis", "Garfield"];
var kitten = ["Ralph"];
var newArray;
// Add your functions and code here
function destructivelyAppendKitten(){
  newArray = kittens.concat(kitten);
  return newArray;
}
console.log(destructivelyAppendKitten());
