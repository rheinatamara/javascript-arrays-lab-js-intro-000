var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  const newArray = kittens.concat("momo")
  return newArray;
}
console.log(destructivelyAppendKitten(kittens));