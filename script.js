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

    myDiv.style.backgroundImage = "url(images/fotoDisco" + myIndex + ".png)";
    // x[myIndex - 1].style.display = "block";

    setTimeout(myCarousel, 6000);
}

myCarousel()

document.addEventListener('DOMContentLoaded', function () {
    // Utilizzata la funzione DOMContentLoaded a causa di un conflitto tra la libreria JS della navbar e il fetch.

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "token 1d237fea-70d2-44d0-ad6b-8ea8012838ca");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };


    let eventList = [];
    let list = [];
    let eventArray = [];

    fetch("https://events.abattaglia.it/api/event/list", requestOptions)
        .then(response => response.json())
        .then(result => {
            eventList = result;
            for (let i = 0; i < eventList.length; i++) {
                list.push(eventList[i].name);
            }

            addEvents(eventList);
        })
        .then(() => {
            demo()
        }
        )
        .catch(error => console.log('error', error));

    function addEvents(eventList) {
        eventList.forEach(event => {
            let eventObj = new Event(event.id, event.title, event.location, event.poster, event.activitiesCount, event.startsAt, event.endsAt);
            eventArray.push(eventObj);
        });
    }

    class Event {
        constructor(id, title, location, poster, activitiesCount, startsAt, endsAt) {
            this.id = id;
            this.title = title;
            this.location = location;
            this.poster = poster;
            this.activitiesCount = activitiesCount;
            startsAt = startsAt.replace(/T/g, " ");
            this.startsAt = startsAt;
            endsAt = endsAt.replace(/T/g, " ");
            this.endsAt = endsAt;

            this.activities = null;

            if (this.activitiesCount >= 1) {
                this.activities = new Activity(this.id);
            }
        }

        printEvent() {
            console.log(this.id, this.title, this.location, this.poster, this.activitiesCount, this.startsAt, this.endsAt);

            if (this.activitiesCount >= 1) {
                this.activities.printActivity();
            }
        }

        getCard() {
            let card = document.createElement("div");
            card.classList.add("card");
            card.id = "eventCard";

            let poster = document.createElement("img");
            poster.classList.add("poster");
            poster.src = this.poster;
            poster.alt = "Poster";

            let container = document.createElement("div");
            container.classList.add("container");

            let title = document.createElement("h4");
            title.classList.add("title");
            title.classList.add("text-center")
            title.innerHTML = this.title;

            let location = document.createElement("p");
            location.classList.add("location");
            location.innerHTML = this.location;

            let dates = document.createElement("p");
            dates.classList.add("dates");
            dates.innerHTML = "Inizio evento: " + this.startsAt + "<br>" + "Fine evento: " + this.endsAt;

            let description = null;
            let room = null;

            if (this.activitiesCount >= 1) {
                description = document.createElement("p");
                description.classList.add("description");
                description.classList.add("text-center")
                description.innerHTML = "“ " + this.activities.description + " „";

                room = document.createElement("p");
                room.classList.add("room");
                room.innerHTML = this.activities.room;
            }

            container.appendChild(title);

            if (this.activitiesCount >= 1 && description != null && room != null) {
                container.appendChild(description);
                container.appendChild(room);
            }

            container.appendChild(dates);
            container.appendChild(location);
            card.appendChild(poster);
            card.appendChild(container);

            return card;
        }
    }

    class Activity {
        constructor(id) {

            this.id = id;

            this.description = null
            this.buffet = null
            this.room = null
            this.hasEntertainment = null
            this.hasHost = null
            this.hasGuest = null
            this.hasExhibitors = null
            this.hasProducts = null


            this.setActivity()
        }

        setActivity() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "token 1d237fea-70d2-44d0-ad6b-8ea8012838ca");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://events.abattaglia.it/api/event/"+this.id+"/activity/list", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                    this.setVariables(JSON.parse(result))
                })
                .catch(error => console.log('error', error));
        }

        setVariables(list) {

            let activityList = list[0];

            this.description = activityList.description;
            this.buffet = activityList.buffet;
            this.room = activityList.location;
            this.hasEntertainment = activityList.hasEntertainment;
            this.hasHost = activityList.hasHost;
            this.hasGuest = activityList.hasGuest;
            this.hasExhibitors = activityList.hasExhibitors;
            this.hasProducts = activityList.hasProducts;
        }

        printActivity() {
            console.log(this.description, this.buffet, this.location, this.hasEntertainment, this.hasHost, this.hasGuest, this.hasExhibitors, this.hasProducts);
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function demo() {
        for (let i = 0; i < 2; i++) {
            console.log(`Waiting ${i} seconds...`);
            await sleep(i * 1000);
        }
        console.log('Done');
        addEventToPage();
    }

    function addEventToPage() {

        
        let eventDiv = document.getElementById('eventContainer')
        let friday = document.getElementById('venerdi');
        let saturday = document.getElementById('sabato');

        fridayEvents = [];
        saturdayEvents = [];

        eventArray.forEach(event => {
            let data = event.startsAt;
            let date = data.split(" ");
            let day = date[0];
            day = day.split("-")[2];
            month = date[0].split("-")[1];
            year = date[0].split("-")[0];

            let d = new Date(year, month - 1, day);

            if (d.getDay() == 5) {
                fridayEvents.push(event);
            }
            if (d.getDay() == 6) {
                saturdayEvents.push(event);
            }
        })
        
        let row = document.createElement('div');
        row.classList.add('row');

        fridayEvents.forEach(event => {
            let column = document.createElement('div');
            column.classList.add('col-md-6');
            column.appendChild(event.getCard());

            row.appendChild(column)
        })
        friday.appendChild(row)

        let row2 = document.createElement('div');
        row2.classList.add('row');

        saturdayEvents.forEach(event => {
            let column = document.createElement('div');
            column.classList.add('col-md-6');
            column.appendChild(event.getCard());

            row2.appendChild(column)
        })
        saturday.appendChild(row2)
    }
});
