const begin = document.querySelector('.hime');
const enter= document.querySelector('.enter');
const front= document.querySelector('.home');
const suggest = document.querySelector('.suggest');
const login=document.querySelector('.login');
enter.onclick = ()=>{
    front.classList.remove('show');
    begin.classList.add('show');
}
login.onclick = ()=>{
    begin.classList.remove('show');
    suggest.classList.add('show');
}