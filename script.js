//Exercitiu Array
/* Ana vrea un upgrade la calculatorul de bacșiș, folosind aceleași reguli ca înainte - bacșiș 15% dacă valoarea facturii este între 50 și 300, iar dacă valoarea este diferită, bacșișul este de 20%.
Sarcinile voastre:
Scrieți o funcție calcTip care ia ca intrare orice valoare a facturii și returnează bacșișul corespunzător, calculat pe baza regulilor de mai sus. Utilizați tipul de funcție care vă place cel mai mult.
Și acum să folosim array! Deci, creați un array numit bills care să conțină datele de testare de mai jos.
Creați un array numit tips care conține valoarea bacșișului pentru fiecare factură, calculată din funcția creată anterior.
Creați un array cu totaluri care să conțină valorile totale, deci factura + bacșiș.
DATE DE TEST: 125, 555 și 44. */


let bills = [125, 555, 44];
let tips = [];

function calcBacsis(nota) {
    return nota < 300 && nota >= 50 ? nota * 0.15 : nota * 0.2;
}
//tips = [calcBacsis(bills[0]), calcBacsis(bills[1]); calcBacsis(bill[2])]
//console.log(tips);
tips.push(calcBacsis(bill[0]));
tips.push(calcBacsis(bill[1]));
tips.push(calcBacsis(bill[2])); 
console.log(tips);

//Inversați un array.

let myArray = [1, 2, 3, 4, 5];

let reverseArray = myArray.reverse();
console.log(reverseArray);

//O alta metoda corecta
let numere = [1, 2, 3];
let numerecopie1 = numere.slice();

numerecopie1.push(4);
console.log(numere);
console.log(numerecopie1);

//Alta metoda
let numere1 = [1, 2, 3];
let numerecopie2 = [].concat(numere);

numerecopie2.push(4);
console.log(numere);
console.log(numerecopie2);

//Alta metoda
let numerecopie3 = [...numere];
numerecopie3.reverse();
console.log(numere);
console.log(numerecopie3);

//Exercitiul nr.2

/* Creează un array numit listaCumparaturi și adaugă câteva produse pe care vrei să le cumperi.
Scrie o funcție numită sorteazaAlfabetic care sortează lista de cumpărături în ordine alfabetică și o afișează.
Scrie o funcție numită cautaProdus care primește un produs ca argument și returnează indicele acestuia în listă sau un mesaj dacă nu este găsit.
Scrie o funcție numită adaugaProdus care primește un produs ca argument și dacă acesta nu este deja în listă îl adaugă la lista de cumpărături.
Scrie o funcție numită eliminaProdus care primește un produs ca argument și îl elimină din lista de cumpărături.
Afișați atât lista inițială și numărul de produse din ea cât și lista finală și numărul de produse din ea. */

let myArray1 = [1, true, 'Ana', 'Elena', 100];
//[true, 'Ana', 'Elena', 100, 1];
let element = myArray[0];
myArray.push(element);
console.log(myArray);


//Tema pentru acasa

// Array-ul cu lista de cumpărături
const listaCumparaturi = ['mere', 'lapte', 'paine', 'oua', 'salam'];

// Funcție pentru sortarea listei de cumpărături în ordine alfabetică
function afiseaxaLista() {
    listaCumparaturi.sort();
    console.log("Lista sortată alfabetică:", listaCumparaturi);
}



// Funcție pentru căutarea unui produs în lista de cumpărături
function cautaProdus(produs) {
    let index = listaCumparaturi.indexOf(produs);
    if (index !== -1) {
        return `Produsul ${produs} se află la indicele ${index}.`;
    } else {
        return `Produsul ${produs} nu a fost găsit în lista de cumpărături.`;
    }
}

// Funcție pentru adăugarea unui produs în lista de cumpărături
function adaugaProdus(produs) {
    if (listaCumparaturi.indexOf(produs) === -1) {
        listaCumparaturi.push(produs);
        console.log(`Produsul ${produs} a fost adăugat în lista de cumpărături.`);
    } else {
        console.log(`Produsul ${produs} este deja în lista de cumpărături.`);
    }
}

// Funcție pentru eliminarea unui produs din lista de cumpărături
function eliminaProdus(produs) {
    let index = listaCumparaturi.indexOf(produs);
    if (index !== -1) {
        listaCumparaturi.splice(index, 1);
        console.log(`Produsul ${produs} a fost eliminat din lista de cumpărături.`);
    } else {
        console.log(`Produsul ${produs} nu a fost găsit în lista de cumpărături.`);
    }
}

// Afișăm lista inițială și numărul de produse din ea
console.log("Lista inițială de cumpărături:", listaCumparaturi);
console.log("Număr de produse inițial:", listaCumparaturi.length);

// Sortăm lista și o afișăm
sorteazaAlfabetic();

// Căutăm un produs
console.log(cautaProdus('lapte'));

// Adăugăm un produs nou
adaugaProdus('cafea');

// Încercăm să adăugăm din nou același produs
adaugaProdus('cafea');

// Eliminăm un produs
eliminaProdus('oua');

// Afișăm lista finală și numărul de produse din ea
console.log("Lista finală de cumpărături:", listaCumparaturi);
console.log("Număr de produse final:", listaCumparaturi.length);

