let PageLang;

let Is_Spanish = false;
let Is_English = true;

let name = document.getElementById('name-title');
let Slogan = document.getElementById('slogan-title');
let menu_text = document.getElementById('menu-text');
let langbtn = document.getElementById('title-btn');

function pageLang() {
    if (Is_English) {
        setSpanish();
    } else {
        console.log("Unknown Lang");
    }
    if (Is_Spanish) {
        setEnglish();
    } else {
        console.log("Unknown Lang");
    }
}

function setSpanish() {
    Slogan.value = "Buena comida. Buenos amigos. Buenos tiempos.";
    menu_text.value = "menú";
    langbtn.value = "English?";
    name.value = "La Abundancia | Casa";
    Is_Spanish = true;
    Is_English = false;
}

function setEnglish() {
    Slogan.value = "Good Food. Good Friends. Good Times.";
    menu_text.value = "Menu";
    langbtn.value = "Espanol?";
    name.value = "La Abundancia | Home";
    Is_English = true;
    Is_Spanish = false;
}