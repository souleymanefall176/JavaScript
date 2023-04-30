const enter = document.getElementById("entre");
const sortie = document.getElementById("sortie");
const select1 = document.getElementById("s1");
const select2 = document.getElementById("s2");
let valeur_decimal;

if (select1.input === "Decimal" && select2.input === "Binaire") {
  enter.onblur = function () {
    valeur_decimal = parseInt(enter.value);

    let reste = 0;
    let valBinaire = 0;
    let i = 1;
    while (valeur_decimal !== 0) {
      reste = valeur_decimal % 2;
      valBinaire = valBinaire + reste * i;
      i = i * 10;
      valeur_decimal = Math.floor(valeur_decimal / 2);
    }
    sortie.value = valBinaire;
  };
}
