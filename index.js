const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
function destuctivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(name){
  kittens.shift(name)
  return kittens
}
function destructivelyRemoveFirtKitten(name){
  kittens.pop(name)
  return kittens
}
function appendKitten(name){
  [kittens, ...name]
  return kittens
}
