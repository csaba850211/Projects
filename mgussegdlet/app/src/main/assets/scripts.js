var k6 = Math.round(Math.random() * 6 + 1);





function eroplus() {
    document.getElementById("ero").innerHTML++;
    if (document.getElementById("ero").innerHTML >= 19) {
        alert("az érték nem lehet nagyobb, mint 18!!!");
        document.getElementById("ero").innerHTML --;
    }
}

function erominus() {
    document.getElementById("ero").innerHTML--;
    if (document.getElementById("ero").innerHTML == 0) {
        alert("az érték nem lehet isebb, mint 0!!!");
        document.getElementById("ero").innerHTML ++;
    }
}

function gyorsasagplus() {
    document.getElementById("gyorsasag").innerHTML++;
}

function gyorsasagminus() {
    document.getElementById("gyorsasag").innerHTML--;

    if (document.getElementById("gyorsasag").innerHTML <= 0) {
        alert("Az érték nem lehet kisebb, mint nulla!");
        document.getElementById("gyorsasag").innerHTML++;
    }

}

function ugyessegplus() {
    document.getElementById("ugyesseg").innerHTML++;
}

function ugyessegminus() {
    document.getElementById("ugyesseg").innerHTML--;

    if (document.getElementById("ugyesseg").innerHTML <= 0) {
        alert("Az érték nem lehet kisebb, mint nulla!");
        document.getElementById("ugyesseg").innerHTML++;
    }

}

function allokepessegplus() {
    document.getElementById("allokepesseg").innerHTML++;
}

function allokepessegminus() {
    document.getElementById("allokepesseg").innerHTML--;

    if (document.getElementById("allokepesseg").innerHTML <= 0) {
        alert("Az érték nem lehet kisebb, mint nulla!");
        document.getElementById("allokepesseg").innerHTML++;
    }

}

function egeszsegplus() {
    document.getElementById("egeszseg").innerHTML++;
}

function egeszsegminus() {
    document.getElementById("egeszseg").innerHTML--;

    if (document.getElementById("egeszseg").innerHTML <= 0) {
        alert("Az érték nem lehet kisebb, mint nulla!");
        document.getElementById("egeszseg").innerHTML++;
    }

}

function szepsegplus() {
    document.getElementById("szepseg").innerHTML++;
}

function szepsegminus() {
    document.getElementById("szepseg").innerHTML--;

    if (document.getElementById("szepseg").innerHTML <= 0) {
        alert("Az érték nem lehet kisebb, mint nulla!");
        document.getElementById("szepseg").innerHTML++;
    }

}

function intelligenciaplus() {
    document.getElementById("intelligencia").innerHTML++;
}

function intelligenciaminus() {
    document.getElementById("intelligencia").innerHTML--;

    if (document.getElementById("intelligencia").innerHTML <= 0) {
        alert("Az érték nem lehet kisebb, mint nulla!");
        document.getElementById("intelligencia").innerHTML++;
    }

}

function akarateroplus() {
    document.getElementById("akaratero").innerHTML++;
}

function akaraterominus() {
    document.getElementById("akaratero").innerHTML--;

    if (document.getElementById("akaratero").innerHTML <= 0) {
        alert("Az érték nem lehet kisebb, mint nulla!");
        document.getElementById("akaratero").innerHTML++;
    }

}

function asztralplus() {
    document.getElementById("asztral").innerHTML++;
}

function asztralminus() {
    document.getElementById("asztral").innerHTML--;

    if (document.getElementById("asztral").innerHTML <= 0) {
        alert("Az érték nem lehet kisebb, mint nulla!");
        document.getElementById("asztral").innerHTML++;
    }

}

function kepzettseg() { /* itt az elf, félelf kivételt képez, mert ők +10 +20 cé-vel indulnak */

document.getElementById("ero").innerHTML++;

    if (document.getElementById("kasztselector").value == "harcos" && document.getElementById("fajselector").value == "elf") { /*harcos értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 20 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 7 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 4);
        document.getElementById("egyeb").innerHTML = "Lovaglás: Mf, Erdőjárás: Mf, Idomítás: Mf, Hőlátás, 2x hallás, 2,5x látás";
    }

    if (document.getElementById("kasztselector").value == "harcos" && document.getElementById("fajselector").value == "ember") { /*harcos értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 7 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 4);
    }

    if (document.getElementById("kasztselector").value == "harcos" && document.getElementById("fajselector").value == "felelf") { /*harcos értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 10 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 7 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 4);
        document.getElementById("egyeb").innerHTML = "1,5x hallás, 2x látás, Állóképesség -10 órányi futás, Lovaglás: Mf, Idomítás: Mf";
    }

    if (document.getElementById("kasztselector").value == "harcos" && document.getElementById("fajselector").value == "torpe") { /*harcos értékei!!! */
        document.getElementById("ke").innerHTML = 9 + (document.getElementById("gyorsasag").innerHTML - 10);
        document.getElementById("te").innerHTML = 20 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10) + (document.getElementById("ero").innerHTML - 10);
        document.getElementById("ve").innerHTML = 75 + (document.getElementById("gyorsasag").innerHTML - 10) + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ce").innerHTML = 0 + (document.getElementById("ugyesseg").innerHTML - 10);
        document.getElementById("ep").innerHTML = 7 + (document.getElementById("egeszseg").innerHTML - 10);
        document.getElementById("fp").innerHTML = 6 + (document.getElementById("allokepesseg").innerHTML - 10) + (document.getElementById("akaratero").innerHTML - 10) + (k6 + 4);
        document.getElementById("egyeb").innerHTML = "Hőlátás, Csapdakeresés: 35%, Titkosajtó keresés: 30% Földalatti érzék, Építmény korát meg tudják határozni";
    }



    /*ezek itt a faji módosítók!!! */

    if (document.getElementById("fajselector").value == "elf") { /*faj módosító */
        document.getElementById("ero").innerHTML = document.getElementById("ero").innerHTML - 2;
    }

    if (document.getElementById("fajselector").value == "elf") { /*faj módosító */
        document.getElementById("ugyesseg").innerHTML = parseInt(document.getElementById("ugyesseg").innerHTML) + 1;
    }

    if (document.getElementById("fajselector").value == "elf") { /*faj módosító */
        document.getElementById("gyorsasag").innerHTML = parseInt(document.getElementById("gyorsasag").innerHTML) + 1;
    }

    if (document.getElementById("fajselector").value == "elf") { /*faj módosító */
        document.getElementById("szepseg").innerHTML = parseInt(document.getElementById("szepseg").innerHTML) + 1;
    }

    if (document.getElementById("fajselector").value == "elf") { /*faj módosító */
        document.getElementById("allokepesseg").innerHTML = parseInt(document.getElementById("allokepesseg").innerHTML) - 1;
    }

    if (document.getElementById("fajselector").value == "felelf") { /*faj módosító */
        document.getElementById("ero").innerHTML = document.getElementById("ero").innerHTML - 1;
    }

    if (document.getElementById("fajselector").value == "felelf") { /*faj módosító */
        document.getElementById("gyorsasag").innerHTML = parseInt(document.getElementById("gyorsasag").innerHTML) + 1;
    }

    if (document.getElementById("fajselector").value == "torpe") { /*faj módosító */
        document.getElementById("ero").innerHTML = document.getElementById("ero").innerHTML + 1;
    }

    






    if (document.getElementById("kasztselector").value == "harcos") { /*harcos képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "3 Fegyverhasználat"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Lovaglás"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "Úszás"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "Futás"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Mászás"
        document.getElementById("kepzettseg5fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 15 + "%";
        document.getElementById("kepzettseg5").innerHTML = "Esés"
        document.getElementById("kepzettseg6fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 20 + "%";
        document.getElementById("kepzettseg6").innerHTML = "Ugrás"
        document.getElementById("kepzettseg5fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 10 + "%";
    }

    if (document.getElementById("kasztselector").value == "gladiator") { /*gladiátor képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Birkózás"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Ökölharc"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "Kétkezes harc"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "Nehézvért viselet"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Pajzshasználat"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "4 Fegyverhasználat"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Fegyvertörés"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Esés"
        document.getElementById("kepzettseg8fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 30 + "%";
        document.getElementById("kepzettseg9").innerHTML = "Ugrás"
        document.getElementById("kepzettseg9fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 20 + "%";
    }
    if (document.getElementById("kasztselector").value == "fejvadasz") { /*fejvadász képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Ökölharc"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "9 Fegyver használat"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "3 Fegyver dobás"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "Pszi"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Úszás"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "4 Csapdaállítás"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Futás"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Álcázás/álruha"
        document.getElementById("kepzettseg8fok").innerHTML = "Af"
        document.getElementById("kepzettseg9").innerHTML = "Hátbaszúrás"
        document.getElementById("kepzettseg9fok").innerHTML = "Af"
        document.getElementById("kepzettseg10").innerHTML = "Mászás"
        document.getElementById("kepzettseg10fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 30 + "%";
        document.getElementById("kepzettseg11").innerHTML = "Esés"
        document.getElementById("kepzettseg11fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 15 + "%";
        document.getElementById("kepzettseg12").innerHTML = "Ugrás"
        document.getElementById("kepzettseg12fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 15 + "%";
        document.getElementById("kepzettseg11").innerHTML = "Lopózás"
        document.getElementById("kepzettseg11fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 20 + "%";
        document.getElementById("kepzettseg11").innerHTML = "Rejtőzés"
        document.getElementById("kepzettseg11fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 25 + "%";
        document.getElementById("kepzettseg11").innerHTML = "Csapdafelfedezés"
        document.getElementById("kepzettseg11fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 10 + "%";

    }

    if (document.getElementById("kasztselector").value == "lovag") { /*lovag képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Nehézvértviselet"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Pajzshasználat"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "5 Fegyver használat"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "Fegyverismeret"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Hadvezetés"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "Etikett"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Lovaglás"
        document.getElementById("kepzettseg7fok").innerHTML = "Mf"
        document.getElementById("kepzettseg8").innerHTML = "4 Nyelv ismerete"
        document.getElementById("kepzettseg8fok").innerHTML = "Af 4, 2, 2, 2"
        document.getElementById("kepzettseg9").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg9fok").innerHTML = "Af"
        document.getElementById("kepzettseg10").innerHTML = "Heraldika"
        document.getElementById("kepzettseg10fok").innerHTML = "Af"
    }

    if (document.getElementById("kasztselector").value == "bard") { /*bárd képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "4 Fegyver használat"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Fegyverdobás"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "Pszi"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "5 Nyelv ismerete"
        document.getElementById("kepzettseg4fok").innerHTML = "Af 5, 4, 3, 2, 2"
        document.getElementById("kepzettseg5").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "Legendaismeret"
        document.getElementById("kepzettseg6fok").innerHTML = "Mf"
        document.getElementById("kepzettseg7").innerHTML = "Etikett"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Lovaglás"
        document.getElementById("kepzettseg8fok").innerHTML = "Af"
        document.getElementById("kepzettseg9").innerHTML = "Szexuális kultúra"
        document.getElementById("kepzettseg9fok").innerHTML = "Af"
        document.getElementById("kepzettseg10").innerHTML = "Éneklés-zenélés"
        document.getElementById("kepzettseg10fok").innerHTML = "Af"
        document.getElementById("kepzettseg11").innerHTML = "Hangutánzás"
        document.getElementById("kepzettseg11fok").innerHTML = "Af"
        document.getElementById("kepzettseg12").innerHTML = "Hamiskártya"
        document.getElementById("kepzettseg12fok").innerHTML = "Af"
        document.getElementById("kepzettseg13").innerHTML = "Mászás"
        document.getElementById("kepzettseg13fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 25 + "%";
        document.getElementById("kepzettseg14").innerHTML = "Esés"
        document.getElementById("kepzettseg14fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 5 + "%";
        document.getElementById("kepzettseg15").innerHTML = "Ugrás"
        document.getElementById("kepzettseg15fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 10 + "%";
        document.getElementById("kepzettseg16").innerHTML = "Lopózás"
        document.getElementById("kepzettseg16fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 20 + "%";
        document.getElementById("kepzettseg17").innerHTML = "Rejtőzés"
        document.getElementById("kepzettseg17fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 10 + "%";
        document.getElementById("kepzettseg18").innerHTML = "Kötéltánc"
        document.getElementById("kepzettseg18fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 5 + "%";
        document.getElementById("kepzettseg19").innerHTML = "Zsebmetszés"
        document.getElementById("kepzettseg19fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 5 + "%";
        document.getElementById("kepzettseg20").innerHTML = "Csapdafelfedezés"
        document.getElementById("kepzettseg20fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 10 + "%";
        document.getElementById("kepzettseg21").innerHTML = "Titkosajtó keresés"
        document.getElementById("kepzettseg21fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 5 + "%";
    }

    if (document.getElementById("kasztselector").value == "pap") { /*az alap pap képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Fegyverhasználat"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Pszi"
        document.getElementById("kepzettseg2fok").innerHTML = "Mf"
        document.getElementById("kepzettseg3").innerHTML = "2 Nyelv ismerete"
        document.getElementById("kepzettseg3fok").innerHTML = "Af 5, 5"
        document.getElementById("kepzettseg4").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Vallásismeret"
        document.getElementById("kepzettseg5fok").innerHTML = "Mf"
        document.getElementById("kepzettseg6").innerHTML = "Történelemismeret"
        document.getElementById("kepzettseg6fok").innerHTML = "Mf"
        document.getElementById("kepzettseg7").innerHTML = "Éneklés-zenélés"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
    }

    if (document.getElementById("kasztselector").value == "paplovag") { /*az alap paplovag képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Nehézvértviselet"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Pajzshasználat"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "4 Fegyverhasználat"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "Hadvezetés"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Pszi"
        document.getElementById("kepzettseg5fok").innerHTML = "Mf"
        document.getElementById("kepzettseg6").innerHTML = "2 Nyelv ismerete"
        document.getElementById("kepzettseg6fok").innerHTML = "Af 5, 4"
        document.getElementById("kepzettseg7").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Vallásismeret"
        document.getElementById("kepzettseg8fok").innerHTML = "Af"
        document.getElementById("kepzettseg9").innerHTML = "Történelemismeret"
        document.getElementById("kepzettseg9fok").innerHTML = "Af"
        document.getElementById("kepzettseg10").innerHTML = "Heraldika"
        document.getElementById("kepzettseg10fok").innerHTML = "Af"
        document.getElementById("kepzettseg11").innerHTML = "Etikett"
        document.getElementById("kepzettseg11fok").innerHTML = "Af"
        document.getElementById("kepzettseg12").innerHTML = "Lovaglás"
        document.getElementById("kepzettseg12fok").innerHTML = "Mf"
        document.getElementById("kepzettseg13").innerHTML = "Éneklés-zenélés"
        document.getElementById("kepzettseg13fok").innerHTML = "Af"

    }

    if (document.getElementById("kasztselector").value == "harcmuvesz") { /*a harcművész képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Vakharc"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "10 Fegyverhasználat"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "4 Fegyverdobás"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "Fegyvertörés (kézzel)"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Pszi"
        document.getElementById("kepzettseg5fok").innerHTML = "Slan"
        document.getElementById("kepzettseg6").innerHTML = "Lovaglás"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Úszás"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Futás"
        document.getElementById("kepzettseg8fok").innerHTML = "Af"
        document.getElementById("kepzettseg9").innerHTML = "Mászás"
        document.getElementById("kepzettseg9fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 20 + "%";
        document.getElementById("kepzettseg10").innerHTML = "Esés"
        document.getElementById("kepzettseg10fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 35 + "%";
        document.getElementById("kepzettseg11").innerHTML = "Ugrás"
        document.getElementById("kepzettseg11fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 30 + "%";
    }

    if (document.getElementById("kasztselector").value == "kardmuvesz") { /*a kardművész képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Ökölharc"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Birkózás"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "Vakharc"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "3 Fegyverhasználat"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Fegyvertörés (Slan-karddal)"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "Hadvezetés"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Pszi"
        document.getElementById("kepzettseg7fok").innerHTML = "Slan"
        document.getElementById("kepzettseg8").innerHTML = "Etikett"
        document.getElementById("kepzettseg8fok").innerHTML = "Af"
        document.getElementById("kepzettseg9").innerHTML = "Lovaglás"
        document.getElementById("kepzettseg9fok").innerHTML = "Af"
        document.getElementById("kepzettseg10").innerHTML = "Úszás"
        document.getElementById("kepzettseg10fok").innerHTML = "Af"
        document.getElementById("kepzettseg11").innerHTML = "Futás"
        document.getElementById("kepzettseg11fok").innerHTML = "Af"
        document.getElementById("kepzettseg12").innerHTML = "Mászás"
        document.getElementById("kepzettseg12fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 10 + "%";
        document.getElementById("kepzettseg13").innerHTML = "Esés"
        document.getElementById("kepzettseg13fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 20 + "%";
        document.getElementById("kepzettseg14").innerHTML = "Ugrás"
        document.getElementById("kepzettseg14fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 10 + "%";
    }

    if (document.getElementById("kasztselector").value == "boszorkany") { /*a boszorkány képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Fegyverhasználat"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Fegyverdobás"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "Pszi"
        document.getElementById("kepzettseg3fok").innerHTML = "Mf"
        document.getElementById("kepzettseg4").innerHTML = "2 Nyelv ismerete"
        document.getElementById("kepzettseg4fok").innerHTML = "Af 3, 3"
        document.getElementById("kepzettseg5").innerHTML = "Herbalizmus"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Méregkeverés-semlegesítés"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Sebgyógyítás"
        document.getElementById("kepzettseg8fok").innerHTML = "Af"
        document.getElementById("kepzettseg9").innerHTML = "Szexuális kultúra"
        document.getElementById("kepzettseg9fok").innerHTML = "Af"
    }

    if (document.getElementById("kasztselector").value == "boszorkanymester") { /*a boszorkánymester képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "3 Fegyverhasználat"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Fegyverdobás"
        document.getElementById("kepzettseg2fok").innerHTML = "Af"
        document.getElementById("kepzettseg3").innerHTML = "Pszi"
        document.getElementById("kepzettseg3fok").innerHTML = "Mf"
        document.getElementById("kepzettseg4").innerHTML = "3 Nyelv ismerete"
        document.getElementById("kepzettseg4fok").innerHTML = "Af 3, 3, 2"
        document.getElementById("kepzettseg5").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "Méregkeverés-semlegesítés"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Álcázás-álruha"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Lopózás"
        document.getElementById("kepzettseg8fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 15 + "%";
        document.getElementById("kepzettseg9").innerHTML = "Rejtőzés"
        document.getElementById("kepzettseg9fok").innerHTML = document.getElementById("ugyesseg").innerHTML - 10 + 15 + "%";
    }

    if (document.getElementById("kasztselector").value == "tuzvarazslo") { /*a boszorkánymester képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "2 Fegyverhasználat"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Pszi"
        document.getElementById("kepzettseg2fok").innerHTML = "Mf"
        document.getElementById("kepzettseg3").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg3fok").innerHTML = "Af"
        document.getElementById("kepzettseg4").innerHTML = "2 Nyelv ismerete"
        document.getElementById("kepzettseg4fok").innerHTML = "Af 4, 3"
        document.getElementById("kepzettseg5").innerHTML = "Lovaglás"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "Hajózás"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
    }

    if (document.getElementById("kasztselector").value == "varazslo") { /*a kardművész képzettségei*/
        document.getElementById("kepzettseg1").innerHTML = "Fegyverhasználat"
        document.getElementById("kepzettseg1fok").innerHTML = "Af"
        document.getElementById("kepzettseg2").innerHTML = "Pszi"
        document.getElementById("kepzettseg2fok").innerHTML = "Kyr-metódus"
        document.getElementById("kepzettseg3").innerHTML = "2 Nyelv ismerete"
        document.getElementById("kepzettseg3fok").innerHTML = "Af 5, 4"
        document.getElementById("kepzettseg4").innerHTML = "Ősi nyelv ismerete"
        document.getElementById("kepzettseg4fok").innerHTML = "Af"
        document.getElementById("kepzettseg5").innerHTML = "Alkímia"
        document.getElementById("kepzettseg5fok").innerHTML = "Af"
        document.getElementById("kepzettseg6").innerHTML = "Írás-olvasás"
        document.getElementById("kepzettseg6fok").innerHTML = "Af"
        document.getElementById("kepzettseg7").innerHTML = "Sebgyógyítás"
        document.getElementById("kepzettseg7fok").innerHTML = "Af"
        document.getElementById("kepzettseg8").innerHTML = "Élettan"
        document.getElementById("kepzettseg8fok").innerHTML = "Af"
        document.getElementById("kepzettseg9").innerHTML = "Legendaismeret"
        document.getElementById("kepzettseg9fok").innerHTML = "Af"
        document.getElementById("kepzettseg10").innerHTML = "Történelemismeret"
        document.getElementById("kepzettseg10fok").innerHTML = "Af"
        document.getElementById("kepzettseg11").innerHTML = "Rúnamágia"
        document.getElementById("kepzettseg11fok").innerHTML = "Af"
    }

}

function dice() {

    document.getElementById("ero").innerHTML = Math.round(Math.random() * 6 + 12);
    document.getElementById("gyorsasag").innerHTML = Math.round(Math.random() * 6 + 12);
    document.getElementById("ugyesseg").innerHTML = Math.round(Math.random() * 6 + 12);
    document.getElementById("allokepesseg").innerHTML = Math.round(Math.random() * 6 + 12);
    document.getElementById("egeszseg").innerHTML = Math.round(Math.random() * 6 + 12);
    document.getElementById("szepseg").innerHTML = Math.round(Math.random() * 6 + 12);
    document.getElementById("intelligencia").innerHTML = Math.round(Math.random() * 6 + 12);
    document.getElementById("akaratero").innerHTML = Math.round(Math.random() * 6 + 12);
    document.getElementById("asztral").innerHTML = Math.round(Math.random() * 6 + 12);

}
