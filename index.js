// Write your solution here!


const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(){
  drivers.push("Ralph");
}
function destructivelyPrependDriver(){
  drivers.unshift("Bob");
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(name){
  name = [...drivers,"Broom"];
  return name;
}
function prependDriver(name){
  name = ["Arnold",...drivers];
  return name;
}
function removeLastDriver(){
  
}