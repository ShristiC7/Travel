const begin = document.querySelector('.hime');
const enter= document.querySelector('.enter');
const front= document.querySelector('.home');
const suggest = document.querySelector('.suggest');
const login=document.querySelector('.login');
const paris1=document.querySelector('.paris1');
const dubai=document.querySelector('.dubai');
const dubai1=document.querySelector('.dubai1');
const tokyo=document.querySelector('.tokyo');
const tokyo1=document.querySelector('.tokyo1');
const paris=document.querySelector('.paris');
const goquiz=document.querySelector('.goquiz');
const containers=document.querySelector('.containers');
const travelsuggest=document.querySelector('.travelsuggest');
const cross1=document.querySelector('.cross1');
const cross2=document.querySelector('.cross2');
const cross3=document.querySelector('.cross3');
const result=document.querySelector('.result');
const srinagar=document.querySelector('.srinagar');
const srinagar1=document.querySelector('.srinagar1');
const suggest1=document.querySelector('.suggest1');

enter.onclick = ()=>{
    front.classList.remove('show');
    begin.classList.add('show');
}
goquiz.onclick = ()=>{
suggest.classList.remove('show');
containers.style.display='flex';
}
login.onclick = ()=>{
    begin.classList.remove('show');
    suggest.classList.add('show');
}
paris1.onclick = ()=>{
    suggest.classList.remove('show');
    paris.classList.add('show');
}

tokyo1.onclick = ()=>{
  suggest.classList.remove('show');
tokyo.classList.add('show');
}
dubai1.onclick = ()=>{
  suggest.classList.remove('show');
  dubai.classList.add('show');
}
cross1.onclick = ()=>{
  suggest.classList.add('show');
  paris.classList.remove('show');
}
cross2.onclick = ()=>{
  suggest.classList.add('show');
  tokyo.classList.remove('show');
}
cross3.onclick = ()=>{
  suggest.classList.add('show');
 dubai.classList.remove('show');
}





























































// document.getElementById('travel-form').addEventListener('submit', function(event) {
//   event.preventDefault();


// const weather = document.querySelector('input[name="weather"]:checked').value;

  
// // Initialize suggestions array


// // Activity-based suggestions
// if( weather == 'cold'){

// }
result.onclick = ()=>{
  containers.classList.add('no');
  suggest1.classList.add('show');
  }

srinagar1.onclick = ()=>{
  suggest1.classList.remove('show');
  srinagar.classList.add('show');
}












// // script.js

//     // Get user input

   
//     if( weather == 'Cold'){
      
//       containers.style.display='none';
//       suggest1.style.display='block';
//       }
      
//     // Budget-based suggestions
  
  
//     // Transportation preferences
   
  
//     // Food preferences
    
  
//     // Display the result section
   
  
//   
  






