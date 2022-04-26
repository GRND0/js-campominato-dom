

const tastoStart = document.getElementById("play");
tastoStart.addEventListener("click", inizioGioco);


function inizioGioco() {
    const invito = document.getElementById("invito-gioco");
    const contenitore = document.getElementById("griglia");
    invito.classList.add("nascosto");
    contenitore.classList.remove("nascosto");
    contenitore.innerHTML = "";



    const selettore = parseInt(document.getElementById("livello").value);
    let numeroCelle;
    let cellePerRiga;
    if (selettore === 1) {
        numeroCelle = 100;
        cellePerRiga = 10;
    } else if (selettore === 2) {
        numeroCelle === 81;
        cellePerRiga = 9;
    } else {
        numeroCelle === 49;
        cellePerRiga = 7;
    }

    const numeroBombe = 16;
    const arrayBombe = generatoreNumeriUnici(numeroBombe, numeroCelle);
    const celleGiuste = [];
    const condizioneVittoria = numeroCelle - numeroBombe ;


    for (let i = 1; i <= numeroCelle; i++) {
        const nuovoOggetto = generatoreBox(i, cellePerRiga);
        nuovoOggetto.addEventListener("click", gestioneClick);
        contenitore.append(nuovoOggetto);
    }

}

//FUNZIONI

function generatoreBox(numeroInterno, cellePerRiga) {
    const elementoHtml = document.createElement("div");
    elementoHtml.classList.add("box-griglia");
    elementoHtml.style.width = `calc(100% / ${cellePerRiga})`;
    elementoHtml.style.height = `calc(100% / ${cellePerRiga})`;
    elementoHtml.innerHTML = `<span>${numeroInterno}</span>`;
    return elementoHtml;

}

function gestioneClick() {
    const numeroScelto = parseInt(this.querySelector("span").textContent);
    if (arrayBombe.includes(numeroScelto)) {
        this.classList.add("rosso");
        fineGioco(celleGiuste.length, "perso") ;
    } else {
        this.classList.add("attivo");
        this.style.pointerEvents = "none";
        celleGiuste.push(numeroScelto);
        if (celleGiuste.length >= condizioneVittoria) {
            fineGioco(celleGiuste.length, "vinto")
        }

    }

function fineGioco(numeriGiusti, vintoPerso) {
    document.getElementById("risultato") ;
    let messaggio ; 
    if (vintoPerso === "perso") {
        messaggio = `Hai perso! Hai indovinato ${numeriGiusti} numeri`
} else {
    messaggio = "Hai vinto!"
    document.getElementById("risultato").innerHTML = messaggio ;
}

}
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function generatoreNumeriUnici(bombe, limite) {
    const arrayNumeri = [];
    while (arrayNumeri.length < bombe) {
        const numeroRandom = getRndInteger(1, limite);
        if (!arrayNumeri.includes(numeroRandom)) {
            arrayNumeri.push(numeroRandom);
        }

    }
    return arrayNumeri;
}
