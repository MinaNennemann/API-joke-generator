
async function getExcuse(){
const response = await fetch(
  "https://excuser-three.vercel.app/v1/excuse/office"
);

const excuse = await response.json();


const paragraph = document.getElementById("jokeText");
paragraph.innerHTML = excuse[0].excuse;

} 

////

async function getCatFact(){
const response = await fetch(
  "https://catfact.ninja/fact"
);

const fact = await response.json();


const paragraph = document.getElementById("jokeText");
paragraph.innerHTML = fact.fact;

} 

