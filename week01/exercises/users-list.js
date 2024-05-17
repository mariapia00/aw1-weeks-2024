'use strict';

const names = `Luigi De Russis, Luca Mannella, 
Fulvio Corno, Juan Pablo Saenz Moreno, 
Luca Pezzolla`;
// esempio con ``: se le usate invece di '', potete avere strighe multi-linea: in quel caso, dovete gestire 
// anche gli a capo, -- vedere sotto

// togliamo gli a capo
/*
names.replace(/\n/g, ' ') utilizza il metodo replace di JavaScript per sostituire tutte le occorrenze 
di un pattern specifico in una stringa.
/\n/g è una regex dove:
- \n: Rappresenta un carattere di nuova linea.
- /.../g: il flag g (globale) indica che la sostituzione deve avvenire per tutte
 le occorrenze del pattern nella stringa, non solo la prima.
' ': Questo è il valore con cui ogni occorrenza del pattern viene sostituita, in questo caso uno spazio.

const names = "Alice\nBob\nCharlie\nDiana"; ---> const inlineNames = "Alice Bob Charlie Diana"; 

 */
const inlineNames = names.replace(/\n/g, ' ');

// creazione dell'array dei nomi
// il metodo split in questo caso identifica ogni elemento dell'array ogni qualvolta trovi una virgola
const nameArray = inlineNames.split(',');

// rimozione degli spazi intorno alla virgola
for(let i = 0; i < nameArray.length; i++)
  //trim elimina gli spazi iniziali e finali
  nameArray[i] = nameArray[i].trim();

// ALTERNATIVA
/*
for(let [i, n]  of nameArray.entries())
  nameArray[i] = n.trim() ;
*/

// creazione degli acronimi
const acronyms = [];

for(const name of nameArray) {

  // ogni parola in una posizione dell'array
  const words = name.split(' ');
  let initials = '';
  // memorizzo la prima lettera di ogni parola
  for(const word of words) {
    if (word) {
      initials += word[0];
    }
  }
  acronyms.push(initials);
}

// stampo il risultato
acronyms.sort();
nameArray.sort ();
for(let i=0; i < nameArray.length; i++) {
    console.log(`${acronyms[i]} - ${nameArray[i]}`);
}
