function goorszag() {

    if (document.getElementById("orszagselector").value == "valassz") {
        location.reload();
    }

    if (document.getElementById("orszagselector").value == "doran") {
        document.getElementById("doran").scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }

    if (document.getElementById("orszagselector").value == "tarin") {
        document.getElementById("tarin").scrollIntoView({ behavior: "smooth", block: "center", inline: "center"});
    }

    if (document.getElementById("orszagselector").value == "riegoy") {
        document.getElementById("riegoy").scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }


}


function sirenar() {
    window.location = 'sirenar.html';
}

function riegoy() {
    window.location = 'riegoy.html';
}

function tarin() {
    window.location = 'tarin.html';
}

function doran() {
    window.location = 'doran.html';
}