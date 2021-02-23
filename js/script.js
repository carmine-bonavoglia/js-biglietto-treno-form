/* Calcolo del prezzo del biglietto del treno con form

Partendo dall'esercizio di venerdì, aggiungiamo la parte visiva come da screenshot
Creiamo un finto biglietto del treno con:

Nome passeggero
Codice treno (numero casuale tra 90000 e 100000 escluso)
Numero carrozza (numero causale tra 1 e 10)
Prezzo calcolato
Categoria selezionata dall'utente

Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

Buon lavoro e... buon viaggio! */

var pulsanteGenera = document.getElementById("genera");
var pulsanteAnnulla = document.getElementById("annulla");

pulsanteGenera.addEventListener('click',
    function(){

        /* Dichiarazione variabili */
        var nomeInput = document.getElementById('name').value;
        var km = document.getElementById('distance').value;
        var etaInput = document.getElementById('eta').value;
        var messaggio = 'Nessuno';
        var codiceCp = Math.floor(Math.random() * (100000 - 90000)) + 90000;
        /* /Dichiarazione variabili */

        /* Controlli */
        if(nomeInput == ''){
            alert("ATTENZIONE: Inserisci nome e cognome!")
        }

        if(isNaN(km) || km <= 0){
            alert("ATTENZIONE: Inserisci un valore numerico!")
        } else {
            var costoBiglietto = km * 0.21;
        }

        if(etaInput == 'minorenne'){
            costoBiglietto -= costoBiglietto * 0.2;
            messaggio = 'Minorenne'
        } else if(etaInput == 'over65'){
            costoBiglietto -= costoBiglietto * 0.4;
            messaggio = 'Silver';
        }
        /* /Controlli */

        /* Inserimento dati */
        document.getElementById('nome-passeggero').innerHTML = nomeInput;
        document.getElementById('sconto-applicato').innerHTML = messaggio;
        document.getElementById('carrozza').innerHTML = Math.floor(Math.random()*9) + 1;
        document.getElementById('codice-cp').innerHTML = codiceCp;
        document.getElementById('costo-biglietto').innerHTML = costoBiglietto.toFixed(2) + " €";
        /* /Inserimento dati */
        
        document.getElementById('biglietto').className = 'show';
    }
);

pulsanteAnnulla.addEventListener('click',
    function(){
        /* Inserimento dati */
        /* document.getElementById('nome-passeggero').innerHTML = '';
        document.getElementById('sconto-applicato').innerHTML = '';
        document.getElementById('carrozza').innerHTML = '';
        document.getElementById('codice-cp').innerHTML = '';
        document.getElementById('costo-biglietto').innerHTML = ''; */
        /* /Inserimento dati */
        
        document.getElementById('biglietto').className = 'hidden';
    }
);