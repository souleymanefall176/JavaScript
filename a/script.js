// let bouton = document.getElementById("button");
// let positionnement = document.querySelector(".bouton1");
// let main = document.querySelector("body");
// let bodyform = document.querySelector(".card-body");
// let effacer = document.querySelector(".btn-warning");
// let formulaire = document.querySelector(".form-control");

// bouton.addEventListener("click", (e) => {
//   e.preventDefault();
//   positionnement.classList.toggle("bouton");
//   bouton.classList.toggle("push");
//   bodyform.classList.toggle("principal");
//   main.classList.toggle("principal");
// });

// function enregistrer() {
//   let nom = document.getElementById("nom").value;
//   let prenom = document.getElementById("prenom").value;
//   let mail = document.getElementById("mail").value;
//   let tel = document.getElementById("tel").value;
//   let password = document.getElementById("password").value;
//   let personne = {
//     nom: nom,
//     prenom: prenom,
//     mail: mail,
//     tel: tel,
//     password: password,
//   };

//   let personneJson = JSON.stringify(personne);
//   localStorage.setItem("stockage", personneJson);
// }

// function afficher() {
//   let personneJson = localStorage.getItem("stockage");
//   let personne = JSON.parse(personneJson);
//   console.table([personne]);
// }
// effacer.addEventListener("click", (e) => {
//   nom.value = "";
//   prenom.value = "";
//   mail.value = "";
//   tel.value = "";
//   password.value = "";
// });

//correction
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const age = document.getElementById("age");
const email = document.getElementById("mail");
const nomUser = document.getElementById("nomUser");
const tel = document.getElementById("tel");
const password = document.getElementById("password");
const erreurPrenom = document.getElementById("erreurPrenom");
const erreurNom = document.getElementById("erreurNom");
const erreurAge = document.getElementById("erreurAge");
const erreurNomUser = document.getElementById("erreurNomUser");
const erreurTel = document.getElementById("erreurTel");
const erreurPassword = document.getElementById("erreurPassword");
const effacer = document.getElementById("effacer");
const bouton = document.getElementById("button");
const positionnement = document.querySelector(".bouton1");
const main = document.querySelector("body");
const bodyform = document.querySelector(".card-body");

bouton.addEventListener("click", (e) => {
  e.preventDefault();
  positionnement.classList.toggle("bouton");
  bouton.classList.toggle("push");
  bodyform.classList.toggle("principal");
  main.classList.toggle("principal");
});

//Erreur prenom
prenom.onblur = function () {
  if (checkAlphabet(prenom.value) === 0) {
    erreurPrenom.removeAttribute("hidden");
  } else {
    erreurPrenom.setAttribute("hidden", "");
  }
  nomUser.value = prenom.value;
  email.value = prenom.value;
};
//Erreur nom
nom.onblur = function () {
  if (checkAlphabet(nom.value) === 0) {
    erreurNom.removeAttribute("hidden");
  } else {
    erreurNom.setAttribute("hidden", "");
  }
  nomUser.value += nom.value;
  email.value += nom.value;
};
//Erreur tel
tel.onblur = function () {
  if (checkLength(tel.value) === 0) {
    erreurTel.removeAttribute("hidden");
  } else {
    erreurTel.setAttribute("hidden", "");
  }
};
//Erreur password
password.onblur = function () {
  if (checkPassword(password.value) === 0) {
    erreurPassword.removeAttribute("hidden");
  } else {
    erreurPassword.setAttribute("hidden", "");
  }
};
//Erreur age
age.onblur = function () {
  if (checkAge(age.value) === 0) {
    erreurAge.removeAttribute("hidden");
  } else {
    erreurAge.setAttribute("hidden", "");
  }
  email.value += age.value + "@groupeisi.com";
};

//Fonction qui permet de verifier si une chaine est alphabetique
function checkAlphabet(text) {
  let ok = 0;
  for (let i = 0; i < text.length; i++) {
    if (
      (text[i] >= "A" && text[i] <= "Z") ||
      (text[i] >= "a" && text[i] <= "z")
    ) {
      ok = 1;
    } else {
      ok = 0;
      break;
    }
  }
  return ok;
}
function checkLength(num) {
  let ok = 0;
  if (num.length === 9) {
    ok = 1;
  } else {
    ok = 0;
  }
  return ok;
}
function checkPassword(psw) {
  let ok = 0;
  for (let i = 0; i < psw.length; i++) {
    if (psw.length === 5) {
      if (
        (psw[i] <= "a" && psw[i] >= "z") ||
        (psw[i] <= "A" && psw[i] >= "Z") ||
        (psw[psw.length - 1] <= "0" && psw[psw.length - 1] >= "9")
      ) {
        ok = 1;
      } else {
        ok = 0;
        break;
      }
    } else {
      ok = 0;
    }
    return ok;
  }
}
function checkAge(age) {
  let ok;
  if (age >= 8) {
    ok = 1;
  } else {
    ok = 0;
  }
  return ok;
}

function enregistrer() {
  let nomvalue = nom.value;
  let prenomvalue = prenom.value;
  let agevalue = prenom.value;
  let emailvalue = email.value;
  let nomUservalue = nomUser.value;
  let telvalue = tel.value;
  let passwordvalue = password.value;
  let personne = {
    nomvalue: nomvalue,
    prenomvalue: prenomvalue,
    mailvalue: emailvalue,
    agevalue: agevalue,
    nomUservalue: nomUservalue,
    telvalue: telvalue,
    passwordvalue: passwordvalue,
  };

  let personneJson = JSON.stringify(personne);
  localStorage.setItem("stockage", personneJson);
}

function afficher() {
  let personneJson = localStorage.getItem("stockage");
  let personne = JSON.parse(personneJson);
  console.table([personne]);
}
effacer.addEventListener("click", (e) => {
  nom.value = "";
  prenom.value = "";
  email.value = "";
  age.value = "";
  nomUser.value = "";
  tel.value = "";
  password.value = "";
});
