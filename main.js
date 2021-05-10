
/**
 * calcola peso totale da una lista di oggetti
 * @param {array} lista -lista di oggetti con chiave 'peso'
 * @returns {number} peso totale
 */
function pesoTotale (lista){
    var pesoTot = 0;
    for(var i = 0; i < lista.length; i++){
        var El = lista[i];
        var pesoEl = El.peso;   
        pesoTot = pesoTot + pesoEl;  
    }
    return pesoTot;  
}



//Snack 1:
//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
//Calcola quanto pesano tutte le zucchine.

var zucchine = [
    { varieta: 'nera di Milano', peso: 0.5, lunghezza:23 , },{ varieta: 'Alberello', peso: 0.35, lunghezza: 20, },{ varieta: 'Tonda di Nizza' , peso: 0.75, lunghezza: 14, },{ varieta: 'Lunghe Fiorentine', peso:0.39 , lunghezza: 12, },{ varieta: 'Zucchino Golden', peso:1.15 , lunghezza:12.6 , },{ varieta: 'Trombetta d\'Albenga', peso:0.75 , lunghezza: 0.65, },{ varieta: 'Zucchino Golden', peso: 0.45, lunghezza: 8.6, },{ varieta: 'nera di Milano', peso: 0.96, lunghezza: 17, },{ varieta:'Alberello' , peso: 0.28, lunghezza: 8.5, },{ varieta:'Lunghe Fiorentine' , peso: 0.85, lunghezza: 1.2, },
];



console.log(pesoTotale(zucchine));


/* Snack 2:
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.*/

var zucchineMin_15 =[];
var zucchineMax_15 = [];

for(var i = 0; i < zucchine.length; i++){
    var zucchinaEl = zucchine[i];
    if(zucchinaEl.lunghezza < 15){
        zucchineMin_15.push(zucchinaEl)
    }else {
        zucchineMax_15.push(zucchinaEl);
    }
}
console.log(zucchineMin_15, zucchineMax_15);

console.log(pesoTotale(zucchineMin_15), pesoTotale(zucchineMax_15));

/*Snack 3:
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)*/

function alContrario (parola){
    //divido la parola in un array contenente in ogni elemento un lettera
  var splitParola = parola.split("");
    //inverto l'ordine degli elementi dell'array
  var revArray = splitParola.reverse(); 
  return revArray.join(""); //convero l'array in una stringa
  
}

console.log(alContrario('i topi non avevano nipoti'));


/*Snack 4:
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

var Array_1 = [1,2,3];
var Array_2 = ['a','b','c'];
function concatenaAlternati ( lista_1, lista_2){
    var listaNuova = [];
    for(var i = 0; i < lista_1.length; i++){
        listaNuova.push(lista_1[i]);
        listaNuova.push(lista_2[i]);    
    }
    return listaNuova;
}
console.log(concatenaAlternati(Array_1,Array_2));

/*Snack 5:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */ 