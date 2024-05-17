'use strict';
 //Embed the scores directly in the source code.
const scores = [20, -5, -1, 100, -3, 30, 50];
const betterScores = [];
let NN = 0;

for(const s of scores) {
  if(s >= 0)
    betterScores.push(s);
}

NN = scores.length - betterScores.length;


// Eliminate the two lowest-ranking scores.
// VERSIONE CON MIN
/*
let minScore = Math.min(...betterScores);
let index = betterScores.indexOf(minScore);
betterScores.splice(index, 1);

minScore = Math.min(...betterScores);
index = betterScores.indexOf(minScore);
betterScores.splice(index, 1);
*/
// VERSIONE CON SORT

/*
Eliminate the two lowest-ranking scores.

Ordino betterScores in ordine crescente
Se a - b restituisce un numero negativo, a viene ordinato prima di b.
Se a - b restituisce zero, l'ordine di a e b rimane invariato.
Se a - b restituisce un numero positivo, a viene ordinato dopo b.
 */
betterScores.sort((a,b) => a-b);

// elimina i primi due elementi dell'array, ossia quelli più piccoli
betterScores.shift();
betterScores.shift();

//calcolo la media su better score
let avg = 0;
for(const s of betterScores) {
  avg += s;
}
avg /= betterScores.length;

//approssima all'intero più vicino
avg = Math.round(avg);

/* Add `NN+2` new scores, at the end of the array, with a 
value equal to the (rounded) average of the existing scores.*/
for(let i=0; i<NN+2; i++) {
  betterScores.push(avg);
}

/*
Print both arrays, comparing the scores before 
and after the "improvement," and showing the 
averages in both cases.
 */
console.log(scores);
console.log(betterScores);

