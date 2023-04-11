//definir les variations
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
//lorsque l'utilisateur clique sur le champ du mot de passe
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};
//lorsque l'user clique en dehors du mot de passe
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};
//lorsque l'user commence à taper quelque chose
myInput.onkeyup = function () {
  //valider les lettres minuscules
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    //si le mot contient une lettre minuscule, enlever la classe "invalid et ajouter le classe valid"
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    //si non, enlever la classe valid et ajouter la classe invalid
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  //valider les lettres majuscules
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    //si le mot contient une lettre majuscule, enlever la classe "invalid et ajouter le classe valid"
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    //si non, enlever la classe valid et ajouter la classe invalid
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  //valider les CHIFFRES
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    //si le mot contient un nombre, enlever la classe "invalid et ajouter le classe valid"
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    //si non, enlever la classe valid et ajouter la classe invalid
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  //valider la longueur

  if (myInput.value.length >= 8) {
    //si le mot contient au moins 8 caracteres, enlever la classe "invalid et ajouter le classe valid"
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    //si non, enlever la classe valid et ajouter la classe invalid
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
