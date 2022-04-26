const selettore = 100 ;
const arrayCampo = numeratore(selettore) ;
console.log(arrayCampo) ;

const contenitoreGriglia = document.querySelector(".contenitore-griglia") ;
for (let i = 0; i < arrayCampo.length; i++) {
    const numeroProgressivo = arrayCampo[i] ;

    const elementoHtml = document.createElement("div") ;

    elementoHtml.innerHTML = `<span>${numeroProgressivo}</span>` ;

    elementoHtml.classList.add("box-griglia") ;

    elementoHtml.addEventListener("click", function() {
        this.classList.toggle("attivo")
    }) ;

    contenitoreGriglia.append(elementoHtml) ; 
}





//FUNZIONI

function numeratore(numeroGriglia) {
    const arrayCifre = [] ;
    for (let i = 1; i <= numeroGriglia; i++) {
        arrayCifre.push(i);
    }
    return arrayCifre ;   
} 