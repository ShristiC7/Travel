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
const cross1=document.querySelector('.cross1');
const cross2=document.querySelector('.cross2');
const cross3=document.querySelector('.cross3');
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
















































































// script.js
document.getElementById('travel-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get user input
    const activity = document.querySelector('input[name="activity"]:checked').value;
    const weather = document.querySelector('input[name="weather"]:checked').value;
    const budget = document.querySelector('input[name="budget"]:checked').value;
    const transport = document.querySelector('input[name="transport"]:checked').value;
    const food = document.querySelector('input[name="food"]:checked').value;
  
    // Initialize suggestions array
    let suggestions = [];
  
    // Activity-based suggestions
    if (activity === 'adventure') {
      if (weather === 'warm') {
        suggestions.push("Costa Rica - Great for adventure in warm weather.");
      } else if (weather === 'cold') {
        suggestions.push("New Zealand - Cold weather, adventure activities.");
      } else {
        suggestions.push("Canada - Explore the wilderness with moderate weather.");
      }
    } else if (activity === 'relaxation') {
      if (weather === 'warm') {
        suggestions.push("Maldives - Relax on the warm beaches.");
      } else if (weather === 'cold') {
        suggestions.push("Switzerland - Cozy up in snowy resorts.");
      } else {
        suggestions.push("Japan - Moderate weather and peaceful surroundings.");
      }
    } else if (activity === 'culture') {
      if (weather === 'warm') {
        suggestions.push("Greece - Mediterranean culture and warm weather.");
      } else if (weather === 'cold') {
        suggestions.push("Russia - Explore Russian culture in cold weather.");
      } else {
        suggestions.push("Italy - Historical sites in moderate weather.");
      }
    }
  
    // Budget-based suggestions
    if (budget === 'low') {
      suggestions.push("Budget-friendly options like Southeast Asia or Eastern Europe.");
    } else if (budget === 'medium') {
      suggestions.push("Medium-range options like Mexico or Turkey.");
    } else {
      suggestions.push("Luxury destinations like the Maldives or Switzerland.");
    }
  
    // Transportation preferences
    if (transport === 'plane') {
      suggestions.push("Air travel to far destinations like Japan or Australia.");
    } else if (transport === 'car') {
      suggestions.push("Road trip-friendly destinations like the US or Canada.");
    } else {
      suggestions.push("Train journeys in Europe or Japan.");
    }
  
    // Food preferences
    if (food === 'local') {
      suggestions.push("Street food adventures in Thailand or India.");
    } else if (food === 'fine-dining') {
      suggestions.push("Gourmet experiences in France or Italy.");
    } else {
      suggestions.push("Vegetarian-friendly destinations like India or Bali.");
    }
  
    // Display the result section
    const resultDiv = document.getElementById('result');
    const suggestionsList = document.getElementById('suggestions');
    suggestionsList.innerHTML = suggestions.map(s => `<li>${s}</li>`).join('');
    resultDiv.style.display = 'block';
  });
  






