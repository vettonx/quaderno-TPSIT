// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".

const prodInput = document.getElementById("item");
const btnAggiungi = document.getElementById("btn-aggiungi"); 
const listaContainer = document.getElementById("lista"); 
const messaggioErrore = document.getElementById("errore");

function aggiungiElemento() {
    let testoInserito = prodInput.value;

    if (testoInserito == "") {
        if (messaggioErrore) {
            messaggioErrore.textContent = "Errore: devi inserire un prodotto!";
        } else {
            alert("Errore: devi inserire un prodotto!");
        }
        return; 
    }

    if (messaggioErrore) {
        messaggioErrore.textContent = "";
    }
    
    const nuovoLi = document.createElement("li");
    
    nuovoLi.textContent = testoInserito; 
    
    const btnRimuovi = document.createElement("button");
    btnRimuovi.textContent = "Rimuovi";
    btnRimuovi.style.marginLeft = "10px";
    
    btnRimuovi.addEventListener("click", () => {
        nuovoLi.remove();
    });

    nuovoLi.appendChild(btnRimuovi);

    listaContainer.appendChild(nuovoLi);

    prodInput.value = "";
}

btnAggiungi.addEventListener("click", () => {
    aggiungiElemento();
});