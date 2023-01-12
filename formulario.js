const btn = document.querySelector("#form")
 
btn.addEventListener("click", function(e) {

e.preventDefault();
 
const nomesobrenome = document.querySelector("#nomesobrenome");

const value = nomesobrenome.value;

console.log(value);

}) 


