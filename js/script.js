const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
let spanSize = document.getElementById("length");
let size = parseInt(spanSize.textContent);
const generate = document.querySelector("button");
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbols = ['!','@','#','$','%','&','_',"/","."];
let password = document.getElementById('password');
let passwordGenerate='';

increment.addEventListener('click', functionIncrement);
decrement.addEventListener('click', functionDecrement);
generate.addEventListener('click', function (event) {
  event.preventDefault();
  let pass = size;
  for(let i = 0, n = letters.length;i<pass;i++){
    passwordGenerate += letters.charAt(Math.floor(Math.random() * n));
  }
  let passwordArray = passwordGenerate.split('');
  passwordArray[Math.floor(Math.random() * passwordGenerate.length)] = Math.floor(Math.random()*10);
  passwordArray[Math.floor(Math.random() * passwordGenerate.length)] = Math.floor(Math.random()*10);
  passwordArray[Math.floor(Math.random() * passwordGenerate.length)] = symbols[Math.floor(Math.random()*symbols.length)];
  password.textContent=passwordArray.join('');
  password.classList.remove('none');
  passwordGenerate='';  
});
function functionIncrement(){
  if(size<32){
    spanSize.textContent= ++size;
  }
  if(size>31){
    increment.classList.add('invisible');
  }
  decrement.classList.remove('invisible');
}
function functionDecrement() {
  if (size > 6) {
    spanSize.textContent = --size;
  }
  if (size <= 6) {
    decrement.classList.add('invisible');
  }
  increment.classList.remove('invisible');
}
console.log(number[(Math.floor(Math.random()*number.length))]);