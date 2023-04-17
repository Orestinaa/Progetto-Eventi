const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const numbersObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // L'elemento è appena entrato nella viewport
            observer.unobserve(entry.target);

            // Eseguire il codice che si vuole
            cntAnimation(entry.target.id);
        }
    });
}, options);

// Selezionare l'elemento che si vuole monitorare
const numberElement1 = document.getElementById('numero1');
const numberElement2 = document.getElementById('numero2');
const numberElement3 = document.getElementById('numero3');
const numberElement4 = document.getElementById('numero4');

// Iniziare l'osservazione dell'elemento
numbersObserver.observe(numberElement1);
numbersObserver.observe(numberElement2);
numbersObserver.observe(numberElement3);
numbersObserver.observe(numberElement4);


function cntAnimation(elementId) {
    // Recupera l'elemento HTML contenente il numero da animare
    const elementoNumero = document.getElementById(elementId)
    // Recupera il valore del numero finale da animare
    const valoreFinale = elementoNumero.getAttribute('hidden-value')
    // Genera una durata casuale per l'animazione in millisecondi
    const durata = Math.floor(Math.random() * (2000)) + 1500;  // Durata dell'animazione in millisecondi

    // Imposta il valore corrente del numero a 0 e inizioAnimazione a null
    let valoreCorrente = 0;
    let inizioAnimazione = null;

    // Definisce la funzione per aggiornare il numero durante l'animazione
    function aggiornaNumero(timestamp) {
        // Se inizioAnimazione è null, imposta il timestamp corrente come inizio dell'animazione
        if (!inizioAnimazione) {
            inizioAnimazione = timestamp;
        }

        // Calcola il progresso dell'animazione e la percentuale completata
        const progresso = timestamp - inizioAnimazione;
        const percentuale = Math.min(progresso / durata, 1);

        // Calcola il valore corrente del numero e imposta il testo dell'elemento HTML
        valoreCorrente = Math.floor(valoreFinale * percentuale);
        elementoNumero.textContent = valoreCorrente;

        // Se l'animazione non è ancora completata, richiede un altro frame di animazione
        if (progresso < durata) {
            requestAnimationFrame(aggiornaNumero);
        } else {
            // Se l'animazione è completata, imposta il valore finale come testo dell'elemento HTML
            elementoNumero.textContent = valoreFinale;
        }
    }

    // Avvia l'animazione richiedendo il primo frame di animazione
    requestAnimationFrame(aggiornaNumero)
}






const hrObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // L'elemento è appena entrato nella viewport
            observer.unobserve(entry.target);

            // Eseguire il codice che si vuole
            hrAnimation(entry.target.id)
        }
    });
}, options);

// Selezionare l'elemento che si vuole monitorare
const hrElement1 = document.getElementById('hr1');
const hrElement2 = document.getElementById('hr2');
const hrElement3 = document.getElementById('hr3');
const hrElement4 = document.getElementById('hr4');

// Iniziare l'osservazione dell'elemento
hrObserver.observe(hrElement1);
hrObserver.observe(hrElement2);
hrObserver.observe(hrElement3);
hrObserver.observe(hrElement4);

function hrAnimation(elementId) {

    


    let hrElement = document.getElementById(elementId);
    let larghezzaAttuale = 0;
    const larghezzaFinale = window.innerWidth <= 576 ? 50 : 100;
    const durataAnimazione = 1200; // Durata dell'animazione in millisecondi
    let inizioAnimazione = null;

    function anima(timestamp) {
        if (!inizioAnimazione) {
            inizioAnimazione = timestamp;
        }

        const progresso = timestamp - inizioAnimazione;
        const percentuale = Math.min(progresso / durataAnimazione, 1);

        larghezzaAttuale = percentuale * larghezzaFinale;
        hrElement.style.width = larghezzaAttuale + '%';

        if (progresso < durataAnimazione) {
            requestAnimationFrame(anima);
        } else {
            hrElement.style.width = larghezzaFinale + '%';
        }
    }

    requestAnimationFrame(anima);
}

window.addEventListener('resize', function () {
    hrAnimation('hr1');
    hrAnimation('hr2');
    hrAnimation('hr3');
    hrAnimation('hr4');
});


const buttonsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // L'elemento è appena entrato nella viewport
            observer.unobserve(entry.target);

            // Eseguire il codice che si vuole
            buttonsAnimation(entry.target.id);
        }
    });
}, options);

// Selezionare l'elemento che si vuole monitorare
const buttonsElement1 = document.getElementById('button1');
const buttonsElement2 = document.getElementById('button2');
const buttonsElement3 = document.getElementById('button3');

// Iniziare l'osservazione dell'elemento
buttonsObserver.observe(buttonsElement1);
buttonsObserver.observe(buttonsElement2);
buttonsObserver.observe(buttonsElement3);

function buttonsAnimation(elementId) {
    // create animation with the opacity

    let buttonElement = document.getElementById(elementId);
    let opacityAttuale = 0;
    const opacityFinale = 1;
    const durataAnimazione = 2000; // Durata dell'animazione in millisecondi
    let inizioAnimazione = null;

    function anima(timestamp) {
        if (!inizioAnimazione) {
            inizioAnimazione = timestamp;
        }

        const progresso = timestamp - inizioAnimazione;
        const percentuale = Math.min(progresso / durataAnimazione, 1);

        opacityAttuale = percentuale * opacityFinale;
        buttonElement.style.opacity = opacityAttuale;

        if (progresso < durataAnimazione) {
            requestAnimationFrame(anima);
        } else {
            buttonElement.style.opacity = opacityFinale;
        }
    }
    requestAnimationFrame(anima);
}

let myIndex = 0;

function myCarousel() {
    let i;
    // let x = document.getElementsByClassName("mySlides");
    let myDiv = document.getElementById("myCarousel");

    myIndex++;

    if (myIndex > 3) { 
        myIndex = 1
    }

    console.log("images/fotoDisco" + myIndex + ".png")

    myDiv.style.backgroundImage = "url(images/fotoDisco" + myIndex + ".png)";
    // x[myIndex - 1].style.display = "block";

    setTimeout(myCarousel, 6000);
}

myCarousel()
