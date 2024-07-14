

async function getCatFact(){
const response = await fetch(
  "https://catfact.ninja/fact"
);

const fact = await response.json();


const paragraph = document.getElementById("jokeText");
paragraph.innerHTML = fact.fact;


} 





