/*const selettore = parseInt(document.getElementById("livello").value) ;
const arrayCampo = numeratore(selettore) ;
const numeroBombe = 16 ;
const limiteMassimo = selettore - numeroBombe ;
const arrayBombe = numeriRandomUnici(numeroBombe, limiteMassimo) ;
const celleGiuste = [] ;*/

const tastoStart = document.getElementById("play") ;
tastoStart.addEventListener("click", inizioGioco) ;


function inizioGioco() {
    const invito = document.getElementById("invito-gioco") ;
    const contenitore = document.getElementById("contenitore-griglia") ;
    invito.classList.add("nascosto") ;
    contenitore.classList.remove("nascosto") ;
    contenitore.innerHTML = "" ;

    const selettore = parseInt(document.getElementById("livello").value) ;
    let numeroCelle ;
    let cellePerRiga ;
    if (selettore === 1) {
        numeroCelle = 100 ;
        cellePerRiga = 10 ;
    } else if  (livello === 2) {
        numeroCelle === 81 ;
        cellePerRiga = 9 ;
    } else {
        numeroCelle === 49 ;
        cellePerRiga = 7 ;
    }

    for (let i = 1; i <= numeroCelle; i++) {
        const nuovoOggetto = generatoreBox(i, cellePerRiga) ;
        nuovoOggetto.addEventListener("click", gestioneClick)
        contenitore.append(nuovoOggetto) ; 
    }

}

/*const contenitoreGriglia = document.querySelector(".contenitore-griglia");
for (let i = 0; i < arrayCampo.length; i++) {
    const numeroProgressivo = arrayCampo[i];

    const elementoHtml = document.createElement("div");

    elementoHtml.innerHTML = `<span>${numeroProgressivo}</span>`;

    elementoHtml.classList.add("box-griglia");

    elementoHtml.addEventListener("click", function () {
        this.classList.add("attivo")
    });

    contenitoreGriglia.append(elementoHtml);
}*/





//FUNZIONI

function generatoreBox(numeroInterno, cellePerRiga) {
    const elementoHtml = document.createElement("div") ;
    elementoHtml.classList.add("box-griglia") ;
    elementoHtml.style.width = `calc(100% / ${cellePerRiga})` ;
    elementoHtml.style.height = `calc(100% / ${cellePerRiga})` ;
    elementoHtml.innerHTML = `<span>${numeroInterno}</span>`;
    return elementoHtml ;

}

function gestioneClick() {
    this.classList.add("attivo") ;

}

/*function numeratore(numeroGriglia) {
    const arrayCifre = [];
    for (let i = 1; i <= numeroGriglia; i++) {
        arrayCifre.push(i);
    }
    return arrayCifre;
}

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min ;
}

function numeriRandomUnici(numeroCifre, limiteMassimo) {
    const arrayRandom = [] ;
    while (arrayRandom.length < numeroCifre) {
        const numeroCasuale = numeroRandom(1, limiteMassimo);
        if (!arrayRandom.includes(numeroCasuale)) {
            arrayRandom.push(numeroRandom);
        }
    }
    return arrayRandom ;
}*/