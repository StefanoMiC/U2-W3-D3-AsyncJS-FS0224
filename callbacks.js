const message = () => {
  //   setTimeout(() => {
  //     console.log("questo è il messaggio");
  //   }, 1000);

  //   for (let i = 0; i < 4000; i++) {
  //     console.log(i);
  //   }

  console.log("messaggio inviato!");
};

// una callback non è altro che una funzione passata come argomento/parametro ad UN'ALTRA funzione

const capitalize = str => {
  const words = str.split(" ");
  //   console.log("WORDS", words);
  const capitalized = words.map(w => w.charAt(0).toUpperCase() + w.slice(1));
  //   console.log("CAPITALIZED", capitalized);

  return capitalized.join(" ");
};

const allCaps = str => {
  return str.toUpperCase();
};

const greetMe = (message, symbol, customFunc) => {
  console.log(customFunc(message) + symbol);
};

greetMe("ciao mi chiamo stefano", "!", capitalize);

greetMe("benvenuti alla lezione nr3", "---", allCaps);

greetMe("benvenuti alla lezione nr3", "---", str => str.slice(0, -5));

// reimplementazione del metodo MAP

const myArr = ["cat", "dog", "horse", "bunny", "whale"];

// il map ha una struttura fissa e uguale per ogni sua esecuzione,
// dove l'unica variabile è il codice prodotto da una funzione che arriva da fuori tramite il parametro

// quindi per ogni esecuzione di map, possiamo scegliere noi COSA VERRA' INSERITO in quel nuovo array,
// tramite le istruzioni che creiamo attraverso le nostre funzioni custom
const map = customFunc => {
  let newArr = [];

  for (let i = 0; i < myArr.length; i++) {
    const animal = myArr[i];
    newArr.push(customFunc(animal));
  }

  return newArr;
};

console.log(map(animal => animal + "!"));
console.log(map(capitalize));

// __________________________________________________________________

// abbiamo 3 funzioni con un messaggio diverso ognuna

// 1)
const answer = time => {
  console.log("📞prontoooo chi è? ci ho messo: " + time / 1000 + "s");
};

// 2)
const grannysAnswer = time => {
  console.log("📞pronto ciccio sei tu? hai mangiato???  ci ho messo: " + time / 1000 + "s");
};

// questa è la funzione principale che riceverà (al momento della sua esecuzione) una delle 3 funzioni come argomento
const phoneCall = callback => {
  const randTime = Math.floor(Math.random() * 3000);

  setTimeout(() => {
    // quella che sarà la funzione passata come argomento verrà poi chiamata qui (per ogni esecuzione di phoneCall)
    callback(randTime); // answer(randTime); grannysAnswer(randTime);
  }, randTime);

  console.log("☎️ squilla il telefono...");
};

phoneCall(answer);
phoneCall(grannysAnswer);
// 3)
phoneCall(time => console.log("📞MA CHI CAVOLO E'?!?!?!  ci ho messo: " + time / 1000 + "s"));
// questo approccio ci dà la possibilità di avere una funzione generica che varia il risultato ad ogni suo utilizzo,
// al variare della funzione passata in ingresso
