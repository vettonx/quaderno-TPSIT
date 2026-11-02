const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const cInput = document.getElementById("c");

const btnCalcola = document.getElementById("btn-calcola");

const liSoluzione1 = document.getElementById("soluzione1");
const liSoluzione2 = document.getElementById("soluzione2");

btnCalcola.addEventListener("click", () => {
    let a = parseFloat(aInput.value);
    let b = parseFloat(bInput.value);
    let c = parseFloat(cInput.value);

    liSoluzione1.textContent = "";
    liSoluzione2.textContent = "";

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        liSoluzione1.textContent = "Inserisci tutti i valori (a, b, c)";
        return;
    }

    let delta = (b**2) - (4*a*c);

    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        liSoluzione1.textContent = "x1 = " + x1;
        liSoluzione2.textContent = "x2 = " + x2;

        console.log('Due soluzioni reali distinte');
    } else if (delta == 0) {
        let x1 = -b / (2 * a);

        liSoluzione1.textContent = "x = " + x1;

        console.log('Una soluzione doppia');
    } else {
        liSoluzione1.textContent = "Nessuna soluzione reale (Delta < 0)";
        console.log("Nessuna soluzione reale");
    }
});