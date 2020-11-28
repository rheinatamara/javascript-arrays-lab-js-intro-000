var kittens = ["Milo", "Otis", "Garfield"]; 
var kitten = ["Ralph"];
var newArray;

function destructivelyAppendKitten(name){
  newArray = name.concat(kitten);
  return newArray;
}

console.log(destructivelyAppendKitten(kittens)); 
