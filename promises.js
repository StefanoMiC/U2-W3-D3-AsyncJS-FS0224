const myPromise = () =>
  // questa è una funzione che ritorna una Promise (costruttore di oggetto Promise con metodi specifici già assegnati)
  // per costruire una promise abbiamo bisogno di fornirle una funzione
  // la funzione dovrà essere configurata con due parametri (predefiniti dal costruttore stesso) ovvero: resolve e reject

  // resolve e reject sono due funzioni fornite dal costruttore, hanno il ruolo di determinare lo stato FINALE della Promise
  new Promise((resolve, reject) => {
    // saranno le due funzioni resolve e reject a determinare se la Promise si risolverà o fallirà
    const randTime = Math.floor(Math.random() * 3000);
    const randTime2 = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      reject("Huston abbiamo un problema! " + randTime / 1000 + "s");
    }, randTime);

    setTimeout(() => {
      resolve("Tutto bene Huston " + randTime2 / 1000 + "s");
    }, randTime2);
  });

// se la funzione RESOLVE viene chiamata internamente, lo stato della Promise passa da pending a RESOLVED
// se la funzione REJECT viene chiamata internamente, lo stato della Promise passa da pending a REJECTED

// console.log(myPromise()); // NON POSSIAMO aspettarci di poter leggere immediatamente il valore in uscita da un'operazione asincrona! (Promise)

// come si usa una promise quindi?
// tramite metodi già associati alla Promise stessa al momento della sua creazione
// il metodo .then() per l'outcome positivo
// il metodo .catch() per l'outcome negativo

// questo è il nostro modo per gestire la Promise, andando a definire a PRIORI le due possibili operazioni: una in caso di outcome positivo, una in caso di outcome negativo.
// il codice quindi si autodeterminerà!
myPromise()
  .then(succcessMessage => console.log("Questo è il messaggio di successo:", succcessMessage))
  .catch(rejectMessage => console.log("Questo è il messaggio di fallimento:", rejectMessage));
